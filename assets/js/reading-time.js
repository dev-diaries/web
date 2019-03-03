// HT: https://codepen.io/balasubramanim/pen/xypRMP
const content = document.getElementsByClassName('js-content')[0].innerText;
const wordsPerMinute = 200; // Average case.
let result;

let textLength = content.split(' ').length; // Split by words
if(textLength > 0){
    let value = Math.ceil(textLength / wordsPerMinute);
    result = `~${value} min read`;
}
document.getElementsByClassName('js-read-time')[0].innerText = result;
