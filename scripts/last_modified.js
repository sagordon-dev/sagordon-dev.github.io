function getLastModified() {
    var date = document.lastModified;
    document.getElementById('date').textContent = 'Last modified on: ' + date;
}