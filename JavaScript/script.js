// const changeColor = document.querySelectorAll("#color-choose li")
// const white = document.querySelector(".white")
// const gray = document.querySelector(".gray")
// const imageShoes = document.querySelector("#main-container img")

// function mudar(){

//     if(changeColor == white){
//         imageShoes.setAttribute("src", "/Image/shoes_white.jpeg")
//     }else{
//         imageShoes.setAttribute("src", "/Image/shoes_gray.jpeg")
//     }
// }

// changeColor.forEach((btn) =>{
//     btn.addEventListener("click", () =>{
//         mudar()    
//     })
// })

function mudar(change){
    document.querySelector(".image").src = change
}