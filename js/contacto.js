function validarNombre(){
    let nombre = document.getElementById('contactoNombre');
    
    if (nombre.value != ""){
        nombre.className = 'form-control is-valid';
        return true;
    } else {
        nombre.className = 'form-control is-invalid';
        return false; // si el campo está en blanco devolver falso. es un campo obligatorio
    }

}


function validarMail(){
    let mail = document.getElementById('contactoEmail');
    let expRegMail = /\w+@\w+\.[a-z]{2,}$/ ; // expresion regular de validacion de mail

    if (mail.value != "" && expRegMail.test(mail.value)){
        mail.className = 'form-control is-valid';
        return true;
        
    } else {
        mail.className = 'form-control is-invalid';
        return false;
    }
}

function validarTelefono(){
    let telefono = document.getElementById('contactoTelefono');
    let expRegTel = /[0-9]{2,}$/;

    if (telefono.value != "" && expRegTel.test(telefono.value)){
        telefono.className = 'form-control is-valid';
        return true;
    } else {
        telefono.className = 'form-control is-invalid';
        return false;
    }
}

function validarConsulta(){
    let consulta = document.getElementById('contactoConsulta');
    
    if (consulta.value != "" && consulta.value.length > 10){
        consulta.className = 'form-control is-valid';
        return true;
    } else {
        consulta.className = 'form-control is-invalid';
        return false;
    }
}

function validarForm(event){
    event.preventDefault();

    if (validarNombre() == true && validarMail() == true && validarTelefono() == true && validarConsulta() == true){
        window.location.reload(false);
        alert('Formulario Enviado Exitosamente!');
    } else {

    }
}


function enviarMail(){

}


