
function updateTime() {
    const now = new Date();

    // Get the current date and format it
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    const formattedDate = now.toLocaleDateString('en-US', options);

    // Get the current time
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const formattedTime = `${hours}:${minutes}`;

    // Get the day name
    // const dayName = now.toLocaleDateString('en-US', { weekday: 'short' });

    // Update the HTML elements
    document.getElementById('date').textContent = formattedDate;
    document.getElementById('time').textContent = formattedTime;

    // Schedule the function to run again in 1 second (1000 milliseconds)
    setTimeout(updateTime, 1000);
}

updateTime();
