function result() {
  var randomNumberMath = Math.floor(Math.random() * 10 + 1);
  var randomNumber = document.getElementById('random_number');
  var user_input_number = document.getElementById('user_input_number').value;
  var resultat = document.getElementById('resultat');
  var userNumber = document.getElementById('user_number');

  if (user_input_number == "" | user_input_number < 0 | user_input_number > 10 ) {
      resultat.innerHTML = "Entrée un numéro valid !";
      user_input_number.innerHTML = "";
      userNumber. innerHTML = "";
      randomNumber.innerHTML = "";
  }else if (user_input_number > randomNumberMath) {
      resultat.innerHTML = "Vous avez gagner !";
      document.getElementById('user_input_number').value = "";
      userNumber.innerHTML = "Votre numéro est :" + " "+user_input_number;
      randomNumber.innerHTML = "Le numéro de votre rival est :" +" " + randomNumberMath;
  }else {
      resultat.innerHTML = "Vous avez perdu !";
      document.getElementById('user_input_number').value = "";
      userNumber.innerHTML = "Votre numéro est :" + " "+user_input_number;
      randomNumber.innerHTML = "Le numéro de votre rival est :" +" " + randomNumberMath;
  }

}
