let textCode = document.querySelector(".codeText");
let textView = document.querySelector(".view");

textCode.addEventListener("keyup", () => {
    textView.innerHTML = "";
    let code = textCode.value;

    textView.insertAdjacentHTML("afterbegin", code);
});

