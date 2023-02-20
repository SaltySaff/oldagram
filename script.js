const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const contentContainer = document.querySelector(".content-container")

for (let i = 0; i < posts.length; i++) {
    contentContainer.innerHTML += 
        `<div class="content">
        <section>
            <div class="header-container">
                <img class="user-avatar post-avatar" src="${posts[i].avatar}" alt="user's avatar">
                <div>
                    <h1 class="name">${posts[i].name}</h1>
                    <p class="user-location">${posts[i].location}</p>
                </div>
            </div>
        </section>
        <figure>
            <img class="post-img" src="${posts[i].post}" alt="image posted by user">
        </figure>
        <section>
            <div class="footer-container">
                <div class="buttons-container">
                    <button class="like-btn">
                        <img class="btn-icon" src="images/icon-heart.png" alt="">
                    </button>
                    <button class="comment-btn">
                        <img class="btn-icon" src="images/icon-comment.png" alt="">
                    </button>
                    <button class="dm-btn">
                        <img class="btn-icon" src="images/icon-dm.png" alt="">
                    </button>
                </div>
                <h1>
                    <span class=likes>${posts[i].likes}</span> likes
                </h1>
                <p>
                    <span class="username">${posts[i].username}</span>
                    <span class="comment">${posts[i].comment}</span>
                </p>
            </div>
        </section>
    </div>`
}
