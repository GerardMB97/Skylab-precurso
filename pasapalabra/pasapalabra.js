
let questions = [{letter: 'A', questions : ['Instrumento o máquina que sirve para atacar o defenderse.', 'Instrumento usado para levantar las tapas de ciertas botellas.'], answers : ['arma', 'abridor' ], status: 0 },
                {letter: 'B', questions : ['Que es violento, cruel, salvaje.', 'Entrar en el agua para lavarse, para nadar o jugar.'], answers: ['brutal', 'bañarse'], status: 0 },
                {letter: 'C', questions : ['Ropa de abrigo que cubre desde los hombros a la cintura.', 'Emitir con la voz sonidos melodiosos.'], answers: ['cazadora', 'cantar'], status: 0 },
                {letter: 'D', questions : ['Que tiene poca fuerza, poco vigor o poca resistencia.', 'Conversación entre dos o más personas.'], answers: ['débil', 'diálogo'], status: 0 },
                {letter: 'E', questions : ['Escoger algo o a alguien.', 'Lugar que se usa para viviendas, oficinas, colegios, etc.'], answers: ['elegir', 'edificio'], status: 0 },
                {letter: 'F', questions : ['Tiempo que viene después.', 'Huir alguien de un lugar.'], answers: ['futuro', 'fugarse'], status: 0 },
                {letter: 'G', questions : ['En forma de granos.', 'Máquina para levantar objetos pesados y moverlos de un lugar a otro.'], answers: ['granulado', 'grúa'], status: 0 },
                {letter: 'H', questions : ['Sumergir algo o alguien bajo el agua', 'Limpieza del cuerpo y de los utensilios, viviendas, instalaciones, etc.'], answers: ['hundir', 'higiene'], status: 0 },
                {letter: 'I', questions : ['Esfuerzo y atención que se pone en algo.', 'Territorio que está rodeado de agua por todas partes.'], answers: ['interés', 'isla'], status: 0 },
                {letter: 'J', questions : ['Persona que juega.', 'Objeto que sirve para que jueguen los niños.'], answers: ['jugador', 'juguete'], status: 0 },
                {letter: 'K', questions : ['Arte marcial de origen japonés que consiste en combatir con manos, puños, pies...', 'Medida para pesar (equivale a mil gramos).'], answers: ['karate', 'kilo'], status: 0 },
                {letter: 'L', questions : ['Envase de metal.', 'Que se mueve o actúa con rapidez, agilidad o facilidad.'], answers: ['lata', 'ligero'], status: 0},
                {letter: 'M', questions : ['Cada una de las dos partes iguales en que se divide algo.', 'Fruta de piel fina, amarilla, verde o roja, de carne blanca y dura.'], answers: ['mitad', 'manzana'], status: 0 },
                {letter: 'N', questions : ['Ningún día o en ningún tiempo.', 'De color totalmente oscuro.'], answers: ['nunca', 'negro'], status: 0},
                {letter: 'O', questions : ['Instrumento musical de viento construido con madera.', 'Animal doméstico que tiene el cuerpo cubierto de lana.'], answers: ['oboe', 'oveja'], status: 0 },
                {letter: 'P', questions : ['Andar por placer o para hacer ejercicio.', 'Tienda en la que se venden pájaros.'], answers: ['pasear', 'pajareria'], status: 0 },
                {letter: 'Q', questions : ['Indica duda o la posibilidad de algo que se expresa.', 'Alimento sólido preparado con leche.'], answers: ['quizás', 'queso'], status: 0 },
                {letter: 'R', questions : ['Pocas palabras que  cuentan una historia más larga', 'Calambre muscular'], answers: ['resumen', 'rampa'], status: 0 },
                {letter: 'S', questions : ['Ir o estar detrás o después de alguien o algo.', 'Calzado que no tapa todo el pie.'], answers: ['seguir', 'sandalia'], status: 0 },
                {letter: 'T', questions : ['Parte de una habitación que está arriba.', 'Objeto, signo, etc., al que se atribuye virtudes sobrenaturales, poderes mágicos, suerte etc.'], answers: ['techo', 'talismán'], status: 0 },
                {letter: 'U', questions : ['Instrumento musical de cuerda. Es parecido a la guitarra, pero más pequeño y con 4 cuerdas.', 'Animal fantástico con forma de caballo y un cuerno en la frente.'], answers: ['ukelele', 'unicornio'], status: 0 },
                {letter: 'V', questions : ['Tendencia o inclinación a hacer destrozos o armar escándalo.', 'Que es muy rápido.'], answers: ['vandalismo', 'veloz'], status: 0 },
                {letter: 'W', questions : ['Deporte de competición que se practica en una piscina entre dos equipos de siete nadadores.', 'Película del oeste americano, en la época en la que los americanos conquistaban el territorio a los indios.'], answers: ['waterpolo', 'western'], status: 0 },
                {letter: 'X', questions : ['Odio a los extranjeros o a las cosas de otros países', 'Instrumento musical formado por listones de madera o metal de diferentes tamaños que suenan cuando los golpeas.'], answers: ['xenofobia', 'xilófono'], status: 0 },
                {letter: 'Y', questions : ['Lugar en el que hay gran cantidad de un mineral, una roca o restos de antiguas culturas.', 'Persona o cosa de Estados Unidos'], answers: ['yacimiento', 'yanqui'], status: 0 },
                {letter : 'Z', questions : ['Piedra preciosa de color azul.', 'Planta con flores blancas y moradas. Tiene una raíz de color naranja que es comestible'], answers: ['zafiro', 'zanahoria'], status: 0 }]
                

