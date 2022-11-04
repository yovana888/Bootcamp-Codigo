import {
    dataInit
} from './data.js';
const containerCard = document.querySelector("#containerCard");
const inputUser = document.querySelector("#github-search");
const btnSearch = document.querySelector('#github-action-search');

//https://api.github.com/users/yovana888

const init = (data) => {
    containerCard.innerHTML = '';
    const cardElement = document.createElement("div");
    cardElement.className = "card bg-blue-dark";
    const templateCard = `<div class="card-body p-5">
    <div class="row">
        <div class="col-md-2">
            <img 
            id="img-profile"
            src="${data.avatar_url}"
            width="100"
            height="100"
            class="rounded-circle img-fluid"
             alt="">
        </div>
        <div class="col-md-10">
         <div class="row">
            <div class="col-md-6">
                <h4 id="github-name">${data.name}</h4>
                <p id="github-username" class="text-primary">${data.login}</p>
                <p id="github-bio">${data.bio?data.bio:'not available'}</p>
            </div>
            <div class="col-md-6 text-end">
                <p id="github-joined">${data.created_at}</p>
            </div>
            <div class="col-md-12">
              <div class="card bg-blue-dark">
                <div class="card-body">
                    <div class="row">
                     <div class="col-md-4">
                        <p>Repos</p>
                        <h4 id="github-repos">${data.public_repos}</h4>
                     </div>
                     <div class="col-md-4">
                         <p>Followers</p>
                         <h4 id="github-followers">${data.followers}</h4>
                     </div>
                     <div class="col-md-4">
                        <p>Following</p>
                        <h4 id="github-following">${data.following}</h4>
                     </div>
                  </div>
                </div>
              </div>
            </div>
           <div class="col-md-12">
            <div class="row">
                <div class="col-md-6">
                    <p>
                     <i class="fa-brands fa-twitter"></i>
                     <span id="github-twitter">${data.twitter_username ? data.twitter_username:'not available'}</span>
                    </p>
                </div>
                <div class="col-md-6">
                    <p>
                        <i class="fa-solid fa-location-dot"></i>
                        <span id="github-location">${data.location}</span>
                    </p>

                </div>

            </div>
      
           </div>
         </div>
        </div>

    </div>

 </div>`;

    cardElement.innerHTML = templateCard;
    containerCard.appendChild(cardElement);
};

const getDataApi = async (userName) => {
    await fetch(`https://api.github.com/users/${userName}`)
        .then(res => res.json())
        .then(res => {
            if (res.message)
                throw new Error(res.message)
            else
                init(res)
        })
        .catch(err => {
            init(dataInit);
            alert(err);
            inputUser.value='';
        });
}

btnSearch.addEventListener('click', () => {
    const valueInput = inputUser.value;
    if (valueInput) {
        getDataApi(valueInput);
    } else {
        alert('No puede ser vacio');
        init(dataInit);
    }
})



document.addEventListener("DOMContentLoaded", init(dataInit));