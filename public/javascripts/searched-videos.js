function handleSearch() {
    const query = document.getElementById("search-input").value.trim();

    if (query === "") {
        alert("Lütfen bir arama terimi girin");
        return;
    }

    fetch('/search-video', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ query: query })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        if (data.success) {
            window.location.href = '/searched-videos';
        }
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
}
