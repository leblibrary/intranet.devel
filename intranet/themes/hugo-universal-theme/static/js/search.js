document.getElementById('searchform').onsubmit = function() {
    window.location = 'http://www.google.com/search?q=site:localhost:1313' + document.getElementById('test').value;
    return false;
}
