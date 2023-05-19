
var player = {
    firstName: "",
    heath: 100,
    inventory: [],
    currentLocation: "start"
};

var rooms = {
    start: {
        description: "You are in a dark room... you have hallway to the north and door to the east",
        exits: {
            north: "hallway"
        },
        items: ['treasure']
    },
    hallway: {
        description: "You are in scary hallway... there is a zombies behind you, and door to the east",
        exits: {
            back: "start",
            behind: "zombies",
            east: "door locked"

        },
        items: ['key']


    },
    "door locked": {
        description: "You are infront of locked door, there is a key",
        exits: {
            
        }
    },
    "treasure room":{
        description: "You are in the treasure room, look for it",
        items: ['treasure']
    }
}
function getCurrentRoomObject() {
    var currentLocation = player.currentLocation;
    return rooms[currentLocation];

}

function use(item){
    if(!player.inventory.includes('treasure')){
        console.log()
    }
}


function take(item) {
    var roomObject = getCurrentRoomObject();
    var roomItems = roomObject.items;

    if (!roomItems.include(item)) {
        return console.log("This item is not located in your room")
    }

    var itemIndex = roomItems.indexOf(item);
    player.inventory.push(item);
    roomItems.splice(itemIndex, 1);

    console.log("We took the item!");
    


}

function go(direction) {
    var currentLocation = player.currentLocation;
    //var roomObject = rooms[currentLocation];
    var roomExits = roomObject.exits;

    if (!roomExits[direction]) {
        return console.log("Sorry you can not go this way...")
    }

    player.currentLocation = roomExits[direction];

}


//command structure
//[action] [objective]
//go [direction]
function parseCommand(command) {
    if (typeof command !== "string") {
        throw new TypeError("Command should be a str")
    }
    var commandBreakdown = command.split(' ');
    var action = commandBreakdown.shift();
    var objective = commandBreakdown.join(' ');

    switch (action) {
        case "go":
            go(objective);
            break;
        case "take":
            take(objective)
        default:
            console.log("this action is unsupported");
            break;
    }

}

while (player.heath > 0) {
    var currentRoom = rooms[player.currentLocation]
    console.log(currentRoom.description);
    console.log("This is your health:", player.heath);
    console.log("This is your inventory:", player.inventory)

    var userCommand = prompt("What do you want to do?");
    parseCommand(userCommand);

    if(player.inventory.includes('treasure')){
        console.log("You win!!!!!!")
        break;
    }

}