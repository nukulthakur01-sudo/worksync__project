// ===============================
// WorkSync Dashboard Script
// ===============================

// Welcome Message
window.onload = function () {
    console.log("Welcome to WorkSync Dashboard");
};

// Notification Bell
const bell = document.querySelector(".notification");

if (bell) {
    bell.addEventListener("click", function () {
        alert("🔔 No New Notifications");
    });
}

// Sidebar Menu Active
const menuItems = document.querySelectorAll(".sidebar ul li");

menuItems.forEach((item) => {
    item.addEventListener("click", () => {

        menuItems.forEach((i) => {
            i.classList.remove("active");
        });

        item.classList.add("active");

    });
});

// Card Hover Click
const cards = document.querySelectorAll(".card");

cards.forEach((card) => {

    card.addEventListener("click", () => {

        const title = card.querySelector("p").innerText;

        alert("Opening " + title);

    });

});

// Profile Click
const profile = document.querySelector(".profile");

if (profile) {

    profile.addEventListener("click", () => {

        alert("Employee Profile\n\nName : Sagar\nRole : Flutter Intern");

    });

}

// Current Date
const today = new Date();

console.log(today.toDateString());

// Card Animation
cards.forEach((card, index) => {

    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";

    setTimeout(() => {

        card.style.transition = "0.5s";
        card.style.opacity = "1";
        card.style.transform = "translateY(0px)";

    }, index * 200);

});

// Greeting
const hour = new Date().getHours();

if (hour < 12) {
    console.log("Good Morning");
}
else if (hour < 18) {
    console.log("Good Afternoon");
}
else {
    console.log("Good Evening");
}