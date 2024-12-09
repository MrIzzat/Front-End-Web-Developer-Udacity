const url = "/";

const getData = async (url="") => {
    const res = await fetch(url);

    try{
        const data = await res.text();
        console.log(data);
        return data;
    }
    catch (error){
        console.log(`Error: ${error}`);
    }
}


getData(url);