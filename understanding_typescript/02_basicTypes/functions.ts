function add(n1: number, n2: number): number {
  return n1+n2;

}

function printResult (num: number) {
  console.log('Result: ' + num);
}

printResult(add(5, 12));

let combineValues: (a: number, b: number) => number;

combineValues = add;
// combineValues = printResult; // not allowed
// combineValues = 5; // not allowed

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(10, 20, (result) => {
  console.log(result);
});