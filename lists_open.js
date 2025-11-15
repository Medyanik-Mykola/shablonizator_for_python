function openList() {
  const headings = document.querySelectorAll(".module h2");
  const theme_lists = document.querySelectorAll("ol");

  headings.forEach((item, index) => {
    item.addEventListener("click", function () {
      theme_lists[index].classList.toggle("hidden");
    });
  });
}

export default openList;
