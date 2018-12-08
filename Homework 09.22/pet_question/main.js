var name = prompt("Введите свое имя", "");
while (name == "null" || name == '') {
  var name = prompt(
    "Вы все еще не ввели свое имя, введите его чтобы продолжить",
    ""
  );
}
var age = prompt("Введите свой возраст", "");
while (age == "null" || age == '') {
  var age = prompt(
    "Вы все еще не ввели свой возраст, введите его чтобы продолжить",
    ""
  );
}
if (confirm("Есть ли у вас питомец?")) {
  var petName = prompt("Введите имя питомца", "");
  while (petName == "null" || petName == '') {
    var petName = prompt(
      "Вы все еще не ввели имя питомца, введите его чтобы продолжить",
      ""
    );
  }
} else {
  confirm("не грустно ли жить без питомца");
}
