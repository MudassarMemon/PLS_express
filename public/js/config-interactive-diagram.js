document.addEventListener('DOMContentLoaded', function() {
    //interactive heat diagram

    let interactiveHover = document.querySelectorAll('.interactiveHover');
    let interactiveOverlay = document.querySelectorAll('.defaultimg');
    let defaultBackground = interactiveOverlay[2].style.backgroundImage
    let interactiveList = document.querySelector('.interactive-list'); 
    let currentState = interactiveList.getAttribute('data-toggle');

    interactiveOverlay.forEach(function(area){
        area.addEventListener("click", function(){
            currentState = "off"
            let overlay = this.getAttribute('id')
            interactiveOverlay[2].style.backgroundImage = "url(\"./images/" + overlay + ".jpg\")"
        })
    })

    interactiveHover.forEach(function(area){
        area.addEventListener("click", function(){
            if (currentState == "on") {
                currentState = "off"
                interactiveOverlay[2].style.backgroundImage = defaultBackground
                console.log(defaultBackground)
                
            } else {
                currentState = "on"
                let overlay = this.getAttribute('id')
                interactiveOverlay[2].style.backgroundImage = "url(\"./images/" + overlay + ".jpg\")"
            }
        })

        // area.addEventListener("mouseleave", function(){
        //     if (defaultBackground.includes("heating")){
        //         interactiveOverlay[2].style.backgroundImage = "url(\"./images/heating-interactive-bg-w-hover-icon.jpg\")"
        //     } else{
        //         interactiveOverlay[2].style.backgroundImage = "url(\"./images/cooling-interactive-bg-w-hover-icon.jpg\")"
        //     }
        // })
    })
 
})