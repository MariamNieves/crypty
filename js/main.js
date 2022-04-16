$(document).ready(function () {
    
    /*Eliminar traducciones anteriores*/

    function imprimirResultado(traduccion) {
        let resultado = document.getElementById('resultado');
        let contenido = document.createTextNode(traduccion);
        resultado.replaceChildren(contenido);
    }

    
    /*Encriptar*/
    document.querySelector("#encriptar").addEventListener("click", function(event) {
        event.preventDefault();
        if (!document.getElementById('textarea').value == '') {
            let cadena = document.getElementById('textarea').value;
            let trans1 = cadena.replaceAll("a","xxa").replaceAll("e","xxe").replaceAll("i","xxi").replaceAll("o","xxo").replaceAll("u","xxu");
            let trans2 = trans1.replaceAll("xxa","ai").replaceAll("xxe","enter").replaceAll("xxi","imes").replaceAll("xxo","ober").replaceAll("xxu","ufat");
            let noEncontrado = document.getElementById('ocultar');
            let mensajeFinal = document.getElementById('mensajeFinal');
            noEncontrado.style.display = "none";
            mensajeFinal.style.display = 'flex';
            imprimirResultado(trans2)
        }else{
            let noEncontrado = document.getElementById('ocultar');
            let mensajeFinal = document.getElementById('mensajeFinal');
            noEncontrado.style.display = "inline-flex";
            mensajeFinal.style.display = 'none';
        }
    }, false);

    /*Desencriptar*/
    document.querySelector("#desencriptar").addEventListener("click", function(event) {
        event.preventDefault();
        if (!document.getElementById('textarea').value == '') {
            let encrpit = document.getElementById('textarea').value;
            let descript = encrpit.replaceAll("ai","a").replaceAll("enter","e").replaceAll("imes","i").replaceAll("ober","o").replaceAll("ufat","u");
            let noEncontrado = document.getElementById('ocultar');
            let mensajeFinal = document.getElementById('mensajeFinal');
            noEncontrado.style.display = "none";
            mensajeFinal.style.display = 'flex';
            imprimirResultado(descript)
        }else{
            let noEncontrado = document.getElementById('ocultar');
            let mensajeFinal = document.getElementById('mensajeFinal');
            noEncontrado.style.display = "inline-flex";
            mensajeFinal.style.display = 'none';
        }
    }, false);

    /*Copiar al portapapeles*/
    document.getElementById('copiar').addEventListener('click', function(event) {
        event.preventDefault();
        let copiar = document.getElementById('resultado').innerHTML;
        navigator.clipboard.writeText(copiar);
    });




});
    
