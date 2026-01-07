const exercises = [
  {
    title: "Press banca",
    muscle: "pectoral",
    desc: `
      <b>Ejecución: </b>El agarre tiene que ponerse a una anchura que nos permita hacer un rango de movimiento completo, 
          completo no quiere decir que tengas que tocar el pecho ( o si), eso dependerá de tu caso concreto. Fíjate 
          que abajo del todo el antebrazo esté perpendicular al suelo para que de esa manera involucres al máximo el pectoral.<br>
          <b>Perfil de resistencia: </b> En la banca el punto que más pesa es abajo del todo, asi que puedes meterlo tanto al
           inicio de la sesión como al final (gusto personal) <br>
    `,
    video: "../videos/PressBanca.mp4",
    image: "../img/miniaturas/PressBanca.jpg",
  },

  {
    title: "Press con mancuernas",
    muscle: "pectoral",
    desc: `
     <b>Ejecución: </b> Haz un rango de movimiento completo, al igual que comento en la banca,
          y en la mayoria de casos es más cómodo el llevar las mancuernas a 45-60º respecto al cuerpo, pero
          si abriendo más los brazos no tienes molestias no hay problema en llevarlos algo más abiertos (
          siempre que esté estandarizado). Todo lo comentado es para cualquier inclinación <br>
          <b>Perfil de resistencia</b> Al igual que en la banca donde más pesa es abajo asi que lo podremos 
          meter tanto al principio como al final <br>
    `,
    video: "../videos/PressMancuernas.mp4",
    image: "../img/miniaturas/PressMancuernas.jpg",
  },
  {
    title: "Peck Deck",
    muscle: "pectoral",
    desc: `
     <b>Ejecución: </b>Piensa en juntar los codos
          en vez de las manos. Depende de como estés más cómodo puedes doblar más o menos los brazos en la 
          excéntrica (bajada) siempre que en la concéntrica(subida) estos estén rectos, siempre que esté 
          estandarizado.  <br>
          <b>Perfil de resistencia</b> Dependerá de la marca de la máquina, asi que si tienes dudas no dudes
          en preguntármelo <br>
    `,
    video: "../videos/PeckDeck.mp4",
    image: "../img/miniaturas/PeckDeck.jpg",
  },
  {
    title: "Press en Máquina de Placas",
    muscle: "pectoral",
    desc: `
    <b>Ejecución: </b>Lo mismo que en los demás presses, no voy a profundizar más aquí <br>
          <b>Perfil de resistencia</b> Aquí dependerá de la marca y de la posición de la cam a lo largo del recorrido, si
            tienes dudas no dudes de escribirme y mandarme un video de la máquina para que pueda ayudarte a analizarlas <br>
    `,
    video: "../videos/PressMaquina.mp4",
    image: "../img/miniaturas/PressMaquina.jpg",
  },
  {
    title: "Press inclinado de discos",
    muscle: "pectoral",
    desc: `
    <b>Ejecución: </b> Lo mismo que en los demás presses (alineación, respiración... etc) <br>
          <b>Perfil de resistencia</b> Esto lo va a determinar el comportamiento de la palanca de la máquina 
          a lo largo del recorrido, pero por lo general suele pesar en acortamiento por lo que será mas interesante
          meterla al principio del entrenamiento <br>
    `,
    video: "../videos/PressTgm.mp4",
    image: "../img/miniaturas/PressTgm.png",
  },
  {
    title: "Press en Multipower",
    muscle: "pectoral",
    desc: `
    <b>Ejecución: </b>En este caso es importante colocar el banco a una altura que abajo del todo no nos 
          cause molestias pero que tampoco arriba se nos aleje mucho la barra de nosotros, un punto medio <br>
          <b>Perfil de resistencia</b> En estiramiento, asi que la mejor elección será ponerlo a mitad/final del 
          entrenamiento. Esto que comento en todos los ejercicios es lo óptimo sobre el papel, pero siempre habrá 
          que priorizar la adherencia del atleta <br>
    `,
    video: "../videos/PressMultipower.mp4",
    image: "../img/miniaturas/PressMulti.jpg",
  },
  {
    title: "Remo T",
    muscle: "espalda",
    desc: `
    <b>Ejecución: </b> En la mayoría de casos este movimiento se hace con el objetivo de atacar la zona de la espalda alta,
    así que voy a explicarlo para ello. El agarre tiene que estar a una anchura que haga que el antebrazo este perpendicular al
    suelo. Hay que protraer y retraer las escápulas(descolgar los hombros en la bajada y juntarlos en la subida). Mantén el pecho
    apoyado en el soporte y al subir expande la caja torácica únicamente, no la columna (hay casos en los que puede tener cabida
    levantar el pecho del soporte para "aplanar" el perfil de resistencia), ante la duda, ejecuta el ejercicio como he dicho <br>
          <b>Perfil de resistencia</b> La máquina pesa más en estiramiento, pero como en acortamiento el brazo de momento sobre
          la articulación del hombro es mayor, el perfil resultante acaba siendo tirando a acortamiento. Por tanto, será mejor
          meterlo al principio de la sesión <br>
    `,
    video: "../videos/RemoT.mp4",
    image: "../img/miniaturas/RemoT.jpg",
  },
   {
    title: "Jalón con Barra",
    muscle: "espalda",
    desc: `
    <b>Ejecución: </b> La anchura del agarre dependerá de tu objetivo concreto en este ejercicio, pero por norma general recomiendo 
    abrir el agarre un 1,5 del ancho de los hombros aproximadamente para trabajar el dorsal en su función de aducción. Alinea el antebrazo
    con la dirección del cable durante todo el recorrido,  <br>
          <b>Perfil de resistencia</b> La máquina pesa más en estiramiento, pero como en acortamiento el brazo de momento sobre
          la articulación del hombro es mayor, el perfil resultante acaba siendo tirando a acortamiento. Por tanto, será mejor
          meterlo al principio de la sesión <br>
    `,
    video: "../videos/RemoT.mp4",
    image: "../img/miniaturas/RemoT.jpg",
  },
  {
    title: "Jalón Neutro",
    muscle: "espalda",
    desc: `
    <b>Ejecución: </b> Agarre del ancho de los hombros, codos pegados al cuerpo y no forzar el movimiento de las escápulas, es decir,
    no buscar mover los hombros, sino tirar con los brazos y pensar en llevar los codos a la cadera. Alinenado el antebrazo con la dirección
    del cable. <br>
    Es importante coger un agarre que sea aproximadamente como el ancho de nuestros hombros, si es demasiado ancho,
    acabará siendo el mismo patrón que el jalón con barra y si es demasiado estrecho acabaremos haciendo una rotación externa del hombro y 
    por tanto involucrando musculatura que no es el dorsal.   <br>
          <b>Perfil de resistencia</b> La máquina pesa más en estiramiento, pero como en acortamiento el brazo de momento sobre
          la articulación del hombro es mayor, el perfil resultante acaba siendo tirando a acortamiento. Por tanto, será mejor
          meterlo al principio de la sesión <br>
    `,
    video: "../videos/RemoT.mp4",
    image: "../img/miniaturas/RemoT.jpg",
  },
];
