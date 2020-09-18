"use strict";

const placeholderRepos = [
  {
    name: 'SampleRepo1',
    description: 'This repository is meant to be a sample',
    forks: 5,
    updated: '2020-05-27 12:00:00',
  },
  {
    name: 'AndAnotherOne',
    description: 'Another sample repo! Can you believe it?',
    forks: 9,
    updated: '2020-05-27 12:00:00',
  },
  {
    name: 'HYF-Is-The-Best',
    description:
      "This repository contains all things HackYourFuture. That's because HYF is amazing!!!!",
    forks: 130,
    updated: '2020-05-27 12:00:00',
  },
];

const log= console.log;
const repoName = document.querySelector('#Repository');
const description = document.querySelector('#description');
const forks = document.querySelector('#forks');
const updated = document.querySelector('#updated');
const select = document.querySelector('#Repositories');
const section = document.querySelector('.repositories-container');

// log(select.value);

select.addEventListener('change', changeOption);
function changeOption(event){
  for ( let i = 0; i < placeholderRepos.length; i++ ){
    let repository= placeholderRepos[i]
    if ( repository.name === event.target.value ){
      section.style.display='block';
      repoName.textContent= repository.name
      description.textContent=repository.description
      forks.textContent= repository.forks
      updated.textContent= repository.updated
   }
  }
}


