document.getElementById('btn-country1').addEventListener('click', data1);
document.getElementById('btn-country2').addEventListener('click', data2);
document.getElementById('btn-country3').addEventListener('click', data3);
document.getElementById('btn-country4').addEventListener('click', data4);
document.getElementById('btn-country5').addEventListener('click', data5);

function data1() {
    country1.innerHTML = `
    <img src="./img/USA-flag.png" alt="USA">
    <p>Country: United States of America</p>
    <p>Continent: North America</p>
    <p>Population: 331.9 million</p>
    <p>President: Joe Biden</p> 
    <p>Currency: US Dollar</p>
    `;

    const firstCountry = document.getElementById("country1");
    const flagOne = document.getElementById("USA-flag");

    if (firstCountry.style.display === "block") {
      firstCountry.style.display = "none";
    } else {
      firstCountry.style.display = "block";
    }
}

function data2() {
    country2.innerHTML = `
    <img src="./img/Mexico-flag.png" alt="Mexico">
    <p>Country: Mexico<p>
    <p>Continent: North America</p>
    <p>Population: 130.1 million<p>
    <p>President: Andrés Manuel Lopez Obrador<p>
    <p>Currency: Mexican Pesos<p>
    `;

    const secondCountry = document.getElementById("country2");

    if (secondCountry.style.display === "block") {
        secondCountry.style.display = "none";
    } else {
        secondCountry.style.display = "block";
    }
}

function data3() {
    country3.innerHTML = `
    <img src="./img/Indonesian-flag.png" alt="Indonesia">
    <p>Country: Indonesia</p>
    <p>Continent: Asia</p>
    <p>Population: 276.4 million</p>
    <p>President: Joko Widodo</p>
    <p>Currency: Indonesian Rupiah</p>
    `;

    const thirdCountry = document.getElementById("country3");

    if (thirdCountry.style.display === "block") {
        thirdCountry.style.display = "none";
    } else {
        thirdCountry.style.display = "block";
    }
}

function data4() {
    country4.innerHTML = `
    <img src="img/Italian-flag.png" alt="Italy">
    <p>Country: Italy</p>
    <p>Continent: Europe</p>
    <p>Population: 59.07 million</p>
    <p>President: Sergio Mattarella</p>
    <p>Currency: Euros</p>
    `;

    const fourthCountry = document.getElementById("country4");

    if(fourthCountry.style.display === "block") {
        fourthCountry.style.display = "none";
    } else {
        fourthCountry.style.display = "block";
    }
}

function data5() {
    country5.innerHTML = `
    <img src="./img/Kenya-flag.png" alt="Kenya">
    <p>Country: Kenya</p>
    <p>Continent: Africa</p>
    <p>Population: 54.99 million</p>
    <p>President: William Ruto</p>
    <p>Currency: Kenyan Shilling</p>
    `;

    const fifthCountry = document.getElementById("country5");

    if(fifthCountry.style.display === "block") {
        fifthCountry.style.display = "none";
    } else {
        fifthCountry.style.display = "block";
    }
}