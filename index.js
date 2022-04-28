let a = document.querySelectorAll("li");
console.log(a);
let count = document.querySelector(".count");
let change = document.querySelector(".mid");
let change2 = document.querySelector(".bot");
let change3 = document.querySelector(".user");
let change4 = document.querySelector(".comp");
let refresh = document.querySelector(".refresh");
let i = 0,
  j = 0,
  c = 0;
change3.innerHTML = 0;
change4.innerHTML = 0;
count.innerHTML = 0;
var b = {};
function reply_click(clicked_id) {
  b.r = clicked_id;
}
for (item of a) {
  console.log(item);
  item.addEventListener("click", (e) => {
    document.getElementById("ROCK").style.backgroundColor = "white";
    document.getElementById("PAPER").style.backgroundColor = "white";
    document.getElementById("SCISSORS").style.backgroundColor = "white";
    change.innerHTML = "";
    change2.innerHTML = "";
    c++;
    count.innerHTML = c;
    // line.innerHTML = "WINNER IS:";
    console.log(b.r);
    let choice = Math.round(Math.random() * 2 + 1);
    console.log(choice);
    if (b.r == "ROCK" && choice == 2) {
      change.innerHTML = "<span style='color: red;'>COMPUTER</span>";
      i++;
      change4.innerHTML = i;
      change3.innerHTML = j;
      console.log("YES");
      change2.innerHTML = "PAPER";
      document.getElementById("PAPER").style.backgroundColor = "#e92939";
      setTimeout(function () {
        document.getElementById("PAPER").style.backgroundColor = "white";
      }, 1000);
    }
    if (b.r == "ROCK" && choice == 1) {
      change.innerHTML = "NO ONE";
      console.log("YES");
      change2.innerHTML = "ROCK";
    }
    if (b.r == "ROCK" && choice == 3) {
      change.innerHTML = "<span style='color: green;'>USER</span>";
      j++;
      change4.innerHTML = i;
      change3.innerHTML = j;
      console.log("YES");
      change2.innerHTML = "SCISSORS";
      document.getElementById("SCISSORS").style.backgroundColor = "#62BD69";
      setTimeout(function () {
        document.getElementById("SCISSORS").style.backgroundColor = "white";
      }, 1000);
    }
    if (b.r == "PAPER" && choice == 1) {
      change.innerHTML = "<span style='color: green;'>USER</span>";
      j++;
      change4.innerHTML = i;
      change3.innerHTML = j;
      console.log("YES");
      change2.innerHTML = "ROCK";
      document.getElementById("ROCK").style.backgroundColor = "#62BD69";
      setTimeout(function () {
        document.getElementById("ROCK").style.backgroundColor = "white";
      }, 1000);
    }
    if (b.r == "PAPER" && choice == 2) {
      change.innerHTML = "NO ONE";
      console.log("YES");
      change2.innerHTML = "PAPER";
    }
    if (b.r == "PAPER" && choice == 3) {
      change.innerHTML = "<span style='color: red;'>COMPUTER</span>";
      i++;
      change4.innerHTML = i;
      change3.innerHTML = j;
      console.log("YES");
      change2.innerHTML = "SCISSORS";
      document.getElementById("SCISSORS").style.backgroundColor = "#e92939";
      setTimeout(function () {
        document.getElementById("SCISSORS").style.backgroundColor = "white";
      }, 1000);
    }
    if (b.r == "SCISSORS" && choice == 1) {
      change.innerHTML = "<span style='color: red;'>COMPUTER</span>";
      i++;
      change4.innerHTML = i;
      change3.innerHTML = j;
      console.log("YES");
      change2.innerHTML = "ROCK";
      document.getElementById("ROCK").style.backgroundColor = "#e92939";
      setTimeout(function () {
        document.getElementById("ROCK").style.backgroundColor = "white";
      }, 1000);
    }
    if (b.r == "SCISSORS" && choice == 2) {
      change.innerHTML = "<span style='color: green;'>USER</span>";
      j++;
      change4.innerHTML = i;
      change3.innerHTML = j;
      console.log("YES");
      change2.innerHTML = "PAPER";
      document.getElementById("PAPER").style.backgroundColor = "#62BD69";
      setTimeout(function () {
        document.getElementById("PAPER").style.backgroundColor = "white";
      }, 1000);
    }
    if (b.r == "SCISSORS" && choice == 3) {
      change.innerHTML = "NO ONE";
      console.log("YES");
      change2.innerHTML = "SCISSORS";
    }
  });
}

refresh.addEventListener("click", () => {
  change.innerHTML = "";
  change2.innerHTML = "";
  change3.innerHTML = 0;
  (i = 0), (j = 0), (c = 0);
  change4.innerHTML = 0;
  count.innerHTML = 0;
  document.getElementById("ROCK").style.backgroundColor = "white";
  document.getElementById("PAPER").style.backgroundColor = "white";
  document.getElementById("SCISSORS").style.backgroundColor = "white";
});
