var key = config.MY_API_KEY;

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        // Typical action to be performed when the document is ready:
        document.getElementById("res").innerHTML = xhttp.responseText;
    }
};
xhttp.open("GET", "https://www.googleapis.com/youtube/v3/search?part=snippet&q=surfing&key=" + key, true);
xhttp.send();
