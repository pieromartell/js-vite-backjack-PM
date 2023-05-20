import _ from 'underscore'

/**
 * Esta funcion crear un nuevo deck
 * @param {array<String>} tiposDeCarta - Ejemplo: ['C','D','H','S'];
 * @param {Array} Tiposespeciales - Ejemplo: ['A','J','Q','K'];
 * @returns {array<String>}  regresa un nuevo deck
 */
export const crearDeck = (tiposDeCarta ,Tiposespeciales) => {

    if(!tiposDeCarta ||tiposDeCarta.length  === 0 ) throw new Error('Tipo de carta es obligatorio como un arreglo de string')
    if(!Tiposespeciales ||Tiposespeciales.length  === 0 ) throw new Error('Tipo de carta especial es obligatorio como un arreglo de string')

    let deck = [];
    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of Tiposespeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    return deck;
}
// export default crearDeck