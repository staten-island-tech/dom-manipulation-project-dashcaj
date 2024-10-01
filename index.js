

const DOMSelectors = {
    header: document.querySelector("h1"),
    item: document.querySelectorAll("li"),
    cardHeader: document.querySelector(".cardheader"),
    button: document.querySelector("btn")
}
let student = {
    name: "bruh",
    age: 15,
    gf: true,
}

console.log(DOMSelectors.header)
DOMSelectors.button.addEventListener("click", function(event){
    console.log(event.target.parentElement)
    event.target.parentElement.style.backgroundColor = "red";
})











