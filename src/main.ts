import { animateScale, animateColor, animateRotation } from "./animations";
import "./style.css";

// Selecting the elements
const scaleBox = document.querySelector("#animate-box-1") as HTMLDivElement;
const colorBox = document.querySelector("#animate-box-2") as HTMLDivElement;
const rotateBox = document.querySelector("#animate-box-3") as HTMLDivElement;

// Starting the animations
animateScale(scaleBox, 1, 1.5, 0.02); // Scaling animation
animateColor(colorBox, 0, 255, 0.01); // Color change animation
animateRotation(rotateBox, 360, 1); // Rotation animation
