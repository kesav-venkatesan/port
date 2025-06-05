const hideButton = document.querySelector(".view-button");
const backSide = document.querySelector(".main");

const c1 = document.querySelector(".c1");
const c2 = document.querySelector(".c2");
const c3 = document.querySelector(".c3");
const c4 = document.querySelector(".c4");

const C1 = document.querySelector(".C1");
const C2 = document.querySelector(".C2");
const C3 = document.querySelector(".C3");
const C4 = document.querySelector(".C4");

hideButton.addEventListener("click", () => {
  backSide.classList.toggle("hide_back");
});

c1.addEventListener("click", () => {
  C1.classList.remove("content-dont-display");
  C2.classList.add("content-dont-display");
  C3.classList.add("content-dont-display");
  C4.classList.add("content-dont-display");
});

c2.addEventListener("click", () => {
  C2.classList.remove("content-dont-display");
  C1.classList.add("content-dont-display");
  C3.classList.add("content-dont-display");
  C4.classList.add("content-dont-display");
});

c3.addEventListener("click", () => {
  C3.classList.remove("content-dont-display");
  C2.classList.add("content-dont-display");
  C1.classList.add("content-dont-display");
  C4.classList.add("content-dont-display");
});

c4.addEventListener("click", () => {
  C4.classList.remove("content-dont-display");
  C2.classList.add("content-dont-display");
  C3.classList.add("content-dont-display");
  C1.classList.add("content-dont-display");
});



document.getElementById("sendButton").addEventListener("click", function () {
document.getElementById("sendButton").addEventListener("click", function () {
  const from = document.getElementById("fromContent").value.trim();
  const subject = document.getElementById("subjectContent").value.trim();
  const body = document.getElementById("emailContent").value.trim();

  if (!from || !subject || !body) {
    alert("Please fill in all fields before sending.");
    return;
  }

  const to = "kesav.officialmail@gmail.com";
  const encodedSubject = encodeURIComponent(subject);
  const encodedBody = encodeURIComponent("From: " + from + "\n\n" + body);

  // Detect domain of sender's email
  const domain = from.split("@")[1]?.toLowerCase();

  if (domain.includes("gmail.com")) {
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${encodedSubject}&body=${encodedBody}`;
    window.open(gmailLink, "_blank");
  } else if (
    domain.includes("outlook.com") ||
    domain.includes("hotmail.com") ||
    domain.includes("live.com")
  ) {
    const outlookLink = `https://outlook.office.com/mail/deeplink/compose?to=${to}&subject=${encodedSubject}&body=${encodedBody}`;
    window.open(outlookLink, "_blank");
  } else {
    // Default fallback to Gmail or alert
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${encodedSubject}&body=${encodedBody}`;
    window.open(gmailLink, "_blank");
  }

 document.getElementById("fromContent").value = "";
document.getElementById("subjectContent").value = "";
document.getElementById("emailContent").value = "";
})


})