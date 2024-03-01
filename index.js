function Function(){
    let text = document.getElementById('search').value;
    let url = `https://api.jikan.moe/v4/anime?q=${text}&sfw`;
    console.log(url);
    const apiFetch = fetch(url, {mode : 'cors'});
    const details = apiFetch.then((response) => {
        return response.json();
    })
    details.then((response) => {
        console.log(response);
    });
}

