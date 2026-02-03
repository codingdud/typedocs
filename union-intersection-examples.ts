// ============================================
// UNION (|) and INTERSECTION (&) EXAMPLES
// ============================================

// ============================================
// 1. UNION (|) - "OR" relationship
// ============================================

// --- WITH TYPE ALIAS ---
type StringOrNumber = string | number;

const value1: StringOrNumber = "hello";
const value2: StringOrNumber = 42;
// const value3: StringOrNumber = true; // ❌ Error: boolean not assignable

type Status = "pending" | "success" | "error";
const currentStatus: Status = "success";

// --- WITH INTERFACE (unions of interfaces) ---
interface Cat {
    meow(): void;
    purr(): void;
}

interface Dog {
    bark(): void;
    wag(): void;
}

// Union of interfaces
type Pet = Cat | Dog;

const myPet: Pet = {
    bark: () => console.log("Woof!"),
    wag: () => console.log("Wagging tail")
};

// --- WITHOUT EXPLICIT TYPE (inline) ---
function printId(id: string | number) {
    console.log("ID:", id);
}

printId(101);      // ✅ Works
printId("ABC123"); // ✅ Works

// Type narrowing with unions
function processValue(value: string | number | boolean) {
    if (typeof value === "string") {
        return value.toUpperCase(); // TypeScript knows it's string here
    } else if (typeof value === "number") {
        return value.toFixed(2);    // TypeScript knows it's number here
    } else {
        return value ? "yes" : "no"; // TypeScript knows it's boolean here
    }
}

console.log("Union Examples:");
console.log(processValue("hello"));  // HELLO
console.log(processValue(3.14159));  // 3.14
console.log(processValue(true));     // yes

// ============================================
// 2. INTERSECTION (&) - "AND" relationship
// ============================================

// --- WITH TYPE ALIAS ---
type Person = {
    name: string;
    age: number;
};

type Employee = {
    employeeId: string;
    department: string;
};

// Intersection - combines both types
type EmployeePerson = Person & Employee;

const worker: EmployeePerson = {
    name: "John Doe",
    age: 30,
    employeeId: "E12345",
    department: "Engineering"
};

// Multiple intersections
type Address = {
    street: string;
    city: string;
};

type ContactInfo = {
    email: string;
    phone: string;
};

type FullProfile = Person & Address & ContactInfo;

const profile: FullProfile = {
    name: "Jane Smith",
    age: 28,
    street: "123 Main St",
    city: "New York",
    email: "jane@example.com",
    phone: "555-0123"
};

// --- WITH INTERFACE ---
interface Printable {
    print(): void;
}

interface Loggable {
    log(): void;
}

// Intersection of interfaces using type
type PrintableLoggable = Printable & Loggable;

const document: PrintableLoggable = {
    print: () => console.log("Printing..."),
    log: () => console.log("Logging...")
};

// Interfaces can also extend multiple interfaces (similar to intersection)
interface Document extends Printable, Loggable {
    content: string;
}

const myDoc: Document = {
    content: "Hello World",
    print: () => console.log("Print:", myDoc.content),
    log: () => console.log("Log:", myDoc.content)
};

// --- WITHOUT EXPLICIT TYPE (inline) ---
function saveData(data: { id: number } & { name: string } & { timestamp: Date }) {
    console.log(`Saving: ${data.name} with ID ${data.id} at ${data.timestamp}`);
}

saveData({
    id: 1,
    name: "Document",
    timestamp: new Date()
});

// ============================================
// 3. COMBINING UNION & INTERSECTION
// ============================================

type Admin = {
    role: "admin";
    permissions: string[];
};

type User = {
    role: "user";
    username: string;
};

type Guest = {
    role: "guest";
};

// Union of types
type Account = Admin | User | Guest;

// Intersection with common properties
type Timestamped = {
    createdAt: Date;
    updatedAt: Date;
};

type TimestampedAccount = Account & Timestamped;

const adminAccount: TimestampedAccount = {
    role: "admin",
    permissions: ["read", "write", "delete"],
    createdAt: new Date(),
    updatedAt: new Date()
};

