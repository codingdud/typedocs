| Feature             | Primitive                                                              | Object                                                               |
| ------------------- | ---------------------------------------------------------------------- | -------------------------------------------------------------------- |
| What it is          | Basic value                                                            | Reference type                                                       |
| Examples            | `string`, `number`, `boolean`, `null`, `undefined`, `symbol`, `bigint` | `Object`, `Array`, `Function`, `Date`, `String`, `Number`, `Boolean` |
| Creation            | `"hi"`, `10`, `true`                                                   | `{}`, `[]`, `new String("hi")`                                       |
| `typeof`            | `"string"`, `"number"`, `"boolean"`                                    | `"object"` (function → `"function"`)                                 |
| Stored as           | Actual value                                                           | Memory reference                                                     |
| Compared by         | Value                                                                  | Reference                                                            |
| Mutable             | ❌ Immutable                                                            | ✅ Mutable                                                            |
| Truthy / Falsy      | Depends on value                                                       | Always truthy                                                        |
| Passed to functions | By value                                                               | By reference (actually reference copy)                               |
| Methods             | Via auto-boxing                                                        | Directly available                                                   |
| Performance         | Faster, less memory                                                    | Slower, more memory                                                  |
| Recommended         | ✅ Yes                                                                  | ⚠️ Use when needed                                                   |

| Feature              | `interface`                         | `type`                              |
| -------------------- | ----------------------------------- | ----------------------------------- |
| Purpose              | Describe the **shape of an object** | Describe the **shape of an object** |
| Syntax               | `interface User {}`                 | `type User = {}`                    |
| Object annotation    | ✅ Yes                               | ✅ Yes                               |
| Extending            | `extends` keyword                   | Intersection `&`                    |
| Re-open / merge      | ✅ Yes (Declaration merging)         | ❌ No                                |
| Add fields later     | ✅ Allowed                           | ❌ Not allowed                       |
| Implements (class)   | ✅ Yes                               | ✅ Yes                               |
| Use with unions      | ❌ No                                | ✅ Yes                               |
| Use with primitives  | ❌ No                                | ✅ Yes                               |
| Best for             | Public APIs, contracts              | Complex types, unions               |
| Compiler performance | Slightly faster                     | Slightly slower                     |


### In TypeScript, checking against the value returned by typeof is a type guard