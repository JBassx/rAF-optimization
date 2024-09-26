import { animationManager } from "./animationManager";
import { lerp } from "./lerp";

export function animateScale(
  scaleBox: HTMLDivElement,
  startScale: number,
  endScale: number,
  speed: number
) {
  let scaleT = 0;

  function scale() {
    scaleT += speed;
    if (scaleT > 1) scaleT = 1;

    const currentScale = lerp(startScale, endScale, scaleT);
    scaleBox.style.transform = `scale(${currentScale})`;

    if (scaleT === 1) {
      animationManager.unregisterTask(scale);
    }
  }

  animationManager.registerTask(scale);
}

export function animateColor(
  colorBox: HTMLDivElement,
  startColor: number,
  endColor: number,
  speed: number
) {
  let colorT = 0;

  function color() {
    colorT += speed;
    if (colorT > 1) colorT = 1;

    const currentColor = Math.floor(lerp(startColor, endColor, colorT));
    colorBox.style.backgroundColor = `rgb(${currentColor}, 100, 100)`;

    if (colorT === 1) {
      animationManager.unregisterTask(color);
    }
  }

  animationManager.registerTask(color);
}

export function animateRotation(
  rotateBox: HTMLDivElement,
  startRotation: number,
  endRotation: number,
  speed: number
) {
  let rotationT = 0;

  function rotate() {
    rotationT += speed; // Increment progress
    if (rotationT > 1) rotationT = 1;

    const currentRotation = lerp(startRotation, endRotation, rotationT);
    rotateBox.style.transform = `rotate(${currentRotation}deg)`;

    // Unregister task once the animation completes
    if (rotationT === 1) {
      animationManager.unregisterTask(rotate);
    }
  }

  animationManager.registerTask(rotate);
}
