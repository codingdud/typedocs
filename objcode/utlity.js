function updateTodo(todo, update) {
    return { ...todo, ...update };
}
const todo1 = {
    title: "organize desk",
    description: "clear clutter",
};
const todo2 = updateTodo(todo1, {
    description: "throw out trash",
});
console.log(todo2);
