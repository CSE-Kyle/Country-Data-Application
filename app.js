document.getElementById('btn-country1').addEventListener('click', loadData1);
document.getElementById('btn-country2').addEventListener('click', loadData2);

function loadData1(e) {
    fetch('countryData.json')
        .then(res => res.json())
        .then(data => {
            console.log(data);

            let output = '';

            data.forEach((country) => {
                output += `
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
    fetch('countryData.json')
        .then(res => res.json())
        .then(data => {
            console.log(data);

            let output = '';

            data.forEach((country) => {
                output += `
                    <li>Country: ${country.country2}</li>
                    <br>
                    <li>Population: ${country.population2}</li>
                    <br>
                    <li>President/Prime Minister: ${country.leader2}</li>
                    <br>
                    <li>Currency: ${country.currency2}</li>
                `;

                document.getElementById('output').innerHTML = output;
            });
        })
        .catch(err => console.log(err));
    
    e.preventDefault();
}