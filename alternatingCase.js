/**
 * This method alternates each letter to upper or lower case
 * @returns String
 */
String.prototype.toAlternatingCase = function () {
    return this.split('').map(letter => letter.toUpperCase() == letter ? letter.toLowerCase() : letter.toUpperCase()).join('')
  }