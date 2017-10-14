exports.reply = (command) => {
    switch (command) {
        case "fact":
            console.log(Math.random() * randomFact.length);
            return randomFact[Math.floor(Math.random() * randomFact.length)];
        case "help":
            return ("Following commands are defined internally:\n" +
                    " hello\t\tdo this\n" +
                    " fact\t\tA random fact about yours truly\n" +
                    " github\t\tOpens my GitHub page");
        case "github" :
            window.open("https://github.com/KapaKala");
            return "";
            break;
        default:
            return command + " is not a valid command"
    }
};

const randomFact = ["Dogs are cool", "I like movies", "Music is neat", "I am a peaceful bipedal hominid", "Reeding is for fagets"];