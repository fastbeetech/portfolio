const email = document.querySelector("#email");
const message = document.querySelector("#message");
const contactArea = document.querySelector("#contact");

const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const msgAlert = document.createElement("div");
  let success = document.createTextNode(
    "Your message has been sent, we will get back to you shortly!"
  );
  let empty = document.createTextNode("You need to fill email and message!");

  //error will be handled later
  let error = document.createTextNode("You could not be sent try again later!");

  if (
    email.value === null ||
    (email.value === "" && message.value === null) ||
    message.value === ""
  ) {
    console.log("form values are empty");
    msgAlert.appendChild(empty);
    let style = [
      "my-8",
      "py-3",
      "px-3",
      "rounded",
      "border-2",
      "bg-red-200",
      "text-red-900",
      "border-red-400",
      "shadow",
      "w-1/2",
      "mx-auto",
      "text-center",
    ];
    msgAlert.classList.add(...style);
    contactArea.insertBefore(msgAlert, form);
    setTimeout(() => {
      msgAlert.classList.add("hidden");
    }, 6000);

    email.value = "";
    message.value = "";
    return;
  } else {
    console.log([email.value, message.value]);

    let formData = new FormData();
    formData.append("email", email.value);
    formData.append("message", message.value);

    fetch("https://fastbeetech-portfolio.herokuapp.com/api/message", {
      method: "post",
      credentials: "same-origin",
      headers: {
        Accept: "application/json",
        "X-XSRF-TOKEN": document.cookie.split("=")[1].split("%")[0],
      },
      body: formData,
    })
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((data) => {
        console.log(data);
        msgAlert.appendChild(success);
        let style = [
          "my-8",
          "py-3",
          "px-3",
          "rounded",
          "border-2",
          "bg-green-200",
          "text-green-900",
          "border-green-400",
          "shadow",
          "lg:w-1/2",
          "mx-auto",
          "text-center",
        ];
        msgAlert.classList.add(...style);
        contactArea.insertBefore(msgAlert, form);
        setTimeout(() => {
          msgAlert.classList.add("hidden");
        }, 6000);

        email.value = "";
        message.value = "";
      });

    return;
  }
});