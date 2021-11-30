const sentence = "hello there from lighthouse labs";

// let newSent = sentence.split('');
// let newSent = Array.from(sentence);
// console.log(newSent);

for (let char = 0; char < sentence.length; char++) {
  setTimeout(() => {
    process.stdout.write(sentence[char] + "\n");
    
  }, 200 * char);
   
  
}