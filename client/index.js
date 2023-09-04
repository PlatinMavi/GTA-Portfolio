const start = () => {

    let audio;

    DecreaseOpacity("start")
    .then(() => {
        audio = new Audio('theme.mp3');
        audio.play();
    })
    .then(() => appendLoaderToRoot())
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

    .then(() => IncreaseOpacity("main"))
    .then(() => fixRoot())
    .then(() => {
        if (audio) {
            audio.pause(); // Stop the audio if it exists
        }
    })

    .catch(error => console.error(error));
}

const DecreaseOpacity = (id) => {
    return new Promise((resolve, reject) => {
        if(id === "start" || id === "grand" || id === "main"){
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
        if(id === "start" || id === "grand" || id === "main"){
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
    const characterDiv = document.getElementById("character-"+id)
    zoomDiv.classList.add("zoomed")
    zoomDiv.classList.remove("background")

    characterDiv.classList.add("character")
}

function appendLoaderToRoot() {
    // Create a new div element
    const loaderDiv = document.createElement("div");
    loaderDiv.id = "loader";
    loaderDiv.className = "absolute flex z-50 bottom-20 right-20";
  
    // Create a paragraph element for the text
    const textParagraph = document.createElement("p");
    textParagraph.className = "text-white text-3xl mt-4 mr-4";
    textParagraph.id = "tips";
    textParagraph.textContent = "Loading...";
  
    // Create a span element for the loader
    const loaderSpan = document.createElement("span");
    loaderSpan.className = "loader";
  
    // Append the paragraph and span elements to the loader div
    loaderDiv.appendChild(textParagraph);
    loaderDiv.appendChild(loaderSpan);
  
    // Find the element with the ID "root" and append the loader div to it
    const rootElement = document.getElementById("root");
    if (rootElement) {
      rootElement.appendChild(loaderDiv);
    } else {
      console.error("Element with ID 'root' not found.");
    }
}

const fixRoot = () => {
    const root = document.getElementById("root")
    root.classList.remove("overflow-hidden")

    const loader = document.getElementById("loader")
    loader.classList.add("hidden")
}