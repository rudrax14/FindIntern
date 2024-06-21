export default function TimeTracker(dateString) {
    const currentDate = new Date();
    const pastDate = new Date(dateString);

    const timeDifference = currentDate - pastDate;
    const secondsDifference = Math.floor(timeDifference / 1000);
    const minutesDifference = Math.floor(secondsDifference / 60);
    const hoursDifference = Math.floor(minutesDifference / 60);
    const daysDifference = Math.floor(hoursDifference / 24);
    const monthsDifference = Math.floor(daysDifference / 30);

    if (monthsDifference > 0) {
        return `${monthsDifference} month${monthsDifference > 1 ? 's' : ''} ago`;
    } else if (daysDifference > 0) {
        return `${daysDifference} day${daysDifference > 1 ? 's' : ''} ago`;
    } else if (hoursDifference > 0) {
        return `${hoursDifference} hour${hoursDifference > 1 ? 's' : ''} ago`;
    } else if (minutesDifference > 0) {
        return `${minutesDifference} minute${minutesDifference > 1 ? 's' : ''} ago`;
    } else {
        return `${secondsDifference} second${secondsDifference > 1 ? 's' : ''} ago`;
    }
}


export function timeAgo(query) {
    // Parse the input datetime string
    const inputTime = new Date(query);
  
    // Get the current time
    const currentTime = new Date();
  
    // Calculate the difference in milliseconds
    const diff = currentTime - inputTime;
  
    // Define time units in milliseconds
    const msPerSecond = 1000;
    const msPerMinute = 60 * msPerSecond;
    const msPerHour = 60 * msPerMinute;
    const msPerDay = 24 * msPerHour;
    const msPerMonth = 30 * msPerDay; // Approximate
    const msPerYear = 365 * msPerDay; // Approximate
  
    let timeAgo;
  
    // Calculate the time difference in a human-readable format
    if (diff < msPerSecond) {
      timeAgo = 'just now';
    } else if (diff < msPerMinute) {
      const seconds = Math.round(diff / msPerSecond);
      timeAgo = `${seconds} s${seconds !== 1 ? '' : ''} ago`;
    } else if (diff < msPerHour) {
      const minutes = Math.round(diff / msPerMinute);
      timeAgo = `${minutes} m${minutes !== 1 ? '' : ''} ago`;
    } else if (diff < msPerDay) {
      const hours = Math.round(diff / msPerHour);
      timeAgo = `${hours} hour${hours !== 1 ? '' : ''} ago`;
    } else if (diff < msPerMonth) {
      const days = Math.round(diff / msPerDay);
      timeAgo = `${days} day${days !== 1 ? '' : ''} ago`;
    } else if (diff < msPerYear) {
      const months = Math.round(diff / msPerMonth);
      timeAgo = `${months} month${months !== 1 ? '' : ''} ago`;
    } else {
      const years = Math.round(diff / msPerYear);
      timeAgo = `${years} year${years !== 1 ? '' : ''} ago`;
    }
  
    return timeAgo;
  }
  
