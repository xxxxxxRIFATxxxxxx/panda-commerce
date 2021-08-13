// // For Test
// console.log("Hello From JS File");

// // For change all h3 tag color
// const h3List = document.getElementsByTagName("h3");
// for (h3 of h3List) {
//     h3.style.color = "lightblue";
// };

// // For change background color of Backpack
// document.getElementById("backpack").style.backgroundColor = "#FCEAE8";

// // For change all card border radius
// const cards = document.getElementsByClassName("card");
// for (card of cards) {
//     card.style.borderRadius = "30px";
// };

// // For remove card
// const buyNowBtnList = document.getElementsByClassName("buy-now-button");
// for (buyNowBtn of buyNowBtnList) {
//     buyNowBtn.addEventListener("click", function (event) {
//         if (event.target.innerText === "BUY NOW >>") {
//             event.target.parentElement.parentElement.parentElement.removeChild(event.target.parentElement.parentElement);
//         };
//     });
// };

// // For Handle Submit Button 
// const submitBtn = document.getElementById("submitBtn");
// submitBtn.setAttribute("disabled", "true");

// document.getElementById("emailBox").addEventListener("change", function (event) {
//     if (event.target.value === "email") {
//         submitBtn.removeAttribute("disabled")
//     }

//     else {
//         submitBtn.setAttribute("disabled", "true");
//     };
// });

// document.getElementById("emailBox").addEventListener("keyup", function (event) {
//     if (event.target.value === "email") {
//         submitBtn.removeAttribute("disabled")
//     }

//     else {
//         submitBtn.setAttribute("disabled", "true");
//     };
// });

// // For Change Card Image
// const cardsImg = document.getElementsByClassName("card-img-top");
// for (cardImage of cardsImg) {
//     cardImage.addEventListener("mouseover", function () {
//         cardImage.src = "../images/cartoon.png";
//     });
// };

// // For double click change contact background color 
// document.getElementById("contact").addEventListener("dblclick", function (event) {
//     event.target.style.backgroundColor = "lightgray";
// });