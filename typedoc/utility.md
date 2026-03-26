utility types to facilitate common type transformations

## Type Transformation Utilities

**Awaited<Type>** - Unwraps Promises recursively
```typescript
type A = Awaited<Promise<string>>; // string
```

**Partial<Type>** - Makes all properties optional
```typescript
interface Todo { title: string; description: string; }
type PartialTodo = Partial<Todo>; // { title?: string; description?: string; }
```

**Required<Type>** - Makes all properties required (opposite of Partial)
```typescript
interface Props { a?: number; b?: string; }
type RequiredProps = Required<Props>; // { a: number; b: string; }
```

**Readonly<Type>** - Makes all properties read-only
```typescript
interface Todo { title: string; }
const todo: Readonly<Todo> = { title: "Task" };
// todo.title = "New"; // Error: cannot reassign
```

**Record<Keys, Type>** - Creates an object type with specified keys and value types
```typescript
type CatName = "miffy" | "boris";
const cats: Record<CatName, { age: number }> = {
  miffy: { age: 10 },
  boris: { age: 5 }
};
```

**Pick<Type, Keys>** - Selects specific properties from a type
```typescript
interface Todo { title: string; description: string; completed: boolean; }
type TodoPreview = Pick<Todo, "title" | "completed">; // { title: string; completed: boolean; }
```

**Omit<Type, Keys>** - Removes specific properties from a type
```typescript
type TodoPreview = Omit<Todo, "description">; // All properties except description
```

**Exclude<UnionType, Members>** - Removes types from a union
```typescript
type T = Exclude<"a" | "b" | "c", "a">; // "b" | "c"
```

**Extract<Type, Union>** - Extracts matching types from a union
```typescript
type T = Extract<"a" | "b" | "c", "a" | "f">; // "a"
```

**NonNullable<Type>** - Removes null and undefined
```typescript
type T = NonNullable<string | null | undefined>; // string
```

## Function Utilities

**Parameters<Type>** - Extracts function parameter types as tuple
```typescript
type T = Parameters<(s: string, n: number) => void>; // [s: string, n: number]
```

**ReturnType<Type>** - Extracts function return type
```typescript
type T = ReturnType<() => string>; // string
```

**ConstructorParameters<Type>** - Extracts constructor parameter types
```typescript
class C { constructor(a: number, b: string) {} }
type T = ConstructorParameters<typeof C>; // [a: number, b: string]
```

**InstanceType<Type>** - Extracts instance type of a constructor
```typescript
class C { x = 0; }
type T = InstanceType<typeof C>; // C
```

**NoInfer<Type>** - Blocks type inference for generic parameters
```typescript
function create<C extends string>(colors: C[], default?: NoInfer<C>) {}
// Prevents widening default type beyond colors array
```

**Source**: TypeScript official documentation (uploaded document)