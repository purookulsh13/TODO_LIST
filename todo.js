document.addEventListener('DOMContentLoaded', function () {

    const input = document.querySelector('#input');
    const timeInput = document.querySelector('#timeInput');
    const addButton = document.querySelector('#addButton');
    const list = document.querySelector('#list');

    input.addEventListener('keyup', function (event) {
        if (event.key === 'Enter' && this.value.trim() !== '' && timeInput.value !== '') {
            addItem(this.value, timeInput.value);
            this.value = '';
            timeInput.value = '';
        }
    });

    addButton.addEventListener('click', function () {
        if (input.value.trim() !== '' && timeInput.value !== '') {
            addItem(input.value, timeInput.value);
            input.value = '';
            timeInput.value = '';
        }
    });

    function addItem(task, time) {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span>${task} ${time}</span>
            <div class="actions">
                <i class="fas fa-times"></i>
            </div>
        `;
        list.appendChild(listItem);

        const removeButton = listItem.querySelector('.fa-times');
        removeButton.addEventListener('click', function () {
            listItem.remove();
            removeButton.removeEventListener('click', this);
        });
    }
});
