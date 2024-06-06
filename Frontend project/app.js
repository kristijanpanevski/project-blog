// Create the navigation items dynamically
const createNavItem = (text, href, onClick) => {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.textContent = text;
  if (onClick) {
    a.href = "#";
    a.addEventListener("click", (event) => {
      event.preventDefault();
      onClick();
    });
  } else {
    a.href = href;
  }
  li.appendChild(a);
  return li;
};

// Create the search bar
const createSearchBar = () => {
  const searchForm = document.createElement("form");
  searchForm.className = "search-form";

  const searchWrapper = document.createElement("div");
  searchWrapper.className = "search-wrapper";

  const searchIcon = document.createElement("i");
  searchIcon.className = "fas fa-search search-icon";

  const searchInput = document.createElement("input");
  searchInput.type = "text";
  searchInput.className = "search-input";
  searchInput.placeholder = "Search...";

  searchWrapper.appendChild(searchIcon);
  searchWrapper.appendChild(searchInput);
  searchForm.appendChild(searchWrapper);

  // Width change on focus
  searchInput.addEventListener("focus", () => {
    searchInput.style.width = "600px";
  });

  // Reset width on blur if empty
  searchInput.addEventListener("blur", () => {
    if (!searchInput.value) {
      searchInput.style.width = "150px";
    }
  });

  return searchForm;
};

// Render the navigation header
const renderHeader = () => {
  const header = document.querySelector(".home-header");
  const navItems = [
    { text: "Posts", href: "#" },
    { text: "Newsletter", onClick: showNewsletterPopup },
    { text: "About Us", href: "#" },
    { text: "Sample", href: "#" },
    { text: "Log in", onClick: showLoginPopup },
    { text: "Contact", href: "#" },
  ];

  const nav = document.createElement("nav");
  const ul = document.createElement("ul");

  // Add the search bar to the navigation
  const searchBar = createSearchBar();
  const searchBarLi = document.createElement("li");
  searchBarLi.appendChild(searchBar);
  ul.appendChild(searchBarLi);

  navItems.forEach((item) => {
    const navItem = createNavItem(item.text, item.href, item.onClick);
    ul.appendChild(navItem);
  });

  nav.appendChild(ul);
  header.appendChild(nav);
};

// Render and display the login popup
const showLoginPopup = () => {
  let popup = document.querySelector(".login-popup");
  if (popup) {
    popup.style.display = "flex";
    return;
  }

  popup = document.createElement("div");
  popup.className = "login-popup";
  popup.innerHTML = `
    <div class="login-popup-content">
      <span class="close-button">&times;</span>
      <h2>Login</h2>
      <form>
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required>
        <button type="submit">Submit</button>
      </form>
      <p class="create-account-link"><a href="#" id="create-account-link">Create new account</a></p>
    </div>
  `;
  document.body.appendChild(popup);

  // Close login popup button functionality
  popup.querySelector(".close-button").addEventListener("click", () => {
    popup.style.display = "none";
  });
};

// Render and display the newsletter popup
const showNewsletterPopup = () => {
  let existingPopup = document.querySelector(".newsletterPopup");
  if (existingPopup) {
    existingPopup.style.display = "flex";
    return;
  }

  const newsletterPopup = document.createElement("div");
  newsletterPopup.className = "newsletterPopup";
  newsletterPopup.innerHTML = `
    <div class="newsletterPopup-content">
      <span class="close-button">&times;</span>
      <h1>Join our e-mail list!</h1>
      <br>
      <p>Sign up for our weekly updates</p>
      <form>
        <input type="email" placeholder="Your email address" required>
        <p>Coming soon...</p>
      </form>
    </div>
  `;
  document.body.appendChild(newsletterPopup);

  // Show the modal
  newsletterPopup.style.display = "flex";

  // Close newsletter popup button functionality
  newsletterPopup
    .querySelector(".close-button")
    .addEventListener("click", () => {
      newsletterPopup.style.display = "none";
    });
};

renderHeader();
