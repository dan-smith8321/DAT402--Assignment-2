//http://api.openweathermap.org

//Use a text/string object to assign the city we would like to know the weather of
let getLocation = "London";
let getHumidity = "Athens";
let getWindspeed = "Shanghai";
//The API key has to be given by the openweathermap.org website (for free / per account)
let apiKey = "6b4a465ac9894c63172283b3f271c20c";
//This variable will store the JSON weather data
let weather;
let weather2;
let weather3;

//The preload function is executed before initializing the code in setup
//Loads any related data or media files
function preload() {
  //The URL is formatted according to the documentation provided by the developers in:
  //http://api.openweathermap.org
  //The text/string object is formatted with the location we want to use, and our own API key
  let url1 = "http://api.openweathermap.org/data/2.5/weather?q="+getLocation+"&units=metric&appid="+apiKey;
  let url2 = "http://api.openweathermap.org/data/2.5/weather?q="+getHumidity+"&units=metric&appid="+apiKey;
  let url3 = "http://api.openweathermap.org/data/2.5/weather?q="+getWindspeed+"&units=metric&appid="+apiKey;
  //The URL is sent to the loadJSON that returns the data to the weather variable
  weather = loadJSON(url1);
  weather2 = loadJSON(url2);
  weather3 = loadJSON(url3);
}

function setup() {
  console.log(weather); //Return all JSON data
  console.log("Location: " + getLocation) //Show the location we are searching
  console.log("Temperature: " + weather.main.temp + "°C"); //Show location's conditions (temperature)
  console.log("Temperature (min): " + weather.main.temp_min + "°C"); //Minimum temperature
  console.log("Temperature (max): " + weather.main.temp_max + "°C"); //Maximum temperature
  console.log("Humidity: " + weather.main.humidity); //Humidity
  console.log("Pressure: " + weather.main.pressure); //Pressure
  //(weather.main.humidity) would show just the number.

  //Display temperature information on the screen
  createCanvas(400, 400);
  background(160);
  textAlign(CENTER);
  textSize(18);
  text("Current Temperature in London " +  weather.main.temp + "°C", width/2, height/2);
  text("Current Humidity in Athens " +  weather2.main.humidity + "%" , width/2, height/4);
  text("Current Wind Speed in Shanghai " + weather3.wind.speed + "mph" , width/2, height/1.4);
  noLoop();
}

function draw(){
}
