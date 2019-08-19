document.addEventListener('DOMContentLoaded', function () {
  // Seleccionamos los items de nuestro menu
  let menuItems = document.querySelectorAll('.nav-link')

  // Agregamos el evento click a cada item
  menuItems.forEach(item => {
    item.addEventListener('click', function (e) {
      e.preventDefault()
      // Buscamos la sección del item al que estamos dando click
      let section = document.querySelector(this.hash)
      // Verificamos si el item ya ha sido seleccionado
      if (this.classList.contains('selected')) return
      // Recorremos todos los items nuevamente para verificar que no han sido seleccionados
      menuItems.forEach(i => {
        // En caso de que han sido seleccionados, vamos a quitar la selección y esconder su sección
        if (i.classList.contains('selected')) {
          let section = document.querySelector(i.hash)

          i.classList.remove('selected')
          section.style.display = 'none'
        }
      })
      // Por último vamos a seleccionar el item que estamos clickando y mostrar la sección respectiva
      this.classList.add('selected')
      section.style.display = 'flex'
    })
  })
})
