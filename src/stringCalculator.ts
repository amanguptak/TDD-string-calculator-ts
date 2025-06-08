export function add(input:string):number{
   if(input === "") return 0
    const parts = input.split(/,|\n/);
    return parts.map(Number).reduce((sum,n)=> sum+n,0)
}


