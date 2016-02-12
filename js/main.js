jQuery(document).ready(function($) {
  // create list of the alphabet
  var alphabet = [
      'A', 'B', 'C', 'D', 'E', 'É',  'F', 'G', 'H', 'I', 'J',
      'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
      'U', 'V', 'W', 'X', 'Y', 'Z', 'Ä', 'Ö', 'Å'
  ];

  // game's word list
  var word_list = [
    'Impertinent', 'Hegemoni', 'Verserad', 'Kompilera', 'Perfid', 'Renegat', 'Karessera',
    'Extemporera', 'Transversal', 'Epistomologi', 'Apologi', 'Juvenil', 'Flegmatisk', 'Preciös',
    'Elyseisk', 'Perplex', 'Truism', 'Panegyrik', 'Fatigera', 'Amsaga', 'Kapriciös', 'Paternalism',
    'Notabilitet', 'Afasi', 'Marodera', 'Kommuniké', 'Arrivist'
  ];

  // append unordered list in #alphabet div
  $('#alphabet').append('<ul class="alpha-holder"></ul>');


  // loop through the alphabet
  for (var i = 0; i < alphabet.length; i++) {
    // wrap every letter in <li> tag
    $('.alpha-holder').append('<li class="well the-letters">' + alphabet[i] + '</li>');
  };




   // choose a random word from word_list
  function the_random_word (the_word) {
     var i = Math.floor(Math.random() * the_word.length);
     return the_word[i];
  }

  // wrap secret letter in unordered list
  $('.the-secret').append('<ul class="secret_wrapper"></ul>');

  // assign the secret word to a variable
  var secret_word = the_random_word(word_list).toUpperCase();

  // loop through secret word and display every letter by itself
  for (var i = 0; i < secret_word.length; i++) {
    $('.secret_wrapper').append('<li class="well secret_letters the-letters">' + secret_word[i] + '</li>');
  };

  // display question marks instead of secret letters
  var secret_letters = $('.secret_letters');
  secret_letters.html('?')


$('#alphabet .the-letters').on('click', function(event) {
  event.preventDefault();

    // get the guessed letter
    var guessed_letter = $(this).html();
    console.log(secret_word);
      if (secret_word.indexOf(guessed_letter) !== -1) {
        var i = secret_word.indexOf(guessed_letter);
        var arr = $.makeArray(secret_word);
        if($.inArray(secret_letters[i], arr)) {

            secret_letters[i] = $(secret_letters[i]).html(guessed_letter);
        }


        console.log(secret_letters[i]);
        console.log(guessed_letter);
      }else {
        console.log('NOT FOUND');
      }

});

  // set <li> tag width to the widest one
  var widest = 0;
  $('.the-letters').each(function() {

      var width = $(this).outerWidth();
      if (widest < width) {
        widest = width;
      }
  });


    // set width to the widest <li> elements
   $('.the-letters').css({
      width: widest + 'px',
      textAlign: 'center',
   });



console.log(the_random_word(word_list));



});// end jQuery




