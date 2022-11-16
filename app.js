const form = document.querySelector("form"),
    nextBtn = form.querySelector(".nextBtn"),
    backBtn = form.querySelector(".backBtn"),
    submitButton = form.querySelector("#submit")

function cargarOpciones() {
    const listaOpciones = {
        bancos: ["CaixaBank", "ING", "BBVA"],
        financieras: ["Vivus", "Moneyman", "Wenance"]
    }

    let instituciones = document.getElementById('instituciones')
    let opciones = document.getElementById('opciones')
    let opcionSeleccionada = instituciones.value

    opciones.innerHTML = '<option value="" disabled selected>Seleccione uno</option>'

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

function submitForm() {
    let myForm = document.getElementById('registro').elements;
    //localStorage.clear();
    for (let i = 0; i <= myForm.length - 1; i++) {
        console.log(myForm[i].value);
        localStorage.setItem(myForm[i].id, JSON.stringify(myForm[i].value));
    }
    console.log(localStorage);
}

submitButton.addEventListener('click', () => submitForm());