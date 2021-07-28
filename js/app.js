window.addEventListener("DOMContentLoaded", () => {

const texting = document.querySelector(".texting");
console.log(texting);

function getAllPost() {
    fetch("../json/card.json")
    .then((res) => {
        return res.json();
    })
    .then((posts) => {
        let html = "";
        posts.forEach(post => {
            html += `
                <div class="col s12 m3">
                    <div class="card">
                    <div class="card-image">
                        <img src=${post.img}>
                        <span class="card-title">${post.title}</span>
                    </div>
                    <div class="card-content">
                        <p>${post.text}</p>
                    </div>
                    </div>
                </div>
            `;
        })
        texting.innerHTML = html;
    })
    .catch(err =>  console.log(err))
}
getAllPost();

});
