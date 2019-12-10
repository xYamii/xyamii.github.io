$("#klik").on("click", displayNumer);
let digits = $("#digits").children();
function displayNumer() {
  let number = $("#cyfra").val();
  number = parseInt(number);
  number = number.toString(2);
  while (number.length <= 6) {
    number = "0" + number;
  }
  for (let z = 0; z <= 6; z++) {
    if ($(digits[z]).hasClass("light-on")) {
      if (number[parseInt(digits[z].id[1]) - 1] == "1") {
        continue;
      } else {
        $(digits[z]).removeClass("light-on");
      }
    } else {
      if (number[parseInt(digits[z].id[1]) - 1] == "1") {
        $(digits[z]).addClass("light-on");
      } else {
        continue;
      }
    }
  }
}
