export function add(input:string):number{
   if(input === "") return 0
    const parts = input.split(",");
    return parts.map(Number).reduce((sum,n)=> sum+n,0)
}


console.log(add("5,7"))