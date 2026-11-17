document.getElementById('task-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Capture input values
    const taskName = document.getElementById('task-name').value;
    const effort = document.getElementById('effort').value;

    // Update the UI to simulate progress
    const calendarView = document.getElementById('calendar-view');
    calendarView.innerHTML = `
        <div style="background: #e9ecef; padding: 10px; border-radius: 4px; width: 100%;">
            <strong>Scheduled:</strong> ${taskName} <br>
            <em>Allocating ${effort} hours of focus time...</em>
        </div>
    `;
    
    // Clear the form
    e.target.reset();
});
