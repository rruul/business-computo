const btnIcon = document.getElementById('iconSearch')
const inputSearch = document.getElementById('inputSearch')
const businessCard = document.getElementById('businessCard').content
const businessContainer = document.getElementById('business')
const fragment = document.createDocumentFragment()
const infoModal = document.getElementById('modal').content
const modalContainer = document.getElementById('info')
const modal = document.getElementById("modalMostrar");


let business = []

btnIcon.addEventListener('click', async() => {
    if (inputSearch.value.trim().length > 0){
        business = await search(inputSearch.value)
        console.log('@@@ business => ', business)
        await dibujarNegocios(business)
        window.location.href = '#business'
        console.log('@@@ business => ', business)
    }
})


const dibujarNegocios = negocios => {
    businessContainer.innerHTML = ''
    negocios.data.forEach((item) => {
        businessCard.querySelector('img').setAttribute('src', item.photos_sample[0].photo_url ? item.photos_sample[0].photo_url : '../images/NA.jpg')
        businessCard.querySelector('p').textContent = item.name || 'N/A'
        businessCard.querySelector('.tipo').textContent = item.type
        businessCard.querySelector('button').dataset.id = item.business_id
        const clone = businessCard.cloneNode(true)
        const btnInfo = clone.querySelector('button')
        btnInfo.addEventListener ('click', () => {
            detalles(item);
        })
        
        fragment.appendChild(clone)
    })
    businessContainer.appendChild(fragment)
}

const detalles = item => {
    console.log(item)
        modalContainer.innerHTML = ''
        infoModal.querySelector('img').setAttribute('src', item.photos_sample[0].photo_url ? item.photos_sample[0].photo_url : '../images/NA.jpg')
        infoModal.querySelector('.nombre').textContent = item.name
        infoModal.querySelector('.direccion').textContent = item.address
        infoModal.querySelector('.codigo').textContent = item.zipcode
        infoModal.querySelector('.estrellas').textContent = item.hotel_stars
        infoModal.querySelector('.reviews').textContent = item.hotel_review_summary.Rooms.score
        const clone = infoModal.cloneNode(true)
        const cerrar = clone.querySelector('span')
        cerrar.addEventListener('click', () => {
            modalContainer.innerHTML = ''
        })

        fragment.appendChild(clone)
        modalContainer.appendChild(fragment)
}
