document.getElementById('btn-country1').addEventListener('click', loadData1);
document.getElementById('btn-country2').addEventListener('click', loadData2);
document.getElementById('btn-country3').addEventListener('click', loadData3);
document.getElementById('btn-country4').addEventListener('click', loadData4);
document.getElementById('btn-country5').addEventListener('click', loadData5);

function loadData1(e) {
    fetch('countryData1.json')
        .then(res => res.json())
        .then(data => {
            console.log(data);

            let output = '';

            data.forEach((country) => {
                output += `
                    <img src="./img/USA-flag.png" alt="USA">
                    <br>
                    <li>Country: ${country.country1}</li>
                    <br>
                    <li>Population: ${country.population1}</li>
                    <br>
                    <li>President/Prime Minister: ${country.leader1}</li>
                    <br>
                    <li>Currency: ${country.currency1}</li>
                `;

                document.getElementById("output").innerHTML = output;
                
            });
        })
        .catch(err => console.log(err));
    
    e.preventDefault();
}

function loadData2(e) {
    fetch('countryData2.json')
        .then(res =>res.json())
        .then(data => {
            console.log(data);

            let output = '';

            data.forEach((country) => {
                output += `
                    <img src="./img/Mexico-flag.png" alt="Mexico">
                    <br>
                    <li>Country: ${country.country2}</li>
                    <br>
                    <li>Population: ${country.population2}</li>
                    <br>
                    <li>President/Prime Minister: ${country.leader2}</li>
                    <br>
                    <li>Currency: ${country.currency2}</li>
                `;

                document.getElementById("output").innerHTML = output;
            });
        })
        .catch(err => console.log(err));
    e.preventDefault();
}

function loadData3(e) {
    fetch('countryData3.json')
        .then(res =>res.json())
        .then(data => {
            console.log(data);

            let output = '';

            data.forEach((country) => {
                output += `
                    <img src="./img/Indonesian-flag.png" alt="Indo">
                    <br>
                    <li>Country: ${country.country3}</li>
                    <br>
                    <li>Population: ${country.population3}</li>
                    <br>
                    <li>President/Prime Minister: ${country.leader3}</li>
                    <br>
                    <li>Currency: ${country.currency3}</li>
                `;

                document.getElementById("output").innerHTML = output;
            });
        })
        .catch(err => console.log(err));
    e.preventDefault();
}

function loadData4(e) {
    fetch('countryData4.json')
        .then(res =>res.json())
        .then(data => {
            console.log(data);

            let output = '';

            data.forEach((country) => {
                output += `
                    <img src="./img/Italian-flag.png" alt="Italy">
                    <br>
                    <li>Country: ${country.country4}</li>
                    <br>
                    <li>Population: ${country.population4}</li>
                    <br>
                    <li>President/Prime Minister: ${country.leader4}</li>
                    <br>
                    <li>Currency: ${country.currency4}</li>
                `;

                document.getElementById("output").innerHTML = output;
            });
        })
        .catch(err => console.log(err));
    e.preventDefault();
}

function loadData5(e) {
    fetch('countryData5.json')
        .then(res =>res.json())
        .then(data => {
            console.log(data);

            let output = '';

            data.forEach((country) => {
                output += `
                    <img src="./img/Kenya-flag.png" alt="Kenya">
                    <br>
                    <li>Country: ${country.country5}</li>
                    <br>
                    <li>Population: ${country.population5}</li>
                    <br>
                    <li>President/Prime Minister: ${country.leader5}</li>
                    <br>
                    <li>Currency: ${country.currency5}</li>
                `;

                document.getElementById("output").innerHTML = output;
            });
        })
        .catch(err => console.log(err));
    e.preventDefault();
}