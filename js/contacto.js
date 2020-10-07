

function validarNombre() {
  let nombre = document.getElementById("contactoNombre");

  if (nombre.value != "") {
    nombre.className = "form-control is-valid";
    return true;
  } else {
    nombre.className = "form-control is-invalid";
    return false; // si el campo está en blanco devolver falso. es un campo obligatorio
  }
}

function validarMail() {
  let mail = document.getElementById("contactoEmail");
  let expRegMail = /\w+@\w+\.[a-z]{2,}$/; // expresion regular de validacion de mail

  if (mail.value != "" && expRegMail.test(mail.value)) {
    mail.className = "form-control is-valid";
    return true;
  } else {
    mail.className = "form-control is-invalid";
    return false;
  }
}

function validarTelefono() {
  let telefono = document.getElementById("contactoTelefono");
  let expRegTel = /[0-9]{2,}$/;

  if (telefono.value != "" && expRegTel.test(telefono.value)) {
    telefono.className = "form-control is-valid";
    return true;
  } else {
    telefono.className = "form-control is-invalid";
    return false;
  }
}

function validarConsulta() {
  let consulta = document.getElementById("contactoConsulta");

  if (consulta.value != "" && consulta.value.length > 10) {
    consulta.className = "form-control is-valid";
    return true;
  } else {
    consulta.className = "form-control is-invalid";
    return false;
  }
}

function validarForm(event) {
  event.preventDefault();

  if (
    validarNombre() == true &&
    validarMail() == true &&
    validarTelefono() == true &&
    validarConsulta() == true
  ) {
      enviarMail();
      window.location.reload(false);
      alert("Formulario Enviado Exitosamente!");
  } else {
  }
}

function enviarMail() {
    console.log('desde enviar mail');
  let template_params = {
    from_name: document.getElementById("contactoNombre").value,
    message_html: document.getElementById("contactoConsulta").value,
    from_mail: document.getElementById("contactoEmail").value,
    from_telephone: document.getElementById("contactoTelefono").value,
  };

  let service_id = "gmail";
  let template_id = "template_6S93e9yH";
  emailjs.send(service_id, template_id, template_params).then(
    function (response) {
      // esta funcion anomnima se ejecuta cuando el mail se envíe correctamente
      console.log(response);
      document.getElementById("mensajeEnvio").className =
        "alert alert-primary mt-4";
      document.getElementById("mensajeEnvio").innerText =
        "Su consulta fue enviada exitosamente";

      // reseteo el form luego de mandar el mail
      document.getElementById("formConsulta").reset();
    },
    function (error) {
      // esta funcion anonima se ejecuta cuando no se pueda enviar el mail
      console.log(error);
      document.getElementById("mensajeEnvio").className =
        "alert alert-danger mt-4";
      document.getElementById("mensajeEnvio").innerText =
        "Ocurrió un error! Imposible enviar correo!";
    }
  );
}
