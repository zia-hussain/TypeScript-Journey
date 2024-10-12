// +++++++++++++++        Starting My TypeScript Journey ++++++++++++++++

// Main apna TypeScript ka safar shuru kar raha hoon taake apne coding skills ko aur bhi improve karoon, aur errors se bach sakoon. TypeScript ka sabse bada faida yeh hai ke yeh code ko thoda strict banata hai, taake choti choti mistakes se bacha ja sake. Yeh meri help karega projects ko strong aur secure banane mein, kyunki ismein type-checking hoti hai jo coding ko easy aur reliable banati hai. Toh chalo, mil ke seekhte hain, dheere dheere, ek step-by-step journey main!

//********************************************
//
// +++++++++++++++        ** TypeScript Crash Course  **      ++++++++++++++++

//********************************************
// ==========================================
//                ** 1. Types Overview **
// ==========================================

// Primitive Types: Number, String, Boolean
// Reference Types: Array, Tuples
// Special Types: Any, Unknown, Never, Void
// Enum Types: Enums (Special case for constants)

// ==========================================
//             ** 1- Primitive Types **
// ==========================================

//-----------------------------------------
// a) Number Type in TypeScript
//-----------------------------------------
let num: number = 12;
// Yeh variable 'num' sirf numbers ko hi accept karega. Agar tum isme number ke ilawa kuch aur assign karne ki koshish karoge, TypeScript error dega.

// Example:
// num = "hello"; // ❌ Error: Yeh number variable hai, ismein string assign nahi kar sakte.

let num2: number;
num2 = 24; // ✅ Theek hai, kyun ke hum number assign kar rahe hain.

//-----------------------------------------
// b) String Type in TypeScript
//-----------------------------------------
let str: string = "Zia Shah";
// Yeh variable 'str' sirf strings ko accept karega. Sirf strings hi daal sakte ho ismein.

let str2: string;
str2 = "Learning TypeScript"; // ✅ Theek hai
// str2 = 123; // ❌ Error: Yeh string type ka variable hai, ismein number assign nahi kar sakte.

//-----------------------------------------
// c) Boolean Type in TypeScript
//-----------------------------------------
let isComplete: boolean = true;
// Yeh 'isComplete' sirf true ya false ko accept karega. Boolean values ko handle karta hai.

let isActive: boolean;
isActive = false; // ✅ Theek hai
// isActive = "yes"; // ❌ Error: Yeh sirf true/false ko accept karega, string nahi.

// ==========================================
//          ** 2- Reference Types **
// ==========================================

//-----------------------------------------
// a) Array in TypeScript
//-----------------------------------------
let arr: number[] = [1, 2, 3, 4, 5];
// Yeh array sirf numbers ko store karega. Agar tum number ke ilawa kuch aur add karoge, toh error milega.

arr.push(6); // ✅ Theek hai, kyun ke yeh number hai
// arr.push("hello");  // ❌ Error: Yeh sirf numbers ko accept karta hai, string ko nahi.

//-----------------------------------------
// b) Tuple in TypeScript
//-----------------------------------------
let arr1: [number, string] = [1, "Zia Shah"];
// Yeh tuple hai, jisme pehla value number hoga aur doosra string hoga. Agar sequence galat kiya ya types galat daali, toh error milega.

let arr2: [string, boolean] = ["TypeScript", true];
// arr2 = [false, "wrong"];  // ❌ Error: Sequence aur types match nahi kar rahe

console.log(arr1); // Result: [1, "Zia Shah"]
console.log(arr2); // Result: ["TypeScript", true]

// ==========================================
//          ** 3- Special Types **
// ==========================================

//-----------------------------------------
// a) Any Type in TypeScript
//-----------------------------------------
let something: any = "I can be anything";
something = 42; // ✅ Theek hai, kyun ke 'any' type koi bhi cheez accept kar sakta hai.
// 'any' type ko zyada use nahi karna chahiye, kyun ke yeh TypeScript ka type-checking advantage khatam kar deta hai.

//-----------------------------------------
// b) Unknown Type in TypeScript
//-----------------------------------------
let unknownValue: unknown = "Yeh kuch bhi ho sakta hai";
// Unknown type sirf 'any' ki tarah hai, lekin safer hai. Tumhe isko use karne se pehle iska type check karna padega.

unknownValue = 123; // ✅ Theek hai

let stringValue: string;
// stringValue = unknownValue; // ❌ Error: Unknown ko directly assign nahi kar sakte, pehle type check karna hoga.

if (typeof unknownValue === "string") {
  stringValue = unknownValue; // ✅ Theek hai, kyun ke hum ne pehle check kiya ke yeh string hai.
}

//-----------------------------------------
// c) Void Type in TypeScript
//-----------------------------------------
function logMessage(message: string): void {
  console.log(message);
}
// 'void' type ka matlab hai ke yeh function kuch return nahi karega.

logMessage("Hello from TypeScript!");

//-----------------------------------------
// d) Never Type in TypeScript
//-----------------------------------------
function throwError(errorMsg: string): never {
  throw new Error(errorMsg);
}
// 'never' type ka matlab hai ke yeh function kabhi return nahi karega, ya toh error throw karega ya infinite loop chalega.

// ==========================================
//          ** 4- Enums in TypeScript **
// ==========================================
enum Colors {
  Red,
  Green,
  Blue,
}

let color: Colors = Colors.Green;
console.log(color); // Result: 1 (Yeh Enum 0 se start hota hai, toh Green ka value 1 hoga)

// Enums humay constant values ko readable names dene mein madad karte hain.

// ==========================================
// *** Summary of Concepts ***
// ==========================================
// ✔ Hum ne dekha ke TypeScript strict types provide karta hai jo humari coding ko error-free banate hain.
// ✔ Primitive types jaise number, string, boolean use kar sakte hain bilkul simple tariqe se.
// ✔ Arrays aur tuples ke through hum different data types ko handle kar sakte hain ek structured tareeqe se.
// ✔ Special types jaise 'any', 'unknown', 'void', aur 'never' ka use hum different complex scenarios mein kar sakte hain.
// ✔ Enums humein constants ko samajhne mein madad karte hain, jisme hum readable names dete hain.
