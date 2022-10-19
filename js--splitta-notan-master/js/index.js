        const summan = document.getElementById("sum");
        const friends = document.getElementById("numberOfFriends");
        const tips = document.getElementById("tip");
        const button = document.querySelector(".form__button");
        const section = document.getElementById("showSum");

        button.addEventListener("click", calculate);


function calculate() {
        const totalAmount = parseInt(summan.value) + (parseInt(tips.value) / 100) * parseInt(summan.value);
        const individualAmount = totalAmount / parseInt(friends.value);
        document.getElementById("result").innerHTML = individualAmount;
        section.classList.toggle("hide");
    }
    