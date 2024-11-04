const DOMSelectors = {
    header: document.querySelector(".title"),
    button: document.querySelector("button"),
    container: document.querySelector(".container"),
    inputname: document.getElementById("inputname"),
    inputpos: document.getElementById("inputpos"),
    inputimg: document.getElementById("input-img"),
    form: document.getElementById('hello'),
};

function handleFormSubmit(event) {
    event.preventDefault();
    const inputs = {
        name: DOMSelectors.inputname.value,
        position: DOMSelectors.inputpos.value,
        image: DOMSelectors.inputimg.value
    };
    console.log(inputs.name, inputs.position, inputs.image);
    createCard(inputs);
    clearForm();
}

function createCard({name, position, image}) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
<div class="box">
        <h2>${name}</h2>
        <p>${position}</p>
        <img class="pictures1" src="${image}" alt="${name}">
        <div>
        <button class="deletebtn">Delete</button>
        </div>
</div>
    `;












    

    const deleteButton = card.querySelector('.deletebtn');
    deleteButton.addEventListener('click', () => {
        card.remove();
    });
}

function clearForm() {
    DOMSelectors.inputname.value = '';
    DOMSelectors.inputpos.value = '';
    DOMSelectors.inputimg.value = '';
}

DOMSelectors.form.addEventListener('submit', handleFormSubmit);


/* let image = DOMSelectors.inputimg

DOMSelectors.container.insertAdjacentHTML("beforeend",`
    <div class="card">
        <h2> ${} </h2>
        <img src="${}" alt="Image" class ="image">
    
    </div>;
`
)
 */














