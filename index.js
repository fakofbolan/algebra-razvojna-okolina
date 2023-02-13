const dateEl = document.querySelector(`#date`);
const today = new Date();
dateEl.innerHTML = `${today.toLocaleString()}`;

console.log(`Hello world!`);
