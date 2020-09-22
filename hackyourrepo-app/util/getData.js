export async function getData(select, url) {
  try {
    let response = await fetch(url);
    let data = await response.json();
    for (let i in data) {
      select.innerHTML += `<option> ${data[i].name} </option>`;
    }
  } catch (error) {
    console.log(`something went wrong with getData function ${error}`);
  }
}
