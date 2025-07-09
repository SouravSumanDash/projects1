let feed = document.getElementById("feed");
let profilePosts = document.getElementById("profilePosts");

function createPost() {
  const upload = document.getElementById("upload").files[0];
  const caption = document.getElementById("caption").value.trim();

  if (!upload) {
    alert("Please select an image.");
    return;
  }

  const reader = new FileReader();
  reader.onload = function(e) {
    const imgURL = e.target.result;
    const post = {
      img: imgURL,
      caption,
      likes: 0,
      comments: []
    };

    savePost(post);
    addPostToFeed(post);
    document.getElementById("caption").value = "";
    document.getElementById("upload").value = "";
  };
  reader.readAsDataURL(upload);
}

function addPostToFeed(post) {
  const div = document.createElement("div");
  div.classList.add("post");
  div.innerHTML = `
    <img src="${post.img}" alt="Post Image"/>
    <p>${post.caption}</p>
    <div class="actions">
      <button onclick="likePost(this)">❤️ Like (<span>${post.likes}</span>)</button>
      <button onclick="commentPost(this)">💬 Comment</button>
    </div>
  `;
  feed.prepend(div);
}

function likePost(btn) {
  const countSpan = btn.querySelector("span");
  let count = parseInt(countSpan.textContent) + 1;
  countSpan.textContent = count;
  saveAllPosts();
}

function commentPost(btn) {
  const comment = prompt("Write your comment:");
  if (comment) {
    alert(`Commented: "${comment}"`);
  }
}

function savePost(post) {
  let posts = JSON.parse(localStorage.getItem('posts')) || [];
  posts.push(post);
  localStorage.setItem('posts', JSON.stringify(posts));
}

function saveAllPosts() {
  let posts = [];
  document.querySelectorAll(".post").forEach(postEl => {
    posts.push({
      img: postEl.querySelector("img").src,
      caption: postEl.querySelector("p").textContent,
      likes: parseInt(postEl.querySelector("span").textContent),
      comments: []
    });
  });
  localStorage.setItem('posts', JSON.stringify(posts));
}

function loadFeed() {
  let posts = JSON.parse(localStorage.getItem('posts')) || [];
  posts.reverse().forEach(addPostToFeed);
}

// Stories Modal
function openStoryModal(user) {
  document.getElementById("storyModal").style.display = "block";
  document.getElementById("storyContent").textContent = `${user}'s Story Here`;
}
function closeStoryModal() {
  document.getElementById("storyModal").style.display = "none";
}

// Profile Page
document.getElementById("profileBtn").addEventListener("click", openProfile);
function openProfile() {
  document.getElementById("profilePage").style.display = "block";
  loadProfilePosts();
}
function closeProfile() {
  document.getElementById("profilePage").style.display = "none";
}
function loadProfilePosts() {
  profilePosts.innerHTML = "";
  let posts = JSON.parse(localStorage.getItem('posts')) || [];
  posts.forEach(p => {
    const div = document.createElement("div");
    div.classList.add("post");
    div.innerHTML = `
      <img src="${p.img}" alt="Profile Post"/>
      <p>${p.caption}</p>
    `;
    profilePosts.appendChild(div);
  });
}

// Check login
const currentUser = localStorage.getItem('currentUser');
if (!currentUser) {
  window.location.href = "login.html";
}

document.getElementById("welcomeUser").textContent = `Hi, ${currentUser}!`;

function logout() {
  localStorage.removeItem('currentUser');
  window.location.href = "login.html";
}

function createPost() {
  const upload = document.getElementById("upload").files[0];
  const caption = document.getElementById("caption").value.trim();

  if (!upload) {
    alert("Please select an image.");
    return;
  }

  const reader = new FileReader();
  reader.onload = function(e) {
    const imgURL = e.target.result;
    const post = {
      img: imgURL,
      caption,
      likes: 0,
      comments: [],
      user: currentUser
    };

    savePost(post);
    addPostToFeed(post);
    document.getElementById("caption").value = "";
    document.getElementById("upload").value = "";
  };
  reader.readAsDataURL(upload);
}

function addPostToFeed(post) {
  const div = document.createElement("div");
  div.classList.add("post");
  div.innerHTML = `
    <img src="${post.img}" alt="Post Image"/>
    <p><strong>${post.user}</strong>: ${post.caption}</p>
    <div class="actions">
      <button onclick="likePost(this)">❤️ Like (<span>${post.likes}</span>)</button>
      <button onclick="commentPost(this)">💬 Comment</button>
    </div>
  `;
  feed.prepend(div);
}

// On load
window.onload = loadFeed;


auth.js

function register() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;

  if (!username || !password) {
    showMessage("Please enter username and password.");
    return;
  }

  let users = JSON.parse(localStorage.getItem('users')) || {};
  if (users[username]) {
    showMessage("Username already exists. Please log in.");
    return;
  }

  users[username] = password;
  localStorage.setItem('users', JSON.stringify(users));
  showMessage("✅ Registered successfully. You can now log in!");
}

function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;

  let users = JSON.parse(localStorage.getItem('users')) || {};
  if (!users[username]) {
    showMessage("User does not exist. Please register.");
    return;
  }

  if (users[username] !== password) {
    showMessage("Incorrect password.");
    return;
  }

  localStorage.setItem('currentUser', username);
  window.location.href = "index.html";
}

function showMessage(msg) {
  document.getElementById("authMessage").textContent = msg;
}
