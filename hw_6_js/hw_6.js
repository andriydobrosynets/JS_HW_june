// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts


/*fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
        let postsBox = document.getElementsByClassName('posts-box')[0];
        for (const post of posts) {
            let pPost = document.createElement('p');
            pPost.innerText = `${post.id} - ${post.title}`;
            postsBox.appendChild(pPost);
        }
    });*/


// 2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/comments


/*fetch(`https://jsonplaceholder.typicode.com/comments`)
            		.then(value => value.json())
            		.then(comments => {
                        let commentsBox = document.getElementsByClassName('comments-box')[0];
                        for (const comment of comments) {
                            let pComment = document.createElement('h1');
                            pComment.innerText = `${comment.id} - ${comment.email}`;


                        commentsBox.appendChild(pComment);

                        }
                    });*/

