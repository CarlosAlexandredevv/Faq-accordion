document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll("#button");
  
    buttons.forEach(button => {
      button.addEventListener("click", function() {
        const box = button.parentElement.parentElement;
        const answer = box.querySelector(".test");
  
        if (answer.classList.contains("active")) {
          answer.classList.remove("active");
          button.src = "assets/images/icon-plus.svg";
        } else {
          answer.classList.add("active");
          button.src = "assets/images/icon-minus.svg";
        }
      });
    });
  });
  