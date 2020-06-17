const table = document.querySelector('.table');
const addBooks = document.querySelector('.addBooks');
const formAddBooks = document.querySelector('.formAddBooks');

let livre1 = {
    name: 'The book one',
    auteur: 'Steve Balalou',
    Pages: 500
};

let livre2 = {
    name: 'The book one',
    auteur: 'Steve Balalou',
    Pages: 500
};

let livre3 = {
    name: 'The book one',
    auteur: 'Steve Balalou',
    Pages: 500
};

const allBooks = [livre1, livre2, livre3];

for (i = 0; i <= allBooks.length; i++) {
    let add = document.createElement("tr");

    add.innerHTML += `
        <td> ${allBooks[i].name}</td>
        <td> ${allBooks[i].auteur}</td>
        <td> ${allBooks[i].Pages}</td>
        <td><button>Modifier</button></td>
        <td><button>Suprimer</button></td>
        `
    table.appendChild(add);
}

addBooks.addEventListener('click', () => {
    let createForm = document.createElement('form');
    createForm.innerHTML = `
    <div>
        <label for="Name"> Titre du livre</label>
        <input type="text">
    </div>
    <div>
        <label for="author"> Auteur</label>
        <input type="text">
    </div>
    <div>
        <label for="pages"> Nombre de pages</label>
        <input type="number">
    </div>
    <div>
        <label for="pages"> Nombre de pages</label>
        <textarea name="description" id="description" cols="30" rows="5"></textarea>
    </div>
    `
    formAddBooks.appendChild(createForm);
});











