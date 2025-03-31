const instagramPosts = document.querySelector(".xw7yly9").firstChild.nextSibling;
const instagramPostsParent = document.querySelector(".xw7yly9");

function removePosts() {
    instagramPosts.remove();
}

function returnPosts() {
    instagramPostsParent.appendChild(instagramPosts);
}

chrome.storage.local.get("hidePosts", (data) => {
    const shouldHide = data.hidePosts;
    if (shouldHide) {
        removePosts();
    }
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "removePosts") {
        removePosts();
        sendResponse({ result: "Posts removed" });
    } else if (message.action === "returnPosts") {
        returnPosts();
        sendResponse({ result: "Posts returned" });
    }
});


