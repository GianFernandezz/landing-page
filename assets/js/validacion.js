
document.getElementById('formulario').addEventListener('submit', (e) => {
    e.preventDefault();

    // Variables
    nombre = document.getElementById('nombre').value;
    correo = document.getElementById('correo').value;
    trabajadores = document.getElementById('trabajadores').value;

    // Expresion regular
    ExpRegularText = /^\s+$/;

    // Validación

    if(nombre == null || nombre.length == 0 || ExpRegularText.test(nombre)){
        alertify.error("El campo es invalido");
        nombre = document.getElementById('nombre').style.boxShadow = "0 0 5px red";
    }
});


