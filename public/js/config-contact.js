document.addEventListener('DOMContentLoaded', function() {
    let contactButton = document.querySelector('#send-message')

    document.querySelector('.js-contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    let formData = new FormData(this);
    contactButton.innerHTML = "Message Sent!"
    contactButton.disabled = true;

    fetch('/contact', {
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