import promptSync from 'prompt-sync';
const prompt = promptSync();

let harina = '500 gr de harina';
let sal = 'una pizca de sal';
let levadura = '1gr levadura';
let agua = '200gr de agua';
let aceite = '100gr de aceite';
let masa = 'masa';
let tomate = 'tomate';
let queso = 'queso mozarella';
let peperoni = 'peperoni';
let jamon = 'jamon';
let berenjena = 'berenjena';
let quesoAzul = 'queso cabrales';

/*use const porque la lista seran la misma por pizza*/
const pizzasDisponibles = {
    peperoni: [tomate, queso, peperoni],
    jamon: [tomate, queso, jamon],
    vegetal: [tomate, queso, berenjena, quesoAzul]
};

function app() {
    const pizzaDeseada = prompt('Elige tu pizza (jamon, vegetal, peperoni) ').toLowerCase();

    if (!pizzasDisponibles[pizzaDeseada]) {
        console.log(`Lo siento, no tenemos la pizza ${pizzaDeseada} disponible.`);
        return;
    }

    let listaIngredientes = pizzasDisponibles[pizzaDeseada];

    console.log(`Pizza ${pizzaDeseada} en preparación`);
    pesarMasa(harina + ",", sal + ",", levadura + ",", agua + ",", aceite);
    aguaLevadura();
    harinaSal();
    hacerMasa();
    estirarMasa();
    formaMasa();
    reposarMasa();
    hornoOn();
    anadirIngredientes(listaIngredientes);
    cocinar();
    reposar();
    cortar();
    pizzaLista();
        /*puse todos los pasos uno a uno*/
    function pesarMasa(ing1, ing2, ing3, ing4, ing5) {
        console.log("Buscar los ingredientes y pesarlos:", ing1, ing2, ing3, ing4, ing5);
    }

    function aguaLevadura(){
        console.log("añadimos:"+ agua + ",",  levadura,"y removemos para activar la levadura");
    }
    function harinaSal(){
        console.log("Luego juntamos los ingredientes solidos:"+ harina + ",", sal);
    }
    function hacerMasa(){
        console.log("Luego juntamos todos los ingredientes:", harina, agua, levadura, aceite, sal);
    }
    function estirarMasa(){
        console.log("amasamos todos los ingredientes hasta tener una masa uniforme y sin pegarse");
    }
    function formaMasa(){
        console.log("pesamos la", masa,"y la cortamos en pesos iguales");
    }
    function reposarMasa(){
        console.log("Luego dejamos que fermente 45 minutos en un lugar fresco");
    }
    function hornoOn(){
        console.log("calentamos el horno a 200º");
    }
    /*use la funcion para llamar los ingredientes y agregarlos a la pizza*/ 
    function anadirIngredientes(listaIngredientes){
        for (let x = 0; x < listaIngredientes.length; x++) {
            console.log("Poner " + listaIngredientes[x]);
        }
    }
    function cocinar(){
        console.log("Meter la pizza en el horno durante 15 min");
    }
    
    function reposar(){
        console.log("Dejar enfriar la pizza durante 5 minutos");
    }
    
    function cortar(){
        console.log("Cortar la pizza en 8 piezas");
    }
    
    function pizzaLista(){
        console.log("empacar y entregar cliente");
    }
}

app();
