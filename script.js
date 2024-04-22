let inp=document.querySelectorAll("input")
let btn=document.querySelector(".send")
btn.addEventListener("click",()=>{
    let obj={
        name:inp[0].value,
        email:inp[1].value,
        message:inp[2].value
    }
   
    localStorage.setItem("inf",JSON.stringify(obj))
    let a=localStorage.getItem("inf")
    h.innerHTML=JSON.parse(a)
})