var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function ReadOnly(target, propertyKey, descriptor) {
    descriptor.set = function () {
        throw new Error("This property is read-only");
    };
}
class Userr {
    constructor() {
        this._role = "admin";
    }
    get role() {
        return this._role;
    }
}
__decorate([
    ReadOnly
], Userr.prototype, "role", null);
let obj = new Userr();
const u = new Userr();
u.role = "user"; // ❌ Error
