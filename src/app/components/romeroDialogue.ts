// R.'s dialogue tree
export const romeroDialogue = {
  text: "Okay first of all, your vibe walked in before you did. Leather jacket, carabiner engineering project, the whole thing.",
  speaker: "N.",
  choices: [
    {
      text: "That's the goal honestly.",
      next: {
        text: "That's the goal honestly.",
        speaker: "R.",
        choices: [
          {
            text: "You said realizing you were trans and realizing you were a lesbian happened almost at the same time?",
            next: {
              text: "Yeah. Once I admitted I was a lesbian I was like, 'Well… what the fuck am I doing with the rest of this then?'",
              speaker: "R.",
              choices: [
                {
                  text: "Was it immediate clarity or more like slowly connecting dots?",
                  next: {
                    text: "It all clicked weirdly fast. Suddenly everything made sense — my voice stuff, wanting to be masculine, hating photos of myself.",
                    speaker: "R.",
                    choices: [
                      {
                        text: "The voice thing?",
                        next: {
                          text: "Yeah because I liked when my voice got deeper. Extremely cisgender behavior obviously.",
                          speaker: "R.",
                          choices: [
                            {
                              text: "Nothing says 'straight woman' like yearning to sound like a sad indie bassist.",
                              next: null
                            }
                          ]
                        }
                      },
                      {
                        text: "The photo thing?",
                        next: {
                          text: "I stopped feeling eerie looking at myself. I actually recognize myself now.",
                          speaker: "R.",
                          choices: [
                            {
                              text: "That's such a specific kind of relief.",
                              next: null
                            }
                          ]
                        }
                      },
                      {
                        text: "The masculinity thing?",
                        next: {
                          text: "Yeah. Long hair past my waist, very 'straight girly,' but it never felt right.",
                          speaker: "R.",
                          choices: [
                            {
                              text: "Like performing a role you accidentally got cast in.",
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
          },
          {
            text: "Your relationship to leather feels almost spiritual.",
            next: {
              text: "Unfortunately New York humidity prevents me from reaching my final form year round.",
              speaker: "R.",
              choices: [
                {
                  text: "What pieces feel most tied to you?",
                  next: {
                    text: "Leather jacket. Boots. Carabiner. The essentials.",
                    speaker: "R.",
                    choices: [
                      {
                        text: "THE CARABINER",
                        next: {
                          text: "Because belt loops never sit where I want them to. This was a design problem.",
                          speaker: "R.",
                          choices: [
                            {
                              text: "Honestly this feels like butch industrial design.",
                              next: {
                                text: "Exactly. Functionality but make it gay.",
                                speaker: "R.",
                                choices: [
                                  {
                                    text: "A lesbian sees a hardware issue and becomes an inventor.",
                                    next: null
                                  }
                                ]
                              }
                            }
                          ]
                        }
                      },
                      {
                        text: "THE LEATHER JACKET",
                        next: {
                          text: "It makes me feel the most like myself. Like visibly myself.",
                          speaker: "R.",
                          choices: [
                            {
                              text: "Like armor but also self-portrait.",
                              next: null
                            }
                          ]
                        }
                      },
                      {
                        text: "FLAGGING + SIGNALS",
                        next: {
                          text: "Absolutely. Tiny visual cues let you recognize someone instantly.",
                          speaker: "R.",
                          choices: [
                            {
                              text: "Gay semaphore system.",
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
          },
          {
            text: "You've talked about New York almost like it unlocked something.",
            next: {
              text: "Completely. My introduction to queer life happened here.",
              speaker: "R.",
              choices: [
                {
                  text: "How different did Michigan feel when you went back?",
                  next: {
                    text: "Deeply different. Like people looked at me like I was a cryptid.",
                    speaker: "R.",
                    choices: [
                      {
                        text: "Tell me about the Costco woman.",
                        next: {
                          text: "She literally stopped in fear and stared at us mouth open.",
                          speaker: "R.",
                          choices: [
                            {
                              text: "You in full leather at Costco is objectively funny.",
                              next: {
                                text: "I was just buying groceries while looking like a cyberpunk villain.",
                                speaker: "R.",
                                choices: [
                                  {
                                    text: "The rotisserie chickens feared you.",
                                    next: null
                                  }
                                ]
                              }
                            }
                          ]
                        }
                      },
                      {
                        text: "The bathroom sign story sounded genuinely tense.",
                        next: {
                          text: "Yeah. It reminded me how quickly safety can change depending on location.",
                          speaker: "R.",
                          choices: [
                            {
                              text: "Geography decides how visible your body becomes.",
                              next: null
                            }
                          ]
                        }
                      },
                      {
                        text: "Do you soften yourself in certain places?",
                        next: {
                          text: "Honestly no. I think I developed a 'fuck your opinions' attitude pretty early.",
                          speaker: "R.",
                          choices: [
                            {
                              text: "Survival through stubbornness.",
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
          },
          {
            text: "You mentioned people gender you really differently depending on the space.",
            next: {
              text: "At this point I genuinely don't know what people think I am anymore.",
              speaker: "R.",
              choices: [
                {
                  text: "Does that ambiguity bother you?",
                  next: {
                    text: "Not really. I use any pronouns because very few people actually gender me in the exact way I mean.",
                    speaker: "R.",
                    choices: [
                      {
                        text: "You don't separate your transness from your lesbian identity?",
                        next: {
                          text: "No. They've always been deeply connected for me.",
                          speaker: "R.",
                          choices: [
                            {
                              text: "Not categories. More like overlapping weather systems.",
                              next: null
                            }
                          ]
                        }
                      },
                      {
                        text: "What kind of masculinity feels right to you?",
                        next: {
                          text: "A loving masculinity. A nurturing masculinity.",
                          speaker: "R.",
                          choices: [
                            {
                              text: "Soft heart, leather jacket.",
                              next: null
                            }
                          ]
                        }
                      },
                      {
                        text: "Do you think people project narratives onto you?",
                        next: {
                          text: "Constantly. But honestly I can't control that.",
                          speaker: "R.",
                          choices: [
                            {
                              text: "People love solving gender like it's a riddle game.",
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
          },
          {
            text: "A lot of your early queer community in New York was trans femme lesbians.",
            next: {
              text: "Yeah and I think that shaped me massively.",
              speaker: "R.",
              choices: [
                {
                  text: "What felt important about those relationships?",
                  next: {
                    text: "There was this mutual understanding of building yourself from opposite directions.",
                    speaker: "R.",
                    choices: [
                      {
                        text: "You seem protective of queer community spaces.",
                        next: {
                          text: "Especially now. Transphobia has made community feel even more necessary.",
                          speaker: "R.",
                          choices: [
                            {
                              text: "Survival through proximity.",
                              next: null
                            }
                          ]
                        }
                      },
                      {
                        text: "Do you feel instantly connected to other butches?",
                        next: {
                          text: "Usually yes. There's often an immediate recognition.",
                          speaker: "R.",
                          choices: [
                            {
                              text: "Like two stray cats seeing each other across an alley.",
                              next: null
                            }
                          ]
                        }
                      },
                      {
                        text: "Do trans femme/trans masc relationships feel distinct to you?",
                        next: {
                          text: "Definitely. There's a kind of mutual affirmation built into it.",
                          speaker: "R.",
                          choices: [
                            {
                              text: "Like building mirrors for each other.",
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
          },
          {
            text: "You describe butchness really differently than stereotypical masculinity.",
            next: {
              text: "Yeah. Mine is about care.",
              speaker: "R.",
              choices: [
                {
                  text: "What does care look like for you?",
                  next: {
                    text: "Protecting people. Taking care of people. Being emotionally present.",
                    speaker: "R.",
                    choices: [
                      {
                        text: "Can butchness still be hard or intimidating?",
                        next: {
                          text: "Absolutely. You can be nurturing and still scary-looking.",
                          speaker: "R.",
                          choices: [
                            {
                              text: "The ideal state honestly.",
                              next: null
                            }
                          ]
                        }
                      },
                      {
                        text: "Do you think butches get assigned protective roles?",
                        next: {
                          text: "Yeah, but I also willingly embrace that role.",
                          speaker: "R.",
                          choices: [
                            {
                              text: "Designated emotional support leather jacket.",
                              next: null
                            }
                          ]
                        }
                      },
                      {
                        text: "You seem unusually confident in claiming labels.",
                        next: {
                          text: "I use labels very spitefully.",
                          speaker: "R.",
                          choices: [
                            {
                              text: "Weaponized self-definition.",
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
          },
          {
            text: "Outside of butchness, who are you?",
            next: {
              text: "An artist. A cook. A person with too many hobbies and no apartment space.",
              speaker: "R.",
              choices: [
                {
                  text: "You called yourself 'spitefully optimistic.'",
                  next: {
                    text: "Yeah. I refuse to believe queer life has to be miserable.",
                    speaker: "R.",
                    choices: [
                      {
                        text: "What kind of art are you making lately?",
                        next: {
                          text: "Printmaking and leatherworking mostly.",
                          speaker: "R.",
                          choices: [
                            {
                              text: "Your apartment sounds like a medieval craft guild.",
                              next: null
                            }
                          ]
                        }
                      },
                      {
                        text: "You mentioned an insane spice cabinet.",
                        next: {
                          text: "It's overtaking the apartment. It's becoming structural.",
                          speaker: "R.",
                          choices: [
                            {
                              text: "At some point the paprika starts paying rent.",
                              next: null
                            }
                          ]
                        }
                      },
                      {
                        text: "What does spiteful optimism mean to you?",
                        next: {
                          text: "Believing I deserve joy even when the world insists otherwise.",
                          speaker: "R.",
                          choices: [
                            {
                              text: "That feels very butch honestly.",
                              next: {
                                text: "Yeah maybe it is.",
                                speaker: "R.",
                                choices: [
                                  {
                                    text: "Building happiness out of pure stubbornness.",
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
            text: "Okay final question. If someone met you for five minutes, what would you hope they understood about you?",
            next: {
              text: "That I'm softer than I look.",
              speaker: "R.",
              choices: [
                {
                  text: "Which somehow makes the leather jacket cooler.",
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
