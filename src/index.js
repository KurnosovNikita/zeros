module.exports = function getZerosCount(number) {
    var result = 0;
    while (number >= 5){
        number = ~~(number / 5);
        result = result + number;
    }
    return result;
  // your implementation
}
