let shoppingListItems = ["milk", "eggs", "bread"]
let listElement = document.getElementById("shopping-list-items");



shoppingListItems.forEach((item) => {
    console.log(item)
    let itemElement = document.createElement("li");
    itemElement.innerText = item;
    listElement.appendChild(itemElement);
});

function updateItems() {
    let listElement = document.getElementById("shopping-list-items");
    listElement.innerHTML = "";
    shoppingListItems.forEach((item) => {
        let itemElement = document.createElement("li");
        itemElement.innerText = item;
        listElement.appendChild(itemElement);
    });
}


function addItem() {
    let item = document.getElementById("new-item-text");
    shoppingListItems.push(item.value);
    console.log(shoppingListItems);
    updateItems();

    item.value = "";
    // document.getElementById("new-item-text").value = "";
}

function clearItems() {
    shoppingListItems = [];
    updateItems();
}
