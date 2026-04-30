// Portia's dialogue tree
export const portiaDialogue = {
  text: 'Hey there. I\'m Portia Rose. What\'s up?',
  choices: [
    {
      text: 'What\'s your full name?',
      next: {
        text: 'Portia Lee Rose, but people usually just call me Portia Rose.',
        choices: [
          {
            text: 'How do you describe your identity?',
            next: {
              text: 'I\'m a masculine cis woman. Within the Black community, I identify as a stud.',
              choices: [
                {
                  text: 'How does being a stud show up in how you act or move through the world?',
                  next: {
                    text: 'It shows up in my mannerisms—I feel more assertive and comfortable in myself. But I also question what "masculine" or "feminine" even means.',
                    choices: [
                      {
                        text: 'What do you mean by questioning those terms?',
                        next: {
                          text: 'Like, who decides what\'s masculine or feminine? These labels are socially constructed. I wear what feels right, but I wonder why we categorize things that way at all.',
                          choices: []
                        }
                      },
                      {
                        text: 'Were you always masculine-presenting?',
                        next: {
                          text: 'Not really. I was into sports and theater, but I also internalized ideas of femininity from school and media and tried to fit into that.',
                          choices: [
                            {
                              text: 'When did that change?',
                              next: {
                                text: 'In my late 20s—around 28 or 29. I started exploring my masculinity more fully. It felt like finally being honest with myself.',
                                choices: [
                                  {
                                    text: 'What did that exploration look like?',
                                    next: {
                                      text: 'It started with cutting my hair, which felt symbolic. Then came clothing changes, and eventually my mannerisms aligned with how I felt internally.',
                                      choices: [
                                        {
                                          text: 'That sounds like a journey.',
                                          next: {
                                            text: 'It was. And it\'s still ongoing. Identity isn\'t static—it evolves.',
                                            choices: []
                                          }
                                        },
                                        {
                                          text: 'Hair can be so symbolic.',
                                          next: {
                                            text: 'Right? Cutting my hair was like shedding a version of myself I was holding onto for others. It was freeing.',
                                            choices: []
                                          }
                                        }
                                      ]
                                    }
                                  },
                                  {
                                    text: 'What held you back before that?',
                                    next: {
                                      text: 'It felt taboo. I went to traditional schools where being anything other than straight wasn\'t really accepted or discussed.',
                                      choices: []
                                    }
                                  }
                                ]
                              }
                            },
                            {
                              text: 'So you tried to fit in?',
                              next: {
                                text: 'Yeah. I internalized what I saw in school and media. It took time to unlearn that and be myself.',
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
                  text: 'When did you realize you were a lesbian?',
                  next: {
                    text: 'I came out at 16, but I knew earlier—around 9 or 10. I remember always wanting to play Ken instead of Barbie.',
                    choices: [
                      {
                        text: 'That\'s a clear sign.',
                        next: {
                          text: 'Right? Looking back, the signs were always there. I just didn\'t have the language for it yet.',
                          choices: [
                            {
                              text: 'What drew you to identifying as a stud?',
                              next: {
                                text: 'It wasn\'t something I consciously chose—it was always there. But a turning point was when a partner expressed attraction to masculine women, and I realized that identity was possible for me.',
                                choices: [
                                  {
                                    text: 'Why do you think you didn\'t embrace that identity earlier?',
                                    next: {
                                      text: 'It felt taboo. I went to traditional schools where being anything other than straight wasn\'t really accepted or discussed.',
                                      choices: []
                                    }
                                  },
                                  {
                                    text: 'That partner helped you see yourself.',
                                    next: {
                                      text: 'Exactly. Sometimes we need someone else to reflect back to us what was always there.',
                                      choices: []
                                    }
                                  }
                                ]
                              }
                            },
                            {
                              text: 'Language is so important.',
                              next: {
                                text: 'It really is. Having words for who you are—that changes everything.',
                                choices: []
                              }
                            }
                          ]
                        }
                      },
                      {
                        text: 'Did you face any stereotypes?',
                        next: {
                          text: 'Yes—especially stereotypes about being aggressive or predatory. I\'m very aware of how I\'m perceived, sometimes to the point of overthinking my behavior.',
                          choices: [
                            {
                              text: 'How do you deal with those perceptions?',
                              next: {
                                text: 'I try to stay self-aware and reflect on my behavior, but I also recognize that some of it may just be stereotypes or in my head.',
                                choices: [
                                  {
                                    text: 'Do stereotypes influence how you see yourself?',
                                    next: {
                                      text: 'Yes. I sometimes feel pressure to embody traditional masculine traits like chivalry, even though I know those ideas are outdated.',
                                      choices: []
                                    }
                                  },
                                  {
                                    text: 'That sounds exhausting.',
                                    next: {
                                      text: 'It can be. But I\'m learning to let go of trying to control how others perceive me.',
                                      choices: []
                                    }
                                  }
                                ]
                              }
                            },
                            {
                              text: 'Those stereotypes are harmful.',
                              next: {
                                text: 'They really are. They put pressure on us to constantly monitor ourselves and prove we\'re not those things.',
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
            text: 'Nice to meet you, Portia Rose.',
            next: {
              text: 'You too. Thanks for asking.',
              choices: []
            }
          }
        ]
      }
    },
    {
      text: 'How has living in New York shaped your identity?',
      next: {
        text: 'Being in Brooklyn, especially Flatbush, I see a lot of people who look like me. That representation helps and affirms my identity.',
        choices: [
          {
            text: 'Do you feel like you present differently depending on location?',
            next: {
              text: 'Not really—Brooklyn, Manhattan, and even Westchester all feel similar enough that I don\'t change how I present.',
              choices: [
                {
                  text: 'So you\'re consistent everywhere?',
                  next: {
                    text: 'Yeah. I\'m just me. I don\'t feel the need to code-switch my presentation based on where I am.',
                    choices: []
                  }
                },
                {
                  text: 'That must feel freeing.',
                  next: {
                    text: 'It does. I spent enough time hiding—now I just want to be myself.',
                    choices: []
                  }
                }
              ]
            }
          },
          {
            text: 'Representation matters.',
            next: {
              text: 'It really does. Seeing people who look like me makes me feel less alone and more validated in who I am.',
              choices: []
            }
          }
        ]
      }
    },
    {
      text: 'Are there objects that feel tied to your identity?',
      next: {
        text: 'My chains. I wear them during games as good luck charms, and they connect me to my family.',
        choices: [
          {
            text: 'What do those objects represent beyond luck?',
            next: {
              text: 'They represent my family. My parents gave them to me, and wearing them reminds me of their love and support.',
              choices: [
                {
                  text: 'How important is family to your identity?',
                  next: {
                    text: 'Very important. My parents are supportive, and my mom is my rock.',
                    choices: [
                      {
                        text: 'That support must mean everything.',
                        next: {
                          text: 'It does. Not everyone has that, and I\'m so grateful. My mom especially—she\'s always been there for me.',
                          choices: []
                        }
                      },
                      {
                        text: 'You\'re lucky to have that.',
                        next: {
                          text: 'I know. It makes all the difference in being able to be yourself.',
                          choices: []
                        }
                      }
                    ]
                  }
                },
                {
                  text: 'That\'s beautiful.',
                  next: {
                    text: 'Thanks. They\'re a physical reminder that I\'m loved for who I am.',
                    choices: []
                  }
                }
              ]
            }
          },
          {
            text: 'Do you play a sport?',
            next: {
              text: 'Yeah, pickleball! I love it. The chains come with me to every game.',
              choices: [
                {
                  text: 'Tell me more about what you do.',
                  next: {
                    text: 'I\'m an actor, I play pickleball, and I\'m just trying to be a functional person and make a difference.',
                    choices: [
                      {
                        text: 'Who are you beyond your identity labels?',
                        next: {
                          text: 'I\'m an actor, I play pickleball, and I\'m just trying to be a functional person and make a difference.',
                          choices: []
                        }
                      },
                      {
                        text: 'That\'s a great approach to life.',
                        next: {
                          text: 'Thanks. I think we all just want to live authentically and leave things a little better than we found them.',
                          choices: []
                        }
                      }
                    ]
                  }
                },
                {
                  text: 'Pickleball is fun!',
                  next: {
                    text: 'Right? It\'s competitive but also just a good time. Great community too.',
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
      text: 'Who are you beyond your identity labels?',
      next: {
        text: 'I\'m an actor, I play pickleball, and I\'m just trying to be a functional person and make a difference.',
        choices: [
          {
            text: 'What kind of acting do you do?',
            next: {
              text: 'Whatever I can get! Theater, film, whatever comes my way. It\'s about telling stories and connecting with people.',
              choices: []
            }
          },
          {
            text: 'Making a difference matters.',
            next: {
              text: 'Yeah. I want to leave things better than I found them, you know? Even if it\'s just in small ways.',
              choices: []
            }
          }
        ]
      }
    }
  ]
};
