const form = document.getElementById('form');

form.addEventListener("submit", function(event){
    event.preventDefault();

    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    console.log(height)

    const bmi = (weight / (height * height)).toFixed(2);

    const value = document.getElementById('value');
    let description = '';

    document.getElementById('infos').classList.remove('hidden');

    if (bmi <18.5){
        description = 'Cuidado você está abaixo do peso!'
    }else if(bmi >=18.5 && bmi <=25) {
        description = 'Você está no peso ideal <3';
    }else if(bmi > 25 && bmi <=30) {
        description = 'Você está com sobrepeso x-x';
    }else if(bmi > 30 && bmi <=35) {
        description = 'Cuidado você está com obesidade moderada!!!';
    }else if(bmi > 35 && bmi <=40) {
        description = 'Comece a cuidar da sua saúde!!!';
    }else {
        description = 'Se ame mais, por favor <3';
    }

    value.textContent = bmi.replace('.', ',');

    document.getElementById('description').textContent = description;

});