function displayItems(){
    let text = document.getElementById('search').value;
    let url = `https://api.jikan.moe/v4/anime?q=${text}&sfw`;
    let items = document.getElementById('items');
    while(items.firstChild) items.removeChild(items.firstChild);
    const apiFetch = fetch(url, {mode : 'cors'});
    const details = apiFetch.then((response) => {
        return response.json();
    })
    details.then((response) => {
        response.data.forEach(element => {

            let newDiv = document.createElement('div');
            newDiv.className = 'item';

            let img = document.createElement('img');
            img.className = 'image';
            img.src = element.images.jpg.image_url;

            let p = document.createElement('p');
            p.className = 'para';
            p.textContent = element.title;

            let link = document.createElement('a');
            link.className = 'animename';
            link.href = element.url;
            link.appendChild(img);
            link.appendChild(p);
            newDiv.appendChild(link);

            items.appendChild(newDiv);
        });
    });
    
}

