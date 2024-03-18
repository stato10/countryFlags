const SearchButton = document.getElementById('button-addon2');

SearchButton.addEventListener('click', searchCountry);

function displayCountries(filteredCountries) {
    const countriesContainer = document.getElementById('countriesContainer');
    countriesContainer.innerHTML = '';

    filteredCountries.forEach(country => {
        const card = document.createElement('div');
        card.className = 'card m-3';
        card.style = 'width: 18rem;';
        card.style.backgroundColor = 'gray';

        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        const flagImage = document.createElement('img');
        flagImage.style.width = '150px';
        flagImage.src = country.flags.png;

        const countryName = document.createElement('h5');
        countryName.className = 'card-title';
        countryName.textContent = country.name.common;

        const countryDetails = document.createElement('p');
        countryDetails.className = 'card-text';
        const countryOff = document.createElement('p');
        countryDetails.className = 'card-text';
        const countryCom = document.createElement('p');
        countryDetails.className = 'card-text';




        // Loop through the nested nativeName object and add details
        for (const lang in country.name.nativeName) {
            const nativeName = country.name.nativeName[lang];
            countryOff.textContent =`Official name: ${country.name.official}`;
            countryCom.textContent =`Common name: ${country.name.common}`; 
            countryDetails.textContent = `Language: ${lang}`;
        }

        cardBody.appendChild(flagImage);
        cardBody.appendChild(countryName);
        cardBody.appendChild(countryDetails);
        cardBody.appendChild(countryOff);
        cardBody.appendChild(countryCom);
        card.appendChild(cardBody);

        countriesContainer.appendChild(card);
    });
}

function searchCountry() {
    const searchInput = document.getElementById('countryInput');
    const searchTerm = searchInput.value.toLowerCase();

    const filteredCountries = countries.filter(country =>
        country.name.common.toLowerCase().includes(searchTerm)
    );

    displayCountries(filteredCountries);
}



window.onload = function () {
    displayCountries(countries);
};