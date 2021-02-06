//First Api for Call country an capital:

fetch("https://restcountries.eu/rest/v2/all")
	.then((response) => response.json())
	.then((data) => Country(data));

// This Function for Country and capital:
function Country(data) {
	data.forEach((Data) => {
		let countryContainer = `
               <h1 class="countryName">${Data.name}</h1>
               <h4>${Data.capital}</h4>
               <button onclick="Details('${Data.name}')">Details</button>
                `;

		let createDiv = document.createElement("div");
		createDiv.className = "countryWithCapital";

		createDiv.innerHTML = countryContainer;

		document.getElementById("AllCountries").appendChild(createDiv);
	});
}

// 2nd API for Details:

let Details = (name) => {
	const url = `https://restcountries.eu/rest/v2/name/${name}`;

	fetch(url)
		.then((response) => response.json())
		.then((data) => {
			detailsDisplay(data[0]);
		});
};

// This Function for detailsDisplay:
let detailsDisplay = (data) => {
	// Block fast display:
	document.getElementById("header").style.display = "none";
	document.getElementById("AllCountries").style.display = "none";

// language:
	let languages = data.languages;
	const language = languages.map(function (element) {
		return element.name;
    });
    

// Description:
	let fullDescription = `
    <img id="cancel" src="cancel.svg">
     <div class="name">
       <h2>Name: ${data.name}</h2>
       <h2>Native name: ${data.nativeName}</h2>
     </div>
     <div class="capital">
       <h3>Capital: ${data.capital}</h3>
     </div>


    <div class="data" id="data">
          <h4>Language: ${data.languages}</h4>

        <h5>Area: ${data.area}km²</h5>
        <h5>Population: ${data.population}</h5>
        <h5> Region: ${data.region}</h5>
        <h5>SubRegion: ${data.subregion}</h5>
        <img  src="${data.flag}">
    </div>


 `;

    // create Div:
	let createDiv = document.createElement("div");
	createDiv.className = "Description";
	createDiv.id = "Description";
	createDiv.innerHTML = fullDescription;

	document.body.appendChild(createDiv);

    // cancel:
	document.getElementById("cancel").addEventListener("click", () => {
		window.location.reload();
	});

 };
