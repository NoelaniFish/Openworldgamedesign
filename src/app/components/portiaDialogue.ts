// P.'s dialogue tree
export const portiaDialogue = {
  text: "Hey, I'm P. what's up?",
  speaker: "P.",
  choices: [
    {
      text: "When you say \"stud,\" what does that word actually feel like to you?",
      next: {
        text: "Comfortable. Like I stopped performing. Like I finally relaxed into myself.",
        speaker: "P.",
        choices: [
          {
            text: "So less becoming someone, more uncovering someone?",
            next: {
              text: "Yeah, exactly. I didn't realize how much I was acting before.",
              speaker: "P.",
              choices: [
                {
                  text: "Was there a moment where you realized, \"Oh, I don't think I'm femme the way I thought I was\"?",
                  next: {
                    text: "Honestly? My ex helped crack that open. She mentioned being attracted to masculine women. And suddenly my brain went: wait… that's allowed?",
                    speaker: "P.",
                    choices: [
                      {
                        text: "It's wild how one tiny sentence from someone can rearrange your whole internal architecture.",
                        next: null
                      }
                    ]
                  }
                },
                {
                  text: "You mentioned always wanting to be Ken when you played with Barbies. That feels spiritually significant.",
                  next: {
                    text: "Right? Looking back I'm like… oh. Tiny me was trying to tell me something. I think I liked the protector role.",
                    speaker: "P.",
                    choices: [
                      {
                        text: "Kid logic is kind of brutally honest.",
                        next: {
                          text: "Exactly. I didn't have words for it yet. I just knew what felt right.",
                          speaker: "P.",
                          choices: [
                            {
                              text: "Did you feel like femininity was something you naturally connected to, or something you learned to perform?",
                              next: {
                                text: "Definitely performed. Especially in acting spaces. I thought femininity was the price of acceptance.",
                                speaker: "P.",
                                choices: [
                                  {
                                    text: "That's the exhausting part — realizing you weren't hiding from other people, you were managing an audience.",
                                    next: null
                                  }
                                ]
                              }
                            }
                          ]
                        }
                      }
                    ]
                  }
                }
              ]
            }
          },
          {
            text: "Like you stopped auditioning for femininity?",
            next: {
              text: "I didn't realize how much I was acting before. It felt like I was following instructions I never agreed to.",
              speaker: "P.",
              choices: [
                {
                  text: "That's the exhausting part — realizing you weren't hiding from other people, you were managing an audience.",
                  next: null
                }
              ]
            }
          }
        ]
      }
    },
    {
      text: "Do you feel like Brooklyn shaped your identity?",
      next: {
        text: "Definitely. I see people who look like me. That matters more than people realize.",
        speaker: "P.",
        choices: [
          {
            text: "Representation but make it neighborhood-specific.",
            next: {
              text: "Exactly. I people-watch constantly. Actor brain.",
              speaker: "P.",
              choices: [
                {
                  text: "Honestly being queer in New York is basically advanced anthropology.",
                  next: {
                    text: "That's true. I notice mannerisms immediately. Especially if someone feels familiar somehow.",
                    speaker: "P.",
                    choices: [
                      {
                        text: "Do you think you'd feel different somewhere else?",
                        next: {
                          text: "Probably. I'm used to seeing people like me. I think that's grounding.",
                          speaker: "P.",
                          choices: [
                            {
                              text: "Sometimes identity isn't just internal — it's environmental. You need mirrors around you.",
                              next: null
                            }
                          ]
                        }
                      },
                      {
                        text: "You paused earlier before saying the word \"aggressive.\" That hesitation felt important.",
                        next: {
                          text: "Yeah, because Black studs get stereotyped constantly. I'm hyperaware of how I'm perceived. Sometimes too aware.",
                          speaker: "P.",
                          choices: [
                            {
                              text: "Like constantly checking your own volume?",
                              next: {
                                text: "Exactly. I notice everything. Even people moving away from me on the train.",
                                speaker: "P.",
                                choices: [
                                  {
                                    text: "That sounds exhausting honestly.",
                                    next: {
                                      text: "It is. And then you start questioning yourself. Like am I intimidating or am I just existing?",
                                      speaker: "P.",
                                      choices: [
                                        {
                                          text: "Probably existing.",
                                          next: {
                                            text: "Yeah. And you carry that awareness everywhere. Even when you know it's unfair.",
                                            speaker: "P.",
                                            choices: [
                                              {
                                                text: "It's hard to relax when the world keeps trying to turn your identity into body language evidence.",
                                                next: null
                                              }
                                            ]
                                          }
                                        },
                                        {
                                          text: "Society loves projecting onto masculine lesbians.",
                                          next: {
                                            text: "Especially Black masculine lesbians.",
                                            speaker: "P.",
                                            choices: []
                                          }
                                        }
                                      ]
                                    }
                                  }
                                ]
                              }
                            },
                            {
                              text: "Like self-surveillance?",
                              next: {
                                text: "Like trying to seem safe before people decide you aren't.",
                                speaker: "P.",
                                choices: []
                              }
                            }
                          ]
                        }
                      }
                    ]
                  }
                },
                {
                  text: "Everyone's studying each other.",
                  next: {
                    text: "Half the city is mutual observation.",
                    speaker: "P.",
                    choices: []
                  }
                }
              ]
            }
          },
          {
            text: "Like spotting someone on the train and instantly understanding the vibe.",
            next: {
              text: "A silent 'oh, you too?'",
              speaker: "P.",
              choices: []
            }
          }
        ]
      }
    },
    {
      text: "What's an object that feels deeply tied to you?",
      next: {
        text: "My chains. I wear them whenever something matters. Games, stressful moments, anything high stakes.",
        speaker: "P.",
        choices: [
          {
            text: "So they're jewelry but emotionally they're armor.",
            next: {
              text: "Exactly. They make me feel grounded. Protected almost.",
              speaker: "P.",
              choices: [
                {
                  text: "And they came from your family, right?",
                  next: {
                    text: "Yeah. My mom and stepdad gave them to me. My family means everything to me.",
                    speaker: "P.",
                    choices: [
                      {
                        text: "That's really beautiful.",
                        next: {
                          text: "Yeah. My mom is my rock. Even if she doesn't fully understand everything.",
                          speaker: "P.",
                          choices: [
                            {
                              text: "It's kind of incredible when love evolves faster than understanding.",
                              next: null
                            }
                          ]
                        }
                      },
                      {
                        text: "Especially because acceptance from family isn't guaranteed for everyone.",
                        next: {
                          text: "You can feel the love attached to them.",
                          speaker: "P.",
                          choices: []
                        }
                      },
                      {
                        text: "Outside of identity stuff — who is P.?",
                        next: {
                          text: "An actor. A pickleball player. Someone trying to survive and make a difference.",
                          speaker: "P.",
                          choices: [
                            {
                              text: "Honestly that's everyone's final form.",
                              next: {
                                text: "Exactly. I'm more than just being a stud. That's only one piece of me.",
                                speaker: "P.",
                                choices: [
                                  {
                                    text: "Do you think people flatten masculine lesbians into archetypes sometimes?",
                                    next: {
                                      text: "Absolutely. People assume they already know you. Before you even speak.",
                                      speaker: "P.",
                                      choices: [
                                        {
                                          text: "Meanwhile you're over here carrying family rituals, actor instincts, social anxiety, train observations…",
                                          next: {
                                            text: "Exactly. That's why conversations like this matter.",
                                            speaker: "P.",
                                            choices: [
                                              {
                                                text: "The interesting part is never the label. It's how someone learned to live inside it.",
                                                next: null
                                              }
                                            ]
                                          }
                                        },
                                        {
                                          text: "People contain way too much for stereotypes.",
                                          next: {
                                            text: "Humans are annoyingly layered.",
                                            speaker: "P.",
                                            choices: []
                                          }
                                        }
                                      ]
                                    }
                                  }
                                ]
                              }
                            },
                            {
                              text: "Just trying to pay bills and emotionally evolve.",
                              next: {
                                text: "Very human answer.",
                                speaker: "P.",
                                choices: []
                              }
                            }
                          ]
                        }
                      }
                    ]
                  }
                }
              ]
            }
          },
          {
            text: "Like wearable reassurance.",
            next: {
              text: "Tiny emotional support metal.",
              speaker: "P.",
              choices: []
            }
          }
        ]
      }
    }
  ]
};
