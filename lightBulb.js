// Grab the button by ID: #lightBulb-switch:
const lightBulbSwitch = document.querySelector('#lightBulb-switch');

//Identify image by ID
const lightBulbImage = document.querySelector('#lightBulb-Image');

//creation of boolean variable to be responsible to indicate if light bulb is on or not:
let isLightBulbOn = false;

// Attached an event listener to our button:
lightBulbSwitch.addEventListener('click', function(){
    // To change the image we need to update the source of that image:
    if(isLightBulbOn){
        lightBulbImage.src = 'off.png';
        isLightBulbOn = false;
    }
    else{
        lightBulbImage.src = 'on.jpg';
        isLightBulbOn = true;
    }
    console.log(isLightBulbOn);
})
