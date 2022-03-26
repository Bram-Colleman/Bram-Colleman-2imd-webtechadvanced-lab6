const primus = Primus.connect('/', {
    reconnect: {
        max: Infinity // Number: The max delay before we try to reconnect.
      , min: 500 // Number: The minimum delay before we try reconnect.
      , retries: 10 // Number: How many times we should try to reconnect.
    }
  });


document.querySelector(".submit").addEventListener("click", e => {
    e.preventDefault();
    primus.write({ 
        team: document.querySelector("#teams").value,
        score: document.querySelector(".score").value
    });
});


primus.on('data', (data) => {
    let team = "." + data.team;
    let score = team + "Score";
    console.log(data.team);
    console.log(data.score);
    document.querySelector(score).innerHTML = data.score;

});


