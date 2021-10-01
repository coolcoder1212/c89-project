//for localstorage hehehehhehehbehf

function login() {
    player_1 = document.getElementById("username_input1").value;
    player_2 = document.getElementById("username_input2").value;
    localStorage.setItem("Player1", player_1);
    localStorage.setItem("Player2", player_2);

    window.location = "game.html";
}