document
  .getElementById("letraaencontrar")
  .addEventListener("keyup", function (event) {
    if (event.code === "Enter" || event.code === "NumpadEnter") {
      event.preventDefault(); // Evita que el formulario se envíe al presionar Enter
      document.getElementById("button").click();
      this.value = "";
      this.focus();
    }
    document
      .getElementById("button")
      .addEventListener("click", function (event) {
        event.preventDefault(); // Evita que el formulario se envíe al hacer clic en el botón
        document.getElementById("letraaencontrar").value = "";
        document.getElementById("letraaencontrar").focus();
      });
  });
