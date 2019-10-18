const days = ["Mon", "Tue", "Wed", "Thurs", "Fri", "Sat", "Son"];

// const daysMap = days.map(day => console.log(day));
// const addEmojiDays = days.map(day => `🌻 ${day}`);
// const addEmojiDays = days.map((day, index) => `🌻${index} : ${day}`);

// const add = day => `🌼 ${day}`;
// const addEmojiDays = days.map(day => add);

const add = (day, index) => `🥨${index} ${day}`;
const addEmojiDays = days.map(add);

console.log(addEmojiDays);
