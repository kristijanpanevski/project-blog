const createNavItem = (text, href, onClick) => {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.href = href;
  a.textContent = text;
  if (onClick) {
    a.addEventListener("click", onClick);
    a.href = "#";
  }
  li.appendChild(a);
  return li;
};

const showLoginPopup = (event) => {
  event.preventDefault();
  const popup = document.createElement("div");
  popup.classList.add("login-popup");
  popup.innerHTML = `
    <div class="login-popup-content">
      <span class="close-button">&times;</span>
      <h2>Login</h2>
      <form>
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required><br><br>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required><br><br>
        <button type="submit">Submit</button>
      </form>
    </div>
  `;
  document.body.appendChild(popup);

  const closeButton = popup.querySelector(".close-button");
  closeButton.addEventListener("click", () => {
    document.body.removeChild(popup);
  });
};

const renderHeader = () => {
  const header = document.querySelector(".home-header");
  const navItems = [
    { text: "Posts", href: "/posts.html" },
    { text: "Newsletter", href: "./src/ourServices.html" },
    { text: "About Us", href: "./src/ourTeam.html" },
    { text: "Log in", href: "./src/contact.html", onClick: showLoginPopup },
  ];

  const nav = document.createElement("nav");
  const ul = document.createElement("ul");

  navItems.forEach((item) => {
    const navItem = createNavItem(item.text, item.href, item.onClick);
    ul.appendChild(navItem);
  });

  nav.appendChild(ul);
  header.appendChild(nav);
};

renderHeader();
