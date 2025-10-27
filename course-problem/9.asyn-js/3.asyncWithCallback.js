function fetchDataWithCallback(callback) {
    setTimeout(() => {
       const data =  "Fetched Data";
       callback(data);
    }, 2000);
}
function callback(data) {
    console.log(data);  
}

fetchDataWithCallback(callback);