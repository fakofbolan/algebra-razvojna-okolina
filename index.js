const dateEl = document.querySelector(`#date`);
    const today = new Date();
    console.log()
    let year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();
    let h = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();
    dateEl.innerHTML = `${h}h ${min}m ${sec}s Godina:${year}, mjesec: ${month}, day:${day}`;

console.log(`Hello world!`)