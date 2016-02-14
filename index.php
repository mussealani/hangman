<!DOCTYPE html>
<html>
  <head>
    <title>Demo with jQuery</title>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
      <meta name="description" content="Demo project with jQuery">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="css/style.css">
  </head>
  <body>
    <header class="container">
      <div class="row">
        <div class="well well-lg">
        <h1>HANGMAN</h1>
        </div><!-- well well-lg -->
      </div><!-- end row -->
    </header>

    <div class="container">
      <div class="row">
        <div id="the-secret" class="equal-height well the-secret col-md-9">
          <h2>GUESS A LETTER</h2>
        </div>
        <div class="equal-height wrong_answer well col-md-3"></div>
      </div>
    </div>

<footer>
    <div class="container">
      <div class="row">
        <div id="alphabet" class="well">

        </div>
      </div>
    </div>
</footer>

  <script src="js/jquery.min.js"></script>
  <script src="js/jquery.matchHeight-min.js"></script>
  <script src="js/main.js"> </script>
  </body>
</html>
