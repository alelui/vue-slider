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

        MegaArray: [
            {   
                "h2":'Sasso Marconi',
                "span":'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
                "src":" img/01.jpg",
                "alt":'Sasso Marconi'
               },
               {   
                "h2":'Rocca Rasu',
                "span":'Lorem ipsum',
                "src":" img/02.jpg",
                "alt":'Rocca Rasu'
               },
               {   
                "h2":'Formello',
                "span":'Lorem ipsum, dolor sit amet consectetur adipisicing elit',
                "src":" img/03.jpg",
                "alt":'Formello'
               },
               {   
                "h2":'Bassano del Grappa',
                "span":'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
                "src":" img/04.jpg",
                "alt":'Bassano del Grappa'
               },
               {   
                'h2':'Pianarella di Cervia',
                'span':'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
                'src':" img/05.jpg",
                "alt":'Pianarella di Cervia'
               }
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














