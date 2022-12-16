const numeros = [1, 2, 3, 4, 5]



console.log(numeros)



const frases = [{ texto: 'siuuuu', autor: 'el bicho' },

{ texto: 'anda pa alla bobo', autor: 'messi' },

{ texto: 'siuuuu2', autor: 'el bicho2' },

{ texto: 'anda pa alla bobo2', autor: 'messi2' },

{ texto: 'siuuuu3', autor: 'el bicho3' },

{ texto: 'anda pa alla bobo3', autor: 'messi3' },

{ texto: 'siuuuu4', autor: 'el bicho4' },

{ texto: 'anda pa alla bobo4', autor: 'messi4' },]



console.log(frases)



console.log(Vue)



const app = Vue.createApp({



    data() {

        return {

            arreglo: frases

        }



    }



})



app.mount('#myApp2')