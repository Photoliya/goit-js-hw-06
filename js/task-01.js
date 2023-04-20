
const itemsList = document.querySelectorAll(".item");
console.log("Number of categories:", itemsList.length);

itemsList.forEach((item, index) => {
    console.log("Category: ", item.querySelector("h2").textContent);
    console.log("Elements:", item.querySelectorAll("ul li").length);
});