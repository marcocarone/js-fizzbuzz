

for ( var i = 1; i <= 100; i++) {

  if (i % 3 == 0 && i % 5 == 0) {
      console.log('FizzBuzz');
      // i = "FizzBuzz";
  } else if (i % 3 == 0) {
      console.log('Fizz');
      // i = "Fizz";
  }
  else if (i % 5 == 0) {
      console.log('Buzz');
      // i = "Buzz";
  }  else {
    console.log(i);
// document.getElementById("lista-numeri").innerHTML += "<li>" + i + "</li>";
  }


    }
