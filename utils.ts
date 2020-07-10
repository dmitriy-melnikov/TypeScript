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
//type Article2 = Readonly<Article1>
type MyReadonly<T> = { readonly [P in keyof T]: T[P]};
type Article2 = MyReadonly<Article1>
const article1: Article1 = {title: 'hell', page: 10}
const article2: Article2 = {title: 'hell', page: 10}
//article2.title = 'hell2' // - error
//const article3 = {title: 'hell', page: 10} as const
const article3 = <const>{title: 'hell', page: 10}

//ReadonlyArray
type Articles1 = Array<Article2>
type Articles2 = ReadonlyArray<Article2>

//const articles1: Articles1 = [{title: 'art1', page: 2}, {title: 'art2', page: 3}]
const articles1: Articles2 = [{title: 'art1', page: 2}, {title: 'art2', page: 3}]
//articles1.push({title: 'art3', page: 4})
const articles2 = <const>[{title: 'art1', page: 2}, {title: 'art2', page: 3}] //as const
//articles2.push({title: 'art3', page: 4})

function f11(arr: ReadonlyArray<string>) {}
function f22(arr: readonly string[]) {}
