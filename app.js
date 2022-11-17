const form = document.querySelector("form"),
    nextBtn = form.querySelector(".nextBtn"),
    backBtn = form.querySelector(".backBtn"),
    institucionInput = form.querySelector("#instituciones"),
    opcionesInput = form.querySelector("#opciones"),
    montoInput = form.querySelector("#monto"),
    nombreInput = form.querySelector("#nombre"),
    apellidopInput = form.querySelector("#apellPater"),
    apellidomInput = form.querySelector("#apellMater"),
    telInput = form.querySelector("#tel"),
    correoInput = form.querySelector("#correo"),
    submitButton = form.querySelector("#submit"),
    myForm = document.getElementById('registro').elements;

function cargarOpciones() {
    const listaOpciones = {
        bancos: ["CaixaBank", "ING", "BBVA"],
        financieras: ["Vivus", "Moneyman", "Wenance"]
    }

    let instituciones = document.getElementById('instituciones')
    let opciones = document.getElementById('opciones')
    let opcionSeleccionada = instituciones.value

    opciones.innerHTML = '<option disabled selected value="">Seleccione uno</option>'

    if (opcionSeleccionada !== '') {
        opcionSeleccionada = listaOpciones[opcionSeleccionada]

        opcionSeleccionada.forEach(function (opcion) {
            let item = document.createElement('option')
            item.value = opcion
            item.text = opcion
            opciones.add(item)
        });
    }
};

nextBtn.addEventListener("click", () => {
    if (institucionInput.value != "" &&
        opcionesInput.value != "" &&
        montoInput.value >= 4000) {
        form.classList.add('secActive');
        document.getElementById("error-message").hidden = true;
    } else {
        form.classList.remove('secActive');
        document.getElementById("error-message").hidden = false;
    }
})

backBtn.addEventListener("click", () => form.classList.remove('secActive'));

const emailIsValid = (email) => {
    //validates that the input is an email address
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

function submitForm() {
    //console.log(myForm)
    if (nombreInput.value != "" &&
        apellidopInput.value != "" &&
        apellidomInput.value != "" &&
        telInput.value != "" &&
        emailIsValid(correoInput.value) &&
        correoInput.value != "") {
            document.getElementById("second-error-message").hidden = true;
            localStorage.clear();
            for (let i = 0; i <= myForm.length - 1; i++) {
                console.log(myForm[i].value);
            localStorage.setItem(myForm[i].id, JSON.stringify(myForm[i].value));
        }
        alert('Los datos han sido registrados correctamente');
        console.log(localStorage);
    } else {
        document.getElementById("second-error-message").hidden = false;
        //alert('campos incompletos');
    }
}

submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    submitForm();
});

