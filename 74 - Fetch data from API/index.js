// fetch = function used for making HTTP requests to fetch resourses.
// (JSON style data, image, files)
// simplifies asynchronous data fetching in javascript and used for interacting with APIs to retieve and send data asynchronously over the web.
// fetch(url, {options})

// fetch("https://pokeapi.co/api/v2/pokemon/ditto")
//         .then(response => {
//             if(!response.ok){
//                 throw new Error("Could not fetch")
//             }
//             return response.json();

//         })
//         .then(data => console.log(data))
//         .catch(error => console.error(error));



//cara ke dua

fetchdata();

async function fetchdata(){
    try{
        const pokemonName = document.getElementById("pokemonName").value.trim().toLowerCase();

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);    

        if(!response.ok){
            throw new Error("Could not fetch")
        }

        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");

        imgElement.src = pokemonSprite;
        imgElement.style.display = "block"


    }
    catch(error){
        console.error(error);
    }
}