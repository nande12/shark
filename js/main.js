function topNavMobile() {
  var myTopnav = document.getElementById("myTopnav");
  if (myTopnav.className === "topnav") {
    myTopnav.className += " responsive";
  } else {
    myTopnav.className = "topnav";
  }
}

function hamburgerIcon(x) {
  x.classList.toggle("change");
}

function hamburgerIcon2(x) {
  x.classList.toggle("change");

  var mobileSideNav = document.getElementById("mobile-side-nav");
  if (mobileSideNav.className === "mobile-side-nav") {
    mobileSideNav.className += " responsive";
  } else {
    mobileSideNav.className = "mobile-side-nav";
  }
}

// MULTI SELECT
function toggleDropdown() {
  const dropdownContent = document.getElementById("dropdown-content");
  const dropdownBtn = document.querySelector(".dropdown-btn");

  dropdownContent.classList.toggle("show");
  dropdownBtn.classList.toggle("active");
}

function toggleOption(checkbox) {
  const item = checkbox.parentElement;
  if (checkbox.checked) {
    item.classList.add("checked");
  } else {
    item.classList.remove("checked");
  }
}

function clearSelection() {
  const checkboxes = document.querySelectorAll(
    ".dropdown-item input[type='checkbox']"
  );
  checkboxes.forEach((checkbox) => {
    checkbox.checked = false;
    checkbox.parentElement.classList.remove("checked");
  });
}

function filterOptions(input) {
  const filter = input.value.toLowerCase();
  const items = document.querySelectorAll(".dropdown-item");
  items.forEach((item) => {
    const text = item.textContent.toLowerCase();
    item.style.display = text.includes(filter) ? "flex" : "none";
  });
}

window.onclick = function (event) {
  if (!event.target.closest(".dropdown")) {
    document.getElementById("dropdown-content").classList.remove("show");
    document.querySelector(".dropdown-btn").classList.remove("active");
  }
};

// WALLET MODAL

// Getting modal elements
const connectWalletButton = document.getElementById("connect-a-wallet");
const walletModal = document.getElementById("wallet-modal");
const closeButton = document.querySelector(".close-button");
const connectButton = document.getElementById("connect-button");

// Function to open the modal
function openModal() {
  walletModal.style.display = "flex";
}

// Function to close the modal
function closeModal() {
  walletModal.style.display = "none";
}

// Event Listeners
connectWalletButton.addEventListener("click", openModal);
closeButton.addEventListener("click", closeModal);
connectButton.addEventListener("click", () => {
  closeModal();
  alert("Connecting to wallet...");
});

// Close the modal if clicked outside the content
window.onclick = function (event) {
  if (event.target == walletModal) {
    closeModal();
  }
};
