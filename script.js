quoteText = document.querySelector(".quote");
authorName = document.querySelector(".author .name");
quoteBtn = document.querySelector("button");
soundBtn = document.querySelector(".sound");
copyBtn = document.querySelector(".copy");
twitterBtn = document.querySelector(".twitter");



function randomQuote(){
    quoteBtn.innerText = "Quote Loading";

    quoteBtn.classList.add("loading");
    fetch("http://api.quotable.io/random").then(res => res.json()).then(result=>{

    console.log(result);

    quoteText.innerText = result.content;
    authorName.innerText = result.author;
    quoteBtn.innerText = "New Quote";
    quoteBtn.classList.remove("loading");
    })
  
    console.log("Clicked");
}




soundBtn.addEventListener("click", ()=>{
    let utterance =  new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`);

    speechSynthesis.speak(utterance);

})


twitterBtn.addEventListener("click", ()=>{
    let tweetUrl =`https://twitter.com/intent/tweet?text=${quoteText}`;
    window.open(tweetUrl, "_blank");

})





copyBtn.addEventListener("click", ()=>{
    navigator.clipboard.writeText(`${quoteText.innerText} by ${authorName.innerText}`);
})



quoteBtn.addEventListener("click", randomQuote)