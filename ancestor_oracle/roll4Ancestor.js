let roll = new Roll(`1d4`).roll();
console.log(roll.results[0]);


let message;
let currentRoll = roll.results[0];

let toChat = (content) => {
    let chatData = {
      user: game.user.id,
      content,
      speaker: ChatMessage.getSpeaker(),
    }
    ChatMessage.create(chatData, {})
}


switch (currentRoll) {
    case 1:
        (currentRoll = 1)
        message = "Bluu is dominated by her Strike Ancestor.";
        toChat(message, {})
        break;
    case 2:
        (currentRoll = 2)
        message = "Bluu is dominated by her Skill Ancestor."
        toChat(message, {});
        break;
    case 3: 
        (currentRoll = 3)
        message = "Bluu is dominated by her Caster Ancestor.";
        toChat(message, {});
        break;
    case 4: 
        (currentRoll = 4)
        message = "Bluu can choose her Ancestor.";
        toChat(message, {});
        break;
}




