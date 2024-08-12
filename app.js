document.getElementById('search-button').addEventListener('click', function() {
    const query = document.getElementById('search-input').value;
    searchImages(query);
});

async function searchImages(query) {
    const apiKey = 'GzRy_XOEBeZr3iUPKAtKFvvieiHC5fosE_m3KzowhLA';
    const url = `https://api.unsplash.com/search/photos?query=${query}&client_id=${apiKey}`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayImages(data.results);
    } catch (error) {
        console.error('Error fetching images:', error);
    }
}

function displayImages(images) {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = '';
    
    images.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image.urls.small;
        imgElement.alt = image.alt_description;
        gallery.appendChild(imgElement);
    });
}