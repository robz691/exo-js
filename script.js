const firstli = document.querySelector('li')
console.log(firstli)
const secondLi = document.querySelector('.supertitle')
console.log(secondLi)
const lastLi = document.querySelector('#lasttitle')
console.log(lastLi)

const allLi = document.querySelectorAll('li')
allLi.forEach(titre => {
    console.log(titre.textContent)
})

firstli.addEventListener('mouseover' , () => {
    firstli.textContent = "Nouveau titre !"
    firstli.classList.toggle('colorRed')
})
