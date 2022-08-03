const project = document.querySelectorAll(".project");
const modalWindow = document.querySelector(".modal");

const openModal = (e) => {
  modalWindow.classList.remove("hidden");
  let imageIndex = e.target.getAttribute("data-number-type");
  const modalImage = document.getElementById("modal-img");

  modalImage.src = `/images/img-${imageIndex}.png`;
};

const closeModal = () => {
  modalWindow.classList.add("hidden");
};

for (const img of project) {
  img.addEventListener("click", openModal);
}

modalWindow.addEventListener("click", closeModal);
