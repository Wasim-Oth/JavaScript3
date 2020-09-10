"use strict";

// i have a problem in this project i couldn't fix i tried a lot. the problem is when i choose a repo
//  it's adding the contributors and keeping the old contributors from the previous repo!

      function main(){
      const url = 'https://api.github.com/orgs/HackYourFuture/repos?per_page=100';
      const log = console.log;
      const body = document.body;

      // header
      const headerContainer = document.createElement('div')
      headerContainer.className= 'header';
      const head = document.createElement('head')
      head.textContent='HYF Repositories';
      head.setAttribute('id', 'head')
      
      //add select to the header
      const select = document.createElement('select')
      body.appendChild(headerContainer)
      headerContainer.appendChild(head)
      headerContainer.appendChild(select)
      
      // first section
      const gridConatiner = document.createElement('div') 
      gridConatiner.className='grid-container'
      body.appendChild(gridConatiner)
      const section1 = document.createElement('section') 
      section1.className = 'repositories-container'
      gridConatiner.appendChild(section1)
      // Repository
      const Repository = document.createElement('label')
      Repository.textContent= 'Repository:'
      section1.appendChild(Repository)
      const RepositoryText = document.createElement('p')
      Repository.after(RepositoryText)

      //description
      const description = document.createElement('label')
      description.textContent= 'description:'
      section1.appendChild(description)
      const descriptionText = document.createElement('p')
      description.after(descriptionText)

      //forks
      const forks = document.createElement('label')
      forks.textContent= 'forks:'
      section1.appendChild(forks)
      const forksNumber= document.createElement('p')
      forks.after(forksNumber)

      //updated
      const updated = document.createElement('label')
      updated.textContent= 'updated:'
      section1.appendChild(updated)
      const updateText= document.createElement('p')
      updated.after(updateText)

      //CONRIBUTORS
       const section2 = document.createElement('section')
       section2.className= 'repositories-container'
       gridConatiner.appendChild(section2)
      

      // change event for the select
      select.addEventListener('change', appendToDom)

      //function to add the options to select
      async function getData(){
      let response = await fetch (url)
      let data = await response.json();
      for ( let i in data){
        select.innerHTML +=`<option> ${data[i].name} </option>`
        }
      }
      
  getData()

      async function appendToDom(event){
        let response = await fetch (url)
        let data = await response.json(); 
        data.forEach(Repository => {   

          if ( Repository.name == event.target.value){
            RepositoryText.textContent= Repository.name
            descriptionText.textContent= Repository.description
            forksNumber.textContent= Repository.forks 
            updateText.textContent= Repository.updated_at
        
            // another fetch request for contibutors
            fetch(Repository.contributors_url)
            .then(res => res.json())
            .then( data =>{
              data.forEach(contributor => { 
              // log(contributor)

              //CONRIBUTORS 
                const contributorsConatiner = document.createElement('div')
                contributorsConatiner.className= 'contributors'
                section2.appendChild(contributorsConatiner)

              
              // create 'img' tag (contributorImg) and append it to contributorsConatiner
                let contributorImg = document.createElement('img')
                contributorImg.src= contributor.avatar_url
                contributorImg.setAttribute("style", "width:60px") 
                contributorsConatiner.appendChild(contributorImg)

                // create 'a' tag (contributorsName) and append it to contributorsConatiner
                let contributorName = document.createElement('a')
                contributorName.href= contributor.html_url
                contributorName.textContent= contributor.login
                contributorsConatiner.appendChild(contributorName)

                //create div (contributions)
                let contributions = document.createElement('div')
                contributions.className= 'contributions'
                contributions.textContent= contributor.contributions
                contributorsConatiner.appendChild(contributions)
              })
            })
            .catch(err => console.log(err))
          } 
        })
      }
    }
main()