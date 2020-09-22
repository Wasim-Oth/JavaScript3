import { getData } from './getData.js';

export function main() {
  const url = 'https://api.github.com/orgs/HackYourFuture/repos?per_page=100';
  const log = console.log;
  const body = document.body;

  // header
  const headerContainer = document.createElement('div');
  headerContainer.className = 'header';
  const head = document.createElement('head');
  head.textContent = 'HYF Repositories';
  head.setAttribute('id', 'head');

  //add select to the header
  const select = document.createElement('select');
  body.appendChild(headerContainer);
  headerContainer.appendChild(head);
  headerContainer.appendChild(select);

  // first section
  const gridConatiner = document.createElement('div');
  gridConatiner.className = 'grid-container';
  body.appendChild(gridConatiner);
  const section1 = document.createElement('section');
  section1.className = 'repositories-container';
  gridConatiner.appendChild(section1);
  // Repository
  const Repository = document.createElement('label');
  Repository.textContent = 'Repository:';
  section1.appendChild(Repository);
  const RepositoryText = document.createElement('p');
  Repository.after(RepositoryText);

  //description
  const description = document.createElement('label');
  description.textContent = 'description:';
  section1.appendChild(description);
  const descriptionText = document.createElement('p');
  description.after(descriptionText);

  //forks
  const forks = document.createElement('label');
  forks.textContent = 'forks:';
  section1.appendChild(forks);
  const forksNumber = document.createElement('p');
  forks.after(forksNumber);

  //updated
  const updated = document.createElement('label');
  updated.textContent = 'updated:';
  section1.appendChild(updated);
  const updateText = document.createElement('p');
  updated.after(updateText);

  //CONRIBUTORS
  const section2 = document.createElement('section');
  section2.className = 'repositories-container';
  gridConatiner.appendChild(section2);

  getData(select, url);

  //  change event for the select
  select.addEventListener('change', appendToDom);

  // i tried to put this function in a different file and then imported but i couldn't because all the variables are in the (main) function.
  //   can you please tell me what is the solution for that? 

  //invoke getData 
  getData(select, url)

  //event listener to the Repositories info and the create the contributors
 select.addEventListener('change', appendToDom)
 async function appendToDom(event){
   try{
       
   let response = await fetch (url)
   let data = await response.json(); 
   section2.innerHTML=''
   data.forEach(Repository => {   

       if ( Repository.name == event.target.value){
         //the lest side of the repo
         RepositoryText.textContent= Repository.name
         descriptionText.textContent= Repository.description
         forksNumber.textContent= Repository.forks 
         updateText.textContent= Repository.updated_at 
         
         return contributors();
       }

         // another fetch request for contibutors
         async function contributors(){
           try{
           const res = await fetch(Repository.contributors_url)
           const data = await  res.json()
           data.forEach(contributor => { 

           //contibutors 
             const contributorsConatiner = document.createElement('div')
             contributorsConatiner.className= 'contributors'
             section2.appendChild(contributorsConatiner)

             contributorsConatiner.innerHTML+=
             `<img src= ${contributor.avatar_url} class="img"></img>
             <a href ="https://github.com/${contributor.login}">${contributor.login}</a>
             <div>${contributor.contributions}</div>`
             })
           } catch(error) {log('something went wrong with contibutors function', error)}
         }       
        })  
       } catch {
         log('something went wrong with appendToDom function')
       } 
    }
  }

