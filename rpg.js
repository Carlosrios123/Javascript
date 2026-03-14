let jugador = {
    nombre: "Carlos",
    vida: 100,
    fuerza: 20,
    nivel: 1
}

// Función para atacar
function atacar(jugador) {
    console.log(jugador.nombre + " ataca con fuerza de " + jugador.fuerza)
}

// Función para recibir daño
function recibirDanio(jugador, danio) {
    jugador.vida = jugador.vida - danio
    console.log(jugador.nombre + " recibió " + danio + " de daño")
}

// Función para subir nivel
function subirNivel(jugador) {
    jugador.nivel = jugador.nivel + 1
    jugador.fuerza = jugador.fuerza + 5
    console.log(jugador.nombre + " subió al nivel " + jugador.nivel)
}

// Función para mostrar estado del jugador
function mostrarEstado(jugador) {
    console.log("----- Estado del jugador -----")
    console.log("Nombre:", jugador.nombre)
    console.log("Vida:", jugador.vida)
    console.log("Fuerza:", jugador.fuerza)
    console.log("Nivel:", jugador.nivel)
}

// Simulación del juego
atacar(jugador)
recibirDanio(jugador, 30)
subirNivel(jugador)
mostrarEstado(jugador)