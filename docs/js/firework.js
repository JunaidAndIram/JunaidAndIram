const container = document.getElementById("fireworks");

// const baseOptions = {
//   speed: 4,
//   acceleration: 1.1,
//   friction: 0.95,
//   gravity: 1.2,
//   particles: 150,
//   trace: 6,
//   explosion: 10,
//   intensity: 40,
//   autoresize: true,
//   brightness: { min: 70, max: 100 },
// };

const baseOptions = {
  speed: 3,
  acceleration: 1.02,
  friction: 0.96,
  gravity: 1.1,
  particles: 150,
  trace: 3,
  explosion: 6,
  intensity: 18,
  brightness: { min: 70, max: 100 },
  hue: {  min: 40, max: 55  }, 
  autoresize: true,
};
const fireworks = new Fireworks.default(container, baseOptions);

let fadeTimeout;
let stopTimeout;

function runFireworks(duration) {
  // clear any previous run
  clearTimeout(fadeTimeout);
  clearTimeout(stopTimeout);

  // reset to full power
  fireworks.updateOptions(baseOptions);
  fireworks.start();

  fadeTimeout = setTimeout(() => {
    // fade phase
    fireworks.updateOptions({
      intensity: 5,
      particles: 20,
      trace: 1,
      speed: 1,
    });

    stopTimeout = setTimeout(() => {
      fireworks.stop();
    }, 1500);

  }, duration * 1000);
}


// runFireworks(5);