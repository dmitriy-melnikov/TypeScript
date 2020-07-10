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

// Record
type Dimension1 = {width: number, height: number, length: number}
type Dimension2 = Record<'width' | 'height' | 'length', number>
type MyRecord<K extends keyof any, T> = { [P in K]: T }
type Dimension3 = MyRecord<'width' | 'height' | 'length', number>

// Readonly
type Article1 = {title: string, page: number};
type Article2 = Readonly<Article1>
const article1: Article1 = {title: 'hell', page: 10}
const article2: Article2 = {title: 'hell', page: 10}
//article2.title = 'hell2' // - error
