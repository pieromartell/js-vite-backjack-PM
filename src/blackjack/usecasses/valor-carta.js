/**
 * Esta funcion determina el valor de una carta
 * @param {String} carta - La carta puede ser 10S, 8T
 * @returns {Number} Se retorna el valor de la carta, la cual un numero,
 */


export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}