import urls from "../urls/urls";

export const getAllMovies = async () => {
    return await makeApiCall(urls.mainURl)
}

const makeApiCall = async (url) => {
    return await fetch(url)
        .then(res => {
            console.log('res status: ' , res.status);
            return res?.json()
        });
}