const instagram = document.getElementById("instagram");
const container = document.querySelector(".container");
const instagramContainer = document.querySelector(".instagramContainer");

instagram.onclick = () => {
    container.classList.add("container-hidden");
    instagramContainer.style.display = "flex";
}   