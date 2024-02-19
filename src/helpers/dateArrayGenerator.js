// Function to generate all the dates between two dates

function formatDate(date) {
  const day = String(date.getDate()).padStart(2, "0"); // making date value in two digit format if not.
  const month = String(date.getMonth() + 1).padStart(2, "0"); // making month value in two digit format if it's not
  const year = String(date.getFullYear()).slice(-2); // Get last two digits of the year
  return `${day}/${month}/${year}`;
}

// Function to generate an array of dates from start date to end date
export function generateDateArray(startDate, endDate) {
  const dates = [];
  const currentDate = new Date(startDate); // Start with the provided start date
  const lastDate = new Date(endDate); // End with the provided end date
  while (currentDate <= lastDate) {
    dates.push(formatDate(currentDate)); // Format and push the current date to the array
    currentDate.setDate(currentDate.getDate() + 1); // Move to the next day
  }
  return dates;
}
