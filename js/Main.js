async function getData() {
    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json();
    return data;
}

document.querySelector('.dice-button').addEventListener('click', () => {
    getData().then(data => {
        document.querySelector('.content > p').textContent = `Advice #${data.slip.id}`;
        document.querySelector('.content > h2').textContent = `"${data.slip.advice}"`;
    });
});