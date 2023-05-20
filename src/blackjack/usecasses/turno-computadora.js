// turno de la computadora
import { crearCartaHTML } from "./crear-carta-html";
import { pedirCarta } from "./pedir-carta";
import { valorCarta } from "./valor-carta";


/**
 * Turno computadora
 * @param {Numbre} puntosMinimos - Puntos minimos que la computadora necessita para ganar
 * @param {HTMLElement} puntosHTML - Elemento para mostrar los puntos 
 * @param {HTMLElement} divCartasComputadora - Elemento HTML para mostrar las cartas
 * @param {Array<String>} deck
 */
export const turnoComputadora = ( puntosMinimos,puntosHTML, divCartasComputadora,deck = [] ) => {

    if(!puntosMinimos) throw new Error('Puntos minimos son necesarios')
    if(!puntosHTML) throw new Error('El argumento puntosHTML es necesario')
    let puntosComputadora = 0
    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML[1].innerText = puntosComputadora;
        
        // <img class="carta" src="assets/cartas/2C.png">
        const imgCarta = crearCartaHTML(carta)
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}
