function Function() {
    var number = document.form.number1.value
    for (var i = 1; i < 10; i++) {
      document.write("" + number + "*" + i + "=", + parseInt(number) * parseInt(i) +"<br>");
    }
    document.write("");
  }