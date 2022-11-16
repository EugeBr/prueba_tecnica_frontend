function cargarOpciones() {
    const listaOpciones = {
      bancos: ["CaixaBank", "ING", "BBVA"],
      financieras: ["Vivus", "Moneyman", "Wenance"]
    }
    
    let instituciones = document.getElementById('instituciones')
    let opciones = document.getElementById('opciones')
    let opcionSeleccionada = instituciones.value
    
    opciones.innerHTML = '<option value="" disabled selected>Seleccione uno</option>'
    
    if(opcionSeleccionada !== ''){
      opcionSeleccionada = listaOpciones[opcionSeleccionada]
    
      opcionSeleccionada.forEach(function(opcion){
        let item = document.createElement('option')
        item.value = opcion
        item.text = opcion
        opciones.add(item)
      });
    }
    
  }