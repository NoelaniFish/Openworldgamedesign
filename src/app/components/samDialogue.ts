// S.'s dialogue tree
export const samDialogue = {
  text: "I'm S, 30 years old. I consider myself butch, non-binary, trans. None of that order. It doesn't really matter. I think I strongly identify with all of those. It's more shifting depending on the day.",
  speaker: "S.",
  choices: [
    {
      text: "Shifting depending on the day is real. What feels strongest today?",
      next: {
        text: "Today's any pronouns, including neopronouns. All my friends are Googling.",
        speaker: "S.",
        choices: [
          {
            text: "That's kind of iconic honestly. Do you like people being a little confused?",
            next: {
              text: "I think the goal is to be confusing.",
              speaker: "S.",
              choices: [
                {
                  text: "Like intentionally unreadable?",
                  next: {
                    text: "Most people that meet me think I'm a trans man. It's kind of reverse passing.",
                    speaker: "S.",
                    choices: [
                      {
                        text: "Do you like that ambiguity or does it get exhausting?",
                        next: {
                          text: "I really like when people are confused by me. I like being androgynous and difficult to categorize. It feels affirming.",
                          speaker: "S.",
                          choices: [
                            {
                              text: "Honestly, gender confusion as an aesthetic is kind of elite.",
                              next: null
                            }
                          ]
                        }
                      }
                    ]
                  }
                },
                {
                  text: "Has that always felt natural to you?",
                  next: {
                    text: "When I first came out as transfemme, there was this expectation to be femme, and I never really connected with it.",
                    speaker: "S.",
                    choices: [
                      {
                        text: "Was it pressure from other people or from yourself?",
                        next: {
                          text: "The first year and a half of transition was a lot of therapy around 'I don't want to do this, but I feel like I should.'",
                          speaker: "S.",
                          choices: [
                            {
                              text: "That weird gap between what's expected and what actually feels right is brutal.",
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
            text: "The daily gender roulette feels very queer community coded.",
            next: null
          }
        ]
      }
    },
    {
      text: "You mentioned butch really specifically. What pulled you there?",
      next: {
        text: "I was really attracted to masculinity and other butches.",
        speaker: "S.",
        choices: [
          {
            text: "Like attraction or recognition?",
            next: {
              text: "I always thought butches were really hot. I kept wondering, 'Do I want to be them or do I want to sleep with them?'",
              speaker: "S.",
              choices: [
                {
                  text: "Classic queer crisis.",
                  next: {
                    text: "Once I unpacked that, I realized I was really attracted to masculinity in a queer way.",
                    speaker: "S.",
                    choices: [
                      {
                        text: "Did it click all at once?",
                        next: {
                          text: "Something clicked probably like a year ago. It's pretty recent.",
                          speaker: "S.",
                          choices: [
                            {
                              text: "Baby butch era?",
                              next: {
                                text: "Some people call me baby butch.",
                                speaker: "S.",
                                choices: [
                                  {
                                    text: "Honestly everyone starts somewhere. Gay puberty just lasts forever.",
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
            text: "Were there things that made identifying as butch harder?",
            next: {
              text: "There wasn't that much representation of transmasc butches.",
              speaker: "S.",
              choices: [
                {
                  text: "Especially hard butches?",
                  next: {
                    text: "Hard butches with no degree of femme presentation were hard to find.",
                    speaker: "S.",
                    choices: [
                      {
                        text: "Did that make you question yourself?",
                        next: {
                          text: "I still questioned whether it was internalized transphobia or something else pushing me there.",
                          speaker: "S.",
                          choices: [
                            {
                              text: "It's hard to become something you never really got to see.",
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
            text: "Queer attraction as self-discovery is basically a rite of passage.",
            next: null
          }
        ]
      }
    },
    {
      text: "You grew up Orthodox Jewish, right?",
      next: {
        text: "There wasn't a lot of queer representation there. I never even saw a gay person growing up.",
        speaker: "S.",
        choices: [
          {
            text: "That must've made everything harder to name.",
            next: {
              text: "My first friend that came out as gay did it in 12th grade, and before that he was in conversion therapy.",
              speaker: "S.",
              choices: [
                {
                  text: "That's intense.",
                  next: {
                    text: "I had no inkling I was queer.",
                    speaker: "S.",
                    choices: []
                  }
                },
                {
                  text: "So when did things start shifting?",
                  next: {
                    text: "As I became less religious, I met more queer people.",
                    speaker: "S.",
                    choices: [
                      {
                        text: "Like the two journeys overlapped?",
                        next: {
                          text: "The less religious I became, the more queer my life became too.",
                          speaker: "S.",
                          choices: [
                            {
                              text: "It sounds less like a straight line and more like two wires twisting together.",
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
            text: "Do you still feel connected to that upbringing at all?",
            next: {
              text: "Part of it is honestly a reaction against growing up religious — like a 'fuck you' to all of that.",
              speaker: "S.",
              choices: [
                {
                  text: "Does that show up in presentation too?",
                  next: {
                    text: "I don't really cover up my tattoos or anything.",
                    speaker: "S.",
                    choices: [
                      {
                        text: "There's something very powerful about refusing to shrink yourself anymore.",
                        next: null
                      }
                    ]
                  }
                }
              ]
            }
          },
          {
            text: "Religious deconstruction and queer realization really do travel together for a lot of people.",
            next: null
          }
        ]
      }
    },
    {
      text: "How does New York fit into all of this?",
      next: {
        text: "New York gave me access to queer people and community.",
        speaker: "S.",
        choices: [
          {
            text: "Was queer community immediate for you?",
            next: {
              text: "After I started transitioning I was struggling to find community, so I joined a queer kickball pickup league in Prospect Park.",
              speaker: "S.",
              choices: [
                {
                  text: "Gay sports saving lives again.",
                  next: {
                    text: "That's where I met one of the most important people in my life.",
                    speaker: "S.",
                    choices: []
                  }
                },
                {
                  text: "Did it feel instantly comfortable?",
                  next: {
                    text: "Most people in my life are queer or non-binary in some way.",
                    speaker: "S.",
                    choices: [
                      {
                        text: "Queer friendship circles really become whole ecosystems.",
                        next: null
                      }
                    ]
                  }
                }
              ]
            }
          },
          {
            text: "Do you ever feel different moving between queer and straight spaces?",
            next: {
              text: "Going into straight spaces always feels like a culture shock.",
              speaker: "S.",
              choices: [
                {
                  text: "In what way?",
                  next: {
                    text: "I think sometimes I worry about being read as a cis guy instead of queer or butch.",
                    speaker: "S.",
                    choices: []
                  }
                },
                {
                  text: "Does that feel unsafe or just weird?",
                  next: {
                    text: "I generally feel safer than a lot of my trans friends do because I present very masculine.",
                    speaker: "S.",
                    choices: [
                      {
                        text: "There's such a strange tradeoff between visibility, safety, and recognition.",
                        next: null
                      }
                    ]
                  }
                }
              ]
            }
          },
          {
            text: "New York really is one giant rotating cast of queer side characters.",
            next: null
          }
        ]
      }
    },
    {
      text: "Okay important question: besides the carabiner, what's your butch artifact?",
      next: {
        text: "I don't know if I have a good answer for that.",
        speaker: "S.",
        choices: [
          {
            text: "No pressure. Could literally be anything.",
            next: {
              text: "Maybe my tattoos.",
              speaker: "S.",
              choices: [
                {
                  text: "Tattoos count. Permanent lore.",
                  next: {
                    text: "I don't know if I have a good butch artifact.",
                    speaker: "S.",
                    choices: [
                      {
                        text: "Honestly the refusal to self-brand might be the most butch answer possible.",
                        next: null
                      }
                    ]
                  }
                }
              ]
            }
          },
          {
            text: "Carabiner supremacy remains undefeated.",
            next: null
          }
        ]
      }
    }
  ]
};
