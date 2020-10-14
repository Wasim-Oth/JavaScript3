import {select} from "./main.js"

export async function fetchOptions() {
  try {
    const url = 'https://api.github.com/orgs/HackYourFuture/repos?per_page=100';
    let response = await fetch(url);
    let data = await response.json();
    for (let i in data) {
      select.innerHTML += `<option> ${data[i].name} </option>`;
    }
  } catch (error) {
    console.log(`something went wrong with getData function ${error}`);
  }
}

