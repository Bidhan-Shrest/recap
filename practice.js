console.log("Hello Word");

// const a = prompt("enter a number");
// if (a % 3 === 0 || a % 7 === 0)(
//     alert (a + " multiple of 3 or 7")

// )
// else(
//     alert (a + " is not multiple of 3 or 7")

// );



// const reverse = (a) => {
//     a = String(a);
    
   
//     return a.split('').reverse().join('');
// }

// console.log(reverse("1234"));

// const car = {
//     name: "volkswagan",
//     model: 2011,
//     age: function () {
//         return 2024 - this.model
//     }
// };

// console.log(car.age());

// const roleA = ["admin" , "manager"];
// const roleB = ["user" , "recep"];

// const checkrole=(role)=>{
//     return  roleB.some((role)=>roleA.includes(role))

// }

// console.log(checkrole(roleA, roleB));

// const people =[
//     {name: "raktim", age: 30},
//     {name: "bidhan", age: 24},
//     {name: "bikram", age: 18}
// ];

// const ascsort = people.sort((a,b)=>a.age-b.age);
// console.log(ascsort);


// const characters = [
//     {
//         name: 'Luke Skywalker',
//         height: 172,
//         mass: 77,
//         eye_color: 'blue',
//         gender: 'male',
//     },
//     {
//         name: 'Darth Vader',
//         height: 202,
//         mass: 136,
//         eye_color: 'yellow',
//         gender: 'male',
//     },
//     {
//         name: 'Leia Organa',
//         height: 150,
//         mass: 49,
//         eye_color: 'brown',
//         gender: 'female',
//     },
//     {
//         name: 'Anakin Skywalker',
//         height: 188,
//         mass: 84,
//         eye_color: 'blue',
//         gender: 'male',
//     },
// ];

// //1. Get array of all names
// const onlynames = characters.map(({ name }) => ({ name }));
// console.log(onlynames);

// //2. Get array of all heights
// const onlyheight = characters.map(({ height }) => ({ height }));
// console.log(onlyheight);


// //3. Get array of objects with just name and height properties
// const onlynameandheight = characters.map(({ name, height }) => ({ [name]: height }));
// console.log(onlynameandheight);


// //4. Get array of all first names
// const f = characters.map((characters) => characters.name.split(" ")[0]);
// console.log(f);


// //***REDUCE***
// //1. Get total mass of all characters
// const totalMass = characters.reduce((acc, character) => acc + character.mass, 0);
// console.log(totalMass);



// //2. Get total height of all characters
// const totalHeight = characters.reduce((acc, character) => acc + character.height,0);
// console.log(totalHeight);


// //3. Get total number of characters by eye color
// const countByEyeColor = characters.reduce((acc, count) => {
//     if (!acc[count.eye_color]) {
//         acc[count.eye_color] = 1;
//     } else {
       
//         acc[count.eye_color]++;
//     }
//     return acc;
// }, {});

// console.log(countByEyeColor);













// //4. Get total number of characters in all the character names

// const nameLengths = characters.map((character) => character.name.length);
// const totalNameCharacters = nameLengths.reduce((accumulator, currentvalue) => accumulator + currentvalue, 0);

// console.log(totalNameCharacters);




const longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
        return text;
    } else {
        return text.substring(0, maxLength) + '...';
    }
}

// Example usage:
const truncatedText = truncateText(longText, 55 );
console.log(truncatedText);
