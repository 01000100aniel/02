// Función para mostrar la puntuación final
function mostrarPuntuacionFinal () {
    // Cambiar color de fondo a amarillo (3)
    scene.setBackgroundColor(3)
    game.showLongText("Fin del juego. Tu puntuación final es: " + puntos + " puntos.", DialogLayout.Center)
}
// Función para generar una pregunta aleatoria
function generarPregunta () {
    if (oportunidades > 0) {
        indice = Math.floor(Math.random() * preguntas.length)
        pregunta = preguntas[indice]
        respuestaCorrecta = respuestas[indice]
        respuestaUsuario = game.askForString(pregunta)
        // Comprobar si la respuesta del usuario es correcta
        if (respuestaUsuario && respuestaUsuario.toLowerCase() == respuestaCorrecta) {
            puntos += 2
            ronda += 1
            // Cambiar color de fondo a verde (7)
            scene.setBackgroundColor(7)
            game.showLongText("¡Respuesta correcta! Ahora tienes " + puntos + " puntos.", DialogLayout.Center)
            if (ronda <= preguntas.length) {
                game.showLongText("¡Pasemos a la siguiente ronda!", DialogLayout.Center)
                generarPregunta()
            } else {
                mostrarPuntuacionFinal()
            }
        } else {
            oportunidades += -1
            if (oportunidades == 0) {
                mostrarPuntuacionFinal()
            } else {
                // Cambiar color de fondo a rojo (2)
                scene.setBackgroundColor(2)
                game.showLongText("Respuesta incorrecta. Te quedan " + oportunidades + " oportunidades. Inténtalo de nuevo.", DialogLayout.Center)
                generarPregunta()
            }
        }
    } else {
        mostrarPuntuacionFinal()
    }
}
let respuestaUsuario = ""
let respuestaCorrecta = ""
let pregunta = ""
let indice = 0
let puntos = 0
let oportunidades = 0
let ronda = 0
let respuestas: string[] = []
let preguntas: string[] = []
// Lista de preguntas y respuestas
preguntas = [
"¿Cuál es el color del cielo en un día despejado?",
"¿Qué animal dice 'mu'?",
"¿Cuánto es 2 + 2?",
"¿Cuántas patas tiene un perro?",
"¿Qué día sigue al jueves?",
"¿Cuántas letras tiene la palabra 'casa'?",
"¿Cuál es el mes siguiente a diciembre?",
"¿Cuál es la capital de Francia?",
"¿Cuál es el opuesto de 'caliente'?",
"¿Cuál es el resultado de 10 - 5?",
"¿Cómo se llama el resultado de multiplicar dos números?",
"¿Qué animal vive en el agua y en la tierra?",
"¿Qué color tiene una manzana madura?",
"¿Cómo se llama la persona que maneja un avión?",
"¿Cuál es el día anterior a domingo?",
"¿Qué elemento químico tiene el símbolo 'H'?",
"¿Cómo se llama el lugar donde viven los peces?",
"¿Cuántos lados tiene un cuadrado?",
"¿Qué animal tiene una joroba en la espalda?",
"¿Cuál es el resultado de dividir 10 entre 2?",
"¿Qué es más grande, una pulga o un elefante?",
"¿Cuál es el color del sol?",
"¿Cuál es el opuesto de 'día'?",
"¿Cuál es el día que sigue al sábado?",
"¿Qué instrumento se utiliza para medir el tiempo?",
"¿Cuál es la capital de España?",
"¿Qué animal es conocido por ser el mejor amigo del hombre?",
"¿Cómo se llama la fruta amarilla con cáscara?",
"¿Cuál es el resultado de sumar 1 + 1?",
"¿Qué es lo que siempre sube pero nunca baja?"
]
respuestas = [
"azul",
"vaca",
"4",
"4",
"viernes",
"4",
"enero",
"parís",
"frío",
"5",
"producto",
"rana",
"rojo",
"piloto",
"sábado",
"hidrógeno",
"acuario",
"4",
"camello",
"5",
"elefante",
"amarillo",
"noche",
"domingo",
"reloj",
"madrid",
"perro",
"plátano",
"2",
"edad"
]
ronda = 1
oportunidades = 3
// Llamar a la función para generar la primera pregunta
generarPregunta()
