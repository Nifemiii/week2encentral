const itemId = document.getElementById("itemId");
const itemName = document.getElementById("itemName");
const itemPrice = document.getElementById("itemPrice");
const submitBtn = document.getElementById("submitBtn");
const tableData = document.querySelector('.table');
const removeAll = document.querySelector('.remove-btn');

submitBtn.addEventListener('click', () => {
    const id = itemId.value;
    const name = itemName.value;
    const price = itemPrice.value;

    if (id && name && price) {

        let data = {
            itemId: id,
            itemName: name,
            itemPrice: price
        };

        localStorage.setItem(id, JSON.stringify(data));
        location.reload();
    }
   
});

removeAll.addEventListener('click', () => {
    localStorage.clear();
    location.reload();
});

for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    let value = JSON.parse(localStorage.getItem(key));

    let inputId = value.itemId;
    let inputName = value.itemName;
    let inputPrice = value.itemPrice;

    tableData.innerHTML += `<tr><td>${inputId}</td><td>${inputName}</td><td>$ ${inputPrice}</td></tr>`;

}

if (localStorage.length > 0) {
    removeAll.style.opacity = "1";
}




