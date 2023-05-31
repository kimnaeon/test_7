// tilt and rotation for enabled devices
// on a desktop nothing will happen, but it wont break
// variables allow motion and ios to be detected.
// further code to detect a compass and tilt hardware on non-ios devices needed

let motion = false;
let ios = false;

// below code is essential for ios13 and above. 
// A click is needed for the device to request permission 
if (typeof DeviceMotionEvent.requestPermission === 'function') {
  document.body.addEventListener('click', function() {
    DeviceMotionEvent.requestPermission()
      .then(function() {
        console.log('DeviceMotionEvent enabled');

        motion = true;
        ios = true;
      })
      .catch(function(error) {
        console.warn('DeviceMotionEvent not enabled', error);
      })
  })
} else {
  // we are not on ios13 and above
  // todo
  // add detection for hardware for other devices
  // if(got the hardware) {
  // motion = true;
  // }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
   background(220);
  fill(0);
  textSize(24);
  textAlign(CENTER, CENTER);
  text("Tilt your smartphone to change the background color!", width/2, height/2);

  // Get the acceleration values in the X and Y axes
  let xAcceleration = accelerationX;
  let yAcceleration = accelerationY;

  // Map the acceleration values to a range of colors
  let r = map(xAcceleration, -90, 90, 0, 255);
  let g = map(yAcceleration, -90, 90, 0, 255);
  let b = map(abs(xAcceleration - yAcceleration), 0, 180, 0, 255);

  // Set the background color based on the mapped values
  background(r, g, b);

  
}