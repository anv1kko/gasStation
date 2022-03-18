const gases = document.querySelectorAll('.benz-column img')

gases.forEach((gas) => {
    gas.addEventListener('click', () => {
        if (gas.classList.contains('changeColor')) {
            gas.classList.remove('changeColor')
        } else {
            gases.forEach((gas1) => {
                gas1.classList.remove('changeColor')
            })
            gas.classList.add('changeColor')
        }
    })
})

let totalLiters = document.querySelector("#amount");
const vat = 5;

const choosePetrol = (type) => {
    let petrolType = document.querySelector(`#${type}`)
    let priceForLiter = document.getElementById(type)

    if (type) {
        document.getElementById('typePetrol').textContent = `Petrol type: ${type}`
        document.getElementById('pricePetrol').textContent = `Price for one liter: ${petrolType.value}`
        document.getElementById('totalPricePetrol').textContent = `Total price: ${calculated(priceForLiter.value, totalLiters.value).toFixed(2)} $`
        document.getElementById('vatPetrol').textContent = `VAT: ${vat}% (${totalLiters.value * petrolType.value * (vat / 100)}  $)`
        document.getElementById('litersPetrol').textContent = `Total liters: ${totalLiters.value}`
    }

};

const calculated = (priceForLiter, totalLiter) => (priceForLiter * totalLiter) + ((vat / 100) * priceForLiter * totalLiter)

