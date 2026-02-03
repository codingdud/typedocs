// ============================================
// THIS IN TYPESCRIPT FUNCTIONS
// ============================================

// ============================================
// 1. BASIC THIS - TypeScript Infers
// ============================================

const user = {
    id: 123,
    admin: false,
    becomeAdmin: function () {
        this.admin = true; // ✅ TypeScript infers 'this' is the user object
    },
};

user.becomeAdmin();
console.log("User is now admin:", user.admin); // true

// ============================================
// 2. EXPLICIT THIS PARAMETER
// ============================================

interface User {
    id: number;
    admin: boolean;
    name: string;
}

interface DB {
    filterUsers(filter: (this: User) => boolean): User[];
}

// Mock database implementation
function getDB(): DB {
    const users: User[] = [
        { id: 1, admin: true, name: "Alice" },
        { id: 2, admin: false, name: "Bob" },
        { id: 3, admin: true, name: "Charlie" },
        { id: 4, admin: false, name: "David" },
    ];

    return {
        filterUsers(filter: (this: User) => boolean): User[] {
            // Call the filter with each user as 'this'
            return users.filter(user => filter.call(user));
        }
    };
}

const db = getDB();

// ✅ CORRECT: Using function expression with explicit 'this'
const admins = db.filterUsers(function (this: User) {
    return this.admin; // 'this' refers to each User
});

console.log("Admins:", admins);
// Output: Admins: [ { id: 1, admin: true, name: 'Alice' }, { id: 3, admin: true, name: 'Charlie' } ]

// ❌ WRONG: Arrow function doesn't bind 'this'
// const adminsWrong = db.filterUsers(() => this.admin); 
// Error: The containing arrow function captures the global value of 'this'

// ============================================
// 3. THIS IN CLASS METHODS
// ============================================

class Handler {
    info: string;

    constructor(info: string) {
        this.info = info;
    }

    // Regular method - 'this' can be lost
    onClickBad(event: Event) {
        console.log(this.info); // 'this' might be undefined!
    }

    // Arrow function property - 'this' is bound
    onClickGood = (event: Event) => {
        console.log(this.info); // ✅ 'this' is always the Handler instance
    }

    // Method with explicit 'this' parameter type
    onClick(this: Handler, event: Event) {
        console.log(this.info); // ✅ TypeScript ensures 'this' is Handler
    }
}

const handler = new Handler("Handler Info");

// Simulating event handling
// handler.onClickBad(new Event('click')); // Might fail if 'this' is lost
handler.onClickGood(new Event('click')); // ✅ Always works

// ============================================
// 4. THIS PARAMETERS IN CALLBACKS
// ============================================

interface ButtonConfig {
    text: string;
    onClick(this: HTMLButtonElement, event: MouseEvent): void;
}

// Function that expects 'this' to be HTMLButtonElement
function setupButton(config: ButtonConfig) {
    const button = document.createElement('button');
    button.textContent = config.text;
    
    // The callback will be called with button as 'this'
    button.onclick = function(this: HTMLButtonElement, event: MouseEvent) {
        config.onClick.call(this, event);
    };
    
    return button;
}

// Usage
const buttonConfig: ButtonConfig = {
    text: "Click Me",
    onClick: function(this: HTMLButtonElement, event: MouseEvent) {
        console.log("Button clicked:", this.textContent);
        this.disabled = true; // 'this' is the button element
    }
};

// ============================================
// 5. THIS WITH METHOD DECORATORS
// ============================================

class Component {
    name: string = "MyComponent";

    // Method that uses 'this'
    render(this: Component): string {
        return `Rendering ${this.name}`;
    }

    // Method with 'this: void' - doesn't use 'this'
    staticRender(this: void): string {
        // Cannot use 'this' here
        return "Static rendering";
    }
}

const component = new Component();
console.log(component.render()); // ✅ Works

// Extract method - causes 'this' to be lost
const render = component.render;
// render(); // ❌ Error: The 'this' context of type 'void' is not assignable to method's 'this' of type 'Component'