const userAccount: TimestampedAccount = {
    role: "user",
    username: "johndoe",
    createdAt: new Date(),
    updatedAt: new Date()
};

// ============================================
// 4. PRACTICAL REAL-WORLD EXAMPLES
// ============================================

// API Response types
type SuccessResponse = {
    status: "success";
    data: any;
};

type ErrorResponse = {
    status: "error";
    error: string;
};

type ApiResponse = SuccessResponse | ErrorResponse;

function handleResponse(response: ApiResponse) {
    if (response.status === "success") {
        console.log("Data:", response.data);
    } else {
        console.error("Error:", response.error);
    }
}

// Database model with metadata
type BaseModel = {
    id: string;
    createdAt: Date;
};

type ProductData = {
    name: string;
    price: number;
    stock: number;
};

type Product = BaseModel & ProductData;

const product: Product = {
    id: "prod-001",
    createdAt: new Date(),
    name: "Laptop",
    price: 999.99,
    stock: 50
};

// ============================================
// 5. UNION vs INTERSECTION COMPARISON
// ============================================

console.log("\n=== UNION vs INTERSECTION ===");

// UNION (|) - value must be ONE of the types
type NumberOrString = number | string;
let unionValue: NumberOrString;
unionValue = 100;        // ✅ OK
unionValue = "text";     // ✅ OK
// unionValue = true;    // ❌ Error

// INTERSECTION (&) - value must have ALL properties
type HasName = { name: string };
type HasAge = { age: number };
type PersonInfo = HasName & HasAge;

const personInfo: PersonInfo = {
    name: "Alice",
    age: 25
    // Must have BOTH name AND age
};

// ============================================
// 6. TYPE vs INTERFACE with UNION & INTERSECTION
// ============================================

// TYPE can use unions directly
type Color = "red" | "green" | "blue";

// INTERFACE cannot use unions directly (need to use type)
// interface Color = "red" | "green" | "blue"; // ❌ Error

// TYPE intersection
type A = { a: string };
type B = { b: number };
type AB = A & B;

// INTERFACE extension (similar to intersection)
interface IA {
    a: string;
}

interface IB {
    b: number;
}

interface IAB extends IA, IB {
    // Has both a and b
}

const obj1: AB = { a: "hello", b: 42 };
const obj2: IAB = { a: "world", b: 100 };

// ============================================
// 7. ADVANCED PATTERNS
// ============================================

// Discriminated Unions (Tagged Unions)
type Circle = {
    kind: "circle";
    radius: number;
};

type Rectangle = {
    kind: "rectangle";
    width: number;
    height: number;
};

type Triangle = {
    kind: "triangle";
    base: number;
    height: number;
};

type Shape = Circle | Rectangle | Triangle;

function calculateArea(shape: Shape): number {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "rectangle":
            return shape.width * shape.height;
        case "triangle":
            return (shape.base * shape.height) / 2;
    }
}

const circle: Shape = { kind: "circle", radius: 5 };
const rectangle: Shape = { kind: "rectangle", width: 10, height: 20 };

console.log("Circle area:", calculateArea(circle));
console.log("Rectangle area:", calculateArea(rectangle));

// Intersection with function types
type Logger = {
    log: (message: string) => void;
};

type ErrorHandler = {
    handleError: (error: Error) => void;
};

type Service = Logger & ErrorHandler & {
    start: () => void;
    stop: () => void;
};

const myService: Service = {
    log: (msg) => console.log(`[LOG] ${msg}`),
    handleError: (err) => console.error(`[ERROR] ${err.message}`),
    start: () => console.log("Service started"),
    stop: () => console.log("Service stopped")
};

console.log("\n=== Service Example ===");
myService.start();
myService.log("Processing data...");
myService.stop();

// ============================================
// SUMMARY
// ============================================
console.log("\n=== SUMMARY ===");
console.log("UNION (|) - OR logic - value can be ONE of several types");
console.log("INTERSECTION (&) - AND logic - value must have ALL properties");
console.log("\nTYPE: Can use both | and & freely");
console.log("INTERFACE: Uses 'extends' for intersection-like behavior");
console.log("INLINE: Can use | and & directly in function parameters");

export {};
