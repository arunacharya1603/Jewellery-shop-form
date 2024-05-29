// scripts.js
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("customizationForm");
    const steps = form.querySelectorAll(".form-step");
    const nextButton = document.getElementById("nextStep");
    const submitButton = document.getElementById("submitForm");
    let currentStep = 0;

    steps[currentStep].classList.add("active");

    nextButton.addEventListener("click", function () {
        if (!steps[currentStep].querySelector("input, select").checkValidity()) {
            steps[currentStep].querySelector("input, select").reportValidity();
            return;
        }
        steps[currentStep].classList.remove("active");
        currentStep++;
        if (currentStep < steps.length) {
            steps[currentStep].classList.add("active");
            if (currentStep === steps.length - 1) {
                nextButton.style.display = "none";
                submitButton.style.display = "block";
            }
        }
    });

    form.addEventListener("change", function (event) {
        if (event.target.name === "occasion" && event.target.value === "custom") {
            document.getElementById("customOccasion").style.display = "block";
        } else if (event.target.name === "occasion") {
            document.getElementById("customOccasion").style.display = "none";
        }

        if (event.target.name === "outfitMatch" && event.target.value === "yes") {
            document.getElementById("outfitUpload").style.display = "block";
        } else if (event.target.name === "outfitMatch") {
            document.getElementById("outfitUpload").style.display = "none";
        }
    });

    document.getElementById("outfitImage").addEventListener("change", function (event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                const img = document.getElementById("imagePreview");
                img.src = e.target.result;
                img.style.display = "block";
            };
            reader.readAsDataURL(file);
        }
    });
});
