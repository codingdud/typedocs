# TypeScript Workspace — CLAUDE.md

## HTML Guide Map
File: `typescript_interview_guide.html`
Total lines: ~1690

### How the file is structured

```
1–83    HEAD: <style> block + <div class="tabs"> tab bar
84–101  Section: s-basics  (Basic Types)
```

### Tab bar (line ~67–100)
Each tab: `<div class="tab" onclick="show('ID',event)">Label</div>`
To add a tab: insert before the closing `</div>` of `.tabs` div (line ~100).

---

## Reference Tab-ID → Section-ID → Line Map

| Tab label        | onclick ID  | Section div ID  | Section starts | Notes                          |
|------------------|-------------|-----------------|----------------|--------------------------------|
| Basic Types      | `basics`    | `s-basics`      | 102            | 1 card                         |
| Variables        | `vars`      | `s-vars`        | 131            | 1 card                         |
| Const & Literals | `litconst`  | `s-litconst`    | 162            | **5 cards** (see sub-map)      |
| Functions        | `fns`       | `s-fns`         | 408            | **6 cards** (see sub-map)      |
| Classes          | `classes`   | `s-classes`     | 684            | **3 cards** (see sub-map)      |
| Interfaces       | `iface`     | `s-iface`       | 233            | 1 card                         |
| Type vs Interface| `tvsi`      | `s-tvsi`        | ~1008          | **6 cards** (see sub-map)      |
| Modifiers        | `mods`      | `s-mods`        | 799            | **4 cards** (see sub-map)      |
| Decorators       | `deco`      | `s-deco`        | ~1608          | **6 cards** (see sub-map)      |
| Generics         | `gen`       | `s-gen`         | ~1844          | **7 cards** (see sub-map)      |
| extends          | `extends`   | `s-extends`     | ~2027          | **6 cards** (class/interface/generic/conditional/infer/summary) |
| Enums            | `enums`     | `s-enums`       | 429            | **4 cards** (430/458/489/534)  |
| Special Types    | `special`   | `s-special`     | ~2815          | **6 cards** (overview/any/unknown/never/void/edge cases) |
| Tuples           | `tuples`    | `s-tuples`      | ~1650          | **6 cards** (see sub-map)    |
| Union            | `union`     | `s-union`       | ~1760          | 1 card                         |
| Intersection     | `inter`     | `s-inter`       | 651            | 1 card                         |
| Type Guards      | `tg`        | `s-tg`          | 679            | 1 card                         |
| Narrowing        | `narrow`    | `s-narrow`      | 716            | 1 card                         |
| Modules          | `modns`     | `s-modns`       | 755            | 1 card                         |
| ⚡ Practice      | `practice`  | `s-practice`    | 800            | 21 exercises + bonus (→ 1848)  |

### Modifiers section sub-cards (s-mods, line 799)
| Card | Title                                                      |
|------|------------------------------------------------------------|
| 1    | Access Modifiers — Complete Table                          |
| 2    | TypeScript `private` vs JavaScript `#` — Critical Diff     |
| 3    | Static Properties & Methods                                |
| 4    | Static Blocks — Initialization Logic for Static Members    |

### Functions section sub-cards (s-fns, line 408)
| Card | Title                                                        |
|------|--------------------------------------------------------------|
| 1    | Function Types — What They Are & 3 Ways to Write Them        |
| 2    | Parameters — Optional, Default & Rest                        |
| 3    | Call Signatures & Constructor Signatures                     |
| 4    | `void` Return Type — The Surprising Rule                     |
| 5    | Generic Function Types                                       |
| 6    | Function Overloads                                           |

### Const & Literals section sub-cards (s-litconst, line ~162)
| Card | Title                                              |
|------|----------------------------------------------------|
| 1    | `const` vs `let` Widening — the core rule          |
| 2    | `as const` — Freeze the Entire Shape               |
| 3    | Literal Types in Depth — `"name"` type & `1` type  |
| 4    | `satisfies` operator & Template Literal Types      |
| 5    | Most Misunderstood `const` / Literal Scenarios     |

### Enums section sub-cards (s-enums, line 429)
| Line | Card title                                   |
|------|----------------------------------------------|
| 430  | Numeric Enum — auto-increment rules          |
| 458  | String Enum — explicit values required       |
| 489  | `const enum` — inlined, restrictions         |
| 534  | `as const` & Union Literals — preferred      |

---

## Practice Section — Exercise Map (s-practice, lines 800–1848)

