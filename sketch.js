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
  text("Drag your finger or mouse to change the background color!", width/2, height/2);
}

function mouseDragged() {
  // Map the mouse position to a range of colors
  let r = map(mouseX, 0, width, 0, 255);
  let g = map(mouseY, 0, height, 0, 255);
  let b = map(abs(mouseX - mouseY), 0, width + height, 0, 255);

  // Set the background color based on the mapped values
  background(r, g, b);
}

function touchMoved() {
  // Map the touch position to a range of colors
  let r = map(touchX, 0, width, 0, 255);
  let g = map(touchY, 0, height, 0, 255);
  let b = map(abs(touchX - touchY), 0, width + height, 0, 255);

  // Set the background color based on the mapped values
  background(r, g, b);
}