var blogBadge = function () {
    listItems = function (json) {
        var posts = json.posts,
            list = document.createElement("ul"),
            post,
            listItem,
            text,
            link,
            img,
            conversation,
            postLink;
        list.className = "blog";
        for (var i=0, il=posts.length; i<il; i=i+1) {
            post = posts[i];

            // Only get content for text, photo, quote and link posts
            if (/regular|photo|quote|link|conversation/.test(post.type)) {
                listItem = document.createElement("li");
                var mainText = trim_words(post["body"], settings.words);
                    mainText = mainText.length < (post["body"]).length ? mainText + " (...)" : mainText;
                text = mainText || post["photo-caption"] || post["quote-source"] || post["link-text"] || post["url"] || "";
                if (post.type === "photo") {
                    link = document.createElement("a");
                    link.href = post.url;
                    img = document.createElement("img");
                    // To avoid a creeping page
                    img.width = settings.imageSize;
                    img.src = post["photo-url-" + settings.imageSize];
                    link.appendChild(img);
                    listItem.appendChild(link);
                    text = "<em>" + text + "</em>";
                }
                else if (post.type === "quote") {
                    text = post["quote-text"] + "<em>" + text + "</em>";
                }
                else if (post.type === "link") {
                    text = '<a href="' + post["url"] + '">' + text + '</a>';
                }
                else if (post.type === "conversation") {
                    conversation = post["conversation-lines"];
                    for (var j=0, jl=conversation.length; j<jl; j=j+1) {
                        text += conversation[j].label + " " + conversation[j].phrase + ((j === (jl -1))? "" : "<br>");
                    }
                }

                // Create a link to blog post
                postDate = document.createElement("span");
                var dt = new Date(post["published"]);
                postDate.innerHTML = dt.getDate() + "/" + (dt.getMonth()+1) + "/" + dt.getFullYear();

                postLink = document.createElement("a");
                postLink.className = "blog-post-title";
                postLink.href = post.url;
                postLink.innerHTML += post["title"] + " - ";
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
    
    // User settings
    var settings = {
        userName : "mistio", // Your blog user name
        itemsToShow : 3, // Number of blog posts to retrieve
        itemToAddBadgeTo : "blog-content", // Id of HTML element to put badge code into
        imageSize : 75, // Values can be 75, 100, 250, 400 or 500
        shortPublishDate : true, // Whether the publishing date should be cut shorter
        timeToWait : 2000, // Milliseconds, 1000 = 1 second
        words: 20
    };

    // Limit by words
    // http://stackoverflow.com/questions/1662308/javascript-substr-limit-by-word-not-char
    function trim_words(theString, numWords) {
        var expString = theString.split(/\s+/,numWords);
        var theNewString = expString.join(" ");
        return theNewString;
    }

    // Badge functionality
    var head = document.getElementsByTagName("head")[0];
    var badgeContainer = document.querySelector('landing-app').$.footer.$['blog-content'];
    if (head && badgeContainer) {
        const request = new XMLHttpRequest();
        request.addEventListener('load', (e) => {
            const response = new window.DOMParser().parseFromString(e.target.response, 'text/xml');
            let ret = {};
            ret.posts = []
            let items = response.querySelectorAll('entry');
            for (let i=0; i<3; i++) {
                let post=items[i], body=post.querySelector('content');

                ret.posts.push({
                    'url': post.querySelector('link').getAttribute('href'),
                    'title': post.querySelector('title').textContent,
                    'type': 'regular',
                    'body': body ? body.textContent : 'yolo',
                    'published': post.querySelector('published').textContent
                });
            }
            listItems(ret);
        })
        request.open("GET", "/static/blog/dist/atom.xml");
        request.send();

        // var badgeJSON = document.createElement("script");
        // badgeJSON.type = "text/javascript";
        // badgeJSON.src = "https://mist.io/blog/api/read/json?callback=blogBadge.listItems&num=" +
        //                 settings.itemsToShow;
        // head.appendChild(badgeJSON);

        // var wait = setTimeout(function () {
        //     badgeJSON.onload = null;
        //     badgeJSON.parentNode.removeChild(badgeJSON);
        //     badgeJSON = null;
        // }, settings.timeToWait);

        

        return {
            listItems : listItems
        };
    }
}();
