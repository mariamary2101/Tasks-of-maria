function callApi() {
    let request = new XMLHttpRequest();
    request.open("GET", "http://localhost:3000/books");
    request.send();
    request.onload = () => {
        if(request.status == 200) {
            console.log(JSON.parse(request.response));
            document.getElementById("response").innerHTML = request.response;
        } else {
            console.log("Error " + request.statusText);
        }
    }
}