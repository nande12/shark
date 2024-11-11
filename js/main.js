// NAVs - mobile
////////////////////////////////////////
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
////////////////////////////////////////
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
////////////////////////////////////////
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
////////////////////////////////////////
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
if (connectDismissButton) {
  connectDismissButton.addEventListener("click", openModalDismiss);
}
if (closeButtonDismiss) {
  closeButtonDismiss.addEventListener("click", closeModalDismiss);
}

// Close the modal if clicked outside the content
window.onclick = function (event) {
  if (event.target == dismissModal) {
    closeModalDismiss();
  }
};

// LOAN BOXES
////////////////////////////////
// Función para abrir la caja de edición
function openEditBox(boxNumber) {
  // Ocultar la caja inicial
  document.getElementById("initialBox").classList.remove("active");

  // Mostrar la caja de edición correspondiente
  document.getElementById("editBox" + boxNumber).classList.add("active");

  // Si es la caja 2, mostrar el primer tab
  if (boxNumber === 2) {
    showTab(1);
  }
}

// Función para cerrar la caja de edición
function closeEditBox() {
  // Ocultar todas las cajas de edición
  const editBoxes = document.querySelectorAll(".edit-box");
  editBoxes.forEach((box) => box.classList.remove("active"));

  // Volver a mostrar la caja inicial
  document.getElementById("initialBox").classList.add("active");
}

// Función para mostrar el tab seleccionado
function showTab(tabNumber) {
  // Ocultar todos los tabs
  const tabs = document.querySelectorAll(".tab-content");
  const tabBTN = document.querySelectorAll(".tab-btn");
  tabs.forEach((tab) => tab.classList.remove("active"));
  tabBTN.forEach((tab) => tab.classList.remove("active"));

  // Mostrar el tab correspondiente
  document.getElementById("tab" + tabNumber).classList.add("active");
  document.getElementById("tab-btn" + tabNumber).classList.add("active");
}

// Función para actualizar el valor del slider 1
if (document.getElementById("slider1")) {
  document.getElementById("slider1").addEventListener("input", function () {
    document.getElementById("sliderValue1").value = this.value;
  });
}

// Función para actualizar el valor del slider 2
if (document.getElementById("slider2")) {
  document.getElementById("slider2").addEventListener("input", function () {
    document.getElementById("sliderValue2").value = this.value;
  });
}

// Inicializar la caja inicial
if (document.getElementById("initialBox")) {
  document.getElementById("initialBox").classList.add("active");
}

//SIMULATION CONTAINER
let currentStep = 1;

function showStep(step) {
  // Esconder todas las cajas
  const steps = document.querySelectorAll(".step");

  if (steps) {
    steps.forEach((s) => {
      s.classList.remove("active");
    });

    // Mostrar la caja correspondiente
    const activeStep = document.getElementById("step" + step);
    if (activeStep) {
      activeStep.classList.add("active");
    }
  }
}

function navigate(direction) {
  currentStep += direction;

  // Ajustar cíclicamente el número de paso
  if (currentStep > 3) {
    currentStep = 1;
  } else if (currentStep < 1) {
    currentStep = 3;
  }

  showStep(currentStep);
}

// Inicializar mostrando la caja 1
showStep(currentStep);

//PROGRESS BAR
///////////////////////////

document.addEventListener("DOMContentLoaded", () => {
  // Referencias de elementos
  const inputBrown = document.getElementById("progress-brown");
  const inputAqua = document.getElementById("progress-aqua");
  const progressText = document.getElementById("progress-text");
  const outerCircle = document.querySelector(".outer-circle");
  const innerCircle = document.querySelector(".inner-circle");

  // Obtener valores de los inputs
  if (inputBrown) {
    const valueBrown = parseInt(inputBrown.value);

    // Limitar valores entre 0 y 100
    const brownProgress = Math.min(Math.max(valueBrown, 0), 100);

    // Ajustar colores de progreso usando conic-gradient
    if (outerCircle) {
      outerCircle.style.background = `conic-gradient(
      #8b5a1e 0% ${brownProgress}%, 
      #080305 ${brownProgress}% 100%
  )`;
    }
  }

  if (inputAqua) {
    const valueAqua = parseInt(inputAqua.value);

    // Limitar valores entre 0 y 100
    const aquaProgress = Math.min(Math.max(valueAqua, 0), 100);

    // Actualizar el texto del progreso
    progressText.textContent = `${valueAqua}%`;

    // Ajustar colores de progreso usando conic-gradient
    if (innerCircle) {
      innerCircle.style.background = `conic-gradient(
        #56becf 0% ${aquaProgress}%, 
        #ffffff ${aquaProgress}% 100%
    )`;
    }
  }
});
