var plain = 'abcdefghijklmnopqrstuvwxyz'.split('');
var cipher = 'nopqrstuvwxyzabcdefghijklm'.split('');

//Quick testing:
// plain.indexOf('c'); //cat = 2, 0, 19
// var letter_c = 'c';
// plain.indexOf(letter_c); //=> 2



var index_word = function(word){
    var word_to_array = word.split('');

    return word_to_array.map(function(elem) { //using map returns the array of indexes
    // return word_to_array.forEach(function(elem) { //hmm, what is forEach returning?
        // console.log(elem); //works
        // console.log(plain); //works
        // console.log(plain.indexOf(elem)); //works
        // return plain.indexOf(elem);
        // var ind = (plain.indexOf(elem) + 13) % 26; //works
        var ind = plain.indexOf(elem);
        // return plain[ind]; // => cats
        return cipher[ind];
    });
}; //end index_word

// console.log(index_word('hello').join('')); //=> 'uryyb'
index_word('hello').join(''); //=> 'uryyb'



