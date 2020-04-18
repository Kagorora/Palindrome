let inputs = document.getElementById("inputText");
let btn = document.getElementById("btn");
let display = document.getElementById("answer");

btn.addEventListener("click", () => {
  let word = inputs.value.toLowerCase();
  let reverseWord = "";
  let j;
  let i;
  let wordLength = word.length;
  let x = wordLength-1;
  if (word.length === 0) {
    display.innerHTML = "<span style='color:red'>Please insert a word</span>";
  } else if (word.length === 1) {
    display.innerHTML = `<span style='color:green'>${word} is a Palindrome</span>`;
  }
for(i = x; i >= 0; i--){
    reverseWord += word[i];
}
  if(reverseWord === word){
    display.innerHTML = `<span style='color:green'>Palindrome: ${reverseWord} = ${word}</span>`;
  } else{
    display.innerHTML = `<span style='color:red'>Palindrome: ${reverseWord} != ${word}</span>`;
  }
});
