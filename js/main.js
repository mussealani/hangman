jQuery(document).ready(function($) {
  // create list of the alphabet
  var alphabet = [
      'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
      'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
      'U', 'V', 'W', 'X', 'Y', 'Z', 'Ä', 'Ö', 'Å'
  ];

  // append unordered list in #alphabet div
  $('#alphabet').append('<ul class="alpha-holder"></ul>');


  // loop through the alphabet
  for (var i = 0; i < alphabet.length; i++) {
    // wrap every letter in <li> tag
    $('.alpha-holder').append('<li class="well the-letters">' + alphabet[i] + '</li>');
  };


  // set <li> tag width to the widest one
  var widest = 0;
  $('.the-letters').each(function() {

      var width = $(this).outerWidth();
      if (widest < width) {
        widest = width;
      }
  });

    // set width to <li> elements
   $('.the-letters').css({
      width: widest + 'px',
      textAlign: 'center',
   });



});// end jQuery




