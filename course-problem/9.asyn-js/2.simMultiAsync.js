function simulateMultipleTasks() {
    setTimeout(() => {
        console.log("Task 1 Finised");
    }, 1000);
    setTimeout(() => {
        console.log("Task 2 Finised");
    }, 2000);
    setTimeout(() => {
        console.log("Task 3 Finised");
    }, 3000);
}

simulateMultipleTasks();