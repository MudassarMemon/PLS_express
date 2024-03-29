document.addEventListener('DOMContentLoaded', function() {
    let subscribeButton = document.querySelector('#subscribe-btn')

    document.querySelector('.js-subcribe-form').addEventListener('submit', function(e) {
    e.preventDefault();
    let formData = new FormData(this);
    subscribeButton.innerHTML = "Subscribed!"
    subscribeButton.disabled = true;
    
    fetch('/subscribe', {
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