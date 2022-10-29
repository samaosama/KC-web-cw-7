function bmi(weight = 40, height = 1.4) {
  let result = weight / (height * height);
  return result;
}
console.log(bmi());

function Status(BodyMass) {
  if (BodyMass < 18.5) {
    return "You are underweight";
  } else if (BodyMass >= 18.5 && BodyMass < 25) {
    return "You have a healthy weight ";
  } else {
    return "You are overweight";
  }
}

function calculate() {
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let bmi_value = bmi(weight, height);
  let desc = Status(bmi_value);
  let box = document.getElementById("result");
  box.innerText = bmi_value + "==" + desc;
}
