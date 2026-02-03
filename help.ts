const obj={
    ADMIN:"anmin",
    USER:"user"
} as const;
type A=typeof obj
type B=keyof typeof obj;
type C=typeof obj[B]
console.log()
type K="ADMIN"|"USER"
 type F= typeof obj["ADMIN"|"USER"]

