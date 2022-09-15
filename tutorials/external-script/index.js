const divs = document.querySelectorAll(".message");

divs.forEach((div) => {
  div.addEventListener("onclick", () => {
    div.innerText = "Hello world!";
  });

  div.addEventListener("mouseout", (e) => {
    div.innerText = `You have left the div wit id ${e.target.id}`;
  });
});
