function fill(item, index) {
    var col = "images";
    if (index < left) {
    	col = "images";
    } else {
    	col = "images-right";
    }   
    document.getElementById(col).innerHTML += "<img src=\"" + path + item + ".jpg\" class=\"img-fluid\"><p>" + text[index] + "</p>";
}