

//  export function Pagination(arr, wrapper, raw_per_page, page) {
//     page--;
//     let start = raw_per_page * page;
//     let end = start + raw_per_page;
//     let paginatedItems = arr.slice(start, end);
//     let page_count = Math.ceil(arr.length / raw_per_page);
  
//     for (let i = 0; i < paginatedItem.length; i++) {
//         let item = paginatedItem[i];
//         const contributorsConatiner = document.createElement('div')
//         contributorsConatiner.className= 'contributors'
//         section2.appendChild(contributorsConatiner)

//         contributorsConatiner.innerHTML+=
//         `<img src= ${item.avatar_url} class="img"></img>
//         <a href ="https://github.com/${item.login}">${item.login}</a>
//         <div>${item.contributions}</div>`
//     }
// }