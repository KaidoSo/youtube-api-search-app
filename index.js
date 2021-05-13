var key = config.MY_API_KEY;

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        // Typical action to be performed when the document is ready:
        var res = JSON.parse(xhttp.responseText);
        var videoData = (res.items.map(function(item){
            return item.snippet
        }));

        var container = document.querySelector('#video-divs');
        videoData.forEach(function(video){
            console.log(video);
            var videoDiv = document.createElement('div');
            videoDiv.innerHTML = `
                <img src=${video.thumbnails.default.url}>
            `;
            container.appendChild(videoDiv);
        })
    }
};
xhttp.open("GET", "https://www.googleapis.com/youtube/v3/search?part=snippet&q=surfing&key=" + key, true);
xhttp.send();
