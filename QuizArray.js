let leccion = 1;

// Arreglo global de preguntas
let question = [];

// Preguntas por lección (puedes agregar más)
const quizzesPorLeccion = {
  1: [
    { question: "¿Qué lecciones aprendiste?", answers: ["Do Mayor, Re mayor, La mayor, Mi mayor", "La Menor, Sol mayor", "Beta 4, Sol recio"], correct: 0 },
    { question: "¿Cual es la cuerda que no se toca en el acorde Do mayor?", answers: ["Sexta", "Primera", "Tercera"], correct: 0 },
    { question: "¿Cual es la cuerda que se deja al aire en el acorde Re Mayor?", answers: ["Primera y Cuarta", "Quinta y Segunda", "Cuarta"], correct: 2 },
    { question: "¿Cual es la cuerda que no se toca en el acorde La Mayor?", answers: ["primera", "Tercera", "Sexta"], correct: 0 },
    { question: "¿Cual es la cuerda que se deja al aire en el acorde Mi Mayor?", answers: ["Primera y tercera", "Primera, segunda y Sexta", "Sexta"], correct: 1 },
  ],
  2: [
    
    { image: "Acordes/basico/7/QuizSOl.png",  question: "Que acorde es este?", answers: ["Mi menor", "Sol mayor", "Re alargado"], correct: 1,  },
    { question: "¿Como se toca FA Mayor?", answers: [ { image: "Acordes/basico/7/QuizFamayor.png"}, { image: "Acordes/basico/7/QuizSimayor.png"}, { image: "Acordes/basico/7/QuizDomenor.png"}] , correct: 0 }, 
    { question: "¿Que acorde nesecita una Cejilla?", answers: ["Do mayor", "La", "Si mayor"], correct: 2 },
    { question: "¿Cual es la cuerda que se deja al aire en el acorde Sol Mayor", answers: ["Cuarta, primera y segunda", "Cuarta, Quinta y Sexta", "segunda y tercera"], correct: 1 }
 ],
    3: [
    { question: "¿Cuáles cuerdas se deben tocar para el acorde Re menor?", answers: ["Segunda, cuarta y quinta", "Primera, sexta y segunda", "Cuarta, tercera y quinta"], correct: 0 },
    { question: "¿Qué posición debe tener el dedo 1 en el acorde Re menor?", answers: ["Cuerda 4, Traste 3", "Cuerda 1, Traste 1", "Cuerda 2, Traste 1"], correct: 1 },
    { question: "¿Qué posición debe tener el dedo índice (1) en el acorde Do menor?", answers: ["Todas las cuerdas, traste 3", "Primera y segunda cuerda, traste 2", "Cuerda 6, traste 4"], correct: 0 },
    { question: "¿Qué cuerda no se debe tocar en el acorde Do menor?", answers: ["Cuerda 3", "Cuerda 6", "Cuerda 1"], correct: 1 },
    { question: "¿Qué posición debe tener el dedo medio (2) en el acorde Do menor?", answers: ["Cuerda 4, Traste 4", "Cuerda 5, Traste 5", "Cuerda 3, Traste 5"], correct: 0 },
    { question: "¿Cuál es la cuerda al aire en el acorde Re menor?", answers: ["Cuerda 3", "Cuerda 4", "Cuerda 5"], correct: 1 },
    { question: "¿Qué representa el símbolo 'X' en un diagrama de acordes?", answers: ["Cuerda que se toca al aire", "Cuerda que no se debe tocar", "Cuerda que se pisa con el dedo índice"], correct: 1 },
    { question: "¿Qué posición debe tener el dedo anular (3) en el acorde Do menor?", answers: ["Cuerda 5, Traste 5", "Cuerda 4, Traste 3", "Cuerda 6, Traste 4"], correct: 0 }
  ],
  4: [
   { question: "¿Qué posición debe tener el dedo índice (1) en el acorde Sol menor?", answers: ["Cejilla en traste 3", "Cuerda 5, traste 5", "Cuerda 4, traste 3"], correct: 0 },
    { question: "¿Qué dedo se coloca en la cuerda 5, traste 5 en el acorde Sol menor?", answers: ["Dedo 2", "Dedo 3", "Dedo 4"], correct: 1 },
    { question: "¿Qué dedo se coloca en la cuerda 4, traste 5 en el acorde Sol menor?", answers: ["Dedo 1", "Dedo 2", "Dedo 4"], correct: 2 },
    { question: "¿Qué posición debe tener el dedo índice (1) en el acorde Si menor?", answers: ["Cuerda 2, traste 1", "Cejilla en traste 2", "Cuerda 4, traste 3"], correct: 1 },
    { question: "¿Qué dedo se coloca en la cuerda 2, traste 3 en el acorde Si menor?", answers: ["Dedo 1", "Dedo 2", "Dedo 3"], correct: 1 },
    { question: "¿Qué dedo se coloca en la cuerda 4, traste 4 en el acorde Si menor?", answers: ["Dedo 2", "Dedo 3", "Dedo 4"], correct: 2 },
    { question: "¿Qué posición debe tener el dedo índice (1) en el acorde Fa menor?", answers: ["Cejilla en traste 1", "Cuerda 5, traste 3", "Cuerda 4, traste 3"], correct: 0 },
    { question: "¿Qué dedo se coloca en la cuerda 5, traste 3 en el acorde Fa menor?", answers: ["Dedo 2", "Dedo 3", "Dedo 4"], correct: 1 },
    { question: "¿Qué dedo se coloca en la cuerda 4, traste 3 en el acorde Fa menor?", answers: ["Dedo 1", "Dedo 2", "Dedo 3"], correct: 2 },
    { question: "¿Qué cuerda no se debe tocar en el acorde Fa menor?", answers: ["Cuerda 6", "Cuerda 5", "Cuerda 4"], correct: 0 },
  ],
  5: [
    { question: "¿Qué posición debe tener el dedo índice (1) en el acorde Do7?", answers: ["Cuerda 2, traste 1", "Cuerda 4, traste 2", "Cuerda 3, traste 3"], correct: 0 },
    { question: "¿Qué dedo se coloca en la cuerda 4, traste 2 en el acorde Do7?", answers: ["Dedo 1", "Dedo 2", "Dedo 3"], correct: 1 },
    { question: "¿Qué posición debe tener el dedo índice (1) en el acorde Re7?", answers: ["Cuerda 3, traste 2", "Cuerda 2, traste 1", "Cuerda 1, traste 2"], correct: 1 },
    { question: "¿Qué dedo se coloca en la cuerda 3, traste 2 en el acorde Re7?", answers: ["Dedo 1", "Dedo 2", "Dedo 3"], correct: 1 },
    { question: "¿Qué cuerda no se debe tocar en el acorde Re7?", answers: ["Cuerda 6", "Cuerda 5", "Cuerda 4"], correct: 0 },
    { question: "¿Qué posición debe tener el dedo índice (1) en el acorde La7?", answers: ["Cuerda 4, traste 2", "Cuerda 3, traste 2", "Cuerda 2, traste 1"], correct: 0 },
    { question: "¿Qué dedo se coloca en la cuerda 2, traste 2 en el acorde La7?", answers: ["Dedo 1", "Dedo 2", "Dedo 3"], correct: 1 },
    { question: "¿Cuántos dedos se usan para presionar cuerdas en el acorde La7?", answers: ["2", "3", "4"], correct: 0 },
    { question: "¿Qué significa el término 'cejilla' en la guitarra?", answers: ["Presionar varias cuerdas con un solo dedo", "Tocar una cuerda al aire", "Usar el dedo meñique para presionar una cuerda"], correct: 0 },
    { question: "¿Qué mensaje transmite la práctica de acordes como Re7 y Do7?", answers: ["La música es solo entretenimiento", "La música tiene el poder de transformar el mundo", "La música no requiere esfuerzo"], correct: 1 }

  ],
  6: [
    { question: "¿Qué posición debe tener el dedo índice (1) en el acorde Sol7?", answers: ["Cuerda 1, traste 1", "Cuerda 5, traste 2", "Cuerda 6, traste 3"], correct: 0 },
    { question: "¿Qué dedo se coloca en la cuerda 5, traste 2 en el acorde Sol7?", answers: ["Dedo 1", "Dedo 2", "Dedo 3"], correct: 1 },
    { question: "¿Qué dedo se coloca en la cuerda 6, traste 3 en el acorde Sol7?", answers: ["Dedo 1", "Dedo 2", "Dedo 3"], correct: 2 },
    { question: "¿Cuáles cuerdas se tocan al aire en el acorde Sol7?", answers: ["Cuerda 2, 3 y 4", "Cuerda 1 y 6", "Cuerda 5 y 4"], correct: 0 },
    { question: "¿Qué posición debe tener el dedo índice (1) en el acorde Si7?", answers: ["Cuerda 4, traste 1", "Cuerda 5, traste 2", "Cuerda 3, traste 2"], correct: 0 },
    { question: "¿Qué dedo se coloca en la cuerda 5, traste 2 en el acorde Si7?", answers: ["Dedo 1", "Dedo 2", "Dedo 3"], correct: 1 },
    { question: "¿Qué dedo se coloca en la cuerda 3, traste 2 en el acorde Si7?", answers: ["Dedo 1", "Dedo 2", "Dedo 3"], correct: 2 },
    { question: "¿Qué posición debe tener el dedo índice (1) en el acorde Fa7?", answers: ["Cejilla en traste 1", "Cuerda 2, traste 2", "Cuerda 4, traste 3"], correct: 0 },
    { question: "¿Qué dedo se coloca en la cuerda 2, traste 2 en el acorde Fa7?", answers: ["Dedo 1", "Dedo 2", "Dedo 3"], correct: 1 },
    { question: "¿Qué dedo se coloca en la cuerda 4, traste 3 en el acorde Fa7?", answers: ["Dedo 1", "Dedo 2", "Dedo 3"], correct: 2 },
    ],
    7: [
    { question: "¿Qué posición debe tener el dedo índice (1) en el acorde Do7?", answers: ["Cuerda 3, traste 3", "Cuerda 2, traste 1", "Cuerda 5, traste 3"], correct: 1 },
    { question: "¿Qué dedo se coloca en la cuerda 4, traste 2 en el acorde Do7?", answers: ["Dedo 1", "Dedo 2", "Dedo 3"], correct: 1 },
    { question: "¿Qué dedo se coloca en la cuerda 5, traste 3 en el acorde Do7?", answers: ["Dedo 1", "Dedo 2", "Dedo 3"], correct: 2 },
    { question: "¿Qué posición debe tener el dedo índice (1) en el acorde Re7 Mayor?", answers: ["Cejilla en traste 2", "Cuerda 3, traste 1", "Cuerda 4, traste 3"], correct: 0 },
    { question: "¿Cuántas cuerdas se tocan al aire en el acorde Re7 Mayor?", answers: ["2", "3", "4"], correct: 2 },
    { question: "¿Cuáles cuerdas no se deben tocar en el acorde Re7 Mayor?", answers: ["Cuerda 5 y 6", "Cuerda 3 y 4", "Cuerda 1 y 2"], correct: 0 },
    { question: "¿Qué posición debe tener el dedo índice (1) en el acorde Mi7 Mayor?", answers: ["Cuerda 4, traste 1", "Cuerda 3, traste 2", "Cuerda 5, traste 2"], correct: 0 },
    { question: "¿Cuántas cuerdas se tocan al aire en el acorde Mi7 Mayor?", answers: ["2", "3", "4"], correct: 2 },
    { question: "¿Cuáles cuerdas no se deben tocar en el acorde Mi7 Mayor?", answers: ["Cuerda 5 y 6", "Cuerda 3 y 4", "Cuerda 1 y 2"], correct: 0},
    { question: "¿Qué posición debe tener el dedo índice (1) en el acorde Fa7 Mayor?", answers: ["Cejilla en traste 1", "Cuerda 2, traste 1", "Cuerda 4, traste 2"], correct: 0 },
    { question: "¿Qué dedo se coloca en la cuerda 2, traste 1 en el acorde Fa7 Mayor?", answers: ["Dedo 1", "Dedo 2", "Dedo 3"], correct: 1 },
    { question: "¿Qué dedo se coloca en la cuerda 4, traste 2 en el acorde Fa7 Mayor?", answers: ["Dedo 1", "Dedo 2", "Dedo 3"], correct: 2 },
    { question: "¿Qué dedo se coloca en la cuerda 3, traste 2 en el acorde Fa7 Mayor?", answers: ["Dedo 1", "Dedo 2", "Dedo 4"], correct: 3 },
    { question: "¿Qué posición debe tener el dedo índice (1) en el acorde Sol7 Mayor?", answers: ["Cuerda 1, traste 1", "Cuerda 5, traste 2", "Cuerda 6, traste 3"], correct: 0 },
    { question: "¿Qué dedo se coloca en la cuerda 5, traste 2 en el acorde Sol7 Mayor?", answers: ["Dedo 1", "Dedo 2", "Dedo 3"], correct: 1 },
    { question: "¿Qué dedo se coloca en la cuerda 6, traste 3 en el acorde Sol7 Mayor?", answers: ["Dedo 1", "Dedo 2", "Dedo 3"], correct: 2 },
    { question: "¿Qué posición debe tener el dedo índice (1) en el acorde La7 Mayor?", answers: ["Cuerda 3, traste 2", "Cuerda 2, traste 1", "Cuerda 4, traste 2"], correct: 0 },
    { question: "¿Qué dedo se coloca en la cuerda 4, traste 2 en el acorde La7 Mayor?", answers: ["Dedo 1", "Dedo 2", "Dedo 3"], correct: 1 },
    { question: "¿Qué posición debe tener el dedo índice (1) en el acorde Si7 Mayor?", answers: ["Cejilla en traste 2", "Cuerda 3, traste 3", "Cuerda 5, traste 4"], correct: 0 },
    { question: "¿Qué dedo se coloca en la cuerda 3, traste 3 en el acorde Si7 Mayor?", answers: ["Dedo 1", "Dedo 2", "Dedo 3"], correct: 1 }
  ],
    8: [

    { question: "¿Qué dedo se utiliza para hacer la cejilla en el acorde DoMenor7?", answers: ["Dedo 1", "Dedo 2", "Dedo 3", "Dedo 4"], correct: 0 },
    { question: "¿En qué traste se coloca el dedo 2 en el acorde FaMenor7?", answers: ["Traste 1", "Traste 2", "Traste 3", "Traste 4"], correct: 1 },
    { question: "¿Qué cuerdas se tocan al aire en el acorde LaMenor7?", answers: ["Cuerdas 1, 3 y 5", "Cuerdas 2, 4 y 6", "Cuerdas 1, 2 y 4", "Cuerdas 3, 5 y 6"], correct: 0 },
    { question: "¿Qué dedo se coloca en la cuerda 2, traste 3 en el acorde MiMenor7?", answers: ["Dedo 1", "Dedo 2", "Dedo 3", "Dedo 4"], correct: 2 },
    { question: "¿Qué cuerdas no se tocan en el acorde ReMenor7?", answers: ["Cuerdas 5 y 6", "Cuerdas 4 y 5", "Cuerdas 1 y 6", "Cuerdas 3 y 4"], correct: 0 },
    { question: "¿Qué dedo se coloca en la cuerda 5, traste 2 en el acorde SiMenor7?", answers: ["Dedo 1", "Dedo 2", "Dedo 3", "Dedo 4"], correct: 0 },
    { question: "¿Qué cuerdas no se tocan en el acorde SolMenor7?", answers: ["Cuerdas 1 y 5", "Cuerdas 2 y 4", "Cuerdas 3 y 6", "Cuerdas 2 y 5"], correct: 0 },
    { question: "¿Qué dedo se coloca en la cuerda 4, traste 5 en el acorde DoMenor7?", answers: ["Dedo 1", "Dedo 2", "Dedo 3", "Dedo 4"], correct: 2 },
    { question: "¿Qué significa la indicación 'X' en los diagramas de acordes?", answers: ["Cuerda que no se debe tocar", "Cuerda que se toca al aire", "Cuerda que se presiona en un traste", "Cuerda que se toca con cejilla"], correct: 0 },
    { question: "¿Qué dedo se coloca en la cuerda 3, traste 3 en el acorde SolMenor7?", answers: ["Dedo 1", "Dedo 2", "Dedo 3", "Dedo 4"], correct: 2 },
    { question: "¿Qué cuerdas se tocan al aire en el acorde MiMenor7?", answers: ["Cuerdas 3 y 6", "Cuerdas 1 y 5", "Cuerdas 2 y 4", "Cuerdas 1 y 3"], correct: 0 },
    { question: "¿Qué dedo se coloca en la cuerda 2, traste 4 en el acorde DoMenor7?", answers: ["Dedo 1", "Dedo 2", "Dedo 3", "Dedo 4"], correct: 1 },
    { question: "¿Qué dedo se coloca en la cuerda 4, traste 2 en el acorde MiMenor7?", answers: ["Dedo 1", "Dedo 2", "Dedo 3", "Dedo 4"], correct: 1 },
    { question: "¿Qué cuerdas se tocan al aire en el acorde ReMenor7?", answers: ["Cuerda 4", "Cuerda 5", "Cuerda 6", "Cuerda 3"], correct: 0 },
    { question: "¿Qué dedo se coloca en la cuerda 1, traste 3 en el acorde MiMenor7?", answers: ["Dedo 1", "Dedo 2", "Dedo 3", "Dedo 4"], correct: 3 }


  ],
    9: [
   
    { question: "¿Qué posición debe tener el dedo índice (1) en el acorde Do6?", answers: ["Cuerda 2, traste 1", "Cuerda 4, traste 2", "Cuerda 3, traste 2"], correct: 0 },
    { question: "¿Qué dedo se coloca en la cuerda 5, traste 3 en el acorde Do6?", answers: ["Dedo 1", "Dedo 2", "Dedo 3"], correct: 2 },
    { question: "¿Cuáles cuerdas se tocan al aire en el acorde Do6?", answers: ["Cuerda 1", "Cuerda 3", "Cuerda 5"], correct: 0 },
    { question: "¿Qué posición debe tener el dedo índice (1) en el acorde Fa6?", answers: ["Cuerda 6, traste 1", "Cuerda 2, traste 1", "Cuerda 3, traste 1"], correct: 0 },
    { question: "¿Qué efecto tiene el acorde Fa6 en la armonía?", answers: ["Añade un sonido brillante", "Es un acorde menor", "No tiene influencia en la armonía"], correct: 0 },
    { question: "¿Cuáles cuerdas se tocan al aire en el acorde La6?", answers: ["Cuerda 5", "Cuerda 3 y 4", "Cuerda 6"], correct: 0 },
    { question: "¿Qué significado tiene la cejilla en el acorde La6?", answers: ["Presionar varias cuerdas con un solo dedo", "Tocar una cuerda al aire", "Usar el dedo meñique para presionar una cuerda"], correct: 0 },
    { question: "¿Cuántos dedos se usan para presionar cuerdas en el acorde Mi6?", answers: ["2", "3", "4"], correct: 2 },
    { question: "¿Qué posición debe tener el dedo índice (1) en el acorde Re6?", answers: ["Cuerda 3, traste 2", "Cuerda 1, traste 2", "Cuerda 5, traste 2"], correct: 0 },
    { question: "¿Cuáles cuerdas no se tocan en el acorde Re6?", answers: ["Cuerda 5 y 6", "Cuerda 3 y 4", "Cuerda 1 y 2"], correct: 0 },
    { question: "¿Qué dedo se coloca en la cuerda 3, traste 1 en el acorde Si6?", answers: ["Dedo 1", "Dedo 2", "Dedo 3"], correct: 1 },
    { question: "¿Cuáles cuerdas se tocan al aire en el acorde Si6?", answers: ["Cuerda 1", "Cuerda 2 y 5", "Cuerda 3 y 6"], correct: 0 },
    { question: "¿Cuál es la función del acorde Sol6 en una progresión?", answers: ["Generar tensión antes de resolver en Do mayor", "Ser el acorde final de una canción", "No tiene función específica"], correct: 0 },
    { question: "¿Cuántos dedos se usan para presionar cuerdas en el acorde Sol6?", answers: ["2", "3", "4"], correct: 1 },
    { question: "¿Qué cuerdas se tocan al aire en el acorde Sol6?", answers: ["Cuerdas 1, 2, 3 y 4", "Cuerda 5 y 6", "Cuerda 2 y 4"], correct: 0 }

  ],
    10: [
     { question: "¿Qué posición debe tener el dedo índice (1) en el acorde DoSus2?", answers: ["Cuerda 5, traste 3", "Cuerda 3, traste 3", "Cuerda 1, traste 3"], correct: 0 },
    { question: "¿Qué cuerdas se tocan al aire en el acorde DoSus2?", answers: ["Cuerda 3 y 4", "Cuerda 2 y 5", "Cuerda 6 y 1"], correct: 0 },
    { question: "¿Qué cuerdas no se tocan en el acorde DoSus2?", answers: ["Cuerda 6", "Cuerda 5", "Cuerda 4"], correct: 0 },
    { question: "¿Qué dedo se coloca en la cuerda 4, traste 3 en el acorde FaSus2?", answers: ["Dedo 1", "Dedo 2", "Dedo 3"], correct: 1 },
    { question: "¿Qué cuerdas no se tocan en el acorde FaSus2?", answers: ["Cuerdas 5 y 6", "Cuerda 3", "Cuerda 1"], correct: 0 },
    { question: "¿Cuáles cuerdas se tocan al aire en el acorde LaSus2?", answers: ["Cuerdas 1, 2 y 5", "Cuerda 3 y 6", "Cuerda 4 y 5"], correct: 0 },
    { question: "¿Qué posición debe tener el dedo índice (1) en el acorde MiSus2?", answers: ["Cejilla en traste 2", "Cuerda 3, traste 4", "Cuerda 2, traste 5"], correct: 0 },
    { question: "¿Cuáles cuerdas se tocan al aire en el acorde MiSus2?", answers: ["Cuerda 6", "Cuerda 4 y 5", "Cuerda 2 y 3"], correct: 0 },
    { question: "¿Cuáles cuerdas no se tocan en el acorde ReSus2?", answers: ["Cuerdas 5 y 6", "Cuerda 2", "Cuerda 4"], correct: 0 },
    { question: "¿Cuáles cuerdas se tocan al aire en el acorde ReSus2?", answers: ["Cuerda 1 y 4", "Cuerda 3 y 5", "Cuerda 2 y 6"], correct: 0 },
    { question: "¿Qué posición debe tener el dedo índice (1) en el acorde SiSus2?", answers: ["Cejilla en traste 2", "Cuerda 4, traste 4", "Cuerda 3, traste 4"], correct: 0 },
    { question: "¿Qué cuerdas no se tocan en el acorde SiSus2?", answers: ["Cuerda 6", "Cuerda 5", "Cuerda 3"], correct: 0 },
    { question: "¿Qué posición debe tener el dedo índice (1) en el acorde SolSus2?", answers: ["Cuerda 3, traste 2", "Cuerda 6, traste 3", "Cuerda 2, traste 3"], correct: 0 },
    { question: "¿Qué dedo se coloca en la cuerda 4, traste 3 en el acorde SolSus2?", answers: ["Dedo 1", "Dedo 2", "Dedo 3"], correct: 1 },
    { question: "¿Qué cuerdas se tocan al aire en el acorde SolSus2?", answers: ["Cuerda 4", "Cuerda 3 y 6", "Cuerda 1 y 2"], correct: 0 }
  ],
    11: [
       { question: "¿Qué posición debe tener el dedo índice (1) en el acorde DoSus4?", answers: ["Cejilla en traste 1", "Cuerda 5, traste 3", "Cuerda 4, traste 3"], correct: 0 },
    { question: "¿Qué cuerdas se tocan al aire en el acorde DoSus4?", answers: ["Cuerda 6", "Cuerda 3 y 5", "Cuerda 1 y 4"], correct: 0 },
    { question: "¿Qué cuerdas no se tocan en el acorde DoSus4?", answers: ["Cuerda 3", "Cuerda 2", "Cuerda 4"], correct: 0 },
    { question: "¿Qué dedo se coloca en la cuerda 4, traste 3 en el acorde FaSus4?", answers: ["Dedo 1", "Dedo 2", "Dedo 3"], correct: 1 },
    { question: "¿Qué posición debe tener el dedo índice (1) en el acorde LaSus4?", answers: ["Cuerda 4, traste 2", "Cuerda 3, traste 2", "Cuerda 2, traste 3"], correct: 0 },
    { question: "¿Cuáles cuerdas se tocan al aire en el acorde LaSus4?", answers: ["Cuerdas 1 y 5", "Cuerda 3 y 6", "Cuerda 4 y 2"], correct: 0 },
    { question: "¿Qué posición debe tener el dedo índice (1) en el acorde MiSus4?", answers: ["Cuerda 4, traste 2", "Cuerda 3, traste 2", "Cuerda 2, traste 3"], correct: 0 },
    { question: "¿Qué cuerdas se tocan al aire en el acorde MiSus4?", answers: ["Cuerda 1, 2, 5 y 6", "Cuerda 3 y 4", "Cuerda 5 y 6"], correct: 0 },
    { question: "¿Cuáles cuerdas no se tocan en el acorde ReSus4?", answers: ["Cuerda 2 y 4", "Cuerda 5 y 6", "Cuerda 3 y 1"], correct: 0 },
    { question: "¿Qué posición debe tener el dedo índice (1) en el acorde SiSus4?", answers: ["Cejilla en traste 2", "Cuerda 3, traste 4", "Cuerda 2, traste 5"], correct: 0 },
    { question: "¿Qué cuerdas no se tocan en el acorde SiSus4?", answers: ["Cuerda 6", "Cuerda 5", "Cuerda 2"], correct: 0 },
    { question: "¿Qué posición debe tener el dedo índice (1) en el acorde SolSus4?", answers: ["Cuerda 6, traste 3", "Cuerda 5, traste 3", "Cuerda 2, traste 3"], correct: 0 },
    { question: "¿Qué cuerdas se tocan al aire en el acorde SolSus4?", answers: ["Cuerda 3 y 4", "Cuerda 1 y 2", "Cuerda 5 y 6"], correct: 0 },
    { question: "¿Qué función tienen los acordes suspendidos como SolSus4?", answers: ["Añaden un sonido abierto y expansivo", "No tienen influencia en la armonía", "Son acordes menores"], correct: 0 },
    { question: "¿Cuál es la principal diferencia entre DoSus4 y DoMayor?", answers: ["El acorde suspendido reemplaza la tercera por una cuarta", "DoSus4 es menor", "DoMayor tiene una séptima añadida"], correct: 0 }

  ],
    12: [
   
    { question: "¿Qué posición debe tener el dedo índice (1) en el acorde DoDisminuido?", answers: ["Cuerda 5, traste 3", "Cuerda 3, traste 3", "Cuerda 1, traste 3"], correct: 0 },
    { question: "¿Qué cuerdas no se tocan en el acorde DoDisminuido?", answers: ["Cuerda 6 y 1", "Cuerda 5 y 4", "Cuerda 3 y 2"], correct: 0 },
    { question: "¿Qué dedo se coloca en la cuerda 4, traste 4 en el acorde DoDisminuido?", answers: ["Dedo 1", "Dedo 2", "Dedo 3"], correct: 1 },
    { question: "¿Qué posición debe tener el dedo índice (1) en el acorde FaDisminuido?", answers: ["Cuerda 3, traste 1", "Cuerda 2, traste 1", "Cuerda 5, traste 2"], correct: 0 },
    { question: "¿Cuáles cuerdas se tocan al aire en el acorde FaDisminuido?", answers: ["Cuerda 4", "Cuerda 3 y 6", "Cuerda 1 y 5"], correct: 0 },
    { question: "¿Qué posición debe tener el dedo índice (1) en el acorde LaDisminuido?", answers: ["Cuerda 4, traste 4", "Cuerda 2, traste 2", "Cuerda 3, traste 3"], correct: 0 },
    { question: "¿Cuáles cuerdas no se tocan en el acorde LaDisminuido?", answers: ["Cuerda 1 y 6", "Cuerda 5 y 3", "Cuerda 4 y 2"], correct: 0 },
    { question: "¿Qué posición debe tener el dedo índice (1) en el acorde MiDisminuido?", answers: ["Cuerda 5, traste 1", "Cuerda 4, traste 2", "Cuerda 2, traste 3"], correct: 0 },
    { question: "¿Cuáles cuerdas se tocan al aire en el acorde MiDisminuido?", answers: ["Cuerda 3 y 6", "Cuerda 1 y 5", "Cuerda 4 y 2"], correct: 0 },
    { question: "¿Qué posición debe tener el dedo índice (1) en el acorde ReDisminuido?", answers: ["Cejilla en traste 1", "Cuerda 2, traste 3", "Cuerda 4, traste 2"], correct: 0 },
    { question: "¿Qué cuerdas no se tocan en el acorde ReDisminuido?", answers: ["Cuerda 6 y 5", "Cuerda 3 y 1", "Cuerda 2 y 4"], correct: 0 },
    { question: "¿Qué posición debe tener el dedo índice (1) en el acorde SiDisminuido?", answers: ["Cuerda 1, traste 1", "Cuerda 5, traste 2", "Cuerda 2, traste 3"], correct: 0 },
    { question: "¿Cuáles cuerdas se tocan al aire en el acorde SiDisminuido?", answers: ["Cuerda 4", "Cuerda 2 y 5", "Cuerda 3 y 6"], correct: 0 },
    { question: "¿Qué posición debe tener el dedo índice (1) en el acorde SolDisminuido?", answers: ["Cuerda 2, traste 2", "Cuerda 6, traste 3", "Cuerda 3, traste 3"], correct: 0 },
    { question: "¿Cuáles cuerdas no se tocan en el acorde SolDisminuido?", answers: ["Cuerda 1 y 5", "Cuerda 2 y 4", "Cuerda 3 y 6"], correct: 0 }

  ],
    13: [
    { question: "¿Qué posición debe tener el dedo índice (1) en el acorde DoAumentado?", answers: ["Cuerda 3, traste 1", "Cuerda 2, traste 1", "Cuerda 5, traste 3"], correct: 0 },
    { question: "¿Qué posición debe tener el dedo índice (1) en el acorde DoAumentado?", answers: ["Cuerda 3, traste 1", "Cuerda 2, traste 1", "Cuerda 5, traste 3"], correct: 0 },
    { question: "¿Qué cuerdas se tocan al aire en el acorde DoAumentado?", answers: ["Cuerda 1", "Cuerda 3 y 5", "Cuerda 2 y 4"], correct: 0 },
    { question: "¿Qué cuerda no se toca en el acorde DoAumentado?", answers: ["Cuerda 6", "Cuerda 4", "Cuerda 5"], correct: 0 },
    { question: "¿Qué dedo se coloca en la cuerda 6, traste 1 en el acorde FaAumentado?", answers: ["Dedo 1", "Dedo 2", "Dedo 3"], correct: 0 },
    { question: "¿Qué posición debe tener el dedo índice (1) en el acorde LaAumentado?", answers: ["Cuerda 1, traste 1", "Cuerda 3, traste 2", "Cuerda 2, traste 2"], correct: 0 },
    { question: "¿Cuáles cuerdas se tocan al aire en el acorde LaAumentado?", answers: ["Cuerda 1", "Cuerda 3 y 4", "Cuerda 2 y 5"], correct: 0 },
    { question: "¿Qué posición debe tener el dedo índice (1) en el acorde MiAumentado?", answers: ["Cuerda 3, traste 1", "Cuerda 2, traste 1", "Cuerda 5, traste 2"], correct: 0 },
    { question: "¿Cuáles cuerdas se tocan al aire en el acorde MiAumentado?", answers: ["Cuerda 1", "Cuerda 3 y 5", "Cuerda 2 y 6"], correct: 0 },
    { question: "¿Cuáles cuerdas no se tocan en el acorde ReAumentado?", answers: ["Cuerdas 5 y 6", "Cuerda 3", "Cuerda 4"], correct: 0 },
    { question: "¿Qué posición debe tener el dedo índice (1) en el acorde SiAumentado?", answers: ["Cuerda 4, traste 1", "Cuerda 5, traste 2", "Cuerda 1, traste 3"], correct: 0 },
    { question: "¿Cuáles cuerdas se tocan al aire en el acorde SiAumentado?", answers: ["Cuerda 2 y 3", "Cuerda 5 y 6", "Cuerda 1 y 4"], correct: 0 },
    { question: "¿Qué posición debe tener el dedo índice (1) en el acorde SolAumentado?", answers: ["Cuerda 4, traste 1", "Cuerda 5, traste 2", "Cuerda 6, traste 3"], correct: 0 },
    { question: "¿Qué cuerdas se tocan al aire en el acorde SolAumentado?", answers: ["Cuerda 2 y 3", "Cuerda 1 y 6", "Cuerda 4 y 5"], correct: 0 },
    { question: "¿Qué función tienen los acordes aumentados como SolAumentado?", answers: ["Generan tensión y dirección", "Son acordes menores", "No tienen influencia en la armonía"], correct: 0 },
    { question: "¿Cuál es la diferencia principal entre un acorde aumentado y un acorde mayor?", answers: ["El acorde aumentado sube la quinta medio tono", "El acorde aumentado es menor", "No hay diferencia"], correct: 0 }
  ]
};

