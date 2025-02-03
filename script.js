// JSON string
const jsonString = '{"name": "John", "age": 30, "city": "New York"}';
// Parse JSON string into a JavaScript object
const jsonObject = JSON.parse(jsonString);
console.log(jsonObject.name); // Output: John
console.log(jsonObject.age); // Output: 30
// Convert JavaScript object back to JSON string
const newJsonString = JSON.stringify(jsonObject);
console.log(newJsonString); // Output: {"name":"John","age":30,"city":"New York"}