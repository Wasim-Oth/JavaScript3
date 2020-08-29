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
function changeOption(){
  if (select.value === 'SampleRepo1' ){
    section.style.display='block';
    repoName.textContent= placeholderRepos[0].name;
    description.textContent= placeholderRepos[0].description;
    forks.textContent= placeholderRepos[0].forks;
    updated.textContent= placeholderRepos[0].updated;
  }
  else if (select.value === 'AndAnotherOne' ){
    section.style.display='block';
    repoName.textContent= placeholderRepos[1].name;
    description.textContent= placeholderRepos[1].description;
    forks.textContent= placeholderRepos[1].forks;
    updated.textContent= placeholderRepos[1].updated;
  }
  if (select.value === 'HYF-Is-The-Best' ){
    section.style.display='block';
    repoName.textContent= placeholderRepos[2].name;
    description.textContent= placeholderRepos[2].description;
    forks.textContent= placeholderRepos[2].forks;
    updated.textContent= placeholderRepos[2].updated;
  }
  if (select.value === '0' ){
    section.style.display='none';
  }
  }


