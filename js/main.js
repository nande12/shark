function topNavMobile() {
  var myTopnav = document.getElementById("myTopnav");
  if (myTopnav) {
    if (myTopnav.className === "topnav") {
      myTopnav.className += " responsive";
    } else {
      myTopnav.className = "topnav";
    }
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
// Manejar apertura y cierre al hacer clic o focus en el campo de búsqueda
document.querySelectorAll(".dropdown").forEach((dropdown) => {
  const btn = dropdown.querySelector(".dropdown-btn");
  const searchInput = dropdown.querySelector(".dropdown-search");
  const content = dropdown.querySelector(".dropdown-content");
  const clearSelectionBtn = dropdown.querySelector(".clear-selection");
  const items = dropdown.querySelectorAll(".dropdown-item");

  const toggleDropdown = () => {
    const isOpen = content.classList.contains("show");
    document.querySelectorAll(".dropdown-content").forEach((dropdown) => {
      dropdown.classList.remove("show");
    });
    content.classList.toggle("show", !isOpen);
    btn.classList.toggle("active", !isOpen);
  };

  btn.addEventListener("click", (event) => {
    event.stopPropagation();
    toggleDropdown();
    searchInput.focus();
  });

  searchInput.addEventListener("focus", (event) => {
    event.stopPropagation();
    content.classList.add("show");
    btn.classList.add("active");
  });

  // Filtrar las opciones según el texto ingresado en el campo de búsqueda
  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    items.forEach((item) => {
      const text = item.textContent.toLowerCase();
      item.style.display = text.includes(query) ? "flex" : "none";
    });
  });

  // Clear Selection
  clearSelectionBtn.addEventListener("click", () => {
    const checkboxes = dropdown.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });
    clearSelectionBtn.classList.remove("show");
  });

  // Mostrar "Clear Selection" si hay opciones seleccionadas
  const checkboxes = dropdown.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      const anyChecked = Array.from(checkboxes).some((cb) => cb.checked);
      clearSelectionBtn.classList.toggle("show", anyChecked);
    });
  });
});

// Cerrar dropdown al hacer clic fuera
document.addEventListener("click", (event) => {
  document.querySelectorAll(".dropdown-content").forEach((content) => {
    if (!content.closest(".dropdown").contains(event.target)) {
      content.classList.remove("show");
      content
        .closest(".dropdown")
        .querySelector(".dropdown-btn")
        .classList.remove("active");
    }
  });
});

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

// DISMISS ALL MODAL
const connectDismissButton = document.getElementById("dismiss-all");
const dismissModal = document.getElementById("dismiss-modal");
const closeButtonDismiss = document.querySelector(".close-button-dismiss");

// Function to open the modal
function openModalDismiss() {
  dismissModal.style.display = "flex";
}

// Function to close the modal
function closeModalDismiss() {
  dismissModal.style.display = "none";
}

// Event Listeners
connectDismissButton.addEventListener("click", openModalDismiss);
closeButtonDismiss.addEventListener("click", closeModalDismiss);

// Close the modal if clicked outside the content
window.onclick = function (event) {
  if (event.target == dismissModal) {
    closeModalDismiss();
  }
};
