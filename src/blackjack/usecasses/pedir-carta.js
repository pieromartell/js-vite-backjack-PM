/**
 * Esta funcion solicita una carta del array Deck
 * @param {Array<String>} deck -  Es un Array String
 * @returns {String} - Retorna un valor string, el cual es la carta
 */

export const pedirCarta = (deck) => {
    if (!deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta
}