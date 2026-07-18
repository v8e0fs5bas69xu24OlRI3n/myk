// ===============================
// Domain Lander
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    const radios = document.querySelectorAll('input[name="purchase"]');
    const nextButton = document.getElementById("nextButton");

    let selected = null;

    // Disable button until an option is selected
    nextButton.disabled = true;

    // -------------------------------
    // Select / Deselect Radio Buttons
    // -------------------------------

    radios.forEach(radio => {

        radio.addEventListener("click", function (e) {

            // Prevent the browser's default radio behaviour
            e.preventDefault();

            // If clicking the selected radio, deselect it
            if (selected === this) {

                this.checked = false;
                selected = null;

                nextButton.disabled = true;

                return;
            }

            // Otherwise deselect all radios
            radios.forEach(r => r.checked = false);

            // Select clicked radio
            this.checked = true;
            selected = this;

            nextButton.disabled = false;

        });

    });

    // -------------------------------
    // Next Button
    // -------------------------------

    nextButton.addEventListener("click", () => {

        if (!selected)
            return;

        const url = selected.dataset.url;

        if (url && url.trim() !== "") {

            window.location.href = url;

        }

    });

    // -------------------------------
    // Keyboard Support
    // -------------------------------

    document.addEventListener("keydown", e => {

        if (e.key === "Enter" && !nextButton.disabled) {

            nextButton.click();

        }

    });

});
