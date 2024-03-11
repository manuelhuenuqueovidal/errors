//Constante para capturar valor en ID de HTML.
const userData = (() => {
  //Constante para acceder a ID de HTML.
  const container = document.querySelector("#user-data");
  //Función asíncrona.
  return {
    show: async () => {
      //Obtención de datos desde una API.
      let response = await fetch("https://randomuser.me/api/?results=10");
      //Transformación de datos a formato Json.
      let data = await response.json();
      //Constante para trabajar con los datos de la API.
      const userInfo = data.results
      //Ciclo para mapear datos de la API.
        .map(
          (i) =>
          //Interpolación que se mostrará en el HTML.
            `<div>
					/** Traemos imagen de usuario*/
					<img src='${i.picture.large}'/>
					<div>
					/** Traemos más datos de usuario*/
						<span>${i.name.first} ${i.name.last} </span></br>
						<span>${i.email} </span></br>
						<span>${i.cell} </span></br>
					</div>
				</>`
        )
        .join("");
        //Impresión en HTML de datos.
      container.innerHTML = userInfo;
    },
  };
})();
//Llamada a la función.
userData.show();
