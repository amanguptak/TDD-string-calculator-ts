export function add(input:string):number{
   if(input === "") return 0
    let delimPattern = /,|\n/;
    if(input.startsWith("//")){
        const [,delim,rest] = input.match(/^\/\/(.)\n(.*)$/)!;
        delimPattern= new RegExp(delim)
        input = rest
    }

    const numbers = input.split(delimPattern).map(Number);
    const negatives = numbers.filter(n => n < 0);
      if (negatives.length) {
    throw new Error(`negative numbers not allowed: ${negatives.join(",")}`);
  }

    const parts = input.split(delimPattern);
    return parts.map(Number).reduce((sum,n)=> sum+n,0)
}