function obtenerPreguntasPorLeccion(numLeccion) {
  if (quizzesPorLeccion[numLeccion]) {
    return [...quizzesPorLeccion[numLeccion]];
  }
  console.warn(`No hay preguntas definidas para la lección ${numLeccion}.`);
  return [];
}

let userAnswers = [];
let questions = [];

// Mezcla las preguntas
function shuffleQuestions() {
  for (let i = questions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [questions[i], questions[j]] = [questions[j], questions[i]];
  }
}

// Cargar preguntas en el DOM
function loadQuiz() {
  userAnswers = new Array(questions.length).fill(null);
  const quizContainer = document.getElementById("quiz");
  quizContainer.innerHTML = "";

  questions.forEach((q, index) => {
    const questionEl = document.createElement("div");
    questionEl.classList.add("question");

    // Añadir texto de la pregunta
    const textoPregunta = document.createElement("p");
    textoPregunta.textContent = `${index + 1}. ${q.question}`;
    questionEl.appendChild(textoPregunta);

    // Añadir imagen si existe
    if (q.image) {
      const img = document.createElement("img");
      img.src = q.image;
      img.alt = "Imagen de la pregunta";
      img.style.maxWidth = "100%";
      img.style.margin = "10px 0";
      questionEl.appendChild(img);
    }

    const answersEl = document.createElement("div");
    answersEl.classList.add("answers");

    q.answers.forEach((answer, i) => {
      const answerEl = document.createElement("div");
      answerEl.classList.add("answer");

      let texto = "";
      let imgSrc = null;

      if (typeof answer === "string") {
        texto = answer;
      } else if (typeof answer === "object") {
        texto = answer.text || "";
        imgSrc = answer.image || null;
      }

      const textoEl = document.createElement("span");
      textoEl.textContent = texto;
      answerEl.appendChild(textoEl);

      if (imgSrc) {
        const img = document.createElement("img");
        img.src = imgSrc;
        img.alt = "Imagen respuesta";
        img.style.maxWidth = "175px";
        img.style.display = "block";
        img.style.marginTop = "8px";
        answerEl.appendChild(img);
      }

      answerEl.onclick = () => selectAnswer(index, i, answerEl);
      answersEl.appendChild(answerEl);
    });

    quizContainer.appendChild(questionEl);
    quizContainer.appendChild(answersEl);
  });
}


