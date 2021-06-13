const toast = (props) => {
  const { type, title, message, duration } = props;
  const delay = (duration / 1000).toFixed(2);
  const toastElement = document.getElementById("toast");

  if (!toastElement) {
    return;
  }

  const toastContainElement = document.createElement("div");
  toastContainElement.classList.add("toast", `toast--${type}`);
  toastContainElement.innerHTML = `
        <div class="toast__icon"><i class="fas fa-info"></i></div>
        <div class="toast__content">
        <div class="toast__heading"><h3>${title}</h3></div>
        <div class="toast__desc">${message}</div>
        </div>
        <div class="toast__btn-close"><i class="far fa-window-close"></i></div>
    `;
  toastContainElement.style.animation = `toastInLeft 0.5s ease-in-out, toastFadeOut linear ${delay}s 1.5s`;
  const timeOutID = setTimeout(() => {
    toastElement.removeChild(toastContainElement);
  }, duration);

  toastContainElement.onclick = (e) => {
    console.log(e.target.closest(".toast__icon"));
    if (e.target.closest(".toast__content")) {
      toastElement.removeChild(toastContainElement);
      clearTimeout(timeOutID);
    }
  };

  toastElement.appendChild(toastContainElement);
};

const toastSuccess = () => {
  toast({
    type: "success",
    title: "Thành công !",
    message: "Bạn đã đăng kí thành công, hãy đăng nhập vào hệ thống.",
    duration: 3000,
  });
};

const toastError = () => {
  toast({
    type: "danger",
    title: "Thất bại !",
    message: "Đã có lỗi xảy ra vui lòng liên hệ qua đường dây nóng 123",
    duration: 3000,
  });
};
