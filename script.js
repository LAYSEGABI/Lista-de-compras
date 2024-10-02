const itens = document.querySelector("ul")
const form = document.querySelector("form")
const input = document.querySelector("#input")
const deleteBtns = document.querySelectorAll(".delete");

form.onsubmit = (event) => {

    event.preventDefault()

    if (input.value === "") {

        alert("Digite um item válido")

    } else {

        const newItem = document.createElement("li")
        const itemName = document.createElement("span")
        const bntDelete = document.createElement("button")
        bntDelete.textContent = "Apagar"
        bntDelete.classList.add("delete")

        let item = input.value;
        itemName.textContent = item;

        newItem.appendChild(itemName)
        newItem.appendChild(bntDelete)
        itens.appendChild(newItem)

        input.value = ""


        bntDelete.addEventListener("click", (event) => {
            if (confirm(`O item ${item} será apagado`)) {
                event.target.closest("li").remove();
            }
        });
        
    }
}


