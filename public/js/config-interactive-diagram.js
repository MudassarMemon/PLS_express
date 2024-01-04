document.addEventListener('DOMContentLoaded', function() {
    //interactive heat diagram

    var interactiveHover = document.querySelectorAll('.interactiveHover');
    var interactiveOverlay = document.querySelectorAll('.defaultimg');
    let defaultBackground = interactiveOverlay[2].getAttribute('style')

    interactiveHover.forEach(function(area){
        
        area.addEventListener("click", function(){
            let overlay = this.getAttribute('id')

            interactiveOverlay[2].style.backgroundImage = "url(\"./images/" + overlay + ".jpg\")"
        })

        area.addEventListener("mouseleave", function(){
            if (defaultBackground.includes("heating")){
                interactiveOverlay[2].style.backgroundImage = "url(\"./images/heating-interactive-bg-w-hover-icon.jpg\")"
            } else{
                interactiveOverlay[2].style.backgroundImage = "url(\"./images/cooling-interactive-bg-w-hover-icon.jpg\")"
            }
        })
    })
 
})