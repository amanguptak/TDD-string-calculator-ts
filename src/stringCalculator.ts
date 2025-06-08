

function extractDelimiter(input: string): { delimiter: RegExp; numbersPart: string } {
  if (input.startsWith("//")) {
    const [, rawDelim, rest] = input.match(/^\/\/(.)\n(.*)$/)!;
    return { delimiter: new RegExp(rawDelim), numbersPart: rest };
  }
  return { delimiter: /,|\n/, numbersPart: input };
}

function parseNumbers(input: string, delimiter: RegExp): number[] {
  return input.split(delimiter).map(Number);
}

function validateNoNegatives(numbers: number[]) {
  const negatives = numbers.filter(n => n < 0);
  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed: ${negatives.join(",")}`);
  }
}

export function add(input: string): number {
  if (input === "") return 0;

  const { delimiter, numbersPart } = extractDelimiter(input);
  const numbers = parseNumbers(numbersPart, delimiter);

  validateNoNegatives(numbers);

  return numbers.reduce((sum, n) => sum + n, 0);
}
