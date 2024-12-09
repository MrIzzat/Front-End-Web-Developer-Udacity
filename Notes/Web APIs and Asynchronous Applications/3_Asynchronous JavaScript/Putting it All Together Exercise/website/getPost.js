const postData = async (url ="", data = {}) => {
    const response = await fetch(url, {
        method : "POST",
        credentials : "same-origin",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(data)
    });

    try {
        const newData = await response.json();
        return newData;
    }

    catch (error){
        console.log(`"Error: ${error}`);
    }
}


const retrieveData = async(url="") => {
    const request = await fetch(url);

    try {
        const allData = await request.json();
        console.log(allData)
    }

    catch (error){
        console.log(`Error: ${error}`);
    }
};

function getAllData(){
    postData("/animal",{animal : "Chicken", price : 1000})
    .then(retrieveData("/all"));
}


getAllData();