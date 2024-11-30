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

