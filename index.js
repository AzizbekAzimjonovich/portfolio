
/**const btn=document.querySelector("#btn")
const textLorem=document.querySelector("#textLorem")
const section=document.querySelector("#section")
const section2=document.querySelector("#section2")

let number=0
btn.addEventListener("click", function() {
    number++
    if (number%2==0) {
        
        textLorem.style.display="block"
        section.textContent="show section"
    }else{
        textLorem.style.display="none"
        section.textContent="hide section"       
    }
})
 
const items=document.querySelectorAll("#item")
const  box=document.querySelector(".box")

items.forEach((item)=>{
    item.addEventListener("click",()=>{
        box.style.background=item.textContent
    })
}) */

const insert = document.getElementById("insert");

window.addEventListener('keydown', (e) => {
    insert.innerHTML = `
        <div class="key">
        ${e.key==' ' ? "space": e.key}
            <small>event.key</small>
        </div>
        <div class="key">
        ${e.keyCode}
            <small>event.keyCode</small>
        </div>
        <div class="key">
        ${e.code}
            <small>event.key</small>
        </div>
    `;
});


