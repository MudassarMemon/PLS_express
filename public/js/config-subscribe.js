document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.js-subcribe-form').addEventListener('submit', function(e) {
    e.preventDefault();
    let formData = new FormData(this);

    fetch('/subscribe', {
        method: 'POST',
        // headers: {
        // 'Content-Type': 'application/x-www-form-urlencoded'
        // },
        // body: new URLSearchParams(formData).toString()
        body: formData
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