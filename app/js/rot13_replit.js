var plain = 'abcdefghijklmnopqrstuvwxyz'.split('');
var cipher = 'nopqrstuvwxyzabcdefghijklm'.split('');
// plain.indexOf('c'); //cat = 2, 0, 19
// var letter_c = 'c';
// plain.indexOf(letter_c); //=> 2



var index_word = function(word){
    // var word_index = [];
    var word_to_array = word.split('');

    return word_to_array.map(function(elem) { //using map returns the array of indexes
    // return word_to_array.forEach(function(elem) { //what is forEach returning?
        // console.log(elem); //works
        // console.log(plain); //works
        // console.log(plain.indexOf(elem)); //works
        // return plain.indexOf(elem);
        // var ind = (plain.indexOf(elem) + 13) % 26; //works
        var ind = plain.indexOf(elem);
        // return plain[ind]; // => cats
        return cipher[ind];
    });
    // return word_to_array;

}; //end index_word

// index_word('hello').join(''); //=> 'uryyb'
console.log(index_word('hello').join('')); //=> 'uryyb'



// var test_word = 'dogs'.split('');

// test_word.forEach(function(elem) {
//         // console.log(elem);
//         return plain.indexOf(elem);
// });

