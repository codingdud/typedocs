enum Direction9 {
  Up=9,
  Down,
  Left=23,
  Right,
}

enum Direction1{
    UP="up",
    Down=4,
    Left=23,
    Right,
}

let a:Direction1="up" as Direction1;
console.log(a)

enum E1{
    X=200,Y,z
}
let x:E1=202;
enum FileAcess{
    Node,
    Read=1<<1,
    Write=1<<2,
    ReadWrite=Read|Write,
    G=123,
}
enum Direction3 {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}
enum ShapeKind {
  Circle,
  Square,
}
 
interface Circle {
  kind: ShapeKind.Circle;
  radius: number;
}
 
interface Square {
  kind: ShapeKind.Square;
  sideLength: number;
}
 
let c: Circle = {
  kind: ShapeKind.Circle,
  radius: 100,
};
// Enums are real objects that exist at runtime. For example, the following enum

function f(obj: { X: number }) {
  return obj.X;
}
console.log(f(E1))

enum LogLevel {
  ERROR,
  WARN,
  INFO,
  DEBUG,
}
console.log(typeof LogLevel)
type LogLeveSetting=keyof typeof LogLevel;
// In addition to creating an object with property names for members, 
// numeric enums members also get a reverse mapping from 
// enum values to enum names. For example, in this example:

let aa=LogLevel.DEBUG;
let bb=LogLevel[aa];
console.log(bb,aa)

const enum Enumm {
  A = 1,
  B = A * 2,
}

const enum Direction {
  Up,
  Down=Up+1,
  Left=Up-1,
  Right=Up+2,
}
 
let directions = [
  Direction.Up,
  Direction.Down,
  Direction.Left,
  Direction.Right,
];
console.log(directions)

// in generated code will become
// let directions = [
//     0 /* Direction.Up */,
//     1 /* Direction.Down */,
//     2 /* Direction.Left */,
//     3 /* Direction.Right */,
// ]
enum Enum{
    W=4,
    R=3
}
// describe the shape of already existing enum types.
declare enum Enum {
  A = 4,
  B,
  C = 2,
}
let abc:Enum=Enum.W;
console.log(abc)
type happy=keyof typeof Enum;

 enum EDirection {
  Up,
  Down,
  Left,
  Right,
}
 
const ODirection = {
  Up: 0,
  Down: 1,
  Left: 2,
  Right: 3,
} as const;

type tempi=typeof ODirection;
type tempe=keyof typeof ODirection;
type OneDirection=typeof ODirection[keyof typeof ODirection];
type Edirectiononly=keyof typeof EDirection;

let zx:EDirection;
let zs:OneDirection;
