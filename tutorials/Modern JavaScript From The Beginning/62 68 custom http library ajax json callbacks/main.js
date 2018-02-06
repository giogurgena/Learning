// const posts = [
//     {title: 'Post One', body: 'this is post one'},
//     {title: 'Post Two', body: 'this is post two'}
// ];

// // function createPost(post) {
// //     setTimeout(function() {
// //         post.push(post);
// //     }, 2000);
// // }

// // function getPosts() {
// //     setTimeout(function() {
// //         let output = '';
// //         posts.forEach(function(post) {
// //             output += `<li>${post.title}</li>`;
// //         });
// //         document.body.innerHTML = output;
// //     }, 1000)
// // }

// // createPost({title: 'Post Three', body: 'this is post three'});
// // getPosts();


// function createPost(post, callback) {
//     setTimeout(function() {
//         posts.push(post);
//         callback();
//     }, 2000);
// }

// function getPosts() {
//     setTimeout(function() {
//         let output = '';
//         posts.forEach(function(post) {
//             output += `<li>${post.title}</li>`;
//         });
//         document.body.innerHTML = output;
//     }, 1000)
// }

// createPost({title: 'Post Three', body: 'this is post three'}, getPosts);





const http = new easyHTTP;

// Get Posts
// http.get('https://jsonplaceholder.typicode.com/posts', function(err, posts) {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(posts);
//     }
// });

// Create Data
const data = {
    title: 'custom post',
    body: 'this is a custom post'
};

//Create Post
// http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post) {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(post);
//     }
// });


//Update Post
// http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(err, post) {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(post);
//     }
// });


//Delete Post
http.delete('https://jsonplaceholder.typicode.com/posts/1', function(err, response) {
    if(err) {
        console.log(err);
    } else {
        console.log(response);
    }
});