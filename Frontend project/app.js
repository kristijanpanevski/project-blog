// Create navigation item dynamically
const createNavItem = (text, href, onClick) => {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.href = href;
  a.textContent = text;
  if (onClick) {
    a.addEventListener("click", (event) => {
      event.preventDefault();
      onClick();
    });
    a.href = "#";
  }
  li.appendChild(a);
  return li;
};

// Display the login popup
const showLoginPopup = () => {
  const existingPopup = document.querySelector(".login-popup");
  if (existingPopup) {
    existingPopup.style.display = "flex";
    return;
  }

  const popup = document.createElement("div");
  popup.className = "login-popup";
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

  // Close button functionality
  const closeButton = popup.querySelector(".close-button");
  closeButton.addEventListener("click", () => {
    document.body.removeChild(popup);
  });
};

// Display the offer popup for the newsletter
const showOfferPopup = () => {
  const existingPopup = document.querySelector(".offer-popup");
  if (existingPopup) {
    existingPopup.style.display = "flex";
    return;
  }

  const offerPopup = document.createElement("div");
  offerPopup.className = "offer-popup";
  offerPopup.innerHTML = `
        <div class="offer-popup-content">
            <span class="close-button">&times;</span>
            <h1>Join our e-mail list!</h1>
            <p>Sign up for our weekly updates</p>
            <form>
                <input type="email" placeholder="Your email address" required>
            <p>Coming soon...</p>
            </form>
        </div>
    `;
  document.body.appendChild(offerPopup);

  // Show the modal
  offerPopup.style.display = "flex";

  // Close the modal on click
  offerPopup.querySelector(".close-button").addEventListener("click", () => {
    offerPopup.style.display = "none";
  });
};

// Render the navigation header
const renderHeader = () => {
  const header = document.querySelector(".home-header");
  const navItems = [
    { text: "Posts", href: "/posts.html" },
    {
      text: "Newsletter",
      href: "./src/ourServices.html",
      onClick: showOfferPopup,
    },
    { text: "About Us", href: "./src/ourTeam.html" },
    { text: "Sample", href: "./src/ourTeam.html" },
    { text: "Log in", href: "./src/contact.html", onClick: showLoginPopup },
    { text: "Contact", href: "./src/ourTeam.html" },
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
