var key = config.MY_API_KEY;

var searchForm = document.querySelector('#search-form');
searchForm.addEventListener('submit', function(e) {
    e.preventDefault();

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
                videoDiv.classList.add('video-div')
                videoDiv.innerHTML = `
                    <img src=${video.thumbnails.high.url}>
                    <h4>${video.title}</h4>
                    <p>${video.channelTitle}</p>
                    <p>${new Date(video.publishTime).toLocaleDateString()}</p>
                `;
                container.appendChild(videoDiv);
            })
        }
    };

    var textValue = document.querySelector('#search-bar').value
    xhttp.open("GET", `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${textValue}&maxResults=9&key=` + key, true);
    xhttp.send();
})


