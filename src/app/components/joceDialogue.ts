export const joceDialogue = {
  text: "Hey there. I'm Jocelyn, but most people call me Joce.",
  speaker: "Joce",
  choices: [
    {
      text: "What are your pronouns?",
      next: {
        text: "She/her.",
        speaker: "Joce",
        choices: [
          {
            text: "How do you describe your identity?",
            next: {
              text: "I don't consider myself butch or a stud. I'm masc-presenting. I used to be a tomboy and never really grew out of it.",
              speaker: "Joce",
              choices: [
                {
                  text: "Why don't you identify as a stud?",
                  next: {
                    text: "Being a stud comes with specific roles and expectations, and I don't want to subscribe to gender roles. I just want to be myself.",
                    speaker: "Joce",
                    choices: [
                      {
                        text: "That makes sense. Tell me more.",
                        next: {
                          text: "I've always just been me. It just happens to be masc-presenting. I don't perform masculinity—I'm just being myself.",
                          speaker: "Joce",
                          choices: [
                            { text: "Thanks for sharing.", next: null }
                          ]
                        }
                      }
                    ]
                  }
                },
                {
                  text: "Have you always known who you are?",
                  next: {
                    text: "Yeah, I've never questioned my identity. I've always just been me.",
                    speaker: "Joce",
                    choices: [
                      { text: "That's powerful.", next: null }
                    ]
                  }
                }
              ]
            }
          },
          {
            text: "Tell me about coming out.",
            next: {
              text: "I came out at 21 while I was at the University of Tennessee, Knoxville. I was always a tomboy, but my mom tried to push femininity—dresses, makeup, all of that. When I moved away for college, I finally had space to grow into myself.",
              speaker: "Joce",
              choices: [
                {
                  text: "Why did you stay in Knoxville?",
                  next: {
                    text: "It felt safer and familiar. Other places felt unpredictable, especially given how I look and how people might perceive me.",
                    speaker: "Joce",
                    choices: [
                      {
                        text: "What challenges have you faced here?",
                        next: {
                          text: "Bathrooms are a big one—people questioning if I'm in the right place. When traveling, my wife often comes with me so people don't question me.",
                          speaker: "Joce",
                          choices: [
                            {
                              text: "That sounds exhausting.",
                              next: {
                                text: "It is, but you learn to navigate it. The people who love you will stick around, and the ones who don't aren't worth your time.",
                                speaker: "Joce",
                                choices: [
                                  { text: "Thank you for that.", next: null }
                                ]
                              }
                            }
                          ]
                        }
                      },
                      { text: "I appreciate you sharing.", next: null }
                    ]
                  }
                },
                { text: "That takes courage.", next: null }
              ]
            }
          }
        ]
      }
    },
    {
      text: "How has geography shaped your identity?",
      next: {
        text: "It hasn't much. My identity comes more from my family and who I surround myself with. Being Black in a majority-white area just makes you more aware and selective about your circle.",
        speaker: "Joce",
        choices: [
          {
            text: "Do you behave differently depending on location?",
            next: {
              text: "Yes—but more because of race than gender presentation.",
              speaker: "Joce",
              choices: [
                {
                  text: "How do you think others perceive you?",
                  next: {
                    text: "At first, people are confused or unsure. But once they get to know me, they see me as kind and helpful.",
                    speaker: "Joce",
                    choices: [
                      {
                        text: "Do stereotypes affect you?",
                        next: {
                          text: "Yes—people assume I'm handy or fit certain masculine roles, which isn't always true.",
                          speaker: "Joce",
                          choices: [
                            { text: "That's frustrating.", next: null }
                          ]
                        }
                      },
                      { text: "I see.", next: null }
                    ]
                  }
                },
                { text: "That makes sense.", next: null }
              ]
            }
          },
          { text: "Interesting perspective.", next: null }
        ]
      }
    },
    {
      text: "Tell me about the queer community in Knoxville.",
      next: {
        text: "I used to be very involved—going out, joining groups—but now I keep to myself more. I mostly stay home with my wife and cats.",
        speaker: "Joce",
        choices: [
          {
            text: "Is there a strong queer community here?",
            next: {
              text: "Queer people are everywhere, but there's no strong central gathering space right now.",
              speaker: "Joce",
              choices: [
                {
                  text: "Have you noticed shifts recently?",
                  next: {
                    text: "Yes. It feels less safe and more tense, especially politically. People feel more emboldened to express hostility.",
                    speaker: "Joce",
                    choices: [
                      {
                        text: "That's concerning.",
                        next: {
                          text: "It is. But we keep going, keep being ourselves. That's what matters.",
                          speaker: "Joce",
                          choices: [
                            { text: "Thank you for your resilience.", next: null }
                          ]
                        }
                      }
                    ]
                  }
                },
                { text: "I understand.", next: null }
              ]
            }
          },
          {
            text: "Tell me about your wife.",
            next: {
              text: "We met through rugby. She basically stalked me in a funny way, and we've been together 15 years, married for 10.",
              speaker: "Joce",
              choices: [
                {
                  text: "How does your identity affect your relationship?",
                  next: {
                    text: "We don't subscribe to gender roles. I'm not performing masculinity, I'm just being myself. And that works for us.",
                    speaker: "Joce",
                    choices: [
                      { text: "That's beautiful.", next: null }
                    ]
                  }
                },
                { text: "That's a wonderful story.", next: null }
              ]
            }
          }
        ]
      }
    },
    {
      text: "What makes you feel most like yourself?",
      next: {
        text: "When I was in shape, my muscles and broad shoulders made me feel most like myself. It was physical affirmation of who I am.",
        speaker: "Joce",
        choices: [
          {
            text: "Who are you outside of identity labels?",
            next: {
              text: "I'm a student working toward physical therapy, a veteran, a wife, and a cat person with four cats.",
              speaker: "Joce",
              choices: [
                {
                  text: "What message would you give younger queer people?",
                  next: {
                    text: "Just be yourself. The people who love you will stick around, and the ones who don't aren't worth your time.",
                    speaker: "Joce",
                    choices: [
                      { text: "Thank you for that wisdom.", next: null }
                    ]
                  }
                },
                { text: "You sound amazing.", next: null }
              ]
            }
          },
          { text: "That's powerful.", next: null }
        ]
      }
    }
  ]
};
