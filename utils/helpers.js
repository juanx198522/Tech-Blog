// Export an object containing a single function for formatting dates
module.exports = {
  format_date: (date) => {
    // Create a new Date object from the input date
    const d = new Date(date);

    // Format the date as MM/DD/YYYY
    const formattedDate = `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()}`;

    // Return the formatted date
    return `${formattedDate}`;
  },
};