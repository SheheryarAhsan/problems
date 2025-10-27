function fetchUser() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("User Data"), 1000);
    });
}
function fetchPosts() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Posts Data"), 1000);
    });
}
function fetchPictures() {
    return new Promise((_, reject) => {
        setTimeout(() => reject("Error Occurred"), 1000);
    });
}

async function getData() {
    try {
        const [user, post, pictures] = await Promise.all([fetchUser(), fetchPosts(), fetchPictures()]);
        // const user = await fetchUser();
        // const post = await fetchPosts();
        // const pictures = await fetchPictures();
        console.log(user);
        console.log(post);
        // console.log(pictures);
    } catch (error) {
        console.log(error);
    }
}

getData();