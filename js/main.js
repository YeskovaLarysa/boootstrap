
const link = document.querySelector(".tel_text");
const popup = document.querySelector(".feedback-form");
const close = popup.querySelector(".modal-close");
const form = popup.querySelector("form");
const inputName = document.querySelector("[type='text']");
const inputTel = document.querySelector("[type='tel']");
const inputEmail = document.querySelector("[type='email']");
const btnSubmit = document.querySelector("[type='submit']");


link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
});


inputName.addEventListener('blur',function (evt) {
  evt.preventDefault();
  inputName.classList.add("form-invalid");
  // console.log(inputName.validity.valid);
});

inputTel.addEventListener('blur',function (evt) {
  evt.preventDefault();
  inputTel.classList.add("form-invalid");
});

inputEmail.addEventListener('blur',function (evt) {
  evt.preventDefault();
  inputEmail.classList.add("form-invalid");
});

// console.log(inputName.validity);
btnSubmit.addEventListener('click',function (evt) {
  evt.preventDefault();
  let name = inputName.value
  let tel = inputTel.value
  let email = inputEmail.value

  if((inputName.validity.valid && inputTel.validity.valid && inputEmail.validity.valid) === true) {
  console.log(` Имя: ${name}
Телефон: ${tel}
Почта: ${email}`);
  popup.classList.remove("modal-show");} else {
    alert('Заполните поля формы со звездочкой');
  }
});

$('#phone').mask('+380(99) 999-99-99');
