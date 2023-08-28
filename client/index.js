const start = () => {
    DecreaseOpacity("start")
    .then(() => {
        var audio = new Audio('theme.mp3');
        audio.play();
    })
    .then(() => IncreaseOpacity("grand"))
    .then(() => DecreaseOpacity("grand"))
    .then(() => IncreaseOpacity("Scene-1"))
    .then(() => DecreaseOpacity("Scene-1"))
    .catch(error => console.error(error));
}

const DecreaseOpacity = (id) => {
    return new Promise((resolve, reject) => {
        var startDiv = document.getElementById(id);

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
        var startDiv = document.getElementById(id);

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