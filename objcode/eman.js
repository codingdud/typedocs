var Direction9;
(function (Direction9) {
    Direction9[Direction9["Up"] = 9] = "Up";
    Direction9[Direction9["Down"] = 10] = "Down";
    Direction9[Direction9["Left"] = 23] = "Left";
    Direction9[Direction9["Right"] = 24] = "Right";
})(Direction9 || (Direction9 = {}));
var Direction1;
(function (Direction1) {
    Direction1["UP"] = "up";
    Direction1[Direction1["Down"] = 4] = "Down";
    Direction1[Direction1["Left"] = 23] = "Left";
    Direction1[Direction1["Right"] = 24] = "Right";
})(Direction1 || (Direction1 = {}));
let a = "up";
console.log(a);
var E1;
(function (E1) {
    E1[E1["X"] = 200] = "X";
    E1[E1["Y"] = 201] = "Y";
    E1[E1["z"] = 202] = "z";
})(E1 || (E1 = {}));
let x = 202;
var FileAcess;
(function (FileAcess) {
    FileAcess[FileAcess["Node"] = 0] = "Node";
    FileAcess[FileAcess["Read"] = 2] = "Read";
    FileAcess[FileAcess["Write"] = 4] = "Write";
    FileAcess[FileAcess["ReadWrite"] = 6] = "ReadWrite";
    FileAcess[FileAcess["G"] = 123] = "G";
})(FileAcess || (FileAcess = {}));
var Direction3;
(function (Direction3) {
    Direction3["Up"] = "UP";
    Direction3["Down"] = "DOWN";
    Direction3["Left"] = "LEFT";
    Direction3["Right"] = "RIGHT";
})(Direction3 || (Direction3 = {}));
var ShapeKind;
(function (ShapeKind) {
    ShapeKind[ShapeKind["Circle"] = 0] = "Circle";
    ShapeKind[ShapeKind["Square"] = 1] = "Square";
})(ShapeKind || (ShapeKind = {}));
let c = {
    kind: ShapeKind.Circle,
    radius: 100,
};
// Enums are real objects that exist at runtime. For example, the following enum
function f(obj) {
    return obj.X;
}
console.log(f(E1));
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["ERROR"] = 0] = "ERROR";
    LogLevel[LogLevel["WARN"] = 1] = "WARN";
    LogLevel[LogLevel["INFO"] = 2] = "INFO";
    LogLevel[LogLevel["DEBUG"] = 3] = "DEBUG";
})(LogLevel || (LogLevel = {}));
console.log(typeof LogLevel);
// In addition to creating an object with property names for members, 
// numeric enums members also get a reverse mapping from 
// enum values to enum names. For example, in this example:
let aa = LogLevel.DEBUG;
let bb = LogLevel[aa];
console.log(bb, aa);
let directions = [
    0 /* Direction.Up */,
    1 /* Direction.Down */,
    -1 /* Direction.Left */,
    2 /* Direction.Right */,
];
console.log(directions);
// in generated code will become
// let directions = [
//     0 /* Direction.Up */,
//     1 /* Direction.Down */,
//     2 /* Direction.Left */,
//     3 /* Direction.Right */,
// ]
var Enum;
(function (Enum) {
    Enum[Enum["W"] = 4] = "W";
    Enum[Enum["R"] = 3] = "R";
})(Enum || (Enum = {}));
let abc = Enum.W;
console.log(abc);
