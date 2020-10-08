//19-6
/* now lets use axios in this example
- first add the axios.js from CDN to the the html file
-now we can use globally available axios object to use differnent kind of methods. ex: get(), post()
-to post the data you dont have to convert the data from object to json. it automatically converts the data to json.if 
its form data then it aslo detects that and acts according to that 
*/
const liElement = document.querySelector('.posts');
const postTemplate = document.getElementById('single-post')

//you dont need that anymore. keeping this just so you can compare
// function sendHttpRequest(method, url, data) {

//     return fetch(url, {  
//         method: method,
//         body: JSON.stringify(data),
//         header : {
//             'Content-Type': 'application/json' // this is one of the typical headers we add to outgoing requests to notify that our request json data
//         }
//     }).then(response => { 
//         return response.json()
//     })
// }


async function fetchPosts() {

    //lets try axios here

    try {
        const response = await axios( // returns an object containg all the data related to the response
            'https://jsonplaceholder.typicode.com/posts'
        );
        console.log(response);
        for (const post of response.data) {
            const postEl = document.importNode(postTemplate.content, true);
            postEl.querySelector('h2').textContent = post.title.toUpperCase();
            postEl.querySelector('p').textContent = post.body;
            liElement.append(postEl);
        }
    } catch (error) {
        console.log(error.message);
        console.log(error.response)
    }



    //keeping the old version:
    // try {
    //     const allPosts = await sendHttpRequest(
    //         'GET', 'https://jsonplaceholder.typicode.com/posts'
    //     );
    //     console.log(allPosts);
    //     for (const post of allPosts) {
    //         const postEl = document.importNode(postTemplate.content, true);
    //         postEl.querySelector('h2').textContent = post.title.toUpperCase();
    //         postEl.querySelector('p').textContent = post.body;
    //         liElement.append(postEl);
    //     }
    // } catch (error) {
    //     alert(error)
    // }
}

async function createPost(title, content) {
    const data = {
        title: title,
        body: content,
        userId: Math.random()
    }
    const response = await axios.post(
        'https://jsonplaceholder.typicode.com/posts',
        data
    );
    console.log(response)
    //sendHttpRequest('POST', 'https://jsonplaceholder.typicode.com/posts', data); //keeping the previous jsut so you can compare
}

fetchPosts();
createPost('how to get into relationship', 'this comes with experience and reflection');










