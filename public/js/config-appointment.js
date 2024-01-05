document.addEventListener("DOMContentLoaded", function () {
    const nextButton = document.getElementById("next-button");
    const backButton = document.getElementById("back-button");
    const form = document.getElementById("two-step-form");
    const freeAssessment = document.getElementById("free-assessment");
    const stepOneValidate = document.querySelector(".step_one_validate");
    const apptStepTwo = document.querySelector(".appt-step-2");
    const apptStepOneValues = document.querySelector(".appt-step-1-values");
    const mobilePostal = document.querySelector("#postal-code-mobile");
    const desktopPostal = document.querySelector("#postal-code");

    if (window.getComputedStyle(mobilePostal).display === 'none') {
        desktopPostal.required = true;
        mobilePostal.required = false;
    } else {
        desktopPostal.required = false;
        mobilePostal.required = true;
    }

    nextButton.addEventListener("click", function () {
        // Validate the Step 1 fields here
        const service = document.getElementById("service").value;

        if (!service && !freeAssessment.checked) {
            stepOneValidate.style.display = "block"
            return;
        } else {
            stepOneValidate.style.display = "none"
        }

        // If all validations pass, proceed to Step 2
        form.querySelector(".form-step-one").style.display = "none";
        form.querySelector(".form-step-two").style.display = "block";
        apptStepTwo.style.borderColor = "#00D1FF";
        apptStepOneValues.innerHTML = service
        apptStepOneValues.style.display = "block"
    });

    backButton.addEventListener("click", function () {
        // If all validations pass, proceed to Step 2
        form.querySelector(".form-step-one").style.display = "block";
        form.querySelector(".form-step-two").style.display = "none";
        apptStepTwo.style.borderColor = "#262D33";
    });

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        let formData = new FormData(this);
    
        fetch('/appointment', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams(formData).toString()
        })
        .then(response => {
            if (response.ok) {
                // Handle success
            } else {
                // Handle error
            }
        })
        .catch(error => console.error('Error:', error));
    });
});
