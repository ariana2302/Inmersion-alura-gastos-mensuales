let listaNombreGastos = []; //los corchetes señalan que es una lista
let listaValorGastos = [];

//esta funcion se invoca cada vez que el usuario hace click en el boton Agregar Gasto
function clickBoton(){
    let nombreGasto = document.getElementById('nombreGasto').value;
    let valorGasto = parseFloat(document.getElementById('valorGasto').value);
    console.log(nombreGasto);
    console.log(valorGasto);

    /*console.log(listaNombreGastos);
    console.log(listaValorGastos);*/

    listaNombreGastos.push(nombreGasto);
    listaValorGastos.push(valorGasto);

    console.log(listaNombreGastos);
    console.log(listaValorGastos);

    // alert('Click del usuario');

    actualizarListaGastos();
}

function actualizarListaGastos(){
    const listaElementos= document.getElementById('listaDeGastos');
    const totalElementos= document.getElementById('totalGastos');
    let htmlLista='';
    let totalGastos=0;
    listaNombreGastos.forEach((elemento, posicion)=>{
        const valorGasto= listaValorGastos[posicion];
        htmlLista += `<li>${elemento} - USD ${valorGasto.toFixed(2)}
        <button id="botonFormulario" onclick="eliminarGasto(${posicion})">Eliminar</button>
        </li>`
        //Calculamos el total de gastos
        totalGastos += valorGasto;

    }) 

    listaElementos.innerHTML = htmlLista;
    totalElementos.innerHTML=totalGastos.toFixed(2);
    limpiar();

}

function eliminarGasto(posicion){
    listaNombreGastos.splice(posicion,1);
    listaValorGastos.splice(posicion,1);
    actualizarListaGastos();
}

function limpiar(){
    document.getElementById('nombreGasto').value='';
    document.getElementById('valorGasto').value='';
}