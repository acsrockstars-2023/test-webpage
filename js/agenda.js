let buttonClass = null;
let isVisibleB = true;
let isVisibleN = false;


// Target all clicks on any element
document.addEventListener('click', (e) => {
    // Get element class(es)
    buttonClass = e.target.className;
    // console.log(buttonClass);

    if(buttonClass == "agenda-bangalore"){
        // console.log("bangalore")
        $(".agenda-content-bangalore").removeClass("d-none");
        $(".agenda-bangalore").addClass("keep-underline");
        // $(".agenda-bangalore").removeClass("underline-content");
        isVisibleB=true;
        if(isVisibleN == true)
        {
            $(".agenda-content-noida").addClass("d-none");
            $(".agenda-noida").removeClass("keep-underline");
            // $(".agenda-bangalore").addClass("underline-content");
        }
    } 
    
    if(buttonClass == "agenda-noida"){
        // console.log("noida")
        $(".agenda-content-noida").removeClass("d-none");
        $(".agenda-noida").addClass("keep-underline");
        // $(".agenda-noida").removeClass("underline-content");
        isVisibleN = true;
        if(isVisibleB == true)
        {
            $(".agenda-content-bangalore").addClass("d-none");
            $(".agenda-bangalore").removeClass("keep-underline");
            // $(".agenda-bangalore").addClass("underline-content");
        }
    }
}
);

// function changeContent() {

//     console.log(buttonClass);

//     // if (defContent = document.querySelector(".agenda-content-bangalore")) {
//     //     if (buttonClass = document.querySelector(".agenda-bangalore")) {
//     //         console.log("bangalore")
//     //         // agContent = document.querySelector(".agenda-content-bangalore");
//     //     }

//     // }
//     // else if (defContent = document.querySelector(".agenda-content-noida")) {
//     //     console.log("noida")
//     //     // agContent = document.querySelector(".agenda-content-noida");
//     // }
// }


