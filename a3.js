document.getElementById('toggleButton').addEventListener('click', function() {
    const button = document.getElementById('toggleButton');
    const text = document.getElementById('text');
    const container = document.querySelector('.container');

    if (button.textContent === 'Initial') {
        button.textContent = 'Changed';
        text.textContent = 'HELLO';
        container.style.backgroundColor = 'lightblue';
    } else {
        button.textContent = 'Initial';
        text.textContent = 'WELCOME';
        container.style.backgroundColor = 'pink';
    }
});
