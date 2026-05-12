import { getRandomExitLine, getRandomRestartLine, createExitNode, createRestartMarker } from './dialogueHelpers';

const exitNode = createExitNode();
const restartMarker = createRestartMarker();

// Branch 3: Evolution of identity and location
const a3_9k = {
  text: "What was the performance like before? Femininity always felt unreachable to me, like something I was copying.",
  speaker: "A.",
  choices: [
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const a3_9a = {
  text: "Was that overwhelming at first? It felt like another performance, another script I was trying to follow. Brooklyn showed me masculine people who were also soft, who cried, who talked about their feelings.",
  speaker: "A.",
  choices: [
    { text: "What was the performance like before?", next: a3_9k },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const a3_9b = {
  text: "What did Brooklyn teach you? That realization freed me. I didn't have to choose between being masculine and being emotionally present—I could be both.",
  speaker: "A.",
  choices: [
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const a3_8a = {
  text: "Was that overwhelming at first? Living in Brooklyn exposed me to so many different ways of being butch.",
  speaker: "A.",
  choices: [
    { text: "Was that overwhelming at first?", next: a3_9a },
    { text: "What did Brooklyn teach you?", next: a3_9b },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const a3_9c = {
  text: "Where are you from originally? I came into myself in Brooklyn, so my understanding of butchness feels deeply tied to New York.",
  speaker: "A.",
  choices: [
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const a3_9d = {
  text: "Do you present differently depending on where you are? My presentation stays consistent.",
  speaker: "A.",
  choices: [
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const a3_8b = {
  text: "Where are you from? Location has shaped my identity in massive ways. Brooklyn is where I became myself.",
  speaker: "A.",
  choices: [
    { text: "Where are you from originally?", next: a3_9c },
    { text: "Do you present differently depending on where you are?", next: a3_9d },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const a3_7a = {
  text: "How has location shaped my identity? That's a huge question.",
  speaker: "A.",
  choices: [
    { text: "Start with Brooklyn.", next: a3_8a },
    { text: "Where are you from?", next: a3_8b },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const a3_9e = {
  text: "How so? If people perceive me as butch, it validates something internal for me. There's this feedback loop between how I feel inside and how the world responds to me.",
  speaker: "A.",
  choices: [
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const a3_9f = {
  text: "What does that look like? That's part of how identity gets formed—outward perception reflecting inward truth.",
  speaker: "A.",
  choices: [
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const a3_8c = {
  text: "How does outward perception affect you? Outward perception affects my sense of self a lot.",
  speaker: "A.",
  choices: [
    { text: "How so?", next: a3_9e },
    { text: "What does that look like?", next: a3_9f },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const a3_9g = {
  text: "What does butch mean? Butch means strength and vulnerability at the same time.",
  speaker: "A.",
  choices: [
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const a3_9h = {
  text: "What's visibility like? There's also strength in not hiding from that.",
  speaker: "A.",
  choices: [
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const a3_8d = {
  text: "What does the word 'butch' mean to me? It's complicated.",
  speaker: "A.",
  choices: [
    { text: "Try to explain it.", next: a3_9g },
    { text: "What's visibility like?", next: a3_9h },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const a3_7b = {
  text: "What about perception? Perception and identity are deeply connected for me.",
  speaker: "A.",
  choices: [
    { text: "How does outward perception affect you?", next: a3_8c },
    { text: "What does 'butch' mean to you?", next: a3_8d },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const a3_6a = {
  text: "What about location? Location has been really important to my journey.",
  speaker: "A.",
  choices: [
    { text: "How has location shaped your identity?", next: a3_7a },
    { text: "What about perception?", next: a3_7b },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const a3_9i = {
  text: "How did that evolve? Eventually I let go of trying to echo femininity all the time. I realized I could just present the way I naturally wanted to. That's what drew me toward butchness.",
  speaker: "A.",
  choices: [
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const a3_9j = {
  text: "What's the historical aspect? I participate in butch/femme dynamics, and I probably would have gravitated toward those dynamics whether or not I had language for them.",
  speaker: "A.",
  choices: [
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const a3_8e = {
  text: "What about performing femininity? I spent a long time trying to perform femininity because I thought that was the only acceptable way to be a woman.",
  speaker: "A.",
  choices: [
    { text: "How did that evolve?", next: a3_9i },
    { text: "What's the historical aspect?", next: a3_9j },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const a3_9l = {
  text: "When did things shift? Since coming out, those choices became intentional. I could finally build the silhouette I wanted.",
  speaker: "A.",
  choices: [
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const a3_8f = {
  text: "What were you like as a kid? As a kid, I was always taller and bigger than the other girls, even bigger than a lot of the boys.",
  speaker: "A.",
  choices: [
    { text: "How did you feel about that?", next: a3_9k },
    { text: "When did things shift?", next: a3_9l },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const a3_7c = {
  text: "How did that evolve into embracing butchness? It was a journey.",
  speaker: "A.",
  choices: [
    { text: "Tell me about performing femininity.", next: a3_8e },
    { text: "What were you like as a kid?", next: a3_8f },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const a3_9m = {
  text: "What does being butch mean to you? Being butch and being a lesbian feels deeply meaningful to me. It feels almost ceremonial, like inheriting a history and responsibility.",
  speaker: "A.",
  choices: [
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const a3_9n = {
  text: "What about visibility? By being openly butch, I can make things safer for other people too.",
  speaker: "A.",
  choices: [
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const a3_8g = {
  text: "What does visibility mean? There's strength in walking through the world visibly queer.",
  speaker: "A.",
  choices: [
    { text: "What does being butch mean to you?", next: a3_9m },
    { text: "Tell me about visibility.", next: a3_9n },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const a3_9o = {
  text: "Do you want to change it? I've worked too hard to get here to hide it.",
  speaker: "A.",
  choices: [
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const a3_9p = {
  text: "How does that feel? I'm visible whether I want to be or not.",
  speaker: "A.",
  choices: [
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const a3_8h = {
  text: "Do you present differently in different places? There's no real way to hide that.",
  speaker: "A.",
  choices: [
    { text: "Do you want to change it?", next: a3_9o },
    { text: "How does that feel?", next: a3_9p },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const a3_7d = {
  text: "What about visibility? Visibility is complicated. It's powerful and vulnerable at the same time.",
  speaker: "A.",
  choices: [
    { text: "What does visibility mean?", next: a3_8g },
    { text: "Do you present differently in different places?", next: a3_8h },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const a3_6b = {
  text: "How did you evolve? The evolution of my identity has been complicated.",
  speaker: "A.",
  choices: [
    { text: "How did you embrace butchness?", next: a3_7c },
    { text: "Tell me about visibility.", next: a3_7d },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const a3_5a = {
  text: "How did it unfold? My identity evolved over time. Location played a big part.",
  speaker: "A.",
  choices: [
    { text: "Tell me about location.", next: a3_6a },
    { text: "How did you evolve?", next: a3_6b },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const a3_4a = {
  text: "How did Brooklyn change you? The journey to butchness wasn't straightforward.",
  speaker: "A.",
  choices: [
    { text: "Walk me through it.", next: a3_5a },
    { text: "What shaped you?", next: a3_5a },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const a3_3a = {
  text: "How did that help? Being around other butches helped me realize I didn't have to fit one narrow definition. I could be soft and vulnerable and still be butch.",
  speaker: "A.",
  choices: [
    { text: "Tell me more about that.", next: a3_4a },
    { text: "How did Brooklyn change you?", next: a3_4a },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const a3_2a = {
  text: "How did that evolve into embracing butchness? Once I started meeting other butches, I realized I could embrace that part of myself.",
  speaker: "A.",
  choices: [
    { text: "I'm curious about this.", next: a3_3a },
    { text: "Tell me more.", next: a3_3a },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

// Branch 2: Family, religion, and coming out
const a2_9a = {
  text: "What did your parents say? That fear kept me closeted for years. It took moving away, building my own life, finding my own community to realize that was a lie—that being gay could actually mean being happy.",
  speaker: "A.",
  choices: [
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const a2_9b = {
  text: "What was projected onto you? That pressure to be the perfect daughter, the perfect woman—it was crushing. It took me years to realize I didn't have to carry that weight.",
  speaker: "A.",
  choices: [
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const a2_8a = {
  text: "What were they? Religion was a huge one. Being the eldest daughter meant carrying all these expectations.",
  speaker: "A.",
  choices: [
    { text: "What did your parents say?", next: a2_9a },
    { text: "What was projected onto you?", next: a2_9b },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const a2_9c = {
  text: "How do you feel about your life now? Coming out changed everything. The anxiety that had been my constant companion for years got so much lighter because I wasn't spending all my energy hiding anymore.",
  speaker: "A.",
  choices: [
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const a2_9d = {
  text: "What changed? Once I accepted that—once I stopped fighting myself—everything got easier. I could finally just be.",
  speaker: "A.",
  choices: [
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const a2_8b = {
  text: "How did you push through? For a long time I thought coming out would make me miserable. That's what I was taught.",
  speaker: "A.",
  choices: [
    { text: "How do you feel about your life now?", next: a2_9c },
    { text: "What changed?", next: a2_9d },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const a2_7a = {
  text: "Were there things that held me back from embracing butchness? Absolutely.",
  speaker: "A.",
  choices: [
    { text: "What were they?", next: a2_8a },
    { text: "How did you push through?", next: a2_8b },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const a2_9e = {
  text: "How so? Completely. Once I accepted I was gay, it felt like something clicked into place. I stopped spending all my energy worrying about going to hell or trying to suppress myself.",
  speaker: "A.",
  choices: [
    { text: "Did that unlock your butchness?", next: a3_9i },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const a2_9f = {
  text: "What unlocked? It felt like I unlocked access to the rest of my personality.",
  speaker: "A.",
  choices: [
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const a2_8c = {
  text: "Did accepting your identity change other parts of your life? My whole life opened up in ways I couldn't have imagined.",
  speaker: "A.",
  choices: [
    { text: "How so?", next: a2_9e },
    { text: "What unlocked?", next: a2_9f },
    { text: "How did location play into this?", next: a3_8a },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const a2_9g = {
  text: "What about the rings? The rings belonged to my great-grandmother. One of them almost looks like a man's ring—it was actually a matching set with her husband's ring, except hers wasn't made dainty or feminized. It was just scaled to fit her hand.",
  speaker: "A.",
  choices: [
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const a2_9h = {
  text: "Why do you wear them? I wear them to honor her memory, but also because they feel connected to this lineage of strength and masculinity in my family, even if those family members weren't queer themselves.",
  speaker: "A.",
  choices: [
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const a2_8d = {
  text: "What about family heirlooms? I mentioned my great-grandmother's rings earlier. They're really important to me.",
  speaker: "A.",
  choices: [
    { text: "Tell me about them.", next: a2_9g },
    { text: "Why do you wear them?", next: a2_9h },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const a2_7b = {
  text: "How did you work through it? Coming out wasn't just about sexuality. It changed how I related to my whole family.",
  speaker: "A.",
  choices: [
    { text: "Did accepting your identity change other parts of your life?", next: a2_8c },
    { text: "What about family heirlooms?", next: a2_8d },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const a2_6a = {
  text: "What were the obstacles? Family and religion were massive obstacles for me.",
  speaker: "A.",
  choices: [
    { text: "Tell me about that.", next: a2_7a },
    { text: "How did you work through it?", next: a2_7b },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const a2_9i = {
  text: "How did that affect you? Being butch made me feel more present.",
  speaker: "A.",
  choices: [
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const a2_9j = {
  text: "What changed? That was liberation.",
  speaker: "A.",
  choices: [
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const a2_8e = {
  text: "What was the weight? I carried that weight for years.",
  speaker: "A.",
  choices: [
    { text: "How did that affect you?", next: a2_9i },
    { text: "What changed?", next: a2_9j },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const a2_9k = {
  text: "What opened up? I could focus on normal life things—work, friendships, dating, school.",
  speaker: "A.",
  choices: [
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const a2_9l = {
  text: "What was that relief like? One massive weight disappeared. I could finally breathe.",
  speaker: "A.",
  choices: [
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const a2_8f = {
  text: "How did letting go feel? It felt like something clicked into place. I stopped worrying about going to hell or trying to suppress myself.",
  speaker: "A.",
  choices: [
    { text: "What opened up?", next: a2_9k },
    { text: "What was that relief like?", next: a2_9l },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const a2_7c = {
  text: "What did you confront? The weight of family expectations was crushing. But letting go of them saved my life.",
  speaker: "A.",
  choices: [
    { text: "What was the weight?", next: a2_8e },
    { text: "How did letting go feel?", next: a2_8f },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const a2_9m = {
  text: "What do they represent? I think part of butchness is finding masculinity and strength in everyday objects and building your own meaning around them.",
  speaker: "A.",
  choices: [
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const a2_9n = {
  text: "What do they give you? The rings connect me to a lineage. Even if my great-grandmother wasn't queer, her strength lives in me.",
  speaker: "A.",
  choices: [
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const a2_8g = {
  text: "What about the rings again? They weren't feminized—they were just strong.",
  speaker: "A.",
  choices: [
    { text: "What do they represent?", next: a2_9m },
    { text: "What do they give you?", next: a2_9n },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const a2_9o = {
  text: "What was projected onto you? I had to reject all of that.",
  speaker: "A.",
  choices: [
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const a2_9p = {
  text: "What did you have to let go of? Letting go of the idea that I could 'fix' my lesbianism or change my desires was one of the best decisions I've ever made.",
  speaker: "A.",
  choices: [
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const a2_8h = {
  text: "What held you back? Family pressure was enormous. Religion made it worse. I was taught being gay meant misery.",
  speaker: "A.",
  choices: [
    { text: "What was projected onto you?", next: a2_9o },
    { text: "What did you have to let go of?", next: a2_9p },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const a2_7d = {
  text: "How are you now? Family and religion held me back for a long time. But I'm happier now than I've ever been.",
  speaker: "A.",
  choices: [
    { text: "Tell me about the rings again.", next: a2_8g },
    { text: "What held you back?", next: a2_8h },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const a2_6b = {
  text: "How did you overcome them? Coming out meant confronting everything I was taught about being a woman.",
  speaker: "A.",
  choices: [
    { text: "What did you confront?", next: a2_7c },
    { text: "How are you now?", next: a2_7d },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const a2_5a = {
  text: "What held you back? Religion and family shaped a lot of my journey. Not always in good ways.",
  speaker: "A.",
  choices: [
    { text: "Tell me about the obstacles.", next: a2_6a },
    { text: "How did you overcome them?", next: a2_6b },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const a2_4a = {
  text: "How did you navigate that? There were a lot of things that held me back from embracing butchness.",
  speaker: "A.",
  choices: [
    { text: "What held you back?", next: a2_5a },
    { text: "Walk me through it.", next: a2_5a },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const a2_3a = {
  text: "What were the expectations? My family had a lot of expectations for me.",
  speaker: "A.",
  choices: [
    { text: "Tell me about that.", next: a2_4a },
    { text: "How did you navigate that?", next: a2_4a },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const a2_2a = {
  text: "Were there things that held you back from embracing butchness? My family had a lot of expectations for me. It took time to let go of that.",
  speaker: "A.",
  choices: [
    { text: "Tell me about those expectations.", next: a2_3a },
    { text: "How did you navigate that?", next: a2_3a },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

// Branch 1: Objects and aesthetics - boots, clothing, physical presentation
const a1_9a = {
  text: "What about your dad's work clothes? Those clothes carry his history, and when I wear them, I'm carrying that history forward. It's about claiming a masculine lineage that wasn't explicitly offered to me but feels right anyway.",
  speaker: "A.",
  choices: [
    { text: "What about your family's reaction?", next: a2_7a },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const a1_9b = {
  text: "What's wrong with frilly things? Sturdy clothing has purpose—it's meant to last. That refusal to be disposable resonates with how I want to move through the world.",
  speaker: "A.",
  choices: [
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const a1_8a = {
  text: "Why those specific things? They're all intentional choices that communicate who I am before I even speak. That silhouette is how I claim space in the world.",
  speaker: "A.",
  choices: [
    { text: "Tell me about your dad's work clothes.", next: a1_9a },
    { text: "What's wrong with frilly things?", next: a1_9b },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const a1_9c = {
  text: "You felt ashamed of masculinity? For years, I tried to make myself smaller. It took a long time to realize that my size, my strength, my physical presence—all of that was actually a gift, not a flaw.",
  speaker: "A.",
  choices: [
    { text: "What changed your perspective?", next: a3_8a },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const a1_9d = {
  text: "What was performing femininity like? Femininity always felt like something I was copying rather than something that came naturally. That dissonance between the performance and the reality was exhausting.",
  speaker: "A.",
  choices: [
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const a1_8b = {
  text: "Have they always been connected to your identity? Since coming out, yeah. Those choices became intentional. Before that, I spent a long time trying to perform femininity because I thought that was the only acceptable way to be a woman.",
  speaker: "A.",
  choices: [
    { text: "You felt ashamed of masculinity?", next: a1_9c },
    { text: "What was performing femininity like?", next: a1_9d },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const a1_7a = {
  text: "What objects and aesthetics? Definitely my rings, my jean jacket, and my boots. I love wearing big boots. Vintage t-shirts too. Getting my hair cut at the barber feels really important to me as well.",
  speaker: "A.",
  choices: [
    { text: "Why those specific things?", next: a1_8a },
    { text: "Have they always been connected to your identity?", next: a1_8b },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const a1_9e = {
  text: "What about the barber? It was a way of saying 'this space is mine too, this masculinity is mine too.' That visibility, while sometimes scary, was also liberating.",
  speaker: "A.",
  choices: [
    { text: "Tell me more about visibility.", next: a3_8g },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const a1_9f = {
  text: "What do the boots do for you? That sound announces me—I'm here, I'm taking up space, I'm not apologizing for my presence. The boots are armor, but they're also just... me.",
  speaker: "A.",
  choices: [
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const a1_8c = {
  text: "What are your hobbies? I'm really into making zines, film photography, and honestly a lot of the stereotypical 'gay Brooklyn hobbies.' But all of it ties back to this aesthetic I'm building.",
  speaker: "A.",
  choices: [
    { text: "Tell me more about the barber.", next: a1_9e },
    { text: "What do the boots do for you?", next: a1_9f },
    { text: "What does Brooklyn mean to you?", next: a3_8b },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const a1_9g = {
  text: "How did you let go of performing femininity? I realized I could just present the way I naturally wanted to. That's what drew me toward butchness. Eventually I let go of trying to echo femininity all the time.",
  speaker: "A.",
  choices: [
    { text: "What were you letting go of?", next: a2_8b },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const a1_9h = {
  text: "What's the historical aspect? There's also a historical and relational aspect to it that resonates with me. I participate in butch/femme dynamics, and when I look back, I realize I probably would have gravitated toward those dynamics whether or not I had language for them.",
  speaker: "A.",
  choices: [
    { text: "When did you realize this?", next: a3_9b },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const a1_8d = {
  text: "What about your work? I work in children's education as a designer. Beyond that, I'm also an artist. I really enjoy being in lesbian spaces and around other butches.",
  speaker: "A.",
  choices: [
    { text: "How did you let go of performing femininity?", next: a1_9g },
    { text: "What's the historical aspect?", next: a1_9h },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const a1_7b = {
  text: "Who are you? I'd describe myself as a butch lesbian. Beyond the aesthetics, there's something about being butch that feels like home.",
  speaker: "A.",
  choices: [
    { text: "What are your hobbies?", next: a1_8c },
    { text: "Tell me about your work.", next: a1_8d },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const a1_6a = {
  text: "What are they? My name is A. I use she/her pronouns. There are objects and aesthetics that feel really tied to who I am.",
  speaker: "A.",
  choices: [
    { text: "What objects and aesthetics?", next: a1_7a },
    { text: "Tell me about yourself.", next: a1_7b },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const a1_9i = {
  text: "What does visibility mean to you? That visibility means I'm not hiding—I'm claiming space as exactly who I am. It's scary sometimes, but it's also where I find my strength.",
  speaker: "A.",
  choices: [
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const a1_9j = {
  text: "And there's strength in that? But there's also strength in not hiding from that. There's strength in walking through the world visibly queer and refusing to shrink yourself around other people's reactions.",
  speaker: "A.",
  choices: [
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const a1_8e = {
  text: "How has location shaped you? That's part of how identity gets formed—outward perception reflecting inward truth and vice versa.",
  speaker: "A.",
  choices: [
    { text: "What does visibility mean to you?", next: a1_9i },
    { text: "And there's strength in that?", next: a1_9j },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const a1_9k = {
  text: "Do you present differently depending on where you are? My presentation stays consistent. I don't really want to change it.",
  speaker: "A.",
  choices: [
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const a1_9l = {
  text: "How does outward perception affect you? There's this feedback loop between how I feel inside and how the world responds to me.",
  speaker: "A.",
  choices: [
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const a1_8f = {
  text: "Where are you from? I'm originally from Oregon, but I wasn't really out there. I came into myself in Brooklyn.",
  speaker: "A.",
  choices: [
    { text: "Do you present differently depending on where you are?", next: a1_9k },
    { text: "How does outward perception affect you?", next: a1_9l },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const a1_7c = {
  text: "How did Brooklyn influence you? Living in Brooklyn exposed me to so many different ways of being butch. At first that was overwhelming.",
  speaker: "A.",
  choices: [
    { text: "How has location shaped you?", next: a1_8e },
    { text: "Where are you from?", next: a1_8f },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const a1_9m = {
  text: "What did Brooklyn teach you? I started meeting other butches who cried openly, who talked about their feelings, who were tender. That taught me I didn't have to choose—I could be strong and soft at the same time.",
  speaker: "A.",
  choices: [
    { text: "How did your family react?", next: a2_8h },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const a1_9n = {
  text: "What more about the rings? When I wear them, I'm carrying her forward. I'm claiming that lineage of strong women, even as I embody that strength in a way she probably never imagined.",
  speaker: "A.",
  choices: [
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const a1_8g = {
  text: "What about the rings you mentioned? The rings I wear belonged to my great-grandmother. I wear them to honor her memory, but also because they feel connected to this lineage of strength and masculinity in my family, even if those family members weren't queer themselves.",
  speaker: "A.",
  choices: [
    { text: "What did Brooklyn teach you?", next: a1_9m },
    { text: "Tell me more about the rings.", next: a1_9n },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const a1_9o = {
  text: "What does being butch mean to you? Being butch and being a lesbian feels deeply meaningful to me. It feels almost ceremonial, like inheriting a history and responsibility.",
  speaker: "A.",
  choices: [
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const a1_9p = {
  text: "How do you think about visibility? Maybe my visibility gives someone else permission to be themselves. That possibility—that my existence might make life easier for someone else—that's what keeps me from hiding.",
  speaker: "A.",
  choices: [
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const a1_8h = {
  text: "What about your great-grandmother? One of the rings almost looks like a man's ring. It was actually a matching set with her husband's ring, except hers wasn't made dainty or feminized—it was just scaled to fit her hand.",
  speaker: "A.",
  choices: [
    { text: "What does being butch mean to you?", next: a1_9o },
    { text: "How do you think about visibility?", next: a1_9p },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const a1_7d = {
  text: "What does 'butch' mean to you? That's a big question.",
  speaker: "A.",
  choices: [
    { text: "Start with the rings you mentioned.", next: a1_8g },
    { text: "What about your great-grandmother?", next: a1_8h },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const a1_6b = {
  text: "What else should I know? There are a lot of layers to this. Aesthetics, history, community—it all connects.",
  speaker: "A.",
  choices: [
    { text: "Tell me about Brooklyn's influence.", next: a1_7c },
    { text: "What does 'butch' mean to you?", next: a1_7d },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const a1_5a = {
  text: "Are there objects or aesthetics that feel tied to my identity? Absolutely.",
  speaker: "A.",
  choices: [
    { text: "Walk me through them.", next: a1_6a },
    { text: "What else should I know?", next: a1_6b },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const a1_4a = {
  text: "Where should we start? I guess I should start by introducing myself properly.",
  speaker: "A.",
  choices: [
    { text: "Yes, please.", next: a1_5a },
    { text: "Tell me everything.", next: a1_5a },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const a1_3a = {
  text: "What creates that silhouette? Things like my boots, my rings, my jean jacket—they all create the silhouette I want people to see.",
  speaker: "A.",
  choices: [
    { text: "Tell me more about that.", next: a1_4a },
    { text: "What's most important?", next: a1_4a },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const a1_2a = {
  text: "What about these spiritually important boots? Objects and aesthetics that feel tied to my identity.",
  speaker: "A.",
  choices: [
    { text: "I want to hear about that.", next: a1_3a },
    { text: "Start from the beginning.", next: a1_3a },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

export const amberDialogue = {
  text: "My name is A. I use she/her pronouns. I'd describe myself as a butch lesbian. I really enjoy being in lesbian spaces and around other butches. Beyond that, I'm also an artist and designer. I work in children's education as a designer, and I'm really into making zines, film photography, and honestly a lot of the stereotypical 'gay Brooklyn hobbies.'",
  speaker: "A.",
  choices: [
    { text: "Tell me about these spiritually important boots.", next: a1_2a },
    { text: "Were there things that held you back from embracing butchness?", next: a2_2a },
    { text: "How did that evolve into embracing butchness?", next: a3_2a },
    { text: getRandomExitLine(), next: exitNode }
  ]
};
