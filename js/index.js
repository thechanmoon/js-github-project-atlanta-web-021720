//https://api.github.com/search/users?q=octocat
const BASE_URL = 'https://api.github.com'
//let github_form = document.querySelector('#github-form');

document.addEventListener('DOMContentLoaded', init);
                           
function init(event)
{
    const github_form = document.querySelector('#github-form');
    // const github_container = document.querySelector('#github-container');
    
    github_form.addEventListener('submit',getGithubData)
    
}

function getData(url)
{
    return fetch(url)
}

function getGithubData(event)
{
    let user = event.target.search.value
    // let fetch_url = BASE_URL+"/search/users?q="+user

    event.preventDefault()
    getData(BASE_URL+'/search/users?q='+user)
    .then(res=>res.json())
    .then(data=>{
        parseData(data.items)
    });
}

function parseData(array)
{
    array.forEach(element => {
        parseElement(element)
    });
}

function parseElement(element)
{
    let github_container = document.querySelector('#github-container');

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


    h1.innerText = element.login
    div.appendChild(h1)                

    li_1.innerText = element.id
    ul.appendChild(li_1)
    li_2.innerText = element.node_id
    ul.appendChild(li_2)
    li_3.innerText = element.avatar_url
    ul.appendChild(li_3)
    li_4.innerText = element.url
    ul.appendChild(li_4)
    li_5.innerText = element.html_url
    ul.appendChild(li_5)

    div.appendChild(ul)

    github_container.appendChild(div)
}


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