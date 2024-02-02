const btnIcon = document.getElementById('iconSearch')
const inputSearch = document.getElementById('inputSearch')
let business = []

btnIcon.addEventListener('click', async() => {
    if (inputSearch.value.trim().length > 0){
        business = await search(inputSearch.value)
        console.log('@@@ business => ', business)
    }
})