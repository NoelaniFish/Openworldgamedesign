// J.'s dialogue tree
export const joceDialogue = {
  text: "I'm Jocelyn, but everybody calls me Joss. She/her. I don't really call myself butch or stud — masc presenting feels closer. People see a Black masc person and immediately go \"stud,\" but that never really fit me. I've always just kinda been me. Tomboy kid that never switched genres.",
  speaker: "J.",
  choices: [
    {
      text: "\"Switched genres\" is kind of perfect. Did people push labels onto you before you even had language for yourself?",
      next: {
        text: "Constantly. Especially \"stud.\" And honestly, some of it felt racialized more than anything. Like people saw Black + masc and decided the rest for me.",
        speaker: "J.",
        choices: [
          {
            text: "Do you feel like people want masc queer folks to perform a role for them?",
            next: {
              text: "Yeah. Like there's this expectation that if you present masculine, you're supposed to become \"the man\" in the relationship. Pay for everything. Open every door like you're auditioning for a truck commercial.",
              speaker: "J.",
              choices: [
                {
                  text: "Truck commercial masculinity is honestly terrifying.",
                  next: {
                    text: "Exactly. I'll open the door because I'm carrying groceries, not because gender commanded me to.",
                    speaker: "J.",
                    choices: [
                      {
                        text: "It sounds like a lot of your identity has been about refusing scripts people tried to hand you.",
                        next: null
                      }
                    ]
                  }
                }
              ]
            }
          },
          {
            text: "It sounds like a lot of your identity has been about refusing scripts people tried to hand you.",
            next: null
          }
        ]
      }
    },
    {
      text: "You mentioned your mom trying to make you more feminine growing up. Was that constant?",
      next: {
        text: "Oh absolutely. Dresses, makeup, all of it. One time I literally woke up and she was putting makeup on me before school because I refused to wear it willingly.",
        speaker: "J.",
        choices: [
          {
            text: "That's such an intimate level of \"please become the version of you I understand.\"",
            next: {
              text: "Yeah. I don't even think she meant harm necessarily. I think she thought she was helping me survive the world better.",
              speaker: "J.",
              choices: [
                {
                  text: "Sometimes identity development is literally just getting far enough away to hear your own thoughts.",
                  next: null
                }
              ]
            }
          },
          {
            text: "Did leaving for Knoxville feel like escape or reinvention?",
            next: {
              text: "More like breathing room. Memphis felt too close to everybody's expectations of me.",
              speaker: "J.",
              choices: [
                {
                  text: "Sometimes identity development is literally just getting far enough away to hear your own thoughts.",
                  next: null
                }
              ]
            }
          }
        ]
      }
    },
    {
      text: "What's it like moving through Tennessee visibly masc-presenting?",
      next: {
        text: "You stay aware. Especially in smaller towns. And honestly being Black changes the equation too.",
        speaker: "J.",
        choices: [
          {
            text: "Like scanning a room before your body even catches up?",
            next: {
              text: "Exactly. Bathrooms especially. People do the double-take thing constantly.",
              speaker: "J.",
              choices: [
                {
                  text: "That constant awareness feels like its own kind of labor people don't always see.",
                  next: null
                }
              ]
            }
          },
          {
            text: "That sounds exhausting over time.",
            next: {
              text: "It is. You get used to it, but \"used to it\" isn't the same thing as okay.",
              speaker: "J.",
              choices: [
                {
                  text: "That constant awareness feels like its own kind of labor people don't always see.",
                  next: null
                }
              ]
            }
          }
        ]
      }
    }
  ]
};
