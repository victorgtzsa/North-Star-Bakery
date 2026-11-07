const holidayProducts = {
    christmas: {
        product: "Gingerbread Cookies",
        description: "A holiday favorite decorated with festive icing."
    },
    oktoberfest: {
        product: "German Chocolate Cake",
        description: "Rich chocolate cake perfect for Oktoberfest celebrations."
    },
    cinco: {
        product: "Tres Leches Cake",
        description: "A moist and creamy cake popular during Cinco de Mayo festivities."
    }
};

function displayHolidayProduct() {

    const selectedHoliday =
        document.getElementById("holiday").value;

    const result =
        document.getElementById("holiday-result");

    if (selectedHoliday === "") {
        result.innerHTML = "";
        return;
    }

    const item = holidayProducts[selectedHoliday];

    result.innerHTML =
        `<h3>${item.product}</h3>
         <p>${item.description}</p>`;
}

document
    .getElementById("holiday")
    .addEventListener("change", displayHolidayProduct);

    document.querySelector("form")
.addEventListener("submit", validateForm);

function validateForm(event) {

    const email =
        document.getElementById("email").value;

    const error =
        document.getElementById("emailError");

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    error.textContent = "";

    if (!emailPattern.test(email)) {

        event.preventDefault();

        error.textContent =
            "Please enter a valid email address.";

        return false;
    }

    return true;
}