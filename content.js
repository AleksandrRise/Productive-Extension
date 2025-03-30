chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "removePosts") {
        removePosts();
        sendResponse({status: "success"});
    }
})

function removePosts() {
    const instagramPosts = document.querySelector(".xw7yly9").firstChild.nextSibling;
    instagramPosts.remove();
}