function validateUsername(username){
    let regex = /^[\p{Letter}\s]{2,}$/gu
   return username != null && regex.test(username)? true : false;
}

function greetUser(username){
    return `Bienvenido ${username}! estás preparado para empezar a jugar?`
}

function setRandomQuestions(){
    for (let question in questions){
        questions[question].questionNumber = Math.round(Math.random())
    }
}

let answer
let i = 0

function askQuestion(){
    if (i >= questions.length){
        i = 0
    }
    if(questions[i].status === 0){
        answer = prompt(`Con la ${questions[i].letter}: ${questions[i].questions[questions[i].questionNumber]}`)
        if (answer != null){
            answer = answer.toLocaleLowerCase()
        }
    }else{
        i++
        askQuestion()
    }
}


let end = false

function checkAnswer(){
    let rightAnswer = questions[i].answers[questions[i].questionNumber]
    switch (answer){
        case 'end':
            end = true
            break

        case 'pasapalabra':
            break
            
        case rightAnswer:
            questions[i].status = 1
            confirm("Correcto!")
            break

        default:
            questions[i].status = -1
            confirm(`Incorrecto, la respuesta correcta era ${rightAnswer}`)
            break
    }
}

let rightAnswers
let wrongAnswers

function displayResults(){

    rightAnswers = questions.filter(a => a.status === 1)
    wrongAnswers = questions.filter(a => a.status === -1)

    return(`Has acertado ${rightAnswers.length} preguntas y fallado ${wrongAnswers.length}`)
}
let ranking = [];

function updateRanking(username, rightAnswersArray){
    let user = {
        username ,
        rightAnswers: rightAnswersArray
    }

    ranking.push(user)
    ranking.sort((a, b) => (a.rightAnswers > b.rightAnswers) ? -1 : 1);

}

function displayRanking(){
    for (let players in ranking){
        console.log(`${ranking[players].username} => ${ranking[players].rightAnswers} aciertos. \n`)
    }
}

function playAgain(){
   let keepPlaying = confirm('Quieres jugar otra partida?')

   return keepPlaying? true : false;
}

let username1;
function pasapalabra(){
    console.clear()
    i = 0
    let j = 0
    do{
        if (j > 0){
            alert('Nombre inválido.')
        }
         username1 = prompt('Introduze tu nombre porfavor');
        j++
    }while(validateUsername(username1) === false)

    greetUser(username)
        
    setRandomQuestions()

    do{
       
        askQuestion();
        checkAnswer();
        i++
    }while (questions.some(a => a.status === 0 )&& !end)

    confirm(displayResults())
    updateRanking(username1, rightAnswers.length);
    displayRanking()
    if(playAgain()){
        for(let question in questions){
            questions[question].status = 0
        }
        pasapalabra()
    }
}

exports.validateUsername = validateUsername
exports.greetUser = greetUser