const dateEl = document.querySelector(`#date`);
    const today = new Date();
    console.log()
    let h = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();
    dateEl.innerHTML = `${h}h ${min}m ${sec}s ${today.getFullYear() + "/" + (today.getMonth() + 1) + "/" + today.getDate()}`;

console.log(`Hello world!`)