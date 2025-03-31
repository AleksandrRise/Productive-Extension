const instagram = document.getElementById("instagram");
const container = document.querySelector(".container");
const instagramContainer = document.querySelector(".instagramContainer");
const instaSwitch = document.getElementById("instaSwitch__inner");
const checkBox = instaSwitch.querySelector("input");

document.addEventListener("DOMContentLoaded", () => {
    chrome.storage.local.get("hidePosts", (data) => {
        let isChecked = data.hidePosts;
        checkBox.checked = isChecked;

        const action = isChecked ? "removePosts" : "returnPosts";

        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            chrome.tabs.sendMessage(tabs[0].id, { action }, (response) => {
                console.log("Response from content.js:", response?.result);
            });
        });
    })
})

instagram.onclick = () => {
    container.classList.add("container-hidden");
    instagramContainer.style.display = "flex";
}   

checkBox.addEventListener("change", () => {
    let isChecked = checkBox.checked

    // Save to storage
    chrome.storage.local.set({hidePosts: isChecked});

    const action = isChecked ? "removePosts" : "returnPosts";

    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { action }, (response) => {
            console.log("Response from content.js:", response?.result);
        });
    });
});
