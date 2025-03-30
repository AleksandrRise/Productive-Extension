const instagram = document.getElementById("instagram");
const container = document.querySelector(".container");
const instagramContainer = document.querySelector(".instagramContainer");
const instaSwitch = document.getElementById("instaSwitch__inner");
const checkBox = instaSwitch.querySelector("input");

instagram.onclick = () => {
    container.classList.add("container-hidden");
    instagramContainer.style.display = "flex";
}   

checkBox.addEventListener("change", () => {
    if (checkBox.checked) {
        
    }
});