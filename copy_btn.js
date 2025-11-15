function copyBtn() {
  let text_copy = document.querySelector(".text-copy");
  const copy_btn = document.querySelector(".copy");

  copy_btn.addEventListener("click", function () {
    navigator.clipboard.writeText(text_copy.textContent);
    // copy_btn.classList.add("animate");
    // setTimeout(() => copy_btn.classList.remove("animate"), 500);
    text_copy.classList.add("animate");
    setTimeout(() => text_copy.classList.remove("animate"), 500);
  });
}

export default copyBtn;
