document.addEventListener('DOMContentLoaded', function() {
    const monthYearDisplay = document.getElementById('month-year');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const daysContainer = document.getElementById('days');
  
    let currentDate = new Date();
  
    function renderCalendar() {
        daysContainer.innerHTML = ''; // Clear the previous dates
      
        let lastDayOfTheMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
        let firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
        let today = new Date();
      
        // Fill the empty spaces before the first day of the month
        for (let i = 0; i < firstDayOfMonth; i++) {
          daysContainer.innerHTML += '<div></div>';
        }
      
        // Fill in the days of the month
        for (let i = 1; i <= lastDayOfTheMonth; i++) {
          let dateDiv = document.createElement('div');
          dateDiv.textContent = i;
          if (i === today.getDate() && currentDate.getMonth() === today.getMonth() && currentDate.getFullYear() === today.getFullYear()) {
            dateDiv.classList.add('highlighted');
          }
          dateDiv.addEventListener('click', function() {
            document.querySelectorAll('.days div').forEach(function(elem) {
              elem.classList.remove('highlighted');
            });
            dateDiv.classList.add('highlighted');
          });
          daysContainer.appendChild(dateDiv);
        }
      
        monthYearDisplay.textContent = currentDate.toLocaleDateString('default', { month: 'long', year: 'numeric' });
      }
  
    prevButton.onclick = () => {
      currentDate.setMonth(currentDate.getMonth() - 1);
      renderCalendar();
    };
  
    nextButton.onclick = () => {
      currentDate.setMonth(currentDate.getMonth() + 1);
      renderCalendar();
    };
  
    renderCalendar(); // Initial call to populate the calendar

    const timeSlots = document.querySelectorAll('.time-slot');

    timeSlots.forEach(slot => {
      slot.addEventListener('click', function() {
        timeSlots.forEach(s => s.classList.remove('active')); // Remove active class from all time slots
        slot.classList.add('active'); // Add active class to the clicked time slot
        // Perform any additional actions such as updating a form input or displaying the selected time
      });
    });
  });
  