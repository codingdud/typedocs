var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let Example = class Example {
    constructor() {
        this.flavor = "";
        this.flavor = "vanilla";
    }
};
__decorate([
    Emoji()
], Example.prototype, "flavor", void 0);
Example = __decorate([
    Frozen
], Example);
let obj = new Example();
console.log(obj);
function Confirmable() {
    return function (target, key, descriptor) {
    };
}
function Emoji(emoji) {
    return function (target, key) {
        // Decorator implementation
        console.log(`Decorating ${String(key)} with ${emoji || 'default emoji'}`);
        // Store metadata or modify the property
        const descriptor = Object.getOwnPropertyDescriptor(target, key);
        // Your decorator logic here
    };
}
function Frozen(constructor) {
    Object.freeze(constructor);
    Object.freeze(constructor.prototype);
}
