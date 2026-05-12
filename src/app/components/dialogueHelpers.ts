// Exit lines that the player can use to leave conversations
const exitLines = [
  "Ok, so I hated this.",
  "Um...I gotta go.",
  "Please never talk to me again.",
  "My mom called.",
  "Nice talking to you.",
  "Thanks, goodbye.",
  "Forget it.",
  "I'm actually mowing my lawn so....",
  "I really gotta go.",
  "Nice seeing ya.",
  "Whatever.",
  "Okay...",
  "That's what she said.",
  "Wanna hear a joke? I don't.",
  "Excuse me.",
  "I don't have time for this."
];

// Final responses from characters when player exits
const finalResponses = [
  "Whatever.",
  "Okay.",
  "Fine.",
  "See ya.",
  "Loved that.",
  "I guess.",
  "Nice to meet you?"
];

// Restart/loop back lines
const restartLines = [
  "Uno reverse.",
  "Let me try that again.",
  "Sorry, can we restart?",
  "Hello?",
  "Who are you again?",
  "Quick, pretend this never happened.",
  "Try again please.",
  "Okay, I messed up that social interaction.",
  "Ugh, again?",
  "Hold up, do I have amnesia?"
];

// Get a random exit line
export function getRandomExitLine(): string {
  return exitLines[Math.floor(Math.random() * exitLines.length)];
}

// Get a random final response
export function getRandomFinalResponse(): string {
  return finalResponses[Math.floor(Math.random() * finalResponses.length)];
}

// Get a random restart line
export function getRandomRestartLine(): string {
  return restartLines[Math.floor(Math.random() * restartLines.length)];
}

// Create an exit marker (immediately exits dialogue)
export function createExitNode() {
  return {
    __exit: true
  };
}

// Create a restart marker (not a circular reference)
export function createRestartMarker() {
  return {
    __restart: true
  };
}
