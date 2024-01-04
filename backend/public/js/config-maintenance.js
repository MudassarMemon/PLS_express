document.addEventListener('DOMContentLoaded', function() {
    // Filter functionality
    var filterButtons = document.querySelectorAll('.filter-btn');
    var serviceItems = document.querySelectorAll('.service-item');
    let j = 0

    filterButtons.forEach(function(btn) {
        if (j == 0) {
            btn.children[0].style.color = '#00D1FF';
            j++;
        }
        

        btn.addEventListener('click', function() {
            var filter = this.getAttribute('data-filter');
            filterButtons.forEach(function(category) {
                category.children[0].style.color = 'white'
            })
            this.children[0].style.color = '#00D1FF'
            
            let i = 0
            serviceItems.forEach(function(item) {
                if (item.getAttribute('data-category') === filter) {
                    item.style.display = 'flex';
                    if (i == 0){
                        item.children[0].src = item.children[0].getAttribute('data-blue-src')

                        var title = item.getAttribute('data-title');
                        var description = item.getAttribute('data-description');
                        var imageUrl = item.getAttribute('data-image-url');
            
                        document.getElementById('serviceTitle').textContent = title;
                        document.getElementById('serviceDescription').textContent = description;
                        document.getElementById('serviceImage').src = imageUrl;
            
                        // Show the service detail view
                        document.querySelector('.service-detail').style.display = 'block';

                        i++
                    } else {
                        item.children[0].src = item.children[0].getAttribute('data-default-src')
                    }
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Update service detail view
    serviceItems.forEach(function(item) {
        item.addEventListener('click', function() {
            var title = this.getAttribute('data-title');
            var description = this.getAttribute('data-description');
            var imageUrl = this.getAttribute('data-image-url');

            document.getElementById('serviceTitle').textContent = title;
            document.getElementById('serviceDescription').textContent = description;
            document.getElementById('serviceImage').src = imageUrl;

            // Show the service detail view
            document.querySelector('.service-detail').style.display = 'block';
        });
    });

    document.querySelectorAll('.service-icon').forEach(function(icon) {
        if (j == 1){
            icon.src = icon.getAttribute('data-blue-src');
            j++;
        }
        icon.addEventListener('click', function() {
            // Reset all icons to their default state
            document.querySelectorAll('.service-icon').forEach(function(otherIcon) {
                otherIcon.src = otherIcon.getAttribute('data-default-src');
            });
            
            // Set the clicked icon to its blue version
            this.src = this.getAttribute('data-blue-src');
        });
    });
});