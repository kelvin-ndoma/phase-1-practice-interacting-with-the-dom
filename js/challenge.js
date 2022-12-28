//See the timer increment every second once the page has loaded.
let counter = document.querySelector("#counter")

let pause = document.querySelector("#pause")
let submit = document.querySelector("#submit")
let list = document.querySelector("#list")
let commentBody = document.getElementById(["comment-form"])
let paused = false
let likeTracker = {}

function countup(){
    counter.innerText = parseInt(counter.innerText) + 1
}
let timer = setInterval(countup, 1000)
//Manually increment and decrement the counter using the plus and minus buttons.
let minus = document.querySelector("#minus")
let plus = document.querySelector("#plus")

minus.addEventListener("click", function(){
    counter.innerText  = parseInt(counter.innerText) -1
})

plus.addEventListener("click", function(){
    counter.innerText  = parseInt(counter.innerText) +1
})
//"Like" an individual number of the counter. I should see the count of the
//number of "likes" associated with that number displayed.
heart.addEventListener("click", likedList)
function likedList() {
    const newList = document.createElement("li");
    newList.textContent = `${counter.textContent} new likes`;
    document.querySelector('.likes').append(newList)
}
// pause the counter and switch the label on the button from "pause" to "resume"
pause.addEventListener("click", function(){
    paused = !paused
    if (paused) {
        clearInterval(timer)
        pause.innerText = "Resume"
        minus.disabled = true
        plus.disabled = true
        submit.disabled = true
    }
    else{
        timer = setInterval(countup, 1000)
        pause.innerText = "pause"
        minus.disabled = false
        plus.disabled = false
        submit.disabled = false
    }
})
//Leave comments on my gameplay
submit.addEventListener("click", function(e){
    let newLi = document.createElement("li")
    let newComment = document.querySelector("#comment-input")
    list.append(newLi)
    newLi.innerText = newComment.value
    e.preventDefault()
})