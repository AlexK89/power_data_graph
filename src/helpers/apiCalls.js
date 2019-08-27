export const getData = async url => {
    try {
        let data = await fetch(url);
        return data.json()
    } catch(error) {
        throw console.error('CIH: fetchData: ', error)
    }
}