// Function to fetch Pokémon data
async function fetchPokemon() {
    const pokemonName = document.getElementById("pokemonInput").value.trim().toLowerCase();
    const resultContainer = document.getElementById("result-container");

    // Check if input is empty
    if (!pokemonName) {
        resultContainer.innerHTML = "<p style='color: red;'>Please enter a Pokémon name.</p>";
        return;
    }

    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

    try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error("Pokémon not found!");
        }

        const data = await response.json();

        // Display Pokémon details
        resultContainer.innerHTML = `
            <p><b>Name:</b> ${data.name.toUpperCase()}</p>
            <p><b>Height:</b> ${data.height}</p>
            <p><b>Weight:</b> ${data.weight}</p>
            <p><b>Type:</b> ${data.types.map(t => t.type.name).join(", ")}</p>
            <img src="${data.sprites.front_default}" alt="${data.name}">
        `;

    } catch (error) {
        resultContainer.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
        console.error("Fetch Error:", error);
    }
}
