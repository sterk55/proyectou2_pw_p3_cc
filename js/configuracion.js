console.log(Vue)


//Opciones API
const app = Vue.createApp({

    //template: `<h2> Hola Mundo </h2>
    //<p1>{{1+1}}</p1>
    //`

    data(){
        return{
        mensaje: 'Hola Mundo',
        nombre: 'Daniel',
        apellido: 'Cedeño'
    }
    },
    methods: {
        cambiarNombre(){
            this.nombre='Cristhian'
        },
        cambiarApellido(){
            this.apellido= 'Santos'
        }

    }

})

app.mount('#myApp')