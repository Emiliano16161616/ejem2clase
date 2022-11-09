var array;
function cargarpagina(){
    array =[
        {nombre:"wilder",codigo:"190363",doc:"123456",prog:"ing sistemas"},
        {nombre:"andres",codigo:"190363",doc:"123456",prog:"ing sistemas"},
        {nombre:"duarte",codigo:"190363",doc:"123456",prog:"ing sistemas"}
    ]
}

function calcular(){
    let nombre = $("#nombre").val(); //captura el nombre
    for(let i=0;i<array.length;i++){
        if(nombre==arra[i].nombre){  //busca el nombre de la posicion i en array.
            console.log("el nombre encontrado es : "+ nombre);
            break;
        }
        else{
            console.log("su nombre "+nombre+" no fue encontrado");
        }
    }
}