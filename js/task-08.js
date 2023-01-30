const formRef = document.querySelector(".login-form");

formRef.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const elements = event.currentTarget.elements;
  const mail = elements.email.value;
  const password = elements.password.value;
  const formData = {
    mail,
    password,
  };
  if (mail === "" || password === "") {
    return alert("You need to fill in all fields");
  }
  console.log(formData);
  formRef.reset();
}