// Selección de respuesta
function selectAnswer(questionIndex, answerIndex, element) {
  userAnswers[questionIndex] = answerIndex;
  const siblings = element.parentElement.children;
  for (const sibling of siblings) {
    sibling.classList.remove("selected");
  }
  element.classList.add("selected");
}

// Evaluar
function submitQuiz() {
  if (userAnswers.includes(null)) {
    alert("Por favor responde todas las preguntas antes de finalizar.");
    return;
  }

  let score = 0;
  questions.forEach((q, i) => {
    if (userAnswers[i] === q.correct) score++;
  });

  document.querySelectorAll(".answer").forEach(el => {
    el.style.pointerEvents = "none";
  });

  const resultEl = document.getElementById("result");
  const percentage = (score / questions.length) * 100;
  const aprobado = percentage >= 60;

  let textoResultado = `Tu puntuación es: ${score} / ${questions.length}. `;
  textoResultado += aprobado ? "¡Felicidades, aprobaste! 🎉" : "No aprobaste. 😢";
  resultEl.textContent = textoResultado;

  const retryBtn = document.getElementById("retry");
  retryBtn.style.display = "inline-block";

  if (score < questions.length) {
    retryBtn.classList.remove("discreto-flotante");
    retryBtn.classList.add("visible-normal");
  } else {
    retryBtn.classList.remove("visible-normal");
    retryBtn.classList.add("discreto-flotante");
  }

  if (aprobado) {
    window.parent.postMessage({ quizAprobado: true }, "*");
  }
}

// Reiniciar
function restartQuiz() {
  userAnswers.fill(null);
  shuffleQuestions();
  loadQuiz();
  document.getElementById("result").textContent = "";
  document.getElementById("retry").style.display = "none";
  document.querySelectorAll(".answer").forEach(el => {
    el.style.pointerEvents = "auto";
    el.classList.remove("selected");
  });
}

function cargarLeccion(nuevaLeccion) {
  leccion = nuevaLeccion;

  if (quizzesPorLeccion[leccion]) {
    questions = [...quizzesPorLeccion[leccion]];
  } else {
    console.warn(`No hay preguntas definidas para la lección ${leccion}.`);
    questions = [];
  }

  restartQuiz();  // Esta función mezcla, carga y limpia todo para la nueva lección
}

// Obtiene query param leccion y carga quiz
function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

window.onload = () => {
  const leccionParam = parseInt(getQueryParam('leccion'));
  if (!isNaN(leccionParam)) {
    cargarLeccion(leccionParam);
  } else {
    cargarLeccion(1);
  }
};

window.cargarLeccion = cargarLeccion;


let currentQuestion = 0;

