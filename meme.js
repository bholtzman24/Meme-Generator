const form = document.querySelector("#form");
const link = document.querySelector("#link");
const header = document.querySelector("#top")
const footer = document.querySelector("#bottom");
const fontSize = document.querySelector("#size");
const fontColor = document.querySelector("#color");
const submit = document.querySelector("#submit");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    const container = document.createElement("div");
    container.classList.add("parent");
    body.append(container);
    const image = document.createElement("img");
    image.classList.add("child");
    image.src = link.value;
    container.append(image);
    const headerElement = document.createElement("div");
    headerElement.classList.add("topChild");
    headerElement.innerText = header.value;
    headerElement.style.fontSize = fontSize.value;
    headerElement.style.color = fontColor.value;
    container.append(headerElement);
    const footerElement = document.createElement("div");
    footerElement.classList.add("bottomChild");
    footerElement.innerText = footer.value;
    footerElement.style.fontSize = fontSize.value;
    footerElement.style.color = fontColor.value;
    container.append(footerElement);
    const secondContainer = document.createElement("div");
    body.append(secondContainer);
    const removeBtn = document.createElement("button");
    removeBtn.innerText = "Remove";
    secondContainer.append(removeBtn);
    form.reset();
    removeBtn.addEventListener("click", function(event) {
        container.remove();
        secondContainer.remove();
    })
})