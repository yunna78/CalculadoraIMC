const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const weight = document.getElementById("weight").value;
  const height = document.getElementById("height").value;
  const img = document.getElementById("img");

  const bmi = (weight / (height * height)).toFixed(2);

  const value = document.getElementById("value");
  let description = "";

  document.getElementById("infos").classList.remove("hidden");

  if (bmi < 18.5) {
    description = "Cuidado você está abaixo do peso!";
    img.createElement(img, (src = "gumbleFiapo.jpg"));
  } else if (bmi >= 18.5 && bmi <= 25) {
    description = "Você está no peso ideal <3";
    img.createElement(img, (src = "gumbleMaromba.jpg"));
  } else if (bmi > 25 && bmi <= 30) {
    description = "Você está com sobrepeso x-x";
    img.createElement(img, (src = "gumbleGordo.png"));
  } else if (bmi > 30 && bmi <= 35) {
    description = "Cuidado você está com obesidade moderada!!!";
    img.createElement(img, (src = "gumbleGordo.png"));
  } else if (bmi > 35 && bmi <= 40) {
    description = "Comece a cuidar da sua saúde!!!";
    img.createElement(img, (src = "gumbleGordo.png"));
  } else {
    description = "Se ame mais, por favor <3";
    img.createElement(img, (src = "gumbleGordo.png"));
  }

  value.textContent = bmi.replace(".", ",");

  document.getElementById("description").textContent = description;
});
