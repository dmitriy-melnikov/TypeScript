//partial
type Person1 = {name: string, age: number}
type Person2 = Partial<Person1>

type MyPartial<T> = {[P in keyof T]?: T[P]}

//required
type Animal1 = {name?: string, weight?: number}
type Animal2 = Required<Animal1>
type MyRequired<T> = {[P in keyof T]-?: T[P]};
type Animal3 = MyRequired<Animal1>

//NonNullable
type Color1 = string | undefined | null;
type Color2 = NonNullable<Color1>
type MyNonNullable<T> = T extends null | undefined ? never : T
