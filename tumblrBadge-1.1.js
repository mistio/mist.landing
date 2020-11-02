// tumblrBadge by Robert Nyman, http://www.robertnyman.com/, http://code.google.com/p/tumblrbadge/
const tumblrBadge = function () {
    // User settings
    const settings = {
        userName : "mistio", // Your Tumblr user name
        itemsToShow : 3, // Number of Tumblr posts to retrieve
        itemToAddBadgeTo : "tumblr-content", // Id of HTML element to put badge code into
        imageSize : 75, // Values can be 75, 100, 250, 400 or 500
        shortPublishDate : true, // Whether the publishing date should be cut shorter
        timeToWait : 2000, // Milliseconds, 1000 = 1 second
        words: 20
    };

    // Limit by words
    // http://stackoverflow.com/questions/1662308/javascript-substr-limit-by-word-not-char
    function trim_words(theString, numWords) {
        const expString = theString.split(/\s+/,numWords);
        const theNewString = expString.join(" ");
        return theNewString;
    }

    // Badge functionality
    const head = document.getElementsByTagName("head")[0];
    const badgeContainer = document.querySelector('landing-app').$.footer.$['tumblr-content'];
    if (head && badgeContainer) {
        let badgeJSON = document.createElement("script");
        badgeJSON.type = "text/javascript";
        badgeJSON.src = `https://mist.io/blog/api/read/json?callback=tumblrBadge.listItems&num=${ 
                        settings.itemsToShow}`;
        head.appendChild(badgeJSON);

        const wait = setTimeout(() => {
            badgeJSON.onload = null;
            badgeJSON.parentNode.removeChild(badgeJSON);
            badgeJSON = null;
        }, settings.timeToWait);

        listItems = function (json) {
            const {posts} = json;
                const list = document.createElement("ul");
                let post;
                let listItem;
                let text;
                let link;
                let img;
                let conversation;
                let postLink;
            list.className = "tumblr";
            for (let i=0, il=posts.length; i<il; i+=1) {
                post = posts[i];

                // Only get content for text, photo, quote and link posts
                if (/regular|photo|quote|link|conversation/.test(post.type)) {
                    listItem = document.createElement("li");
                    let mainText = trim_words(post["regular-body"], settings.words);
                        mainText = mainText.length < (post["regular-body"]).length ? `${mainText  } (...)` : mainText;
                    text = mainText || post["photo-caption"] || post["quote-source"] || post["link-text"] || post["link-url"] || "";
                    if (post.type === "photo") {
                        link = document.createElement("a");
                        link.href = post.url;
                        img = document.createElement("img");
                        // To avoid a creeping page
                        img.width = settings.imageSize;
                        img.src = post[`photo-url-${  settings.imageSize}`];
                        link.appendChild(img);
                        listItem.appendChild(link);
                        text = `<em>${  text  }</em>`;
                    }
                    else if (post.type === "quote") {
                        text = `${post["quote-text"]  }<em>${  text  }</em>`;
                    }
                    else if (post.type === "link") {
                        text = `<a href="${  post["link-url"]  }">${  text  }</a>`;
                    }
                    else if (post.type === "conversation") {
                        conversation = post["conversation-lines"];
                        for (let j=0, jl=conversation.length; j<jl; j+=1) {
                            text += `${conversation[j].label  } ${  conversation[j].phrase  }${(j === (jl -1))? "" : "<br>"}`;
                        }
                    }

                    // Create a link to Tumblr post
                    postDate = document.createElement("span");
                    const dt = new Date(post.date);
                    postDate.innerHTML = `${dt.getDate()  }/${  dt.getMonth()+1  }/${  dt.getFullYear()}`;

                    postLink = document.createElement("a");
                    postLink.className = "tumblr-post-title";
                    postLink.href = post.url;
                    postLink.innerHTML += `${post["regular-title"]  } - `;
                    postLink.appendChild(postDate);

                    listItem.appendChild(postLink);

                    listItem.innerHTML += text;

                    // Apply list item to list
                    list.appendChild(listItem);
                }
            }

            // Apply list to container element
            badgeContainer.innerHTML = "";
            badgeContainer.appendChild(list);
        };

        return {
            listItems
        };
    }
}();
