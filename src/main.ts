// declaring variables
const message: string = 'hi';

// declaring functions 
const getFullName = (first: string, last: string): string => {
    return first + "" + last;
};

// interfaces - helps us create objects with properties
// helps us enforce properties using entities
// avoid using too little or too many interfaces / entities
// by default all properties are mandatory
// can make a property optional using a ? after the property
// supports code completion

interface UserInterface {
    name: string;
    age: number;
    getMessage(): string
}

const user: UserInterface = {
    name: 'sam',
    age: 26,
    getMessage() {
        return 'hello' + name;
    }
}

const user2: UserInterface = {
    name: 'bob',
    age: 25,
    getMessage() {
        return 'hello' + name;
    }
}
