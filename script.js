// +++++++++++++++        Starting My TypeScript Journey ++++++++++++++++
// Main apna TypeScript ka safar shuru kar raha hoon taake apne coding skills ko aur bhi improve karoon, aur errors se bach sakoon. TypeScript ka sabse bada faida yeh hai ke yeh code ko thoda strict banata hai, taake choti choti mistakes se bacha ja sake. Yeh meri help karega projects ko strong aur secure banane mein, kyunki ismein type-checking hoti hai jo coding ko easy aur reliable banati hai. Toh chalo, mil ke seekhte hain, dheere dheere, ek step-by-step journey main!
//********************************************
//** TypeScript Crash Course (Basic Types)  **
//********************************************
// 1-Types Overview:
// > Number, String, Boolean       // Primitive Types
// > Array, Tuples                 // Non-Primitive / Reference Types
// > Any, Unknown, Never, Void
// > Enums
// ==========================================
//              ** 1- Primitive Types **
// ==========================================
//-----------------------------------------
// a) Number Type in TypeScript
//-----------------------------------------
var num = 12;
// Jaise ke hum JavaScript mein karte hain, yeh similar hi hai,
// lekin TypeScript ke strict mode mein yeh ensure karta hai ke galat type ka value assign na ho.
var num3;
// TypeScript ko hum explicitly bata sakte hain ke yeh variable sirf numbers accept karega.
//-----------------------------------------
// b) String Type in TypeScript
//-----------------------------------------
var str = "Zia Shah";
// Bilkul simple string jaise hum JS mein likhte hain, bas yeh thoda zyada safe hai TypeScript ke sath.
//-----------------------------------------
// c) Boolean Type in TypeScript
//-----------------------------------------
var boolean = true;
// True ya false ko handle karta hai, bilkul JS ki tarah, lekin yeh sirf boolean values ko hi allow karega.
// ==========================================
//           ** 2- Reference Types **
// ==========================================
//-----------------------------------------
// a) Array in TypeScript
//-----------------------------------------
var arr = [1, 2, 3, 4, 5];
// Yeh array sirf numbers ko allow karega kyunki hum ne yeh define kar dia hai.
var arr1 = [1, "Zia Shah"];
// Yeh tuple hai, jisme pehla value number hoga aur doosra string.
console.log(arr1); // Result: [1, "Zia Shah"]
// ==========================================
// Basic types cover ho gaye hain!
// Ab thoda thoda practice kar ke aage barhte hain :)
