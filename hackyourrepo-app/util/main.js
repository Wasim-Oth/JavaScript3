  
  import {fetchOptions} from "./fetch-options.js"
// import { pagination } from "./Pagination.js";
  import {fetchRepositorysInfo} from "./Repositorys-info.js"


  // global variables so i can use them in the other files

  export const url = 'https://api.github.com/orgs/HackYourFuture/repos?per_page=100';
  const log = console.log;
  const body = document.body;

  // header
  const headerContainer = document.createElement('div');
  headerContainer.className = 'header';
  const head = document.createElement('head');
  head.textContent = 'HYF Repositories';
  head.setAttribute('id', 'head');

  //add select to the header
  export const select = document.createElement('select');
  select.classList.add('select')
  body.appendChild(headerContainer);
  headerContainer.appendChild(head);
  headerContainer.appendChild(select);

  // create conatiner to content both section (left and right side)
  const gridConatiner = document.createElement('div');
  gridConatiner.className = 'grid-container';
  body.appendChild(gridConatiner);

  // first section
  const section1 = document.createElement('section');
  section1.className = 'repositories-container';
  gridConatiner.appendChild(section1);
  // Repository
  const Repository = document.createElement('label');
  Repository.textContent = 'Repository:';
  section1.appendChild(Repository);
  export const RepositoryText = document.createElement('p');
  Repository.after(RepositoryText);

  //description
  const description = document.createElement('label');
  description.textContent = 'description:';
  section1.appendChild(description);
  export const descriptionText = document.createElement('p');
  description.after(descriptionText);

  //forks
  const forks = document.createElement('label');
  forks.textContent = 'forks:';
  section1.appendChild(forks);
  export const forksNumber = document.createElement('p');
  forks.after(forksNumber);

  //updated
  const updated = document.createElement('label');
  updated.textContent = 'updated:';
  section1.appendChild(updated);
  export const updateText = document.createElement('p');
  updated.after(updateText);

  //CONRIBUTORS
  export const section2 = document.createElement('section');
  section2.className = 'repositories-container';
  gridConatiner.appendChild(section2);

  export const pagenumbers = document.createElement('div');
  pagenumbers.className = "pagenumbers";
  document.body.appendChild(pagenumbers);

  // function excute the other function
function exuteAll(){
  fetchOptions();
  select.addEventListener('change', fetchRepositorysInfo);
}

exuteAll()
