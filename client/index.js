const start = () => {
    DecreaseOpacity("start")
    .then(() => {
        var audio = new Audio('theme.mp3');
        audio.play();
    })
    .then(() => IncreaseOpacity("grand"))
    .then(() => DecreaseOpacity("grand"))

    .then(() => IncreaseOpacity("1"))
    .then(() => DecreaseOpacity("1"))

    .then(() => IncreaseOpacity("2"))
    .then(() => DecreaseOpacity("2"))

    .then(() => IncreaseOpacity("3"))
    .then(() => DecreaseOpacity("3"))

    .then(() => IncreaseOpacity("4"))
    .then(() => DecreaseOpacity("4"))

    .then(() => IncreaseOpacity("5"))
    .then(() => DecreaseOpacity("5"))

    .then(() => IncreaseOpacity("6"))
    .then(() => DecreaseOpacity("6"))
    .catch(error => console.error(error));
}

const DecreaseOpacity = (id) => {
    return new Promise((resolve, reject) => {
        if(id === "start" || id === "grand"){
            var startDiv = document.getElementById(id);
        }else{
            var startDiv = document.getElementById("Scene-"+id);
        }
        
        startDiv.style.transition = "opacity 5s";

        setTimeout(function () {
            startDiv.style.opacity = "0";
        }, 100);

        // Listen for the transitionend event on opacity
        startDiv.addEventListener("transitionend", function () {
            // After opacity transition, hide the element
            startDiv.style.display = "none";
            startDiv.style.transition = ""; // Remove the transition
            resolve(); // Resolve the promise
        });
    });
}

const IncreaseOpacity = (id) => {
    return new Promise((resolve, reject) => {
        if(id === "start" || id === "grand"){
            var startDiv = document.getElementById(id);
        }else{
            var startDiv = document.getElementById("Scene-"+id);
            Zoomer(id)
        }

        startDiv.style.transition = "opacity 5s";

        // First, set the display property to "block" before transitioning opacity
        startDiv.style.display = "block";

        setTimeout(function () {
            startDiv.style.opacity = "1";
        }, 100);

        // Listen for the transitionend event on opacity
        startDiv.addEventListener("transitionend", function () {
            // You can add any necessary actions after the transition completes
            startDiv.style.transition = ""; // Remove the transition
            resolve(); // Resolve the promise
        });
    });
}

const Zoomer = (id) =>{
    const zoomDiv = document.getElementById("background-"+id)
    zoomDiv.classList.add("zoomed")
    zoomDiv.classList.remove("background")
}