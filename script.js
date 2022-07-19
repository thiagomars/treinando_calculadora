function azul(){
    document.getElementById("fundo").style.backgroundColor = "darkcyan";
}

function amarelo(){
    document.getElementById("fundo").style.backgroundColor = "yellow";
}

function verde(){
    document.getElementById("fundo").style.backgroundColor = "green";
}

////////////////////////////////

function deletar(){
    valor = 0;
    document.getElementById("console").innerHTML = 0;
}

function add(valor){
    document.getElementById("console").innerHTML = document.getElementById("console").innerHTML + valor;
}

function igual(){
    document.getElementById("console").innerHTML = eval(document.getElementById("console").innerHTML);
}
