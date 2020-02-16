// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     roll: [number, string];
// } = { 
//     name: 'Aman',
//     age: 14,
//     hobbies: ['Sports', 'Cooking'],
//     roll: [2, 'Author']
// };

enum Role { ADMIN, READ_ONLY, AUTHOR };

const person = {
    name: 'Aman',
    age: 14,
    hobbies: ['Sports', 'Cooking'],
    roll: Role.ADMIN
};

// person.roll.push('admin');
// person.roll[1] = 10;
if (person.roll === Role.AUTHOR) {
    console.log('is author');
}
