module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 !== 0) return false;
  let splitString = str.split('');

  for (let i = 0; i < splitString.length; i++) {
    for (let x = 0; x < bracketsConfig.length; x++) {
      if (splitString[i] === bracketsConfig[x][0] && splitString[i + 1] === bracketsConfig[x][1]) {
        splitString.splice(i, 2);
        i = -1;
      }
    }
  }
  return !splitString.length;
  
  // let stack = [];
  // let current;
  // const match = {
  //   '(': ')',
  //   '[': ']',
  //   '{': '}',
  //   '1': '2',
  //   '3': '4',
  //   '5': '6',
  //   '7': '7',
  //   '8': '8',
  //   '|': '|'
  // };

  // for (let i = 0; i < str.length; i++) {
  //   current = str[i];
  // }

  // if (current === '(' || current === '[' || current === '{' || current === '1' || current === '3' || current === '5' || current === '7' || current === '8' || current === '|') {
  //   stack.push(current);
  // } else if (current === ')' || current === ']' || current === '}' || current === '2' || current === '4' || current === '6' || current === '7' || current === '8' || current === '|') {
  //   const lastBracket = stack.pop();
  //   if (match[lastBracket] !== current) {
  //     return false;
  //   }
  // } else {
  //   return stack.length === 0;
  // }
  // return bracketsConfig.every(str => str === bracketsConfig[0]);
}
