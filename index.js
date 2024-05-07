document.addEventListener('DOMContentLoaded', function() {
    document.querySelector("#hidden1").addEventListener("click", function() {
        let hiddenText = document.querySelector("#hiddenText");
        hiddenText.classList.toggle("visible"); // Changes #hiddenText to be the oppisite visibility
    });
});
