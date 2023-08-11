let number = 0;
let responseData = null;

const videoArea = document.getElementById("video");
const titleArea = document.getElementById("title");
const contentArea = document.getElementById("content");
const button = document.getElementById('btn');

function getData() {
    const request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if (request.readyState == 4 && request.status == 200) {
            responseData = request.response;
            changeVideo();
        }
    }
    request.open("GET", "ajax.json");
    request.responseType = "json";
    request.send(null);
}

function changeVideo() {
    if (responseData) {
        titleArea.innerHTML = responseData[number].title;
        contentArea.innerHTML = responseData[number].content;
        videoArea.setAttribute("src", responseData[number].url);
        number = (number + 1) % responseData.length;
    }
}

button.addEventListener('click', changeVideo);

window.onload = getData;