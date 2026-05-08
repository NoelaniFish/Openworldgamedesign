// A.'s dialogue tree
export const amberDialogue = {
  text: "Hey, I'm A. I use she/her pronouns. I'm butch, a designer, and honestly kind of a stereotype in the best way possible. Zines, film photography, giant boots, gay Brooklyn hobbies. That's the ecosystem.",
  speaker: "A.",
  choices: [
    {
      text: "The boots thing feels spiritually important.",
      next: {
        text: "Oh, absolutely. Big boots make me feel grounded. Same with old work clothes or vintage tees. I like clothing that feels durable — like it could survive something.",
        speaker: "A.",
        choices: [
          {
            text: "So practicality is part of gender for you?",
            next: {
              text: "Yeah. I think strength and usefulness became tied to masculinity for me really early. Frilly things always felt performative on my body. Like I was wearing someone else's costume.",
              speaker: "A.",
              choices: [
                {
                  text: "That makes sense. Like building a silhouette that actually agrees with your nervous system.",
                  next: null
                }
              ]
            }
          },
          {
            text: "You don't seem interested in decorative femininity.",
            next: {
              text: "Not really. It overstimulates me. I spent years trying to perform femininity correctly and it always felt slightly uncanny. Butch presentation felt like exhaling for the first time.",
              speaker: "A.",
              choices: [
                {
                  text: "That's such a specific relief — not becoming someone new, just stopping the performance.",
                  next: null
                }
              ]
            }
          },
          {
            text: "Wait, are the rings part of that too?",
            next: {
              text: "Totally. They belonged to my great-grandmother. One of them literally looks like a man's ring. It wasn't dainty or feminized, just resized for her hand. I love that.",
              speaker: "A.",
              choices: [
                {
                  text: "That feels weirdly radical for an older ring.",
                  next: {
                    text: "Right? It makes masculinity feel less invented somehow. Like strong women have always existed, even if nobody used queer language for them.",
                    speaker: "A.",
                    choices: [
                      {
                        text: "That's the thing — queer history hides in objects before it hides in language.",
                        next: null
                      }
                    ]
                  }
                },
                {
                  text: "So butchness becomes a kind of inheritance?",
                  next: {
                    text: "Exactly. I think butchness is partly about building meaning around everyday things and recognizing yourself in them.",
                    speaker: "A.",
                    choices: [
                      {
                        text: "Like making your own mythology out of family artifacts.",
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
      text: "You seem very intentional about presentation.",
      next: {
        text: "I am now. I wasn't always. Growing up I was taller and bigger than everyone else, and I carried a lot of shame around feeling masculine before I even had language for it.",
        speaker: "A.",
        choices: [
          {
            text: "Did you feel masculine before you felt queer?",
            next: {
              text: "Definitely. Masculinity got projected onto my body before I understood sexuality at all. I spent years trying to soften myself so people would read me correctly.",
              speaker: "A.",
              choices: [
                {
                  text: "That sounds exhausting. Like trying to negotiate with people's expectations 24/7.",
                  next: null
                }
              ]
            }
          },
          {
            text: "Was there also power in being bigger?",
            next: {
              text: "Honestly, yeah. I liked feeling protective. I liked taking up space. I just thought those qualities disqualified me from femininity somehow.",
              speaker: "A.",
              choices: [
                {
                  text: "So butchness reframed those traits?",
                  next: {
                    text: "Exactly. Butchness let me stop treating those instincts like flaws.",
                    speaker: "A.",
                    choices: [
                      {
                        text: "Like your body stopped being evidence against you.",
                        next: null
                      }
                    ]
                  }
                },
                {
                  text: "That sounds less like rejection and more like reinterpretation.",
                  next: {
                    text: "Yeah. I wasn't becoming masculine out of nowhere. I was recognizing something that had already been there.",
                    speaker: "A.",
                    choices: [
                      {
                        text: "That feels important — discovery instead of transformation.",
                        next: null
                      }
                    ]
                  }
                }
              ]
            }
          },
          {
            text: "What finally shifted for you?",
            next: {
              text: "I got tired. Truly. I got tired of echoing femininity instead of living inside myself. Once I stopped trying to fix my lesbianism, everything else in my life got clearer too.",
              speaker: "A.",
              choices: [
                {
                  text: "That's brutal and kind of beautiful. Like reclaiming processing power from self-surveillance.",
                  next: null
                }
              ]
            }
          }
        ]
      }
    },
    {
      text: "Okay but 'gay Brooklyn hobbies' is dangerously broad.",
      next: {
        text: "I know. It's embarrassing. But Brooklyn genuinely changed me. Seeing other butches here expanded my understanding of masculinity completely.",
        speaker: "A.",
        choices: [
          {
            text: "How so?",
            next: {
              text: "I thought masculinity had to mean emotionally distant, stoic, hard-edged. Then I met butches who were soft, communicative, nurturing. That changed everything for me.",
              speaker: "A.",
              choices: [
                {
                  text: "It's funny how community can widen the emotional vocabulary of a gender.",
                  next: null
                }
              ]
            }
          },
          {
            text: "Did you have a narrower idea of butchness before?",
            next: {
              text: "Totally. I thought there was one correct way to do it. Brooklyn showed me there are a thousand ways to be masculine without copying cis men.",
              speaker: "A.",
              choices: [
                {
                  text: "That sounds freeing.",
                  next: {
                    text: "It was. I stopped treating masculinity like a test I had to pass.",
                    speaker: "A.",
                    choices: [
                      {
                        text: "That's such a hard thing to unlearn.",
                        next: null
                      }
                    ]
                  }
                },
                {
                  text: "Did Oregon feel different?",
                  next: {
                    text: "Yeah. I'm from Oregon, but I really became myself in New York. My understanding of lesbian identity feels deeply tied to Brooklyn specifically.",
                    speaker: "A.",
                    choices: [
                      {
                        text: "Some cities really do function like identity accelerators.",
                        next: null
                      }
                    ]
                  }
                }
              ]
            }
          },
          {
            text: "Do you think New York made you more visible?",
            next: {
              text: "I think I was already visible. There's not really a stealth mode for me. But New York made that visibility feel survivable instead of isolating.",
              speaker: "A.",
              choices: [
                {
                  text: "Does visibility still feel vulnerable?",
                  next: {
                    text: "Always. People read you instantly when you're visibly butch. But there's also strength in refusing to shrink yourself around that.",
                    speaker: "A.",
                    choices: [
                      {
                        text: "That tension really sits at the center of queer visibility.",
                        next: null
                      }
                    ]
                  }
                },
                {
                  text: "Do strangers' perceptions affect you?",
                  next: {
                    text: "Honestly, yes. When people perceive me as grounded or strong, it reinforces something internal for me too. Identity becomes this feedback loop.",
                    speaker: "A.",
                    choices: [
                      {
                        text: "Like being recognized helps stabilize the self instead of inventing it.",
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
};
