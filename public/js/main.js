const table = document.querySelector('.table');
const formAddBooks = document.querySelector('.formAddBooks');

/*
let input = document.querySelector('#username');
input.addEventListener('focus', () => {
    input.classList.add('focus');
});



const inputPassword = document.querySelector('#password');

inputPassword.addEventListener('blur', () => {
    if(inputPassword == "");
        inputPassword.classList.remove('focus');
    
});


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
    Pages: 600
};
let allBooks = [livre1, livre2, livre3];

showBooks();

function showBooks(){
let tableauLivres = document.querySelector('#tableauDesLivres');
let listBooks = "";
for (let i = 0; i <= allBooks.length; i++) {
    
    listBooks.innerHTML += `
        <td></td>
        <td><button>Modifier</button></td>
        <td><button>Suprimer</button></td>
        `;
}
tableauLivres.innerHTML = listBooks;
}

*/

const addBooks = document.querySelector('.addBooks');
// Au click sur le bouton ajouter un livre le formulaire apparait 
addBooks.addEventListener('click', () => {
    const addForm = document.querySelector("#addForm").removeAttribute('class');
});

/* Recuperer les données envoyées du formaulaire et le stoquer dans le tableau des livres

const validForm = document.querySelector('#validForm');

validForm.addEventListener('click', (e) => {
    e.preventDefault();
    let bookTitle = document.querySelector('.bookTitle');
    let bookAuther = document.querySelector('.bookTitle');
    let bookPages = document.querySelector('.bookTitle');

    let livre = {
        name: bookTitle.value,
        auteur: bookAuther.value,
        Pages: bookPages.value
    }
    allBooks.push(livre);
    showBooks();
});

console.log(allBooks);
*/








