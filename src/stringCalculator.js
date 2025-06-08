"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = add;
function add(input) {
    if (input === "")
        return 0;
    var parts = input.split(",");
    return parts.map(Number).reduce(function (sum, n) { return sum + n; }, 0);
}
console.log(add("5,7"));
