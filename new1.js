
import chalk from "chalk"

console.log(chalk);
console.log(chalk.yellow("123"));

export function add(a,b){
    console.log(chalk.red(a+b))
    return a+b;
}
export function muti(a,b){
    return a * b;
}

