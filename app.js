document.getElementById('btn-country1').addEventListener('click', data1);
document.getElementById('btn-country2').addEventListener('click', data2);
document.getElementById('btn-country3').addEventListener('click', data3);
document.getElementById('btn-country4').addEventListener('click', data4);

function data1() {
  document.getElementById("country1");

  country1.textContent = `
    Country: United States of America
    Population: 331.9 million
    President: Joe Biden
    Currency: US Dollar
    `;

    const firstCountry = document.getElementById("country1");

    if (firstCountry.style.display === "none") {
      firstCountry.style.display = "block";
    } else {
      firstCountry.style.display = "none";
    }
}

function data2() {
    document.getElementById("country2");

    document.getElementById("country2");

    country2.textContent = `
    Country: Mexico
    Population: 130.1 million
    President: Andrés Manuel Lopez Obrador
    Currency: Mexican Pesos
    `;

    const secondCountry = document.getElementById("country2");

    if (secondCountry.style.display === "none") {
        secondCountry.style.display = "block";
    } else {
        secondCountry.style.display = "none";
    }
}

function data3() {
    document.getElementById("country3");

    country3.textContent = `
    Country: Indonesia
    Population: 276.4 million
    President: Joko Widodo
    Currency: Indonesian Rupiah
    `;

    const thirdCountry = document.getElementById("country3");

    if (thirdCountry.style.display === "none") {
        thirdCountry.style.display = "block";
    } else {
        thirdCountry.style.display = "none";
    }
}

function data4() {
    document.getElementById("country4");

    country4.textContent = `
    Country: Italy
    Population: 59.07 million
    President: Sergio Mattarella
    Currency: Euros
    `;

    const fourthCountry = document.getElementById("country4");

    if(fourthCountry.style.display === "none") {
        fourthCountry.style.display = "block";
    } else {
        fourthCountry.style.display = "none";
    }
}