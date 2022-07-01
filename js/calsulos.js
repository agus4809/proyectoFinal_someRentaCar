const fechas = document.querySelector("#formularioFechas");


fechas.addEventListener("submit", mostrarFechas())

function mostrarFechas(e){
    e.preventDefault();
    const inicio = document.querySelector("#formGroupExampleInput").value;
    const fin = document.querySelector("#formGroupExampleInput2").value;
    console.log("validando" + " " + inicio + " " + fin)
}








