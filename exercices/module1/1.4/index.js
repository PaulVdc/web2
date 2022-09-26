const redLamp = document.querySelector('.red');
const orangeLamp = document.querySelector('.orange');
const greenLamp = document.querySelector('.green');

const redColor = 'red';
const orangeColor = 'orange';
const greenColor = 'green';
const noLightColor = '';

let redCounter = 0;
let orangeCounter = 0;
let greenCounter = 0;

let redCounterWrapper = document.querySelector('.redCounter');
let orangeCounterWrapper = document.querySelector('.orangeCounter');
let greenCounterWrapper = document.querySelector('.greenCounter');

const delaysBetweenLightChanges = 1000;

cycleThroughLamps();

function cycleThroughLamps() {
  window.setInterval(
    showFromRedToGreenToRedWithDelays,
    delaysBetweenLightChanges * 4
  );
}

showFromRedToGreenToRedWithDelays();

function showFromRedToGreenToRedWithDelays() {
  showRedLamp();
  redCounter++;
  redCounterWrapper.textContent = redCounter;
  showGreenLampOnlyWithDelay(2 * delaysBetweenLightChanges);
  showOrangeLampOnlyWithDelay(3 * delaysBetweenLightChanges);
  showRedLampOnlyWithDelay(4 * delaysBetweenLightChanges);
}

function showRedLamp() {
  redLamp.style.backgroundColor = redColor;
}

  
  
function clearRedLamp() {
  redLamp.style.backgroundColor = noLightColor;
}

function showRedLampOnlyWithDelay(delay) {
  window.setTimeout(() => {
    clearOrangeLamp();
    clearGreenLamp();
    showRedLamp();
  }, delay);
}

function showOrangeLamp() {
  orangeLamp.style.backgroundColor = orangeColor;
  orangeCounter++;
  orangeCounterWrapper.textContent = orangeCounter;
}

function showOrangeLampOnlyWithDelay(delay) {
  window.setTimeout(() => {
    clearRedLamp();
    clearGreenLamp();
    showOrangeLamp();
  }, delay);
}

function clearOrangeLamp() {
  orangeLamp.style.backgroundColor = noLightColor;
}

function showGreenLampOnlyWithDelay(delay) {
  window.setTimeout(() => {
    clearRedLamp();
    clearOrangeLamp();
    showGreenLamp();
  }, delay);
}

function showGreenLamp() {
  greenLamp.style.backgroundColor = greenColor;
  greenCounter++;
  greenCounterWrapper.textContent = greenCounter;
}

function clearGreenLamp() {
  greenLamp.style.backgroundColor = noLightColor;
}