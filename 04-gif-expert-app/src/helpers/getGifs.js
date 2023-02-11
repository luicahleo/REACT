export const getGifs = async (category) => {
<<<<<<< HEAD
    const url = `https://api.giphy.com/v1/gifs/search?api_key=pnTgNxxHtcLrQTQA0pZ2FXx6DD8MMjHb&q=${category}&limit=10`;
=======
    const url = `https://api.giphy.com/v1/gifs/trending?api_key=pnTgNxxHtcLrQTQA0pZ2FXx6DD8MMjHb&q=${category}&limit=3`;
>>>>>>> 0bf670b (gifapp2)
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))

    return gifs;
}