// // declaring variables
// const message: string = 'hi';
// // declaring functions 
// const getFullName = (first: string, last: string): string => {
//     return first + "" + last;
// };
// // interfaces - helps us create objects with properties
// // helps us enforce properties using entities
// // avoid using too little or too many interfaces / entities
// // by default all properties are mandatory
// // can make a property optional using a ? after the property
// // supports code completion
// interface UserInterface {
//     name: string;
//     age: number;
//     getMessage(): string
// }
// const user: UserInterface = {
//     name: 'sam',
//     age: 26,
//     getMessage() {
//         return 'hello' + name;
//     }
// }
// const user2: UserInterface = {
//     name: 'bob',
//     age: 25,
//     getMessage() {
//         return 'hello' + name;
//     }
// }
// // Union operator 
// const a: string | null = '1'
// interface CarInterface  {
//     model: string;
//     wheels: number
// }
// const car: CarInterface | null = null;
// //type aliases
// type Species = string;
// interface animal {
//     species: Species
//     name: string
//     color: string
// }
// type PopularTag = string;
// type MaybePopularTag = PopularTag | null;
// const popularTags: PopularTag[] = ['coffee', 'music']; 
// const dragonsTag: MaybePopularTag = 'dragon';
// //any/void/never unkown
// //when u dont return something a function's type is void
// const doSomething = (): void => {
//     console.log('doSomething')
// }
// //any type - avoid using this because it defeats the whole purpose of typescript
// // never - function that wont be executed
// // type unkown and type conversion / assertion
// let vAny: any = 10;
// let vUnkown: unknown = 10;
// let s1: string = vAny;
// let s2: string = vUnkown as string;
var someElement = document.querySelector('.foo');
someElement.addEventListener('blur', function (event) {
    var target = event.target;
    console.log('event', target.value);
});
