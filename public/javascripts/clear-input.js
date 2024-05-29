const searchInputText = document.getElementById('search-input');
const clearButton = document.getElementById('clear-search-input');

clearButton.addEventListener('click', function() {
    searchInputText.value = ''; // Inputu temizle
    searchInputText.focus(); // Inputa odaklan
});

// Input alanında bir değişiklik olduğunda "X" işaretini göster veya gizle
searchInputText.addEventListener('input', function() {
    if (searchInputText.value !== '') {
        clearButton.style.display = 'block';
    } else {
        clearButton.style.display = 'none';
    }
});
