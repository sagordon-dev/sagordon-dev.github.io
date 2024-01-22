// Position to show data
const blogPos = document.querySelector("#blog");

// Dev.to username and api
const username = "sagordondev";
const api = "https://dev.to/api/articles?";

// Helper function
// Create elements
function createNode(element) {
  return document.createElement(element);
}

// function append element
function append(parentEl, childEl) {
  return parentEl.appendChild(childEl);
}

const div = createNode('div');
div.classList.add("blog-feed");

const finalURL = buildURL(username);
console.log(finalURL);
fetch(finalURL)
    .then((response) => response.json())
    .then(posts => {
        posts.forEach((post) => {
          // creating node elements
          let divPost = createNode('div'), a = createNode('a');
          let h2 = createNode('h2'), p = createNode('p');
          let small = createNode('small');
          
          // specifying value, attributes and className
          a.target = "_blank";
          p.classList.add("w-info");
          a.href = post.url;
          a.innerText = post.title;
          p.innerText = post.description;
          // Reaction count
          small.innerText = '💕 ' + post.public_reactions_count;
          //appending 
          append(h2, a);
          append(divPost, h2);
          append(divPost, p);
          append(divPost, small);
          append(div, divPost);
        })
        // appending to blog post to feed
        append(blogPos, div);
})
// build url
function buildURL(userName) {
  return `${api}username=${userName}`;
}