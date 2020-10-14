import {cont_url} from "./Repositorys-info.js"
import {pagination} from "./Pagination.js"

        //  fetch  for contibutors
         export function contributors(){
              
            fetch(cont_url)
           .then(res => res.json())
           .then(contributor =>  pagination(contributor) )  
         }       
