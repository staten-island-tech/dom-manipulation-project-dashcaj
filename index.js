const DOMSelectors = {
/*     cardHeader: document.querySelector(".cardheader"), */
    header: document.querySelector(".title"),
    button: document.querySelector("button"),
    form: document.querySelector(".form"),
    container: document.querySelector(".container"),
    input: document.querySelector("#input"),
    input2: document.querySelector("#input2")
}

DOMSelectors.container.insertAdjacentHTML("beforeend",
    `<div class="card">
        <img class="pictures1" src="https://tinyurl.com/3t8d6k56" alt="Chicken">
        <div>
        <h2 class="name">gkj</h2>
        </div>
    </div>`
)

DOMSelectors.button.addEventListener("click", function(event){
    event.preventDefault()
    let input = DOMSelectors.input.value;
    let input2 = DOMSelectors.input2.value;
    console.log(input);
    console.log(input2);
})













