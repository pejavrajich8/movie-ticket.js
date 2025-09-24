new Date('1'); // Jan 1, 1970
const date2 = new Date(2023, 0, 1); // Jan 1, 2023 (months are 0-indexed)
const date3 = new Date('2023-01-01T00:00:00Z'); // Jan 1, 2023 UTC

console.log(date1.toISOString()); // "1970-01-01T00:00:00.000Z"
console.log(date2.toISOString()); // "2023-01-01T00:00:00.000Z"
console.log(date3.toISOString()); // "2023-01-01T00:00:00.000Z"

// Date manipulation
date2.setFullYear(2024);
date2.setMonth(11); // December
date2.setDate(25); // 25th

console.log(date2.toISOString()); // "2024-12-25T00:00:00.000Z"

// Date comparison
console.log(date2 > date3); // true
console.log(date2.getTime() - date3.getTime()); // Difference in milliseconds

// Formatting dates
console.log(date2.toDateString()); // "Wed Dec 25 2024"
console.log(date2.toLocaleDateString('en-US')); // "12/25/2024"
console.log(date2.toLocaleString('en-GB', { timeZone: 'UTC' })); // "25/12/2024, 00:00:00"

// Working with time zones
const options = { timeZone: 'America/New_York', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
console.log(date2.toLocaleString('en-US', options)); // "December 24, 2024, 07:00 PM" (depending on DST)

// Parsing dates from strings
const parsedDate = new Date(Date.parse('2023-03-15T13:45:00Z'));
console.log(parsedDate.toISOString()); // "2023-03-15T13:45:00.000Z"

// Date arithmetic
const oneWeekLater = new Date(date3);
oneWeekLater.setDate(oneWeekLater.getDate() + 7);
console.log(oneWeekLater.toISOString()); // "2023-01-08T00:00:00.000Z"

const oneMonthEarlier = new Date(date3);
oneMonthEarlier.setMonth(oneMonthEarlier.getMonth() - 1);
console.log(oneMonthEarlier.toISOString()); // "2022-12-01T00:00:00.000Z"

// Getting individual components
console.log(date3.getFullYear()); // 2023
console.log(date3.getMonth()); // 0 (January)
console.log(date3.getDate()); // 1
console.log(date3.getDay()); // 0 (Sunday)
console.log(date3.getHours()); // 0
console.log(date3.getMinutes()); // 0
console.log(date3.getSeconds()); // 0
console.log(date3.getMilliseconds()); // 0

// UTC methods
console.log(date3.getUTCFullYear()); // 2023
console.log(date3.getUTCMonth()); // 0
console.log(date3.getUTCDate()); // 1
console.log(date3.getUTCHours()); // 0
console.log(date3.getUTCMinutes()); // 0
console.log(date3.getUTCSeconds()); // 0
console.log(date3.getUTCMilliseconds()); // 0       