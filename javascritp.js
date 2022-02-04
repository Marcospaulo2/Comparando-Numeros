function comparandoNumenros(num1, num2) {
    if (!num1 || !num2) return ' Defina dois Numeros!';
    const primeirafrase = criaprimeirafrase(num1, num2);
    const segundaFrase = criasegundafrase(num1, num2);

    return `${primeirafrase} ${segundaFrase}`
}
function criaprimeirafrase(num1, num2) {
    let saoiguais = '';

    if (num1 !== num2) {
        saoiguais = 'não';
    }
    return `Os números ${num1} e ${num2} ${saoiguais} são iguais.`
};
function criasegundafrase(num1, num2) {
    const soma = num1 + num2;
    let resultado10 = 'menor';
    let resultado20 = 'menor';
    let comparara10 = soma > 10;
    let comparara20 = soma > 20;

    if (comparara10) {
        resultado10 = 'maior'
    }
    if (comparara20) {
        resultado20 = 'maior'

    }
    return `Sua soma e ${soma}, que e ${resultado10} que 10 e ${resultado20} que 20`

}
console.log(comparandoNumenros(1, 10));