const idModal = document.getElementById("formBet");
const showModalPrice = () => {
  const listSize = document.querySelectorAll(".bet__item");
  listSize.forEach((itemSize) => {
    itemSize.addEventListener("click", () => {
      idModal.classList.add("active");
    });
  });
};

const handleCloseModal = () => {
  const cancelModal = document.querySelector(".formBet__button-close");
  cancelModal.addEventListener("click", () => {
    idModal.classList.remove("active");
  });
};

const handleSelectedValue = () => {
  const listOption = document.querySelectorAll(".formBet__pick-item");
  const inputPrice = document.getElementById("formBet__balance");
  const defaultValue = document.querySelector(".formBet__pick-item.default");

  if (defaultValue) {
    inputPrice.value = defaultValue.dataset.value;
    defaultValue.classList.add("active");
  }

  listOption.forEach((itemOption) => {
    itemOption.addEventListener("click", () => {
      $(".formBet__pick-item").removeClass("active");
      inputPrice.value = itemOption.dataset.value;
      itemOption.classList.add("active");
    });
  });
};

// handle link navbar

(() => {
  showModalPrice();
  handleCloseModal();
  handleSelectedValue();
})();
