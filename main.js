let arr_en = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '!', '@', '#', '$', '%', '&', '?', '-', '+', '=', '~'];

let newPassBtn = document.querySelector(".passwords__btn");
let newPassInput = document.querySelector(".passwords__input");
let recivedPass = document.querySelector(".passwords__reseived-list");
let allPass = JSON.parse(localStorage.getItem("passwords"));
if (allPass === null) {
    allPass = [];
};

console.log(allPass);

if (allPass.length > 0) {
    allPass.map(num => {
        let li2 = document.createElement("li");
        li2.classList = `passwords__item`;
        li2.innerHTML = `${num}`;
        console.log(num);
        recivedPass.appendChild(li2);
        console.log(li2);
    });
};


newPassBtn.addEventListener("click", () => {
    let newPass = "";
    for (let i = 0; i < 25; i++) {
        arr_en = shuffle(arr_en);
        newPass += arr_en[0];
    };

    newPassInput.value = newPass;
    allPass.push(newPass);

    localStorage.setItem("passwords", JSON.stringify(allPass));

    let li = document.createElement("li");
    li.classList = `passwords__item`;
    li.innerHTML = `${newPass}`;
    recivedPass.appendChild(li);

});





function shuffle(array) {
    let currentIndex = array.length,
        temporaryValue, randomIndex;

    while (0 !== currentIndex) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}