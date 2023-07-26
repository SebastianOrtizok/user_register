// Recuperar los datos almacenados en localStorage o inicializar como un array vacío si no hay datos almacenados
const registros = JSON.parse(localStorage.getItem("registros")) || [];

// Función para manejar el envío del formulario desde el botón "Registrarse"
function enviarFormulario() {
  // Obtener los valores del formulario
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const email = document.getElementById("email").value;
  const contrasena = document.getElementById("contrasena").value;
  const confirmarContrasena = document.getElementById(
    "confirmar_contrasena"
  ).value;
  const edad = document.getElementById("edad").value;
  const genero = document.getElementById("genero").value;

  // Validar que las contraseñas coincidan
  if (contrasena !== confirmarContrasena) {
    alert("Las contraseñas no coinciden. Por favor, inténtalo nuevamente.");
    return false;
  }

  // Crear un objeto con los datos ingresados
  const registro = {
    nombre,
    apellido,
    email,
    contrasena,
    edad,
    genero,
  };

  // Agregar el objeto al arreglo de registros
  registros.push(registro);
  
  window.location.href = "bienvenido.html?nombre=" + encodeURIComponent(nombre);
  alert(nombre + "  ¡Registro exitoso! Los datos se han almacenado correctamente." );

  // Guardar los datos en localStorage
  localStorage.setItem("registros", JSON.stringify(registros));

  // Limpiar el formulario después del registro exitoso

  // document.getElementById("registroForm").reset();

  return false;
}

// Función para manejar el inicio de sesión desde el botón "Iniciar Sesión"
function iniciarSesion() {
  // Obtener los valores del formulario
  const email = document.getElementById("email").value;
  const contrasena = document.getElementById("contrasena").value;

  // Buscar si existe un registro con el email y la contraseña ingresados
  const usuarioEncontrado = registros.find(
    (registro) => registro.email === email && registro.contrasena === contrasena
  );

  if (usuarioEncontrado) {
    alert("¡Inicio de sesión exitoso!");
    // Redireccionar al usuario a la página de bienvenida (bienvenido.html)
    window.location.href = "bienvenido.html";
  } else {
    alert(
      "Email o contraseña incorrectos. Por favor, intenta nuevamente o regístrate si no tienes una cuenta."
    );
    // Aquí puedes redireccionar al usuario a la página de registro o realizar otras acciones necesarias
  }

  // Retorna "false" para evitar el envío del formulario por defecto
  return false;
}
