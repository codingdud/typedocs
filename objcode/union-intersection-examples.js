// ============================================
// UNION (|) and INTERSECTION (&) EXAMPLES
// ============================================
const value1 = "hello";
const value2 = 42;
const currentStatus = "success";
const myPet = {
    bark: () => console.log("Woof!"),
    wag: () => console.log("Wagging tail")
};
// --- WITHOUT EXPLICIT TYPE (inline) ---
function printId(id) {
    console.log("ID:", id);
}
printId(101); // ✅ Works
printId("ABC123"); // ✅ Works
// Type narrowing with unions
function processValue(value) {
    if (typeof value === "string") {
        return value.toUpperCase(); // TypeScript knows it's string here
    }
    else if (typeof value === "number") {
        return value.toFixed(2); // TypeScript knows it's number here
    }
    else {
        return value ? "yes" : "no"; // TypeScript knows it's boolean here
    }
}
console.log("Union Examples:");
console.log(processValue("hello")); // HELLO
console.log(processValue(3.14159)); // 3.14
console.log(processValue(true)); // yes
const worker = {
    name: "John Doe",
    age: 30,
    employeeId: "E12345",
    department: "Engineering"
};
const profile = {
    name: "Jane Smith",
    age: 28,
    street: "123 Main St",
    city: "New York",
    email: "jane@example.com",
    phone: "555-0123"
};
const document = {
    print: () => console.log("Printing..."),
    log: () => console.log("Logging...")
};
const myDoc = {
    content: "Hello World",
    print: () => console.log("Print:", myDoc.content),
    log: () => console.log("Log:", myDoc.content)
};
// --- WITHOUT EXPLICIT TYPE (inline) ---
function saveData(data) {
    console.log(`Saving: ${data.name} with ID ${data.id} at ${data.timestamp}`);
}
saveData({
    id: 1,
    name: "Document",
    timestamp: new Date()
});
const adminAccount = {
    role: "admin",
    permissions: ["read", "write", "delete"],
    createdAt: new Date(),
    updatedAt: new Date()
};
const userAccount = {
    role: "user",
    username: "johndoe",
    createdAt: new Date(),
    updatedAt: new Date()
};
function handleResponse(response) {
    if (response.status === "success") {
        console.log("Data:", response.data);
    }
    else {
        console.error("Error:", response.error);
    }
}
const product = {
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
let unionValue;
unionValue = 100; // ✅ OK
unionValue = "text"; // ✅ OK
const personInfo = {
    name: "Alice",
    age: 25
    // Must have BOTH name AND age
};
const obj1 = { a: "hello", b: 42 };
const obj2 = { a: "world", b: 100 };
function calculateArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "rectangle":
            return shape.width * shape.height;
        case "triangle":
            return (shape.base * shape.height) / 2;
    }
}
const circle = { kind: "circle", radius: 5 };
const rectangle = { kind: "rectangle", width: 10, height: 20 };
console.log("Circle area:", calculateArea(circle));
console.log("Rectangle area:", calculateArea(rectangle));
const myService = {
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
