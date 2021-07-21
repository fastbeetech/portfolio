const email = document.querySelector("#email");
const message = document.querySelector("#message");
const contactArea = document.querySelector("#contact");
const Btn = document.querySelector("#btn");

const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  document.querySelector("#btn").classList.add('bg-green-500')
  document.querySelector("#btn")
  .innerHTML = `<span class="flex space-x-3">
                  <img src="https://img.icons8.com/color/48/000000/spinning-circle--v2.png" class="h-5 w-5"/>
                  Sending Message
              </span>`;

  const msgAlert = document.createElement("div");
  let success = document.createTextNode(
    "Your message has been sent, thank you for your message!"
  );
  let empty = document.createTextNode("You need to fill email and message!");

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
    document.querySelector("#btn").classList.add('bg-green-600')
    document.querySelector("#btn").innerHTML = "Submit";

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
        document.querySelector("#btn").classList.add('bg-green-600')
        document.querySelector("#btn").innerHTML = "Submit";
        email.value = "";
        message.value = "";
      });

    return;
  }
});
