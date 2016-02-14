jQuery(document).ready(function($) {
  // create list of the alphabet
  var alphabet = [
      'A', 'B', 'C', 'D', 'E', 'É',  'F', 'G', 'H', 'I', 'J',
      'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
      'U', 'V', 'W', 'X', 'Y', 'Z', 'Ä', 'Ö', 'Å'
  ];

  // game's words list
  var word_list = [
    'wordpress', 'drupal', 'javascript', 'sverige', 'malmö', 'medieinstitutet', 'pågatåg',
    'Helsingborg', 'Danmark', 'Köpenhamn', 'Apolo', 'Öresundsbron', 'Maja', 'Volvo',
    'Absolut', 'Damsugare', 'Körkort', 'Öland', 'Torso', 'Peberholm', 'Stockholm', 'Wikipedia',
    'Amsterdam', 'Bordeaux', 'Musée'
  ];

  // append unordered list in #alphabet div
  $('#alphabet').append('<ul class="alpha-holder"></ul>');


  // loop through the alphabet and display it as unordered list
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

  // assign the secret word to a variable and convert the word to upper case
  var secret_word = the_random_word(word_list).toUpperCase();

  // loop through secret word and display every letter by itself
  for (var i = 0; i < secret_word.length; i++) {
    $('.secret_wrapper').append('<li class="well secret_letters the-letters">' + secret_word[i] + '</li>');
  };

  // display question marks instead of secret letters
  var secret_letters = $('.secret_letters');
  var question_mark = secret_letters.html('?');





  // create empty array to hold secret word as an array
  var arr = [];

    for (var i = 0; i < secret_word.length; i++) {
       arr.push(secret_word[i]);
  }

/**
  * defince indx array to check if user has gussed right letter
  * this array will contain either 0 or -1. The 0 reprecent the
  * position of the right letter and -1 means there is no letter matches.
 */
  var indx = [];

  /**
   * defince incorrect guesses variable, this variable will hold
   * the number that reprecet how many incorrect guesses allowed.
   */
  var wrong_answer = 6;

  // display how many chances remain
  $('.wrong_answer').append('<div class="counter">' +
                          '<span>You have: </span>' +
                    '<h1>' + wrong_answer + '</h1>' +
                        '<span>chances left!</span>' +
                    '</dev>');

console.log(arr);


  /**
   * get the alphabet and assign on click event handler to it
   */
  $('#alphabet .the-letters').on('click', function(event) {
    event.preventDefault();

    // get the guessed letter that a user clicked on
    var guessed_letter = $(this).html();

    // get guessed letter position in the secret word (-1 or 0)
    for (var i = 0; i < arr.length; i++) {
     // assign the results of the guessed letter to pos variable
     // this variable will hold 0 if the user guessed right letter
     // and will hold -1 if the user guessed wrong letter
     var pos = arr[i].indexOf(guessed_letter);
     // push the answer to indx array
     indx.push(pos);
    };


    for (var i = 0; i < secret_letters.length; i++) {
      //$(secret_letters[i]).toggleClass(indx[i]);
      $(secret_letters[i]).addClass(' ' + indx[i]);
    };

    // display the right answer and style the answer container
    $('.0').html(guessed_letter).css({
      backgroundColor: '#e3e3e3',
      color: '#888',
      borderColor: '#bbb',
      fontWeight: '900',
      fontSize: '2rem',
    });

    // remove the class "0" to hold the right answer in right place
    $(secret_letters).removeClass('0');

    if ($.inArray(guessed_letter, arr) == -1) {
      wrong_answer--;
      $(this).off().css({
        backgroundColor: '#f00',
        color: '#fff',
      });

    }else{
      $(this).off().css({
        backgroundColor: '#47B40F',
        color: '#eee',
      });
    }


    console.log(indx);
    // clear indx array
     indx = [];

    // remove incorrect answer counter div to update it at every click
    $('.wrong_answer .counter').remove();

      // check if user hasn't any chance left
      if (wrong_answer == 0) {
        // hide secret word holders
        $('.secret_wrapper').hide(300);
        // display message to inform the user that he/she couldn't win the game
        $('.the-secret').append('<h3>Unfortunately you could not win the game!</h3>');
        // append reset button
        $('.the-secret').append('<button id="reload" class="btn btn-danger" type="button">Try Again!</button>');
        // reload browser to reset the game
        $('#reload').on('click', function(event) {
          event.preventDefault();
          location.reload(true);
        });
        // disable alphabet click
        $('#alphabet .the-letters').off();

        /**
         * check if the user won the game, this function count
         * question marks that appear instead of the right letter,
         * it return undefined if the user has guessed the right word
         */
      }else if (count_question_mark(secret_letters) == undefined) {
        // hide secret word holders
        $('.secret_wrapper').hide(300);
        // display message to inform the user that he/she won the game
        $('.the-secret').append('<h3>Congratulation you won!<br>The right word was <span class="the_secret">' + secret_word + '</span></h3>');
        // append reset button
        $('.the-secret').append('<button id="success" class="btn btn-success" type="button">Click here to start again!</button>');
        // reload browser to reset the game
        $('#success').on('click', function(event) {
          event.preventDefault();
          location.reload(true);
        });
        // disable alphabet click
        $('#alphabet .the-letters').off();
      }
    // reappend counter div to update incorrect counter
      $('.wrong_answer').append('<div class="counter">' +
                          '<span>You have: </span>' +
                    '<h1>' + wrong_answer + '</h1>' +
                        '<span>chances left!</span>' +
                    '</dev>');



    // style counter No.
    switch (wrong_answer) {

      case 5:
        $('.counter h1').css({ color: '#4C1EAB' });
        break;

      case 4:
        $('.counter h1').css({ color: '#863892' });
        break;

      case 3:
        $('.counter h1').css({ color: '#cADC15' });
        break;

      case 2:
        $('.counter h1').css({ color: '#FA6A15' });
        break;

      case 1:
        $('.counter h1').css({ color: '#FF4000' });
        break;

      case 0:
        $('.counter h1').css({ color: '#FF0000' });
        break;

      default:
      $('.counter h1').css({
        color: 'rgb(71, 180, 15)',
      });
      break;
    }
  });



  function count_question_mark(val) {
  var q_holder = [];
  for (var i = 0; i < val.length; i++) {
    if (val[i].innerHTML == '?') {
      q_holder.push(val[i]);
      return q_holder.length;
    }
  };
}



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


   var highest = 0;
   $('.equal-height').each(function() {
     var height = $(this).outerHeight();
     if (highest < height) {
      highest = height;
     }
   });

   $('.equal-height').css({
    height: highest + 'px',
    textAlign: 'center',
   });

});// end jQuery




