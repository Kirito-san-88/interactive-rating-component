document.addEventListener("DOMContentLoaded", () => {

    let inputRating = document.querySelectorAll(".input"); // get all input
    let button = document.getElementById("button"); // button submit
    let spanRating = document.getElementById("rating"); // span where rating will be displayed
    let endRating = document.querySelector(".end-rating");// for display the thank you card
    let startRating = document.querySelector(".start-rating");

    for (let i = 0; i < inputRating.length; i++) {
        inputRating[i].addEventListener('click', () => {
            let rating = inputRating[i].innerHTML;

            inputRating.forEach(inputRating => {
                inputRating.classList.contains("select");
               inputRating.classList.remove("select");
            });
                
            
            inputRating[i].classList.add("select");

            button.addEventListener('click', () => {
                startRating.style.display = "none";
                endRating.style.display = "block";
                spanRating.innerHTML = rating;
            });
        });
    };
});   