const gases = document.querySelectorAll('.station')
gases.forEach((gas) => {
    gas.addEventListener('click', () => {
        if (gas.classList.contains('changeBg')) {
            gas.classList.remove('changeBg')
        } else {
            gases.forEach((gas1) => {
                gas1.classList.remove('changeBg')
            })
            gas.classList.add('changeBg')
        }
    })
})
let totalLiters = document.querySelector("#amount");
const vat = 5
const choosePetrol = (type) => {
    let petrolType = document.querySelector(`#${type}`)
    let priceForLiter = document.getElementById(type)
    if (type) {
        document.querySelector('#typePetrol').textContent = type
        document.querySelector('#pricePetrol').textContent = `${petrolType.value}$`
        document.querySelector('#totalPricePetrol').textContent = `${calculated(priceForLiter.value, totalLiters.value).toFixed(2)}$`
        document.querySelector('#vatPetrol').textContent = `VAT: ${vat}% (${totalLiters.value * petrolType.value * (vat / 100)}  $)`
        document.querySelector('#litersPetrol').textContent = `${totalLiters.value}L`
    }
}
const calculated = (priceForLiter, totalLiter) => (priceForLiter * totalLiter) + ((vat / 100) * priceForLiter * totalLiter)

