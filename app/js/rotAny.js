var alphabet, coded, i, ch, index;
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var message = "hi u"

  var encode = function (message) {
    var coded = "";
    var key = 7;
    var i = 0;
    while (i < message.length) {
      //picks out a character in the message
            ch = message.charAt(i);
        //finds that character in alphabet and takes its index
            index = alphabet.indexOf(ch);
          //add key value to that index and then find that place in the alphabet
             if (index === -1){
                 codeIndex = -1;
             }
             else if ((index + key) > 25){
                codeIndex = (((index+key)%25)-1)
             }
             else {
              codeIndex = index + key;
             }
            coded = coded + alphabet.charAt(codeIndex);
            i++;
    }
    return coded;
};

console.log(encode(message));
