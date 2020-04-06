//https://api.github.com/search/users?q=octocat
const BASE_URL = 'https://api.github.com'

document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');

    const github_form = document.querySelector('#github-form');
    const github_container = document.querySelector('#github-container');
    
    github_form.addEventListener('submit',(event)=>{
    
    event.preventDefault()

    let user = event.target.search.value
    let fetch_url = BASE_URL+"/search/users?q="+user
    //debugger
        // method: "POST" is missing from the object below
    // let formData = {
    //     dogName: "Byron",
    //     dogBreed: "Poodle"
    //     };    

    // let configObj = {
    //     headers: {
    //     "Content-Type": "application/json",
    //     // "Accept": "application/json"
    //     "Accept": "application/vnd.github.v3+json"
    //     },
    //     // body: JSON.stringify(formData)
    // };
    //debugger 
    fetch(fetch_url)
        .then(function(response) {
        return response.json();
        })
        .then(function(object) {
        // console.log(object.items);
        
        //debugger
        renderGithub(object);
        })
        .catch(function(error) {
        alert("Bad things! Ragnarők!");
        console.log(error.message);
        });
        })

        function renderGithub(object)
        {
            let div = document.createElement('div') 
            let h1 = document.createElement('h1')
            let ul =  document.createElement('u1')
            let li_1 =  document.createElement('li')
            let li_2 =  document.createElement('li')
            let li_3 =  document.createElement('li')
            let li_4 =  document.createElement('li')
            let li_5 =  document.createElement('li')
            let li_6 =  document.createElement('li')
            let li_7 =  document.createElement('li')
            // div.appendChild(h1)

            object.items.forEach(item => {
                
                h1.innerText = item.login
                div.appendChild(h1)                
 
                li_1.innerText = item.id
                ul.appendChild(li_1)
                li_2.innerText = item.node_id
                ul.appendChild(li_2)
                li_3.innerText = item.avatar_url
                ul.appendChild(li_3)
                li_4.innerText = item.url
                ul.appendChild(li_4)
                li_5.innerText = item.html_url
                ul.appendChild(li_5)

                div.appendChild(ul)

                github_container.appendChild(div)
                //github_container.appendChild(item.login)
            });
        }
});


// addAnother = function() {
//     var ul = document.getElementById("list");
//     var li = document.createElement("li");
//     var children = ul.children.length + 1
//     li.setAttribute("id", "element"+children)
//     li.appendChild(document.createTextNode("Element "+children));
//     ul.appendChild(li)
// }

/* login: "thechanmoon"
id: 40532728
node_id: "MDQ6VXNlcjQwNTMyNzI4"
avatar_url: "https://avatars3.githubusercontent.com/u/40532728?v=4"
gravatar_id: ""
url: "https://api.github.com/users/thechanmoon"
html_url: "https://github.com/thechanmoon"
followers_url: "https://api.github.com/users/thechanmoon/followers"
following_url: "https://api.github.com/users/thechanmoon/following{/other_user}"
gists_url: "https://api.github.com/users/thechanmoon/gists{/gist_id}"
starred_url: "https://api.github.com/users/thechanmoon/starred{/owner}{/repo}"
subscriptions_url: "https://api.github.com/users/thechanmoon/subscriptions"
organizations_url: "https://api.github.com/users/thechanmoon/orgs"
repos_url: "https://api.github.com/users/thechanmoon/repos"
events_url: "https://api.github.com/users/thechanmoon/events{/privacy}"
received_events_url: "https://api.github.com/users/thechanmoon/received_events"
type: "User"
site_admin: false
score: 1 */