function createElement(data = String) {
    var paragraph = document.createElement('p');
    paragraph.textContent = data;
    document.body.appendChild(paragraph);
}

function queryWikipedia(callback) {
    var xhr = new XMLHttpRequest();

    var url = "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*";

    xhr.open("GET", url, true);

    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var response = JSON.parse(xhr.responseText);

            var pageContent = response.query.pages[Object.keys(response.query.pages)[0]].extract;
            callback(pageContent);
        }
    };
    xhr.send();
}

queryWikipedia(createElement);