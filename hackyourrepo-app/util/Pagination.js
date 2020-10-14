
import {section2, pagenumbers} from "./main.js"

export function pagination(listItem){
    let currentPage = 1;
    let rows = 5;
    
    function displayList (items, wrapper, rowsPerPage, page){
      wrapper.innerHTML = "";
      page--;
      let start = rowsPerPage * page;
      let end = start + rowsPerPage;
      let paginatedItem = items.slice(start , end);
      
      for (let i = 0; i < paginatedItem.length; i++){
        let item = paginatedItem[i];
        let contributorsConatiner= document.createElement('div');
        contributorsConatiner.className= 'contributors'
        section2.appendChild(contributorsConatiner);
        contributorsConatiner.innerHTML += 
        `
        <img src= ${item.avatar_url} class="img"/>
        <a href ="https://github.com/${item.login}">${item.login}</a>
        <div>${item.contributions}</div>
        `
        wrapper.appendChild(contributorsConatiner);
      };
    };

    // function to create buttons
    function setupPagination(items, wrapper, rowsPerPage){
      wrapper.innerHTML = "";
      let pageCount = Math.ceil(items.length / rowsPerPage);
      for (let i = 1; i< pageCount + 1 ; i++){
        let btn = paginationButton(i); 
        wrapper.appendChild(btn);
      }
    }
    
    function paginationButton(page) {
      let button = document.createElement('button');
      button.innerText = page;

      if (currentPage === page) 
        button.classList.add('active');
      
      button.addEventListener('click', () => {
        currentPage = page;
        displayList(listItem, section2, rows, currentPage);

        let currentBtn = document.querySelector('.pagenumbers button.active');
        currentBtn.classList.remove('active');
        button.classList.add('active');
      })
      return button;
    }
  
    displayList(listItem,section2, rows, currentPage);
    setupPagination(listItem, pagenumbers, rows);
  
  }
