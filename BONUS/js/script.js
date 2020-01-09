var i = 1;
while (i <= 100) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log('FizzBuzz');
    document.getElementById("lista-numeri").innerHTML += "<li>" + "FizzBuzz" + "</li>";

  } else if (i % 3 == 0) {
    console.log('Fizz');
    document.getElementById("lista-numeri").innerHTML += "<li>" + "Fizz" + "</li>";

  } else if (i % 5 == 0) {
    console.log('Buzz');
    document.getElementById("lista-numeri").innerHTML += "<li>" + "Buzz" + "</li>";

  } else {
    console.log(i);
    document.getElementById("lista-numeri").innerHTML += "<li>" + i + "</li>";
  }
  i++;

}
