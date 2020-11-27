// Pick
type Vector3 = {x: number, y: number, z: number}
type Vector2 = Pick<Vector3, 'x' | 'y'>
type MyVector<T, K extends keyof T> = {[P in K]: T[P]}
type Vector1 = MyVector<Vector3, 'x'>

// Extract
type ZA = string | number | boolean
type DD = string | boolean
type CX = Extract<ZA, DD>

