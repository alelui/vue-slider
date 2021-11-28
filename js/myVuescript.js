// alert('Ciaone');

const app = new Vue({
    el: '#root',
    data: {
        itemsArrey: [
            'img/01.jpg',
            'img/02.jpg',
            'img/03.jpg',
            'img/04.jpg',
            'img/05.jpg'
        ],
        
        titleArrey: [
            'Sasso Marconi',
            'Rocca Rasu',
            'Formello',
            'Bassano del Grappa',
            'Pianarella di Cervia'
        ],
        
        textArrey: [
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            'Lorem ipsum',
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
            'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
        ],

        courrentImg: 0
    },

    methods:{
        increment: function(){
            if (this.courrentImg == this.itemsArrey.length - 1){
                this.courrentImg = 0;
            }else{
                this.courrentImg++;
            }
            
        },

        decrement: function(){
            if (this.courrentImg == 0){
                this.courrentImg = this.itemsArrey.length - 1;
            }else{
                this.courrentImg--;
            }
        },
        selectObject: function(i){
            this.courrentImg = i;
        }

    }
});


// {   
//     "place":'Svezia',
//     "quote":'Vieni a goderti quel po\' di tempo libero che ti rimane in un paradiso ',
//     "src":" img/01.jpg",
//     "alt":'a nice place'
// }
// {   
//     "place":'Svizzera',
//     "quote":'Vieni a goderti quel po\' di tempo libero che ti rimane in un paradiso ',
//     "src":" img/02.jpg",
//     "alt":'Victorinox'
// },
// {   
//     "place":'Gran Bretagna',
//     "quote":'Vieni a goderti quel po\' di tempo libero che ti rimane in un paradiso ',
//     "src":" img/03.jpg",
//     "alt":'Robin Hood'
// },
// {   
//     "place":'Germania',
//     "quote":'Vieni a goderti quel po\' di tempo libero che ti rimane in un paradiso ',
//     "src":" img/04.jpg",
//     "alt":'Wrustel'
// },
// {   
//     'place':'Paradise',
//     'quote':'Vieni a goderti quel po\' di tempo libero che ti rimane in un paradiso ',
//     'src':" img/05.jpg",
//     "alt":'a nice place'
// },









