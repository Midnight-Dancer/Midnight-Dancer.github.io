const button = document.querySelector("#meeting");
function greet() {
    const name = prompt("What's your name?");
    alert(`Hello ${name}. I'm Aco, nice to meet you.`);
}
button.addEventListener("click", greet);
