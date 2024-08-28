function toCamelCase(str){
  let arr = str.split("");
  let newStr = ''
  
  for (let i = 0; i < arr.length; i++){
    if (arr[i] === "-" || arr[i] === '_'){
      const upper = arr[i + 1].toUpperCase();
      arr[i + 1] = upper;
    } else {
      newStr += arr[i];
    }
  }
  return newStr
}

toCamelCase('Hello-world');    
toCamelCase('');
toCamelCase("the_stealth_warrior");
toCamelCase("The-Stealth-Warrior");
toCamelCase("A-B-C");
