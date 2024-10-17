var skillLines = document.querySelectorAll('.skill-line');

for (var i = 0; i < skillLines.length; i++) {
    skillLines[i].addEventListener('click', function() {
        var toggle = this.querySelector('.toggle');
        var skillDetails = this.querySelector('.skill-details');
        
        if (skillDetails.style.display === 'block') {
            skillDetails.style.display = 'none';
            toggle.textContent = '+';
        } else {
            skillDetails.style.display = 'block';
            toggle.textContent = '−';
        }
    });
}

    const items = document.querySelectorAll('.timeline-item');
    let currentIndex = 0;

    // Function to show the current education item and hide the rest
    function showCurrentItem() {
        items.forEach((item, index) => {
            if (index === currentIndex) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }

    // Start the slideshow by showing the first item
    showCurrentItem();

    // Set an interval to switch items every 5 seconds
    setInterval(() => {
        currentIndex = (currentIndex + 1) % items.length;
        showCurrentItem();
    }, 5000); // 5000ms = 5 seconds

