function simulateAsyncTask() {
    console.log("Task Started...");
    setTimeout(() => {
        console.log("Task Finished");
    }, 2000);
}

simulateAsyncTask();