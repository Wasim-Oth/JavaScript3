function main () {
const url = "https://pokeapi.co/api/v2/pokemon?limit=20";
const btn = document.querySelector('#btn')
const select = document.querySelector('#select');
const pokimonImg = document.querySelector('#img')
// const error = 'somwthing went wrong';
const log = console.log;


btn.addEventListener('click', getPokimon);
select.addEventListener('change', showPokimonPhoto )


async function getPokimon(){
    const response = await fetch (url);
    const data =  await response.json()
        select.innerHTML += '<option>' +  pokimons.name + '</option>'
}

async function showPokimonPhoto (){
    const response = await fetch(url)
    const data = await response.json()
    // .catch(error => console.log(error))
    data.results.forEach(pokimons =>{
        // log(pokimons.url)
        if (pokimons.name === select.value) {
            fetch(pokimons.url)
            .then(res => res.json())
            .then (data => pokimonImg.src = data.sprites.front_shiny)
            .catch(error => console.log(error))
        }
    })
}

}
main()

