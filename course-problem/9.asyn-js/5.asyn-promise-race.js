function fetchWithTimout(promise, timeout) {
    const timeoutPromsie = new Promise((_, reject) => {
        setTimeout(() => {
            reject("Timeout Exceeded");
        }, timeout);
    })
    return Promise.race([promise, timeoutPromsie]);
}

function fetchData() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Data Fetched");
        }, 3000);
    })
}

async function getData() {
    try {
        const data = await fetchWithTimout(fetchData(), 2000);
        console.log(data);

    } catch (error) {
        console.log(error);
    }
}

getData();