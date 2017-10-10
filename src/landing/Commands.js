exports.reply = (command) => {
    switch (command) {
        case "fact":
            console.log(Math.random() * random.length);
            return random[Math.floor(Math.random() * random.length)];
        default:
            return command + " is not a valid command"
    }
};

const random = ["Dogs are cool", "I like movies", "Music is neat", "I am a peaceful bipedal hominid", "Reeding is for fagets"];