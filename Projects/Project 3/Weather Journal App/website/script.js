let projectData = {};

const getProjectData = async (url="") => {
    const response = await fetch(url);

    try{
        const data = await response.json();
        return data;
    }
    catch (error){
        console.log(`Error: ${error}`);
    }
}



getProjectData("/projectData").then((data) => {projectData=data; console.log(projectData);});


const postProjectData = async (url="") => {
    const response = await fetch(url,{
        method : "POST",
        credentials : "same-origin",
        headers: {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify({temperature : "temperature", date : "date", userResponse : "userResponse"})
    });

    try{
        const data = await response.json();
        return data;
    }
    catch (error){
        console.log(`Error: ${error}`);
    }
}

postProjectData("/addToProjectData").then((data) => {projectData=data; console.log(projectData);});