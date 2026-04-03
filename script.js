const users = [
    {
        name: "Rashmika mandanna",
        pic: "https://i.pinimg.com/736x/cd/f8/a2/cdf8a2679f383c7555971bb7b9d43529.jpg",
        bio: "Rashmika Mandanna is an Indian actress."
    },
    {
        name: "Shraddha Kapoor",
        pic: "https://i.pinimg.com/736x/5e/b6/4f/5eb64f24b5fc40c775befc728a84e790.jpg",
        bio: "Shraddha Kapoor is an Indian actress."
    },
    {
        name: "Samantha Ruth Prabhu",
        pic: "https://i.pinimg.com/1200x/ff/cd/df/ffcddf927786f18192586c4dc8f0271f.jpg",
        bio: "Samantha Ruth Prabhu is an Indian actress."
    },
    {
        name: "Anupama Parameswaran",
        pic: "https://i.pinimg.com/736x/f7/94/e8/f794e8784743706d4c013796cf7891a6.jpg",
        bio: "Anupama Parameswaran is an Indian actress."
    },
    {
        name: "Mrunal Thakur",
        pic: "https://i.pinimg.com/736x/9d/81/f0/9d81f0b8c859c0c8fe8266b0f6a429ff.jpg",
        bio: "Mrunal Thakur is an Indian actress."
    },
    {
        name: "Scarlett Johansson",
        pic: "https://i.pinimg.com/1200x/d3/0d/ff/d30dffb3277d7da9f27c272a7d784326.jpg",
        bio: "Scarlett Johansson is an American actress."
    },
];

const cardsContainer = document.querySelector(".cards");
const inp = document.querySelector(".inp");

function renderUsers(arr) {
    if (!cardsContainer) return;

    const fragment = document.createDocumentFragment();

    arr.forEach(user => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <img src="${user.pic}" class="bg-img">
            <div class="blurred-layer" style="background-image:url('${user.pic}')"></div>
            <div class="content">
                <h3>${user.name}</h3>
                <p>${user.bio}</p>
            </div>
        `;

        fragment.appendChild(card);
    });

    cardsContainer.replaceChildren(fragment); // 🚀 best way (faster than innerHTML)
}


function renderUsers(arr) {
    if (!cardsContainer) return;

    // ❗ agar koi user nahi mila
    if (arr.length === 0) {
        cardsContainer.innerHTML = `
            <h2 class="text-white text-xl mt-10">❌ User Not Found</h2>
        `;
        return;
    }

    const fragment = document.createDocumentFragment();

    arr.forEach(user => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <img src="${user.pic}" class="bg-img">
            <div class="blurred-layer" style="background-image:url('${user.pic}')"></div>
            <div class="content">
                <h3>${user.name}</h3>
                <p>${user.bio}</p>
            </div>
        `;

        fragment.appendChild(card);
    });

    cardsContainer.replaceChildren(fragment);
}
// Initial load
renderUsers(users);


// 🔍 Debounced search (smooth + optimized)
let timeout;
inp.addEventListener("input", () => {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
        const value = inp.value.trim().toLowerCase();

        const filtered = users.filter(user =>
            user.name.toLowerCase().includes(value)
        );

        renderUsers(filtered);
    }, 200);
});