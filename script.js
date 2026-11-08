const sport = document.querySelector('.esports')
const retratil = document.querySelector('.retratil')
const meio = document.querySelector('.meio')

sport.addEventListener('click', () => {
    if (retratil.style.height === "0px" || retratil.style.height === "") {
        retratil.style.height = "600px";
        meio.style.height = "1800px";
    } else {
        retratil.style.height = "0px";
        meio.style.height = "1200px";    
    }
})