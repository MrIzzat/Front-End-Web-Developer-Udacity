import {checkURL} from './urlChecker.js'

// If working on Udacity workspace, update this with the Server API URL e.g. `https://wfkdhyvtzx.prod.udacity-student-workspaces.com/api`
// const serverURL = 'https://wfkdhyvtzx.prod.udacity-student-workspaces.com/api'
const serverURL = 'http://localhost:8081/api'

const form = document.getElementById('urlForm');
form?.addEventListener('submit', handleSubmit);

const polarity = document.getElementById('polarity')
const agreement = document.getElementById('agreement')
const subjectivity = document.getElementById('subjectivity')
const confidence = document.getElementById('confidence')
const irony = document.getElementById('irony')
const text = document.getElementById('text')



async function handleSubmit(event) {
    event.preventDefault();

    // Get the URL from the input field
    const formText = document.getElementById('name').value;
    
    // Check if the URL is valid
    // If the URL is valid, send it to the server using the serverURL constant above
    if(checkURL(formText)){
       const response = await sendPost(formText);
       polarity.textContent = `Polarity: ${response.score_tag}`
       agreement.textContent = `Agreement: ${response.agreement}`
       subjectivity.textContent = `Subjectivity: ${response.subjectivity}`
       confidence.textContent = `Confidence: ${response.confidence}`
       irony.textContent = `Irony: ${response.irony}`
       text.textContent = `Text: ${response.sentence_list.pop().text}`
       
    }else{
        alert("The URL Entered is Invalid")
    }
 

      
}

// Function to send data to the server

export const sendPost =  async (formText) => {
    try{
        const response = await fetch(serverURL, {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({formText})
          });
          const content = await response.json();
          console.log(content)
        
          return content;
    }
    catch (error){
        console.log(`Error: ${error}`)
    }
};

// Export the handleSubmit function
export { handleSubmit };

