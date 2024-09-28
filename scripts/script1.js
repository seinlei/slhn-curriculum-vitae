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
