document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    const output = document.getElementById('pokemonList');
    const pokemonBtn = document.getElementById('pokemonBtn');
    
    // Store Pokemon data for navigation
    let pokemonList = [];
    let currentIndex = 0;

    // Check if elements exist before using them
    if (!output) {
        console.error('Element with id "pokemonList" not found');
        return;
    }

    // Function to initialize Pokemon data
    async function initializePokemonData() {
        try {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=151'); // Get first 151 Pokemon
            const data = await response.json();
            pokemonList = data.results;
            console.log('Pokemon data initialized:', pokemonList.length, 'Pokemon loaded');
        } catch (error) {
            console.error('Error initializing Pokemon data:', error);
        }
    }

    // Initialize Pokemon data when page loads
    initializePokemonData();

    function renderPokemon(pokemon) {
        const li = document.createElement('li');
        li.textContent = pokemon.name;
        li.className = 'curosr-pointer p-1 m-1 hover:bg-blue-200 hover:text-blue-800';
        output.appendChild(li);
    }

    // Function to fetch and display Pokemon
    async function fetchAndDisplayPokemon() {
        try {
            output.innerHTML = '';
            
            const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=151');
            const data = await response.json();
            const pokemon = data.results;
            
            console.log(pokemon);
            pokemon.forEach(p => {
                renderPokemon(p);
            });
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }


    //promise with async await
    new Promise (resolve => 
        setTimeout(() => resolve('Hello after 2 seconds!'), 2000)
    ).then(message => console.log(message));

    // Only add event listener if button exists
    if (pokemonBtn) {
        pokemonBtn.addEventListener('click', fetchAndDisplayPokemon);
    } else {
        console.error('Element with id "pokemonBtn" not found');
    }

    // Function to display Pokemon details
    async function displayPokemonDetails(pokemonName) {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
            const data = await response.json();
            // Display more details about the selected Pokemon on the page
            const details = `
            <div class=" flex flex-col items-center p-4 bg-white rounded-lg shadow-md">
                <h2 class="text-xl font-bold ">${data.name}</h2>
                <p>Height: ${data.height}</p>
                <p>Weight: ${data.weight}</p>
                <p>Base Experience: ${data.base_experience}</p>
                <img src="${data.sprites.front_default}" alt="${data.name}"/>
            </div>
            `;
            const output = document.getElementById('output');
            output.innerHTML = details;
        } catch (error) {
            console.error('Error fetching Pokemon details:', error);
        }
    }

    //click on the pokemon list and display more details about that pokemon
    output.addEventListener('click', async function(event) {
        if (event.target && event.target.nodeName === 'LI') {
            const pokemonName = event.target.textContent;
            await displayPokemonDetails(pokemonName);
        }
    });
   

    //toggle button to show next pokemon details
    const toggleBtn = document.getElementById('nextBtn');
    const toggleBtn2 = document.getElementById('previousBtn');

    // Next button - navigate forward through Pokemon list
    if (toggleBtn) {
        toggleBtn.addEventListener('click', async function() {
            if (pokemonList.length === 0) {
                console.log('Pokemon data not loaded yet. Please wait...');
                return;
            }

            currentIndex = (currentIndex + 1) % pokemonList.length; // Loop back to start
            const selectedPokemon = pokemonList[currentIndex].name;
            await displayPokemonDetails(selectedPokemon);
        });
    }

    // Previous button - navigate backward through Pokemon list
    if (toggleBtn2) {
        toggleBtn2.addEventListener('click', async function() {
            if (pokemonList.length === 0) {
                console.log('Pokemon data not loaded yet. Please wait...');
                return;
            }

            currentIndex = (currentIndex - 1 + pokemonList.length) % pokemonList.length; // Loop back to end
            const selectedPokemon = pokemonList[currentIndex].name;
            await displayPokemonDetails(selectedPokemon);
        });
    }
    

});


