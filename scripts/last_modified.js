function getLastModified() {
    var date = document.lastModified;
    document.getElementById("date").innerHTML = "Last modified on: " + date;
}