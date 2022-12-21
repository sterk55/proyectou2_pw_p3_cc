const datos = [{nombre: "Cristhian", apellido: "Cedeño", direccion: "Quito"}]

const app = Vue.createApp({



    data() {

        return {

            arreglo: datos,

            datosNuevos:null

        }



    },

    methods:{

        agregarDatos(){
            console.log("jej")
           console.log(datos)

           

            const datosObjetoNueva={

            nombre:this.nombreNuevo,

            apellido:this.apellidoNuevo,

            direccion:this.direccionNuevo

           }

            this.arreglo.unshift(datosObjetoNueva)

        }

   



    }

})



app.mount('#myApp2')