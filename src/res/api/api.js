import urls from "../urls/urls";

export const getUserFromStackOverFlow = async (id) => {
    return await makeApiCall(urls.getUser(id))
}

const makeApiCall = async (url) => {
    return await fetch(url)
        .then(res => {
            console.log('res status: ', res.status);
            return res?.json()
        });
}