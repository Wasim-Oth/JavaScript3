
const url = 'https://opentdb.com/api.php?amount=5'
const body = document.body
let table = document.createElement('table')
body.appendChild(table)

async function getData(){
    try{
const response = await fetch (url)
const data = await response.json()
data.results.forEach((element, index)=> {

    //create rows and th elements for the quistions
    let quistionsRow = document.createElement('tr')
    let quistions= document.createElement('th')
    quistions.innerText= `${index+1}- ${element.question}`.replace(/&quot;/g, '"').replace(/&#039;/g, "'")
    //append quisions to table
    quistionsRow.appendChild(quistions)
    table.appendChild(quistionsRow)

    //create rows and th elements for the answers
    let answersrRow = document.createElement('tr')
    let answers= document.createElement('td')
    answers.innerText=`${element.correct_answer}`.replace(/&Uuml;/g, 'Ü')
    //append answers to table
    answersrRow.appendChild(answers)
    table.appendChild(answersrRow)
    
    //event click on the quistion to get the answer and click it againg to hide the answer
    quistionsRow.addEventListener('click', function(){
        if(answers.style.display=='block'){
        answers.style.display= "none"
        } else{
            answers.style.display= "block"
        }  
     })
   });
 } catch (error) {console.log(`!ops something went wrong ${error}`)}

}
getData()