const addButton = document.getElementById('addButton');
        const nameInput = document.getElementById('nameInput');
        const namesList = document.getElementById('namesList');
        const namesArray = [];

        addButton.addEventListener('click', () => {
            const name = nameInput.value;
            if (name) {
                namesArray.push(name);
                const listItem = document.createElement('li');
                listItem.textContent = name;
                namesList.appendChild(listItem);
                nameInput.value = '';
            }
        });

        addButton.addEventListener('click', () => {
            console.log(namesArray);
        });