setInterval(() => {
    let display = document.getElementById("cursor1").style.display;
    document.getElementById("cursor1").style.display = (display == "inline") ? "none" : "inline";
}, 500);

const output = document.getElementById("output");
const text = 'type about_me.txt && start "" "this_is_me.jpeg"';
let index = 0;

const output2 = document.getElementById("output2");
const text2 = "Please press enter to access Memory Game: "
let idx = 0;
function typeWriter_(){
    if(idx < text2.length){
        output2.innerHTML += text2.charAt(idx);
        idx ++;
        setTimeout(typeWriter_, Math.floor(Math.random() * 200) + 50);
    }
}
function typeWriter() {
    if (index < text.length) {
        output.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, Math.floor(Math.random() * 200) + 50);
    } else {
        setTimeout(function(){
            document.querySelector("#container").style.display = "block";
            var spanElement = document.getElementById("cursor1");
            spanElement.remove();
            setInterval(() => {
                let display = document.getElementById("cursor2").style.display;
                document.getElementById("cursor2").style.display = (display == "inline") ? "none" : "inline";
                typeWriter_();
            }, 500);
        },500);
    }
}
typeWriter();
document.addEventListener("keydown", function(event){
    if(event.key === "Enter") {
        event.preventDefault();
        document.getElementById("memorygame").click();
    }
});
