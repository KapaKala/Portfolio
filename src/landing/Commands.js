const randomFact = [
  "Dogs > cats",
  "I like movies. How unique.",
  "My favorite movie is probably 12 Angry Men",
  "I might like anime but if that's not your thing I'm not gonna admit it.",
  "I'm into all kinds of music",
  "I am a peaceful bipedal hominid",
  "I've put almost 2000 hours into Dota 2 but am currently kind of retired"
];

exports.reply = command => {
  switch (command) {
    case "fact":
      return randomFact[Math.floor(Math.random() * randomFact.length)];
    case "help":
      return (
        "Following commands are defined internally:\n" +
        " hello\t\tdo this\n" +
        " fact\t\tA random fact about yours truly\n" +
        " github\t\tOpens my GitHub page"
      );
    case "github":
      window.open("https://github.com/KapaKala");
      return "";
    case "":
      return "";
    default:
      return `${command} is not a valid command`;
  }
};
