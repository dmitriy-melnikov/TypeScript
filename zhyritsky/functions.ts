//func types -> params and type invoke value
//overloaded func some func which difference are parameters like count or types
/*function getT(a: string): string[];
function getT(b: boolean): string[];
function getT(...args: [string | boolean]): string[] {
    if (args.length === 1) {
        if (typeof args[0] === "string") {
            return []
        }
    }
}*/

//assertion func
// assert condition
// assert value

function assC(condition: any): asserts condition {
    if(!condition) {
        throw new Error('')
    }
}
function assV(val: any): asserts val is string {
    if(typeof val !== 'string') {
        throw new Error('')
    }
}


