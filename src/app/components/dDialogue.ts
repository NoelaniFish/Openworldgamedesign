// D.'s dialogue tree
export const dDialogue = {
  text: "Hey, I'm D.",
  speaker: "D.",
  choices: [
    {
      text: "Tell me about yourself.",
      next: {
        text: "I'm still figuring that out honestly.",
        speaker: "D.",
        choices: [
          {
            text: "That's fair. How do you identify?",
            next: {
              text: "Masc presenting. I don't really use labels much beyond that.",
              speaker: "D.",
              choices: [
                {
                  text: "That makes sense.",
                  next: null
                }
              ]
            }
          },
          {
            text: "What brings you to Knoxville?",
            next: {
              text: "Just living life here, you know? Trying to be myself.",
              speaker: "D.",
              choices: [
                {
                  text: "I hear that.",
                  next: null
                }
              ]
            }
          }
        ]
      }
    },
    {
      text: "How's it going?",
      next: {
        text: "Can't complain. Just taking things one day at a time.",
        speaker: "D.",
        choices: [
          {
            text: "That's a good approach.",
            next: null
          }
        ]
      }
    }
  ]
};
