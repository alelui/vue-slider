// alert('Ciaone');

const itemsArrey = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const titleArrey = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
];

const textArrey = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
];




//diciaro la variabile che utilizzerò nel ciclo
let items ='';
let texts ='';
//inizializzo il ciclo per inserire le immagini e testo dinamicamente
for (let i = 0; i < itemsArrey.length; i++){

    items += `
        <div class="col-sx-img-box">          
            <img src="${itemsArrey[i]}" alt="${titleArrey[i]}">
        </div>
    ` 

    texts += `
        <div class="textInterno">          
            <h2>${titleArrey[i]}</h2>
            <span>${textArrey[i]}</span>
        </div>
`
}
//Visualizzo il risultato
// console.log(texts);

//Seleziono la destinazione dove andare a scrivere il risultato
const colSx = document.querySelector('.col-sx');
const colSxText = document.querySelector('.text');
// scrivo il risultato
colSx.innerHTML = items;
colSxText.innerHTML = texts;

//selezione la classe a cui devo aggingere la active creando un array di classi
const item = document.getElementsByClassName('col-sx-img-box');
const object = document.getElementsByClassName('object');
const text = document.getElementsByClassName('textInterno');
const circle = document.getElementsByClassName('circle');
// console.log(circle);

//inizializo la variabile e la pongo uguale a 0 in modo da potere indiziare l'arrei di classi sopra creato
let Active = 0

//assegno la classe active al primo elemto dell'array di classi rendendo visibile l'immagine all'inteno della prima classe
item[Active].classList.add('active');
object[Active].classList.add('active-object');
text[Active].classList.add('active');
circle[Active].classList.add('active-circle');

//seleziono le frecce su e giu
const down = document.querySelector('.btn.down');
const up = document.querySelector('.btn.up');


//tramite la variabile "down", al click del plsante verra scatenata la funzione
down.addEventListener("click", function(){
    
        item[Active].classList.remove('active');
        object[Active].classList.remove('active-object');
        text[Active].classList.remove('active');
        circle[Active].classList.remove('active-circle');
        
        if (Active == item.length -1){
            Active = 0;
        }else{
            Active++;
        }
        // console.log(Active);
        // console.log(item.length - 1);
        
        item[Active].classList.add('active');
        object[Active].classList.add('active-object');
        text[Active].classList.add('active');
        circle[Active].classList.add('active-circle');

});

//tramite la variabile "up", al click del plsante verra scatenata la funzione
up.addEventListener("click", function(){

        item[Active].classList.remove('active');
        object[Active].classList.remove('active-object');
        text[Active].classList.remove('active');
        circle[Active].classList.remove('active-circle');

        if (Active === 0){
            Active = item.length - 1;
        }else{
            Active--;
        }
        // console.log(Active);
        // console.log(item.length - 1);
        
        item[Active].classList.add('active');
        object[Active].classList.add('active-object');
        text[Active].classList.add('active');
        circle[Active].classList.add('active-circle');
    
});






