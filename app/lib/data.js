export async function getHomeContent() {
    try {
        let response = await fetch('https://connecteam.com/static/frontend-home-task/data/home.json');
        let responseJson = await response.json();
        //console.log(responseJson);
        return responseJson;
    } catch (error) {
        console.error(error);
    }
}

export async function getNavContent() {
    try {
        let response = await fetch('https://connecteam.com/static/frontend-home-task/data/home.json');
        let responseJson = await response.json();
        //console.log(responseJson);
        return responseJson;
    } catch (error) {
        console.error(error);
    }
}

export async function getRepuContent() {
    try {
        let response = await fetch('https://connecteam.com/static/frontend-home-task/data/repudiandae.json');
        let responseJson = await response.json();
        //console.log(responseJson);
        return responseJson;
    } catch (error) {
        console.error(error);
    }
}

export async function getSitContent() {
    try {
        let response = await fetch('https://connecteam.com/static/frontend-home-task/data/sit-at-enim.json');
        let responseJson = await response.json();
        //console.log(responseJson);
        return responseJson;
    } catch (error) {
        console.error(error);
    }
}

export async function getDoloContent() {
    try {
        let response = await fetch('https://connecteam.com/static/frontend-home-task/data/dolore-ipsum.json');
        let responseJson = await response.json();
        //console.log(responseJson);
        return responseJson;
    } catch (error) {
        console.error(error);
    }
}

export async function getPrasContent() {
    try {
        let response = await fetch('https://connecteam.com/static/frontend-home-task/data/praesentium-aspernatur.json');
        let responseJson = await response.json();
        //console.log(responseJson);
        return responseJson;
    } catch (error) {
        console.error(error);
    }
}

export async function getFooterContent() {
    try {
        let response = await fetch('https://connecteam.com/static/frontend-home-task/data/footer.json');
        let responseJson = await response.json();
        //console.log(responseJson);
        return responseJson;
    } catch (error) {
        console.error(error);
    }
}