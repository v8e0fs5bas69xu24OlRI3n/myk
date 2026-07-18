// =============================
// Purchase Options
// =============================

const radios = document.querySelectorAll('input[name="purchase"]');
const nextButton = document.getElementById("nextButton");

let selectedRadio = null;

// Disable button until an option is selected
nextButton.disabled = true;

radios.forEach(radio => {

    radio.addEventListener("click", function (e) {

        // Clicking the already-selected radio deselects it
        if (selectedRadio === this) {

            this.checked = false;
            selectedRadio = null;
            nextButton.disabled = true;

            return;
        }

        // Select this radio
        selectedRadio = this;

        radios.forEach(r => {
            if (r !== this) {
                r.checked = false;
            }
        });

        this.checked = true;
        nextButton.disabled = false;

    });

});


// =============================
// Next Button
// =============================

nextButton.addEventListener("click", function () {

    if (!selectedRadio) {
        return;
    }

    const url = selectedRadio.dataset.url;

    if (url && url.trim() !== "") {
        window.location.href = url;
    }

});


// =============================
// Keyboard Support
// =============================

document.addEventListener("keydown", function (e) {

    if (e.key === "Enter" && !nextButton.disabled) {
        nextButton.click();
    }

});
