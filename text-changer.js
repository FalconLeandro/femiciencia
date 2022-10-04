const cards = document.querySelectorAll('.team_member');
console.log(cards);
const cardsFront = document.querySelectorAll('.card-front');
const cardsBack = document.querySelectorAll('.card-back');
console.log(cardsBack);

cards.forEach(item => {
    item.addEventListener('click', event => {
        cardsFront.forEach(p1 => {
            p1.classList.toggle("card-front-show");
        });
        cardsBack.forEach(p2 => {
            p2.classList.toggle("card-back-show");
        })
        
        
    })
});

// card.forEach(item)addEventListener("click",function (event) {
//         nabilaFront.classList.toggle("card-front");
//         nabilaBack.classList.toggle("card-back");
//     },
//     false
// );