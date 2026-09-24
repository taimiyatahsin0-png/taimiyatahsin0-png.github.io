// Current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Temporary message for links that haven't been added yet
function showMessage(event) {
    event.preventDefault();

    alert(
        "This link will be added soon. You can update it with your LinkedIn profile or email."
    );
}
