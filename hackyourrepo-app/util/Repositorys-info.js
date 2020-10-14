import {url, RepositoryText, descriptionText, forksNumber, updateText } from "./main.js"
import {contributors} from "./contributors.js"

//  select.addEventListener('change', fetchRepositorysInfo)
 export let cont_url;

  export async function fetchRepositorysInfo(event){
   try{
    let response = await fetch (url);
    let data = await response.json(); 
    data.forEach(Repository => {   
        if ( Repository.name == event.target.value){
          cont_url= Repository.contributors_url;

          //the left side 
          RepositoryText.textContent= Repository.name
          descriptionText.textContent= Repository.description
          forksNumber.textContent= Repository.forks 
          updateText.textContent= Repository.updated_at 
          
          //  this function show the contributors (the right side)
           contributors();
          
          }
      })  
    } catch (error) {console.log(`something went wrong with Repositorys-info function ${error}`)}

  }
  
