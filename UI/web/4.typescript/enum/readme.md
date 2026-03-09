# enum

To declare enum, use the keyword **enum**.

```ts
enum Color{ Red, Green, blue}
let backGroundcolor= Color.Red;
```

- The first value automatically gets zero.Red =0, Green= 1 and Blue =2. So it's not explicitly defined but recommended.e.g

```ts
enum Color{ Red=0, Green=1, blue=2}
let backGroundcolor= Color.Red;
```
