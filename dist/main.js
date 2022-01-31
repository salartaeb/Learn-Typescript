// // declaring variables
// const message: string = 'hi';
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
// const someElement = document.querySelector('.foo');
// someElement.addEventListener('blur', (event) => {
//     const target = event.target as HTMLInputElement;
//     console.log('event', target.value);
//  });
//classes
// interface UserInterface {
//     getFullName();
// }
// class User implements UserInterface {
//     //can make properties private - properties are public by default
//     private firstName: string
//     private lastName: String
//     readonly unchangeableName: string
//     constructor(firstName: string, lastName: string) {
//         this.firstName = firstName;
//         this.lastName = lastName
//     }
//     getFullName(): string {
//         return this.firstName + "" + this.lastName;
//     }
// }
// const user = new User('monster', 'lessons');
// user.getFullName();
// class Admin extends User {
// }
var addId = function (obj) {
    var id = Math.random().toString(16);
    return __assign(__assign({}, obj), { id: id });
};
var user = {
    name: 'Jack',
    data: {
        meta: 'foo'
    },
    meta: 'bar'
};
var user2 = {
    name: 'bob',
    data: ['age', 'email'],
    meta: {}
};
//explicit declarations are easier to read
//Enums
// const status = {
//     notStarted: 0,
//     inProgress: 1,
//     done: 2,
// }
var StatusEnum;
(function (StatusEnum) {
    StatusEnum["NotStarted"] = "notStated";
    StatusEnum["InProgress"] = "inProgress";
    StatusEnum["Done"] = "Done";
})(StatusEnum || (StatusEnum = {}));
var nonStartedStatus = StatusEnum.NotStarted;
nonStartedStatus = StatusEnum.Done;
console.log(StatusEnum.InProgress);
