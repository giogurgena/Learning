document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJson);
document.getElementById('button3').addEventListener('click', getExternal);

//Get local text file data
function getText() {
    fetch('test.txt')
        .then(res => res.text())
        .then(data => {
            console.log(data);
            document.getElementById('output').innerHTML = data;
        })
        .catch(err => console.log(err));
}

//Get local json data
function getJson() {
    fetch('posts.Json')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            let output = '';
            data.forEach(function (post) {
                output += `<li>${post.title}</li> <blockquote>${post.body}</blockquote>`
            });
            document.getElementById('output').innerHTML = output;
        })
        .catch(err => console.log(err));
}


//Get from external API
function getExternal() {
    fetch('https://api.github.com/users')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            let output = '';
            data.forEach(function (user) {
                output += `<li style='list-style:none'>${user.login}  <img src="${user.avatar_url} style='width:30px'></img></li>`
            });
            document.getElementById('output').innerHTML = output;
        })
        .catch(err => console.log(err));
}