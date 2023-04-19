function mostrarFormulario() {
    var formulario = document.getElementById("formulario");
    var reserva = document.getElementById("reserva");
    
    if (formulario.classList.contains("d-none")) {
        reserva.classList.add("d-none");
        formulario.classList.remove("d-none");
    }
}

function mostrarReserva() {
    var formulario = document.getElementById("formulario");
    var reserva = document.getElementById("reserva");
    
    if (reserva.classList.contains("d-none")) {
        formulario.classList.add("d-none");
        reserva.classList.remove("d-none");
    }
}

function validarFormulario() {
    var campoNombre = document.getElementById("name");
    var campoEmail = document.getElementById("email");
    var campoPhone = document.getElementById("phone");
    var campoReason = document.getElementById("reason");
    var campoComments = document.getElementById("comments");
    
    if (campoNombre.value == "") {
        alert("El campo Nombre es obligatorio");
        return false;
    }

    if (campoEmail.value == "") {
        alert("El campo Email es obligatorio");
        return false;
    }
    
    if (campoPhone.value == "") {
        alert("El campo Teléfono es obligatorio");
        return false;
    }

    if (campoReason.value == "") {
        alert("El campo Motivo es obligatorio");
        return false;
    }

    if (campoComments.value == "") {
        alert("El campo comentarios es obligatorio");
        return false;
    }

    var nombre = campoNombre.value;
    var correo = campoEmail.value;
    alert(`Muchas gracias ${nombre}, hemos recibido su sugerencia y enviaremos una pronta respuesta al correo ${correo}.`);
    document.getElementById("comuniquemonos").reset();
    return true;
}

function validarReserva() {
    var campoNombre = document.getElementById("Name");
    var campoEmail = document.getElementById("Email");
    var campoPhone = document.getElementById("Phone");
    var campoDate = document.getElementById("Date");
    var campoTime = document.getElementById("Time");
    var campoGuests = document.getElementById("Guests");
    
    if (campoNombre.value == "") {
        alert("El campo Nombre es obligatorio");
        return false;
    }

    if (campoEmail.value == "") {
        alert("El campo Email es obligatorio");
        return false;
    }
    
    if (campoPhone.value == "") {
        alert("El campo Teléfono es obligatorio");
        return false;
    }

    if (campoDate.value == "") {
        alert("El campo Fecha es obligatorio");
        return false;
    }

    if (campoTime.value == "") {
        alert("El campo Hora es obligatorio");
        return false;
    }

    if (campoGuests.value == "") {
        alert("El campo Cantidad de invitados es obligatorio");
        return false;
    }
    
    var nombre = $("#Name").val(); 
    var correo = $("#Email").val();
    var asistentes = $("#Guests").val();

    alert("Estimado/a: " + nombre + ", agradecemos por reservar con nosotros. Hemos registrado " + asistentes + " asistentes. Se ha enviado el código de confirmación al correo: " + correo + "\nGracias por preferirnos.");
    
    return true;
}


$(document).ready(function() {
    $('.card-img-top').click(function() {
        var imgSrc = $(this).attr('src');
        var title = $(this).siblings('.card-body').children('.card-title').text();
        var text = $(this).siblings('.card-body').children('.card-text').text();
        $('.modal-img').attr('src', imgSrc);
        $('.modal-title').text(title);
        $('.modal-text').text(text);
        $('#modal').modal('show');
    });
});
