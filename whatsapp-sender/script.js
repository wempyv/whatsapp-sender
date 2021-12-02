const inputPhoneNumber = document.querySelector(".phone-number");
const inputMessage = document.querySelector(".message");
const btnSendMessage = document.querySelector(".btn-send");

let phoneNumber = "";
let message = "";
let whiteSpaceReplace;

inputPhoneNumber.addEventListener("keyup", function (e) {
  phoneNumber = e.target.value;
  checkFormNull();
});

inputMessage.addEventListener("keyup", function (e) {
  message = e.target.value;
  replaceWhiteSpaceOnMessage();
  checkFormNull();
});

function replaceWhiteSpaceOnMessage() {
  whiteSpaceReplace = message.replace(/ /g, "%20");
}

function checkFormNull() {
  if (phoneNumber === "" || message === "") {
    btnSendMessage.classList.add("btn-disabled");
  } else {
    btnSendMessage.classList.remove("btn-disabled");
  }
}

// Redirect to  https://wa.me/919734652818?text=blablabla
btnSendMessage.addEventListener("click", function () {
  window.open(`https://wa.me/${phoneNumber}?text=${whiteSpaceReplace}`);
});
