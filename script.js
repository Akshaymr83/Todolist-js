let button = document.getElementById('submit');
let todocontainer = document.getElementById('todocontainer');
let inputfeild = document.getElementById('inputfeild');

button.addEventListener('click', function () {
    if (inputfeild.value === '') {
        window.alert('You must write something');
    } else {
        var paragraph = document.createElement('p');
        var createButton = document.createElement('button');
        var closeButton = document.createElement('button');

        paragraph.innerText = inputfeild.value;
        paragraph.classList.add('paragraph-styling');

        createButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path fill="#ffffff" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>';
        createButton.classList.add('create-button');

        closeButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path fill="#ffffff" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>';
        closeButton.classList.add('close-button');

        todocontainer.appendChild(paragraph);
        paragraph.appendChild(createButton);
        paragraph.appendChild(closeButton);

        inputfeild.value = '';

        createButton.addEventListener('click', function () {
            paragraph.style.textDecoration = 'line-through';
        });
        createButton.addEventListener('dblclick', function () {
            paragraph.style.textDecoration = ''; // Remove line-through on double-click
        });
        

        closeButton.addEventListener('click', function () {
            todocontainer.removeChild(paragraph);
            logTodoValues();
        });
    }
});

function logTodoValues() {
    let todoValues = Array.from(todocontainer.getElementsByTagName('p')).map(p => p.innerText);
    console.log('Values inside todocontainer:', todoValues);
}
