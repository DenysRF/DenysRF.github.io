function fill(item, index) {
    document.getElementById(col).innerHTML += "<div class=\"text-center\"><img src=\"" + path + item + ".jpg\" class=\"" + size[index] + "\"></div><p>" + text[index] + "</p>";
}