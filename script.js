import { posts } from '/data.js'

const contentContainer = document.querySelector(".content-container")

document.addEventListener('click', function(e) {
    if (e.target.dataset.like) {
        handleLike(e.target.dataset.like)
    }
})

function handleLike(username) {
    //filter through the posts array looking for the post with the passed username
    const likedPost = posts.filter(function(post) {
        return post.username == username
    })[0]

    //check if that post is already liked
    if (!likedPost.isLiked) {
        // if it is, increment the likes, and set isLiked to true
        likedPost.likes++
        likedPost.isLiked = !likedPost.isLiked
    } else {
        console.log('Error: already liked')
    }

    // render the html again
    render()
}

function getHtml() {
    let html = ''
    posts.forEach(function(post) {
        html +=
            `<div class="content">
                <section>
                    <div class="header-container">
                        <img class="user-avatar post-avatar" src="${post.avatar}" alt="user's avatar">
                        <div>
                            <h1 class="name">${post.name}</h1>
                            <p class="user-location">${post.location}</p>
                        </div>
                    </div>
                </section>
                <figure>
                    <img class="post-img" src="${post.post}" alt="image posted by user">
                </figure>
                <section>
                    <div class="footer-container">
                        <div class="buttons-container">
                            <button class="like-btn">
                                <img class="btn-icon"
                                    src="images/icon-heart.png"
                                    alt=""
                                    data-like="${post.username}">
                            </button>
                            <button class="comment-btn">
                                <img class="btn-icon" src="images/icon-comment.png" alt="">
                            </button>
                            <button class="dm-btn">
                                <img class="btn-icon" src="images/icon-dm.png" alt="">
                            </button>
                        </div>
                        <h1>
                            <span class=likes>${post.likes}</span> likes
                        </h1>
                        <p>
                            <span class="username">${post.username}</span>
                            <span class="comment">${post.comment}</span>
                        </p>
                    </div>
                </section>
            </div>`
    }) 
    return html
}

function render() {
    contentContainer.innerHTML = getHtml()
}

render()


