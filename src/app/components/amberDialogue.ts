// Shared dialogue tree for all Amber NPCs
export const amberDialogue = {
  text: 'Hey, I\'m Amber. I\'m a butch lesbian who enjoys being in lesbian spaces and around other butches. What\'s up?',
  choices: [
    {
      text: 'What\'s your name and pronouns?',
      next: {
        text: 'I\'m Amber. She/her pronouns.',
        choices: [
          {
            text: 'How do you describe your identity?',
            next: {
              text: 'I\'m a butch lesbian who enjoys being in lesbian spaces and around other butches.',
              choices: [
                {
                  text: 'Who are you beyond that?',
                  next: {
                    text: 'I\'m an artist and designer. I work in children\'s education as a designer. I like making zines and film photography—very "gay Brooklyn" hobbies.',
                    choices: [
                      {
                        text: 'What objects feel tied to your identity?',
                        next: {
                          text: 'Rings, my jean jacket, big boots, vintage t-shirts, and going to the barber. Those all shape how I present.',
                          choices: [
                            {
                              text: 'Have these always been tied to your identity?',
                              next: {
                                text: 'Since coming out, yes. They help create a silhouette that makes me feel strong and self-assured. I gravitate toward practical, sturdy clothing—partly personality, partly sensory.',
                                choices: [
                                  {
                                    text: 'Tell me more about your rings.',
                                    next: {
                                      text: 'They were my great-grandmother\'s. They feel like a connection to strength and masculinity within my family, even if it wasn\'t labeled that way.',
                                      choices: [
                                        {
                                          text: 'Do you think she was butch?',
                                          next: {
                                            text: 'I wonder sometimes. Maybe she didn\'t have the language for it back then. But these rings - thick metal bands, nothing feminine about them. They\'re markers of something.',
                                            choices: []
                                          }
                                        },
                                        {
                                          text: 'That\'s a powerful connection.',
                                          next: {
                                            text: 'It connects me to her strength. To all the women in my family who were tougher than they were allowed to be.',
                                            choices: []
                                          }
                                        }
                                      ]
                                    }
                                  },
                                  {
                                    text: 'What drew you to butchness?',
                                    next: {
                                      text: 'I spent a long time trying to be feminine because I thought that\'s what being a woman required. Growing up, I felt bigger and more masculine than other girls and was ashamed of that. Femininity always felt like something I was mimicking.',
                                      choices: [
                                        {
                                          text: 'How did that evolve?',
                                          next: {
                                            text: 'I let go of trying to mimic femininity. I realized I naturally wanted to present this way. Butchness felt aligned with who I already was.',
                                            choices: [
                                              {
                                                text: 'What does "butch" mean to you?',
                                                next: {
                                                  text: 'Strength and vulnerability at the same time. You\'re very visible, which is intimate, but there\'s power in not being afraid of that visibility.',
                                                  choices: [
                                                    {
                                                      text: 'What held you back from embracing butchness?',
                                                      next: {
                                                        text: 'Religion, family pressure, and strict ideas of gender. Being gay was framed as "ugly" or "sad," so I was afraid to come out.',
                                                        choices: [
                                                          {
                                                            text: 'How do you feel now?',
                                                            next: {
                                                              text: 'Happier and less anxious than ever. I feel more present in my body and my life. Letting go of trying to change myself was the best decision I made.',
                                                              choices: []
                                                            }
                                                          },
                                                          {
                                                            text: 'That must have been hard.',
                                                            next: {
                                                              text: 'It was. But being myself is worth any difficulty. I\'m the happiest I\'ve ever been now.',
                                                              choices: []
                                                            }
                                                          }
                                                        ]
                                                      }
                                                    },
                                                    {
                                                      text: 'That\'s beautiful.',
                                                      next: {
                                                        text: 'It\'s both scary and freeing. Being visibly queer can be frightening, but that visibility also gives me strength and a sense of responsibility to protect others.',
                                                        choices: []
                                                      }
                                                    }
                                                  ]
                                                }
                                              },
                                              {
                                                text: 'That sounds like freedom.',
                                                next: {
                                                  text: 'It is. Finally being myself instead of performing someone else\'s idea of womanhood.',
                                                  choices: []
                                                }
                                              }
                                            ]
                                          }
                                        },
                                        {
                                          text: 'That sounds exhausting.',
                                          next: {
                                            text: 'It was. I was so tired of pretending. Now I can finally rest in who I am.',
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
                              text: 'Do you present differently in different places?',
                              next: {
                                text: 'Not really. My identity is very visible, and I don\'t try to change that depending on location.',
                                choices: [
                                  {
                                    text: 'How does outward perception affect your identity?',
                                    next: {
                                      text: 'It reinforces it. If people see me as butch, it validates how I feel inside. It\'s a feedback loop.',
                                      choices: [
                                        {
                                          text: 'What role does internal narrative play?',
                                          next: {
                                            text: 'It\'s huge. What you tell yourself shapes how you feel in your body. Accepting myself fully unlocked a deeper sense of confidence and presence.',
                                            choices: []
                                          }
                                        },
                                        {
                                          text: 'That makes sense.',
                                          next: {
                                            text: 'Yeah. External and internal have to align. That\'s when you feel whole.',
                                            choices: []
                                          }
                                        }
                                      ]
                                    }
                                  },
                                  {
                                    text: 'That takes courage.',
                                    next: {
                                      text: 'It does. But hiding takes more energy than being visible.',
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
                        text: 'How has location shaped your identity?',
                        next: {
                          text: 'Living in Brooklyn exposed me to many ways of being butch. It helped me realize masculinity can include softness and emotional openness—not just toughness.',
                          choices: [
                            {
                              text: 'Where are you from originally?',
                              next: {
                                text: 'Oregon.',
                                choices: [
                                  {
                                    text: 'How was it there?',
                                    next: {
                                      text: 'I wasn\'t out there, so I don\'t have much connection to the queer scene. I came into myself in Brooklyn.',
                                      choices: [
                                        {
                                          text: 'How long have you been in New York?',
                                          next: {
                                            text: 'About 8 years in New York State, 3 years in NYC.',
                                            choices: []
                                          }
                                        },
                                        {
                                          text: 'Brooklyn gave you freedom.',
                                          next: {
                                            text: 'Exactly. Space to exist without judgment. People who get it. Community that sees me. That\'s everything.',
                                            choices: []
                                          }
                                        }
                                      ]
                                    }
                                  },
                                  {
                                    text: 'Do you miss Oregon?',
                                    next: {
                                      text: 'Sometimes. But I don\'t miss who I had to be there. In Oregon I was constantly performing this version of womanhood that wasn\'t me.',
                                      choices: []
                                    }
                                  }
                                ]
                              }
                            },
                            {
                              text: 'What did Brooklyn teach you?',
                              next: {
                                text: 'That there are so many ways to be butch. It\'s not just one thing. Brooklyn showed me who I\'ve always been and gave me community.',
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
                  text: 'Final thoughts on identity?',
                  next: {
                    text: 'Being butch feels like carrying history—like being given something important. It can be scary to be visibly queer, but that visibility also gives me strength and a sense of responsibility to protect others.',
                    choices: []
                  }
                }
              ]
            }
          },
          {
            text: 'Nice to meet you, Amber.',
            next: {
              text: 'You too. Thanks for being curious.',
              choices: []
            }
          }
        ]
      }
    },
    {
      text: 'Tell me about yourself.',
      next: {
        text: 'I moved here five years ago from Portland. Needed to get out, you know? Find myself away from all the expectations.',
        choices: [
          {
            text: 'What kind of expectations?',
            next: {
              text: 'I\'m the only girl, only daughter on both sides of my family. Between religion, culture, and just... family dynamics, there was this very specific idea of who I was supposed to be.',
              choices: [
                {
                  text: 'What were you supposed to be?',
                  next: {
                    text: 'Feminine. Soft. Traditional. Get married, have kids, the whole thing. But that was never me. It felt like wearing someone else\'s skin.',
                    choices: [
                      {
                        text: 'When did you realize you were butch?',
                        next: {
                          text: 'Late twenties, honestly. When I actually found out about it - like someone used the word "butch" and I was like... oh. There\'s a word for this? There\'s a whole community?',
                          choices: [
                            {
                              text: 'What does butch mean to you?',
                              next: {
                                text: 'It\'s like black coffee. You either like it or you don\'t. There\'s no pretending, no softening it. You just are what you are.',
                                choices: [
                                  {
                                    text: 'That\'s a strong image.',
                                    next: {
                                      text: 'Yeah. And it\'s both vulnerable and strong at the same time, you know? Like, people clock you immediately. You\'re visible whether you want to be or not. That\'s the vulnerable part.',
                                      choices: [
                                        {
                                          text: 'And the strong part?',
                                          next: {
                                            text: 'Choosing to be visible anyway. Not hiding. Even when it would be easier or safer to blend in. That takes strength.',
                                            choices: [
                                              {
                                                text: 'Are you afraid?',
                                                next: {
                                                  text: 'Not anymore. I mean, some days more than others. But New York gave me this gift - I\'m not afraid of being seen anymore.',
                                                  choices: [
                                                    {
                                                      text: 'Tell me about community here.',
                                                      next: {
                                                        text: 'Park Slope mostly. There\'s this small but vibrant lesbian bar scene, readings, events. It feels like family, honestly.',
                                                        choices: [
                                                          {
                                                            text: 'What\'s the community like?',
                                                            next: {
                                                              text: 'All types, you know? Soft butches, stone butches, artist butches, mechanic butches. And the femmes - they\'re incredible.',
                                                              choices: [
                                                                {
                                                                  text: 'How do femmes fit in?',
                                                                  next: {
                                                                    text: 'Femmes help me find my butchness. They reflect it back to me in this beautiful way. It\'s not that I need them to exist as butch, but there\'s this dynamic, this recognition.',
                                                                    choices: [
                                                                      {
                                                                        text: 'Recognition of what?',
                                                                        next: {
                                                                          text: 'They see me fully. Not as trying to be a man. Not as a failed woman. Just as butch. As myself. That\'s everything.',
                                                                          choices: [
                                                                            {
                                                                              text: 'That sounds powerful.',
                                                                              next: {
                                                                                text: 'It is. It\'s mutual recognition. They see me, I see them. We make each other real.',
                                                                                choices: []
                                                                              }
                                                                            },
                                                                            {
                                                                              text: 'Thanks for sharing that.',
                                                                              next: {
                                                                                text: 'Of course. It\'s important to talk about these things.',
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
                                                                  text: 'Sounds like a good place.',
                                                                  next: {
                                                                    text: 'It really is. Finding your people - that\'s everything.',
                                                                    choices: []
                                                                  }
                                                                }
                                                              ]
                                                            }
                                                          },
                                                          {
                                                            text: 'That\'s wonderful.',
                                                            next: {
                                                              text: 'Yeah. Community saved me, honestly.',
                                                              choices: []
                                                            }
                                                          }
                                                        ]
                                                      }
                                                    },
                                                    {
                                                      text: 'That\'s inspiring.',
                                                      next: {
                                                        text: 'Thanks. It took time, but I got there.',
                                                        choices: []
                                                      }
                                                    }
                                                  ]
                                                }
                                              },
                                              {
                                                text: 'That does take strength.',
                                                next: {
                                                  text: 'Yeah. Every day is a choice to be yourself.',
                                                  choices: []
                                                }
                                              }
                                            ]
                                          }
                                        },
                                        {
                                          text: 'How does that feel?',
                                          next: {
                                            text: 'It\'s freeing, honestly. Scary sometimes, but mostly freeing. No more hiding.',
                                            choices: []
                                          }
                                        }
                                      ]
                                    }
                                  },
                                  {
                                    text: 'I like that analogy.',
                                    next: {
                                      text: 'Yeah, it just fits. No pretense, no softening. Just is.',
                                      choices: []
                                    }
                                  }
                                ]
                              }
                            },
                            {
                              text: 'How did your family react?',
                              next: {
                                text: 'Mixed. Some are supportive. Some are still... processing. It\'s gradual, you know? I came out to myself first, then friends, then family. It\'s still ongoing in some ways.',
                                choices: [
                                  {
                                    text: 'That must be hard.',
                                    next: {
                                      text: 'Yeah, but I\'d rather be myself and deal with the fallout than keep pretending. I\'m the happiest I\'ve ever been now.',
                                      choices: [
                                        {
                                          text: 'That\'s what matters.',
                                          next: {
                                            text: 'Exactly. Choosing yourself is the most important thing.',
                                            choices: []
                                          }
                                        },
                                        {
                                          text: 'Good for you.',
                                          next: {
                                            text: 'Thanks. It wasn\'t easy but it was worth it.',
                                            choices: []
                                          }
                                        }
                                      ]
                                    }
                                  },
                                  {
                                    text: 'They\'ll come around.',
                                    next: {
                                      text: 'Maybe. But I can\'t wait for them. I have to live my life now.',
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
                        text: 'That sounds suffocating.',
                        next: {
                          text: 'It was. That\'s why I had to leave. Portland was too small for who I really am.',
                          choices: []
                        }
                      }
                    ]
                  }
                },
                {
                  text: 'Do you miss Portland?',
                  next: {
                    text: 'Sometimes. But I don\'t miss who I had to be there. In Portland I was constantly performing this version of womanhood that wasn\'t me.',
                    choices: [
                      {
                        text: 'And in New York?',
                        next: {
                          text: 'In New York I can just... be. No performance. No costume. Just me.',
                          choices: [
                            {
                              text: 'That\'s freedom.',
                              next: {
                                text: 'It really is. That\'s why I moved here - to find myself, to be free.',
                                choices: []
                              }
                            },
                            {
                              text: 'New York lets you breathe.',
                              next: {
                                text: 'Exactly. Anonymity and community at the same time. It\'s magical.',
                                choices: []
                              }
                            }
                          ]
                        }
                      },
                      {
                        text: 'Sounds exhausting.',
                        next: {
                          text: 'It was. I was so tired of pretending. Now I can finally rest in who I am.',
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
            text: 'Did you find yourself?',
            next: {
              text: 'Yeah. I really did. Brooklyn showed me who I\'ve always been.',
              choices: [
                {
                  text: 'How so?',
                  next: {
                    text: 'Space to exist without judgment. People who get it. Community that sees me. That\'s everything.',
                    choices: []
                  }
                },
                {
                  text: 'That\'s beautiful.',
                  next: {
                    text: 'It is. I\'m grateful every day.',
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
      text: 'Nice jacket. Tell me about it.',
      next: {
        text: 'Beacon\'s Closet. The moment I tried it on and looked in the mirror, I thought "there I am." Like, that\'s me. You know that feeling?',
        choices: [
          {
            text: 'Totally. Clothes can do that.',
            next: {
              text: 'Yeah. Sometimes they show you who you\'ve always been. This trucker jacket - it\'s practical, durable. I\'m clumsy as hell so I need things that last.',
              choices: [
                {
                  text: 'Function over form?',
                  next: {
                    text: 'Function IS form. That\'s butchness in a nutshell - practicality, durability, authenticity. No pretense.',
                    choices: [
                      {
                        text: 'What else defines your look?',
                        next: {
                          text: 'My rings - they were my great-grandmother\'s. She ran a farm by herself, fixed machines, handled livestock. Total badass.',
                          choices: [
                            {
                              text: 'Do you think she was butch?',
                              next: {
                                text: 'I wonder sometimes. Maybe she didn\'t have the language for it back then. But these rings - thick metal bands, nothing feminine about them. They\'re markers of something.',
                                choices: [
                                  {
                                    text: 'When did you start wearing them?',
                                    next: {
                                      text: 'Right after I came out. It felt like claiming my lineage, you know? Connecting to something bigger than just me. A legacy of strong women who didn\'t fit the mold.',
                                      choices: [
                                        {
                                          text: 'That\'s really powerful.',
                                          next: {
                                            text: 'It connects me to her strength. To all the women in my family who were tougher than they were allowed to be.',
                                            choices: []
                                          }
                                        },
                                        {
                                          text: 'Family legacy matters.',
                                          next: {
                                            text: 'It does. Even when they don\'t fully understand me, I carry their strength.',
                                            choices: []
                                          }
                                        }
                                      ]
                                    }
                                  },
                                  {
                                    text: 'They suit you.',
                                    next: {
                                      text: 'Thanks. They feel like they were always meant for me.',
                                      choices: []
                                    }
                                  }
                                ]
                              }
                            },
                            {
                              text: 'What about your boots?',
                              next: {
                                text: 'Big, heavy boots. They\'re about taking up space, being grounded. Making my presence known, you know?',
                                choices: [
                                  {
                                    text: 'The whole silhouette matters?',
                                    next: {
                                      text: 'Exactly. Broad shoulders, big boots, rings on my fingers. It\'s how I\'m perceived - strong, powerful. Sometimes it\'s protection. Looking strong means you\'re less likely to get messed with.',
                                      choices: [
                                        {
                                          text: 'But it\'s also an announcement.',
                                          next: {
                                            text: 'Yes! This is me. This is who I am. I\'m not hiding. Armor and identity at once.',
                                            choices: []
                                          }
                                        },
                                        {
                                          text: 'Protection and expression.',
                                          next: {
                                            text: 'Both. Always both. That\'s the reality of being visible.',
                                            choices: []
                                          }
                                        }
                                      ]
                                    }
                                  },
                                  {
                                    text: 'Taking up space is important.',
                                    next: {
                                      text: 'It is. We\'re taught to shrink. I refuse.',
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
                        text: 'Where do you get your hair cut?',
                        next: {
                          text: 'Yeah, there\'s a barbershop in Brooklyn. It\'s such a huge part of my identity - those spaces where I can just exist. They don\'t question it, don\'t make it weird.',
                          choices: [
                            {
                              text: 'Safe spaces are important.',
                              next: {
                                text: 'So important. I walk in, they cut my hair the way I want it, and I can just be. That\'s everything. Those spaces are rare.',
                                choices: []
                              }
                            },
                            {
                              text: 'Finding the right place matters.',
                              next: {
                                text: 'It really does. Small things like that - they add up to feeling seen.',
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
                  text: 'It suits you.',
                  next: {
                    text: 'Thanks. That\'s all I want - to look like myself.',
                    choices: []
                  }
                }
              ]
            }
          },
          {
            text: 'I know exactly what you mean.',
            next: {
              text: 'Right? That moment of recognition in the mirror. It\'s everything.',
              choices: []
            }
          }
        ]
      }
    },
    {
      text: 'What do you do?',
      next: {
        text: 'I\'m a designer for children\'s education - books, games, learning materials. Mostly for kids 5 to 10. That\'s when identity starts forming, so representation matters.',
        choices: [
          {
            text: 'Do you include queer representation?',
            next: {
              text: 'Subtly, yeah. Every kid deserves to see themselves. I wish I had that growing up - maybe I would\'ve figured myself out sooner, had language for it earlier.',
              choices: [
                {
                  text: 'You\'re giving kids what you needed.',
                  next: {
                    text: 'Exactly. Representation matters. Mirrors matter. Kids need to know they exist, that they\'re valid. That they\'re not alone.',
                    choices: [
                      {
                        text: 'That\'s powerful work.',
                        next: {
                          text: 'Thanks. It feels important.',
                          choices: []
                        }
                      },
                      {
                        text: 'Future generations will thank you.',
                        next: {
                          text: 'I hope so. Even one kid seeing themselves - that\'s worth it.',
                          choices: []
                        }
                      }
                    ]
                  }
                },
                {
                  text: 'Representation saves lives.',
                  next: {
                    text: 'It really does. Seeing yourself reflected back - knowing you\'re not alone or broken. That\'s everything.',
                    choices: []
                  }
                }
              ]
            }
          },
          {
            text: 'Do you make art too?',
            next: {
              text: 'Yeah - illustrations, film photography, zines. I work in ink and gouache mostly. Themes of queerness, bodies, belonging.',
              choices: [
                {
                  text: 'Why ink specifically?',
                  next: {
                    text: 'It\'s permanent. You can\'t erase it, you have to commit. Like coming out - once you do it, you can\'t take it back. The permanence is part of the point.',
                    choices: [
                      {
                        text: 'What do you illustrate?',
                        next: {
                          text: 'Butch bodies, mostly. Bodies that take up space unapologetically. We\'re taught to shrink, to be smaller, quieter. I draw us big, visible, powerful.',
                          choices: [
                            {
                              text: 'Resistance through art.',
                              next: {
                                text: 'Yeah. Our existence is political. Our visibility is radical. I mostly give my work away at queer events - art should be accessible. Community over profit.',
                                choices: [
                                  {
                                    text: 'Who inspires your work?',
                                    next: {
                                      text: 'Leslie Feinberg, Audre Lorde, Joan Nestle. The ones who came before us, who fought so we could exist. We stand on their shoulders.',
                                      choices: [
                                        {
                                          text: 'Documentation matters.',
                                          next: {
                                            text: 'Exactly! They erase us from history. We have to document ourselves, our lives, our joy. That\'s why I do photography.',
                                            choices: [
                                              {
                                                text: 'Tell me about photography.',
                                                next: {
                                                  text: 'Film photography, black and white, 35mm. I have a darkroom in my apartment. Film costs money so every shot matters - you really think about what you\'re capturing.',
                                                  choices: [
                                                    {
                                                      text: 'What do you photograph?',
                                                      next: {
                                                        text: 'Queer life. My friends, our spaces, moments of joy and resistance. Evidence that we were here, that we existed, we thrived, we loved.',
                                                        choices: [
                                                          {
                                                            text: 'For future generations.',
                                                            next: {
                                                              text: 'For us too. To remember. The darkroom is meditative - the slowness of it, the ritual. It forces you to be present.',
                                                              choices: []
                                                            }
                                                          },
                                                          {
                                                            text: 'That\'s beautiful.',
                                                            next: {
                                                              text: 'Thanks. It\'s love work, you know?',
                                                              choices: []
                                                            }
                                                          }
                                                        ]
                                                      }
                                                    },
                                                    {
                                                      text: 'Film is intentional.',
                                                      next: {
                                                        text: 'Exactly. Every frame counts. Makes you think about what matters.',
                                                        choices: []
                                                      }
                                                    }
                                                  ]
                                                }
                                              },
                                              {
                                                text: 'What about the zines?',
                                                next: {
                                                  text: 'DIY publishing. Print, fold, staple, repeat. Butch stories, our history, community things. Stories about our elders, people who came before. Making sure we\'re not forgotten.',
                                                  choices: [
                                                    {
                                                      text: 'Where can I find them?',
                                                      next: {
                                                        text: 'Park Slope bar mostly. Monthly readings. I leave them in free boxes around the neighborhood too. Knowledge should be free. Community resources should be accessible.',
                                                        choices: []
                                                      }
                                                    },
                                                    {
                                                      text: 'Preserving history.',
                                                      next: {
                                                        text: 'Yeah. If we don\'t tell our stories, who will?',
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
                                          text: 'Standing on shoulders.',
                                          next: {
                                            text: 'Always. We owe them everything.',
                                            choices: []
                                          }
                                        }
                                      ]
                                    }
                                  },
                                  {
                                    text: 'Community over profit.',
                                    next: {
                                      text: 'Always. Art is for us, by us. It should be accessible.',
                                      choices: []
                                    }
                                  }
                                ]
                              }
                            },
                            {
                              text: 'Taking up space.',
                              next: {
                                text: 'Exactly. Unapologetically. That\'s the revolution.',
                                choices: []
                              }
                            }
                          ]
                        }
                      },
                      {
                        text: 'Commitment as metaphor.',
                        next: {
                          text: 'Yeah. Can\'t take it back. Might as well commit fully.',
                          choices: []
                        }
                      }
                    ]
                  }
                },
                {
                  text: 'What themes?',
                  next: {
                    text: 'Queerness, belonging, bodies, community. The stuff that matters to us.',
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
};