| Ex # | Line  | Topic               | Title                                        |
|------|-------|---------------------|----------------------------------------------|
| —    | 802   | Intro card          | Guide / pill overview                        |
| 1    | 820   | Basic Types         | Fix the Any-Infested Code                    |
| 2    | 859   | Variables           | Literal Type vs Widened Type                 |
| 3    | 896   | Functions           | Write Overloads for a Flexible Parser        |
| 4    | 941   | Classes             | Build an Abstract Shape Hierarchy            |
| 5    | 989   | Interfaces          | Declaration Merging + Index Signature        |
| 6    | 1033  | Type vs Interface   | Model an API Response — Right Tool           |
| 7    | 1076  | Modifiers           | Spot the Modifier Bugs                       |
| 8    | 1130  | Decorators          | Write a Timing Decorator                     |
| 9    | 1180  | Generics            | Generic Repository with Constraints          |
| 10   | 1223  | Enums               | Enum vs `as const` — Rewrite It              |
| 11   | 1268  | Union               | Add Exhaustiveness to a Notification System  |
| 12   | 1305  | Intersection        | Compose a Full Entity with Mixins via &      |
| 13   | 1349  | Type Guards         | Validate an unknown API Response             |
| 14   | 1389  | Narrowing           | Multi-Branch Control Flow Narrowing          |
| 15   | 1431  | Modules             | Type-Only Imports + Re-exports               |
| —    | ~1471 | Bonus               | Rapid-Fire Q&A (10 click-to-reveal answers)  |
| —    | ~1550 | Section header      | `\|` Union vs `&` Intersection intro card    |
| 16   | 1570  | Union & Basics      | Predict the Type — What Does TypeScript Infer|
| 17   | 1618  | Union \|            | Three Ways to Narrow a Union                 |
| 18   | 1669  | Union & Conflict    | What Happens When a Method Conflicts?        |
| 19   | 1713  | Discriminated Union | Build a Full Discriminated Union from Scratch|
| 20   | 1762  | Intersection Mixin  | Generic Mixin Function with `&`              |
| 21   | 1806  | Combined \| and &   | Combine Both — Role-Based Access System      |

---

## Patterns to follow when adding content

### Add a new reference section tab
1. Add tab in `.tabs` div (line ~67–100):
   ```html
   <div class="tab" onclick="show('NEWID',event)">Label</div>
   ```
2. Add section before `<!-- ==================== PRACTICE ====================`:
   ```html
   <!-- SECTION NAME -->
   <div class="section" id="s-NEWID">
   <div class="card">
     <span class="tag basic|adv">Tag</span>
     <h2>Title</h2>
     <p><strong>Definition:</strong> ...</p>
     <pre>... syntax-highlighted code ...</pre>
     <hr class="divider">
     <span class="tag tip">Interview Tip</span>
     <p>...</p>
   </div>
   </div>
   ```

### Add a new practice exercise
Insert a new card block **before** `</div><!-- /s-practice -->` (line 1686).
Increment `ex-num` to the next number.
Template:
```html
<!-- ── N · TOPIC ── -->
<div class="card">
  <span class="tag adv">Topic</span>
  <span class="tag challenge">Challenge</span>
  <h2><span class="ex-num">N</span> Title</h2>
  <p>Description of the task.</p>
  <pre><!-- starter code with syntax spans --></pre>
  <details>
    <summary>💡 Hint</summary>
    <div class="detail-body"><p>Hint text.</p></div>
  </details>
  <details>
    <summary>✅ Solution</summary>
    <div class="detail-body">
      <pre><!-- solution code --></pre>
      <p>Explanation.</p>
    </div>
  </details>
</div>
```

### Syntax-highlight spans used in `<pre>` blocks
| Class   | Meaning              | Example color |
|---------|----------------------|---------------|
| `.kw`   | keyword              | purple        |
| `.ty`   | type name            | teal          |
| `.fn`   | function/method name | blue          |
| `.str`  | string literal       | orange-red    |
| `.cm`   | comment              | grey italic   |

### Tag colours
| Class        | Use for                        |
|--------------|--------------------------------|
| `.tag.basic` | beginner / fundamental topic   |
| `.tag.adv`   | advanced topic                 |
| `.tag.tip`   | interview tip                  |
| `.tag.warn`  | gotcha / watch-out             |
| `.tag.challenge` | practice exercise          |
| `.tag.solution`  | solution label             |

---

## Source `.ts` files → HTML section mapping

| Source file                    | Maps to HTML section(s)          |
|--------------------------------|----------------------------------|
| `typeannotation.ts`            | s-basics, s-vars                 |
| `primitive.md`                 | s-basics, s-tvsi                 |
| `typeof.ts`                    | s-basics, s-tg                   |
| `moretype.ts`                  | s-basics (any/unknown/never)     |
| `objecttype.ts`                | s-iface, s-tvsi, s-tuples        |
| `functiontype.ts`              | s-fns                            |
| `this-in-functions.ts`         | s-fns                            |
| `narrowing.ts`                 | s-narrow, s-tg                   |
| `union-intersection-examples.ts` | s-union, s-inter               |
| `generic.ts`                   | s-gen                            |
| `class.ts`                     | s-classes, s-mods                |
| `maptype.ts`                   | (not yet a tab — add Mapped Types)|
| `tempate.ts`                   | (not yet a tab — add Template Literal)|
| `utlity.ts`                    | (not yet a tab — add Utility Types)|
| `eman.ts`                      | s-enums                          |
| `help.ts`                      | s-enums (as const pattern)       |
| `decorator.ts`                 | s-deco                           |
