function search() {
    var searchTerm = document.getElementById("searchInput").value;

    // Realizar una solicitud GET al servidor backend
    fetch('http://localhost:8080/api/search?term=' + searchTerm)
        .then(response => response.json())
        .then(data => {
            displayResults(data);
        })
        .catch(error => {
            console.error('Error al obtener resultados:', error);
        });
}

function displayResults(results) {
    var resultsDiv = document.getElementById("searchResults");
    resultsDiv.innerHTML = "";

    results.forEach(function(result) {
        var p = document.createElement("p");
        p.textContent = result;
        resultsDiv.appendChild(p);
    });
}

