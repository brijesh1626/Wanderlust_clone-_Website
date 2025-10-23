(() => {
  "use strict";

  const forms = document.querySelectorAll(".needs-validation");

  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          // Stop form from submitting to the server
          event.preventDefault();
          event.stopPropagation();
        }
        // Add Bootstrap's validation classes
        form.classList.add("was-validated");
      },
      false
    );
  });
})();
