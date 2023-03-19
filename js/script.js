const listFruits = ["mela", "pera", "kiwi", "pesca", "melone"];

let fruits = 0;
let shopList = "";
let ulList = document.getElementById("list");

while (fruits < listFruits.length -1) {
    console.log(listFruits[fruits]);
    let li = `<li>${listFruits[fruits]}</li>`;
    shopList += li;
    fruits++;
}
ulList.innerHTML = shopList;
console.log(shopList);

