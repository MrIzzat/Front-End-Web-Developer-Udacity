const route = "/details"

const getData = async (url ="") => {
    const response = await fetch(url)
    try{
        const data = await response.json();
        return data;
    }
    catch(error){
        console.log(`Error: ${error}`)
    }
}

getData(route).then( (serverInfo) => {

    let paragraph = document.createElement('p')

    paragraph.innerText = `Server Title: ${serverInfo.title}
    Server ID: ${serverInfo.id}`

    document.body.appendChild(paragraph)
    })

    // console.log(`Server Title: ${serverInfo.title}
    //     Server ID: ${serverInfo.id}`)