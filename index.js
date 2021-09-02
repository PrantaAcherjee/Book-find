const bookCollection = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    const errorDiv = document.getElementById('errors');
    // console.log(searchText);
    searchField.value = '';
    if (searchText == '') {
        errorDiv.innerText = 'Search can not be empty !!'
    }

    const url = `http://openlibrary.org/search.json?q=${searchText}`
    // console.log(url);

    fetch(url)
        .then(responsive => responsive.json())
        .then(data => displaySearchResult(data.docs))

}
const displaySearchResult = books => {
    const searchResult = document.getElementById('search-result');
    searchResult.innerHTML = '';

    books.forEach(book => {
        // console.log(book);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
                <div onclick="loadMovieDetail" class="card h-100">
                <img src="" class="card-img-top" alt="">
                <div class="card-body">
                <h5 class="card-title"> Title: ${book.title}</h5>
                <h6 class="card-title">Author: ${book.author_name}</h6>
                <p class="card-text">First published: ${book.first_publish_year}</p>
                </div>
                </div>
        `;
        searchResult.appendChild(div);


    })

}
