const apiKey = "cef657663967c9e4808ab1bb77fe3cd4";
const baseURL = "https://api.openweathermap.org/data/2.5/forecast?";


//const urlT = `https://api.openweathermap.org/data/2.5/forecast?lat=32.204486&lon=35.281958&cnt=1&APPID=cef657663967c9e4808ab1bb77fe3cd4`;

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



//getProjectData("/projectData").then((data) => {projectData=data; console.log(projectData);});


const postProjectData = async (url="", data) => {
    const response = await fetch(url,{
        method : "POST",
        credentials : "same-origin",
        headers: {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(data)
    });

    try{
        const data = await response.json();
        return data;
    }
    catch (error){
        console.log(`Error: ${error}`);
    }
}

//postProjectData("/addToProjectData").then((data) => {projectData=data; console.log(projectData);});






const getWeatherInformation = async (url="") => {
    const response = await fetch(url);


    try{
        const data = await response.json();
        // console.log("hell yeah");
        // console.log(data.list[0].dt_txt);//Date as a string
        // console.log(data.list[0].main.temp)// temperature in kelvin

        return data;
    }
    catch (error){
        console.log(`Error: ${error}`);
    }
}



//getWeatherInformation(weatherURL).then((data) => {projectData=data; console.log(projectData);});

const btnGenerate = document.getElementById("generate");
const txtZip = document.getElementById("zip");
const txtResponse = document.getElementById("feelings");

btnGenerate.addEventListener("click",(event) => {
    let response = txtResponse.value;
    let zipCode = txtZip.value;

    const weatherURL = `${baseURL}zip=${zipCode}&cnt=${1}&APPID=${apiKey}`;

    getWeatherInformation(weatherURL)
    .then((data) => postProjectData("/addToProjectData",
        {date : data.list[0].dt_txt, temperature : data.list[0].main.temp,userResponse : response}));
});