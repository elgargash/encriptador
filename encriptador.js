function validaTexto(opc){
        var textoVal = document.getElementById('text-encript').value;
        var ExpReg = /[A-Z0-9áéíóú¨*`¡?=/&%$#!"|°¬^~()}{}¿'-/{}]/g;
        if(ExpReg.test(textoVal) || textoVal==""){
                document.getElementById('sin-texto').style.display = "block";
                document.getElementById('resulta').style.display = "none";
                document.getElementById('text-encript').value = "";
                alert("Escribir solo letras minúsculas y sin acentos.");
        }
        else
        {
                document.getElementById('sin-texto').style.display = "none";
                switch (opc){
                        case 1: encriptar();
                                break;
                        case 2: desencriptar();
                                break;
                }

        }
}

function encriptar(){       
        var texto = document.getElementById('text-encript').value;
        for(let i = 0; i<5; i++){
                switch(i) {
                case 0: texto = texto.replaceAll('e','enter');
                    break;
                case 1: texto= texto.replaceAll("i","imes");
                    break;
                case 2: texto = texto.replaceAll("a","ai");
                    break;
                case 3: texto = texto.replaceAll("o","ober");
                    break;
                case 4: texto = texto.replaceAll("u","ufat");
                    break;
                }       
        }
        resultado(texto);
}

function desencriptar(){      
        var texto = document.getElementById('text-encript').value;
        for(let i = 0; i<5; i++){
                switch(i){
                case 0: texto = texto.replaceAll("enter","e");
                        break;
                case 1: texto = texto.replaceAll("imes","i");
                        break;
                case 2: texto = texto.replaceAll("ai","a");
                        break;
                case 3: texto = texto.replaceAll("ober","o");
                        break;
                case 4: texto = texto.replaceAll("ufat","u");
                        break;
                }
        }
        resultado(texto);
}

function resultado(texto){
        document.getElementById('resultado').innerHTML = texto;
        document.getElementById('resulta').style.display = "block";
        document.getElementById('text-encript').value = "";
}

function copiarTexto(){
        navigator.clipboard.writeText(document.getElementById('resultado').value);
}
