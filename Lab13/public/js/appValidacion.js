
let boton = document.getElementById('boton');
let pass1 = document.getElementById('pass1');
let pass2 = document.getElementById('pass2');

function validar(){
    
    if((pass1.value === pass2.value) && (pass1.value !== "" && pass2.value !== "")  ){
        document.getElementById('resultado').innerHTML = "Contraseña válida"
    }
    else if(pass1.value === "" && pass2.value === ""){
        document.getElementById('resultado').innerHTML = "No ha ingresado contraseña"
    }
    else{
        document.getElementById('resultado').innerHTML = "Contraseña inválida"
    }

}

boton.onclick = validar