const staticRender = component.staticRender;
console.log(staticRender()); // ✅ Works because it doesn't need 'this'

// ============================================
// 6. THIS IN OBJECT METHODS
// ============================================

interface Calculator {
    value: number;
    add(this: Calculator, x: number): Calculator;
    multiply(this: Calculator, x: number): Calculator;
    getValue(this: Calculator): number;
}

const calculator: Calculator = {
    value: 0,
    add(this: Calculator, x: number): Calculator {
        this.value += x;
        return this; // Method chaining
    },
    multiply(this: Calculator, x: number): Calculator {
        this.value *= x;
        return this;
    },
    getValue(this: Calculator): number {
        return this.value;
    }
};

// Method chaining works because 'this' is properly typed
const result = calculator.add(5).multiply(2).add(3).getValue();
console.log("Calculator result:", result); // 13

// ============================================
// 7. THIS WITH DIFFERENT CONTEXTS
// ============================================

interface Animal {
    name: string;
    speak(this: Animal): void;
}

const dog: Animal = {
    name: "Buddy",
    speak: function(this: Animal) {
        console.log(`${this.name} says: Woof!`);
    }
};

const cat: Animal = {
    name: "Whiskers",
    speak: function(this: Animal) {
        console.log(`${this.name} says: Meow!`);
    }
};

dog.speak(); // Buddy says: Woof!
cat.speak(); // Whiskers says: Meow!

// Borrowing method with explicit 'this'
dog.speak.call(cat); // Whiskers says: Woof! (using dog's speak method)

// ============================================
// 8. THIS WITH EVENT HANDLERS
// ============================================

class EventEmitter {
    handlers: Map<string, Array<(this: EventEmitter) => void>> = new Map();

    on(event: string, handler: (this: EventEmitter) => void) {
        if (!this.handlers.has(event)) {
            this.handlers.set(event, []);
        }
        this.handlers.get(event)!.push(handler);
    }

    emit(event: string) {
        const handlers = this.handlers.get(event);
        if (handlers) {
            handlers.forEach(handler => handler.call(this));
        }
    }
}

const emitter = new EventEmitter();

emitter.on("data", function(this: EventEmitter) {
    console.log("Data event fired, handlers count:", this.handlers.size);
});

emitter.emit("data");

// ============================================
// 9. THIS vs ARROW FUNCTIONS
// ============================================

class Timer {
    seconds: number = 0;

    // ❌ Regular function - 'this' is lost in setTimeout
    startBad() {
        setTimeout(function() {
            // this.seconds++; // Error: 'this' is undefined
            console.log("Bad timer");
        }, 1000);
    }

    // ✅ Arrow function - captures 'this' from surrounding context
    startGood() {
        setTimeout(() => {
            this.seconds++; // ✅ 'this' refers to Timer instance
            console.log("Good timer, seconds:", this.seconds);
        }, 1000);
    }

    // ✅ Using .bind() to preserve 'this'
    startWithBind() {
        setTimeout(function(this: Timer) {
            this.seconds++;
            console.log("Bind timer, seconds:", this.seconds);
        }.bind(this), 1000);
    }
}

// ============================================
// 10. THIS WITH GENERIC CONSTRAINTS
// ============================================

interface HasName {
    name: string;
}

function greet<T extends HasName>(this: T): string {
    return `Hello, ${this.name}`;
}

const person = {
    name: "John",
    greet: greet
};

console.log(person.greet()); // Hello, John

// ============================================
// SUMMARY
// ============================================

console.log("\n=== SUMMARY ===");
console.log("1. TypeScript can infer 'this' from context");
console.log("2. Use (this: Type) parameter to explicitly type 'this'");
console.log("3. Arrow functions capture 'this' from surrounding scope");
console.log("4. Regular functions have dynamic 'this' binding");
console.log("5. Use 'this: void' when function shouldn't use 'this'");
console.log("6. .call(), .apply(), .bind() can explicitly set 'this'");

export {};
