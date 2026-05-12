import { getRandomExitLine, getRandomRestartLine, createExitNode, createRestartMarker } from './dialogueHelpers';

const exitNode = createExitNode();
const restartMarker = createRestartMarker();

// Branch 1: Identity fluidity (Root → 2 → 3 → 4 → 5 → 6 → 7 → 8 → 9)

// Level 9 - Terminal nodes (only exit + restart)
const s1_9a = {
  text: "The fact that I rejected what I was told to be and chose something else entirely—that act of rejection and recreation feels central right now. Tomorrow it might be different, but today, that's the piece I'm holding onto.",
  speaker: "S.",
  choices: [
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const s1_9b = {
  text: "When someone looks at me and can't immediately decide what I am—that's when I feel most myself. The non-binary part isn't about being between two things—it's about rejecting the premise of the binary altogether.",
  speaker: "S.",
  choices: [
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

// Level 8 - 2 questions + exit + restart
const s1_8a = {
  text: "Some days I feel more connected to one part than the others. The order of butch, non-binary, trans literally changes in my head depending on what I'm experiencing.",
  speaker: "S.",
  choices: [
    { text: "What's pulling at you today?", next: s1_9a },
    { text: "Which one feels loudest right now?", next: s1_9b },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const s1_9c = {
  text: "They all fit because none of them fully capture me. The fluidity of the pronouns mirrors the fluidity of everything else.",
  speaker: "S.",
  choices: [
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const s1_9d = {
  text: "They're just different lenses on the same person—me. Butch captures something, non-binary captures something else, trans captures yet another thing—all true, all necessary.",
  speaker: "S.",
  choices: [
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const s1_8b = {
  text: "I feel strongly connected to all three of those identities—butch, non-binary, trans. None of them are more true than the others.",
  speaker: "S.",
  choices: [
    { text: "Do your pronouns shift too?", next: s1_9c },
    { text: "So they're all equally you?", next: s1_9d },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

// Level 7
const s1_7a = {
  text: "Some mornings I wake up and butch feels like the most important word. The shifting itself is part of my experience.",
  speaker: "S.",
  choices: [
    { text: "Does it shift a lot?", next: s1_8a },
    { text: "But they're all important?", next: s1_8b },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const s1_9e = {
  text: "It means I'm succeeding at being unreadable, at existing outside the categories people expect. When someone assumes I'm a trans man and then finds out I use any pronouns and identify as non-binary, it forces them to sit with complexity instead of rushing to categorize.",
  speaker: "S.",
  choices: [
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const s1_9f = {
  text: "When someone looks at me and has to pause, can't immediately slot me into man or woman—that's when I feel most seen. Paradoxically, being unreadable is when I feel most visible.",
  speaker: "S.",
  choices: [
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const s1_8c = {
  text: "Perception and identity aren't separate—they're in constant conversation. How I see myself shapes how others see me, and how others see me shapes how I see myself.",
  speaker: "S.",
  choices: [
    { text: "How do people usually read you?", next: s1_9e },
    { text: "Do you like being confusing?", next: s1_9f },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const s1_9g = {
  text: "If I'm walking alone at night or in a space I don't know, passing as male can be protective. It's not about hiding—it's about choosing when and where to be legible, and when to embrace illegibility.",
  speaker: "S.",
  choices: [
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const s1_9h = {
  text: "When I disrupt that process, when I make categorization impossible, it creates this moment of uncertainty. And I love that moment—it's a tiny disruption in the binary system.",
  speaker: "S.",
  choices: [
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const s1_8d = {
  text: "Context matters a lot—it's that I'm emphasizing different aspects of myself based on what feels safe. In queer spaces I can lean into ambiguity, in other spaces I might present more masculinely for safety.",
  speaker: "S.",
  choices: [
    { text: "How does it change?", next: s1_9g },
    { text: "What's your goal with presentation?", next: s1_9h },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const s1_7b = {
  text: "How I'm perceived validates or challenges how I see myself, and that feedback matters. The relationship between how I see myself and how others see me is always in negotiation.",
  speaker: "S.",
  choices: [
    { text: "How much does perception matter?", next: s1_8c },
    { text: "Does your presentation shift by context?", next: s1_8d },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

// Level 6
const s1_6a = {
  text: "I think it's the fluidity itself that feels strongest. The fact that I don't have to pick one—that I can hold all three at once.",
  speaker: "S.",
  choices: [
    { text: "Tell me more about that shifting.", next: s1_7a },
    { text: "Does perception play into this?", next: s1_7b },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const s1_9i = {
  text: "When I see someone else with a carabiner, there's this instant recognition—we're part of the same tribe. My tattoos are permanent marks I've chosen for my body, ways of claiming my skin and making it mine.",
  speaker: "S.",
  choices: [
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const s1_9j = {
  text: "These signals create connection and build community. When I'm in a straight space and I spot someone else with queer signifiers, there's this moment of recognition and relief—I'm not the only one here.",
  speaker: "S.",
  choices: [
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const s1_8e = {
  text: "There are definitely aesthetics and objects that feel connected to my identity. They're like little signals I send out into the world. Markers that say something about who I am without me having to say it out loud. It's intentional—the way I dress, what I carry, what I wear. All of it is communication. All of it is part of how I navigate being butch, being non-binary, being trans. These objects aren't just accessories. They're armor, they're signals, they're identity markers.",
  speaker: "S.",
  choices: [
    { text: "What's the main object?", next: s1_9i },
    { text: "What kind of signals?", next: s1_9j },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const s1_9k = {
  text: "I also feel really affirmed by 'greaser' aesthetics: leather jackets, masculine styling, that kind of vibe. There's something about it that just makes me happy. It's nostalgic in a way—these aesthetics from the '50s and '60s, this kind of rebellious masculinity. But it's also present. It's claiming a version of masculinity that feels right to me. Leather jackets, boots, that whole aesthetic—it's protective, it's cool, it's queer in its own way. Even though it wasn't originally queer, we've claimed it. Made it ours.",
  speaker: "S.",
  choices: [
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const s1_9l = {
  text: "I'm mostly attracted to and drawn toward other masculine or butch people, so many of the people in my life are queer and non-binary in some way. My community shapes what I'm drawn to aesthetically. It's this feedback loop—I'm drawn to certain aesthetics, which connects me to certain people, which reinforces those aesthetics. The people I love, the people I'm attracted to, the people I build community with—they all influence how I present. And how I present influences who I find. It's all interconnected.",
  speaker: "S.",
  choices: [
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const s1_8f = {
  text: "Definitely. Aesthetics are a big part of how I express these identities. Like, the way I dress and present isn't separate from being butch, non-binary, and trans—it's how I embody those things. My clothes, my hair, my style—all of it is saying something about who I am. It's not superficial. It's essential. Aesthetics are the external expression of internal identity. They're how I make the invisible visible. How I translate what's inside into something the world can see.",
  speaker: "S.",
  choices: [
    { text: "What aesthetics feel right?", next: s1_9k },
    { text: "Does community influence that?", next: s1_9l },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const s1_7c = {
  text: "Yeah, objects and aesthetics definitely tie into this. The way I look is part of how I navigate these identities.",
  speaker: "S.",
  choices: [
    { text: "What objects matter to you?", next: s1_8e },
    { text: "Does aesthetic matter?", next: s1_8f },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const s1_9m = {
  text: "I think New York feels comparatively safer and more community-oriented for queer people. There are more spaces, more events, and more opportunities to connect with others. The sheer number of queer and trans people here means you're not alone. You can find your people. And the political climate, while not perfect, is more accepting than a lot of other places. There's infrastructure here—queer bars, trans healthcare, community centers. That infrastructure makes a huge difference. It makes life possible in a way it isn't everywhere.",
  speaker: "S.",
  choices: [
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const s1_9n = {
  text: "New York has made queerness more visible and accessible for me. There's a large queer and trans community here, and there are so many events and opportunities to meet people. That's shaped my identity a lot. Before moving here, I didn't know this many trans people, this many butches, this many people navigating similar questions about gender and identity. Being surrounded by that community has given me language for things I didn't have words for. It's shown me possibilities I didn't know existed. New York didn't make me trans or butch or non-binary, but it gave me space to become those things more fully.",
  speaker: "S.",
  choices: [
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const s1_8g = {
  text: "Living in New York has definitely shaped my identity. The city creates space for these kinds of fluid, complex identities in ways smaller places don't. There's room to experiment here. Room to be weird, to be undefined, to be in process. And there's community—so much community. People who've been where I am, people who are figuring things out alongside me, people who've already figured some things out and can offer guidance. That's invaluable. Location matters. The city you're in shapes what's possible for you.",
  speaker: "S.",
  choices: [
    { text: "How has the climate affected you?", next: s1_9m },
    { text: "What has New York given you?", next: s1_9n },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const s1_9o = {
  text: "I think masculinity for me means something protective and community-oriented—showing up for people, helping create safety, and engaging with masculinity in a healthier and more intentional way. It's about using whatever power or privilege my masculine presentation gives me to protect others. To make spaces safer. To challenge harmful masculinity. It's masculinity as care rather than dominance. Masculinity as responsibility. I'm not trying to replicate toxic masculinity. I'm trying to build something better.",
  speaker: "S.",
  choices: [
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const s1_9p = {
  text: "I'm still figuring that out. But increasingly, it's less about traditional masculinity and more about care and intentionality. It's about being masculine in a way that's protective rather than dominating. Asking myself—what does it mean to be masculine without being harmful? How can I embody masculinity in a way that creates safety rather than danger? These aren't settled questions. They're ongoing. But that's the work—interrogating what masculinity means, choosing which parts to keep and which to reject, building something new.",
  speaker: "S.",
  choices: [
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const s1_8h = {
  text: "That's a big question. What masculinity means to me is something I'm actively working on. It's not something I've inherited uncritically. I'm building it intentionally. Choosing what masculinity looks like for me—what it means, what it does, how it shows up. Traditional masculinity is often about power, dominance, control. But that's not what I want. I'm trying to figure out what masculinity can be when it's divorced from those things. When it's about care instead of control.",
  speaker: "S.",
  choices: [
    { text: "What does it mean so far?", next: s1_9o },
    { text: "How are you figuring it out?", next: s1_9p },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const s1_7d = {
  text: "Location and what masculinity means—those are both parts of how I understand butchness right now.",
  speaker: "S.",
  choices: [
    { text: "How has living in New York shaped you?", next: s1_8g },
    { text: "What does masculinity mean to you?", next: s1_8h },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const s1_6b = {
  text: "It shifts, yeah. But it's not random. It's responsive to what I'm experiencing, where I am, who I'm with.",
  speaker: "S.",
  choices: [
    { text: "Tell me about aesthetics and objects.", next: s1_7c },
    { text: "What about location and masculinity?", next: s1_7d },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

// Level 5
const s1_5a = {
  text: "What feels strongest today? That's hard because they're all present at the same time, just in different proportions.",
  speaker: "S.",
  choices: [
    { text: "What's feeling most important right now?", next: s1_6a },
    { text: "So it's always shifting?", next: s1_6b },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const s1_6c = {
  text: "Yeah. Butch, non-binary, trans—I use all those words because each one captures something the others don't. They're all necessary.",
  speaker: "S.",
  choices: [
    { text: "Does the order matter?", next: s1_7a },
    { text: "How do you navigate that?", next: s1_7b },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const s1_6d = {
  text: "The fluidity is part of who I am. It's not confusion—it's complexity. They're all true at once, just emphasized differently depending on the day.",
  speaker: "S.",
  choices: [
    { text: "Tell me about objects and aesthetics.", next: s1_7c },
    { text: "What about perception?", next: s1_7d },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const s1_5b = {
  text: "I consider myself butch, non-binary, trans. None of that order—meaning the order doesn't actually matter. I strongly identify with all of those.",
  speaker: "S.",
  choices: [
    { text: "Why all three?", next: s1_6c },
    { text: "How does that fluidity work?", next: s1_6d },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

// Level 4
const s1_4a = {
  text: "Yeah, shifting depending on the day is real. It's not that I'm confused—it's that the emphasis changes. They're all true at once.",
  speaker: "S.",
  choices: [
    { text: "Walk me through that.", next: s1_5a },
    { text: "Tell me about those identities.", next: s1_5b },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const s1_5c = {
  text: "It's like... some days I wake up and being trans is what I'm thinking about most. Other days it's the non-binary part, or the butch part. But they're all always there.",
  speaker: "S.",
  choices: [
    { text: "So you hold all three at once?", next: s1_6c },
    { text: "What determines which one's loudest?", next: s1_6d },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const s1_5d = {
  text: "I use any pronouns. All of them work for me. The pronouns shifting is part of the same fluidity as the identity labels.",
  speaker: "S.",
  choices: [
    { text: "Does that feel freeing?", next: s1_6a },
    { text: "Tell me more about the fluidity.", next: s1_6b },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const s1_4b = {
  text: "The shifting is real. Butch, non-binary, trans—all three matter, but which one feels most present changes.",
  speaker: "S.",
  choices: [
    { text: "What's that like day to day?", next: s1_5c },
    { text: "Do your pronouns shift too?", next: s1_5d },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

// Level 3
const s1_3a = {
  text: "I consider myself butch, non-binary, trans. None of that order. It doesn't really matter what order I say them in—I strongly identify with all of those.",
  speaker: "S.",
  choices: [
    { text: "But it shifts day to day?", next: s1_4a },
    { text: "Tell me more about that.", next: s1_4b },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const s1_4c = {
  text: "The identities themselves don't change, but which one feels most relevant or important shifts based on context, mood, who I'm with.",
  speaker: "S.",
  choices: [
    { text: "Give me an example.", next: s1_5a },
    { text: "How do you experience that?", next: s1_5b },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const s1_4d = {
  text: "Yeah. I'm 30 years old, and I've spent a lot of time figuring out how to hold all these identities at once without forcing them into a hierarchy.",
  speaker: "S.",
  choices: [
    { text: "How did you learn to do that?", next: s1_5c },
    { text: "What does that look like?", next: s1_5d },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const s1_3b = {
  text: "The shifting is a feature, not a bug. It's how I experience my gender and identity—as something fluid rather than fixed.",
  speaker: "S.",
  choices: [
    { text: "Tell me about that fluidity.", next: s1_4c },
    { text: "You've thought about this a lot.", next: s1_4d },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

// Level 2
const s1_2a = {
  text: "Yeah, shifting depending on the day is real. It's hard to say which one feels strongest at any given moment because they're all present at the same time, just in different proportions.",
  speaker: "S.",
  choices: [
    { text: "Yeah, what does that mean?", next: s1_3a },
    { text: "Tell me about that shifting.", next: s1_3b },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

// Branch 2: Journey from transfemme to butch (Root → 2 → 3 → 4 → 5 → 6 → 7 → 8 → 9)

// Level 9 - Terminal nodes
const s2_9a = {
  text: "When I first came out as transfemme, I felt a pressure to be feminine in a way that never actually connected with me. I spent a long time trying to figure out why it felt wrong. People kept telling me that if I was trans, I should want to be feminine. That femininity was the point. But it never resonated. I kept trying to make myself fit that mold—wearing dresses, doing makeup, performing femininity—and it all felt hollow. Like I was wearing a costume that didn't fit. Eventually I had to ask myself: am I doing this because it feels right, or because I think I'm supposed to?",
  speaker: "S.",
  choices: [
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const s2_9b = {
  text: "Eventually, through therapy and through meeting other trans people, I realized I didn't really relate to a lot of traditional femininity. At the same time, I felt really drawn toward masculinity and toward other butches. Meeting other butches was huge. Seeing people who were assigned female at birth but were masculine, who were queer, who existed outside the gender binary—that opened up possibilities I didn't know existed. I started to realize that being trans didn't have to mean moving from one side of the binary to the other. It could mean something else entirely.",
  speaker: "S.",
  choices: [
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

// Level 8
const s2_8a = {
  text: "It was a long process. There was a lot of unpacking to do—like, why did I think I had to be feminine just because I was transfemme? Where did that expectation come from? Was it internal or external? Was it something I actually wanted or something I felt I had to do? Those questions took time to work through. A lot of time. I had to examine my own assumptions, my own internalized ideas about what being trans meant. And that examination was hard but necessary.",
  speaker: "S.",
  choices: [
    { text: "What was that pressure like?", next: s2_9a },
    { text: "What helped you realize?", next: s2_9b },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const s2_9c = {
  text: "Definitely. I struggled with not seeing much representation for people like me—especially trans masculine butches or very masculine butches who weren't strictly binary. It took time to understand where I fit. I kept looking for examples, for people who were like me, and I couldn't find them. Or when I did find them, they were rare, scattered, hard to access. That lack of representation made me feel like maybe I was the only one. Like maybe this wasn't a real thing I could be. But it is real. I just had to figure it out without a roadmap.",
  speaker: "S.",
  choices: [
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const s2_9d = {
  text: "I had to figure out what being butch meant for me personally. There wasn't really a template for it. I was making it up as I went along. And that was both freeing and terrifying. Freeing because I got to define it for myself, on my own terms. Terrifying because I had no guidance, no examples to follow. I was just...figuring it out. Trial and error. Seeing what felt right and what didn't. Building my own version of butchness from scratch.",
  speaker: "S.",
  choices: [
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const s2_8b = {
  text: "There were definitely things that made it difficult to identify as butch at first. Mainly lack of representation. I didn't see people like me—trans women who were masculine, who were butch, who weren't following the standard narrative. That lack of examples made it hard to imagine that this was even possible. Like, if I couldn't see it, how could I be it? So I had to create my own model. Build it from scratch. And that was harder than following an existing template would have been.",
  speaker: "S.",
  choices: [
    { text: "What representation were you missing?", next: s2_9c },
    { text: "How did you navigate that?", next: s2_9d },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

// Level 7
const s2_7a = {
  text: "What first drew me toward identifying as butch? It wasn't immediate. It was more like... I kept being drawn toward masculinity even though I was told that as a trans woman, I should want femininity.",
  speaker: "S.",
  choices: [
    { text: "How did you work through that?", next: s2_8a },
    { text: "What made it difficult at first?", next: s2_8b },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const s2_9e = {
  text: "I grew up Orthodox Jewish, where there was very little queer representation. I didn't really know any openly queer people growing up. Zero. The community was very insular, very traditional. Queerness wasn't talked about. It wasn't acknowledged. It definitely wasn't accepted. So I had no models, no examples, no language for what I was feeling. I was completely isolated in that. And that isolation shaped my early understanding—or lack of understanding—of my own queerness.",
  speaker: "S.",
  choices: [
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const s2_9f = {
  text: "As I became less religious in my early twenties, I also started meeting more queer people. Those journeys happened alongside each other—the less religious I became, the more queer community I found. Leaving the Orthodox community opened up space for queerness. And finding queer community made leaving religion easier. They reinforced each other. I couldn't have one without the other. Leaving religion was leaving the closet. Finding queerness was finding freedom. They were the same journey.",
  speaker: "S.",
  choices: [
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const s2_8c = {
  text: "My journey with queerness and gender is really tied to my religious background. They're inseparable for me.",
  speaker: "S.",
  choices: [
    { text: "What was your background?", next: s2_9e },
    { text: "How did those journeys connect?", next: s2_9f },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const s2_9g = {
  text: "Even now, I still sometimes question things. I've had moments where I wondered whether identifying with masculinity was internalized transphobia or something else. Like, am I just afraid of femininity? Did I reject femininity because society told me trans women have to be hyperfeminine and I was resisting that? Or is this actually who I am? Those questions come up. And I sit with them. I don't push them away. Questioning doesn't mean I'm doing it wrong. It means I'm being honest with myself.",
  speaker: "S.",
  choices: [
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const s2_9h = {
  text: "I don't think it is internalized transphobia, but those questions still come up occasionally. I think questioning is part of the journey. I'm not trying to arrive at some final answer. Gender isn't something I'm going to solve once and for all. It's ongoing. It's a conversation I'm having with myself that never really ends. And that's okay. I don't need certainty. I just need honesty. As long as I'm being truthful about what feels right in this moment, that's enough.",
  speaker: "S.",
  choices: [
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const s2_8d = {
  text: "Yes. My ideas about butchness have definitely changed over time. I'm still evolving.",
  speaker: "S.",
  choices: [
    { text: "What do you question?", next: s2_9g },
    { text: "How has your understanding changed?", next: s2_9h },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const s2_7b = {
  text: "My overall journey with queerness and gender? It's been intertwined with leaving religion, finding community, and unlearning a lot of narratives about what being trans means.",
  speaker: "S.",
  choices: [
    { text: "Tell me about the religious piece.", next: s2_8c },
    { text: "Do your ideas about butchness still change?", next: s2_8d },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

// Level 6
const s2_6a = {
  text: "Figuring out that butch fit me as a trans person was a journey. I had to unlearn the idea that trans women have to be feminine.",
  speaker: "S.",
  choices: [
    { text: "What drew you toward butch?", next: s2_7a },
    { text: "What was your overall journey like?", next: s2_7b },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const s2_9i = {
  text: "Therapy was huge for me. It helped me realize I didn't actually relate to a lot of traditional femininity, even though I felt pressure to perform it. I kept saying 'I should want this' instead of 'I want this.' And my therapist kept pushing back on that 'should.' Asking me—what do you actually want? Not what you think you should want, but what feels right to you? That questioning was transformative. It helped me separate expectation from desire. Obligation from authenticity. And once I made that separation, everything became clearer.",
  speaker: "S.",
  choices: [
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const s2_9j = {
  text: "Meeting other trans people was also crucial. I needed to see that there were different ways to be trans, different ways to be butch. That it wasn't all one narrative. Meeting trans people who were masculine, who didn't fit the standard trans woman narrative, who were doing their own thing—that opened up possibilities for me. It showed me I wasn't alone. That there were other people navigating the same questions. And that gave me permission to explore, to experiment, to figure out what felt right for me.",
  speaker: "S.",
  choices: [
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const s2_8e = {
  text: "There were specific things that helped me understand myself better. Therapy and community were the big ones.",
  speaker: "S.",
  choices: [
    { text: "What role did therapy play?", next: s2_9i },
    { text: "What about community?", next: s2_9j },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const s2_9k = {
  text: "There wasn't much representation for trans masculine butches or very masculine butches who weren't strictly binary. I felt like I was making it up as I went along. Like, where's the roadmap for this?",
  speaker: "S.",
  choices: [
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const s2_9l = {
  text: "It took time to understand where I fit and what being butch meant for me personally. I had to define it for myself because there wasn't a clear model out there.",
  speaker: "S.",
  choices: [
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const s2_8f = {
  text: "The lack of representation was real. I didn't see many people like me—trans and masculine and not trying to be a man.",
  speaker: "S.",
  choices: [
    { text: "What representation were you missing?", next: s2_9k },
    { text: "How did you figure it out without models?", next: s2_9l },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const s2_7c = {
  text: "When I first came out as transfemme, things didn't quite fit. I kept trying to make them fit, but it never felt right.",
  speaker: "S.",
  choices: [
    { text: "What helped you figure things out?", next: s2_8e },
    { text: "What made it so difficult?", next: s2_8f },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const s2_9m = {
  text: "I grew up Orthodox Jewish. There was very little queer representation in that community, and I didn't know any openly queer people growing up. It was isolating.",
  speaker: "S.",
  choices: [
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const s2_9n = {
  text: "Becoming less religious and finding queer community happened at the same time for me. They were the same journey in a lot of ways. Like, I couldn't have one without the other.",
  speaker: "S.",
  choices: [
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const s2_8g = {
  text: "My religious upbringing shaped my gender journey in ways I'm still unpacking. There's a lot of internalized stuff there.",
  speaker: "S.",
  choices: [
    { text: "What was your upbringing like?", next: s2_9m },
    { text: "How did leaving religion connect to finding queerness?", next: s2_9n },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const s2_9o = {
  text: "I still sometimes wonder whether identifying with masculinity is internalized transphobia. I don't think it is, but the question comes up. Am I just afraid of being seen as feminine?",
  speaker: "S.",
  choices: [
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const s2_9p = {
  text: "My ideas about butchness keep evolving. I think that's healthy. I'm not trying to arrive at some final, fixed understanding. It's a living thing.",
  speaker: "S.",
  choices: [
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const s2_8h = {
  text: "Even now, I'm still questioning and evolving. I don't think that ever really stops.",
  speaker: "S.",
  choices: [
    { text: "What do you question?", next: s2_9o },
    { text: "How has your understanding changed?", next: s2_9p },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const s2_7d = {
  text: "My journey with queerness and gender is ongoing. Religion, representation, self-understanding—I'm still figuring things out.",
  speaker: "S.",
  choices: [
    { text: "Tell me about your background.", next: s2_8g },
    { text: "What are you still figuring out?", next: s2_8h },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const s2_6b = {
  text: "The journey to butchness wasn't straightforward for me at all. There were a lot of obstacles and questions.",
  speaker: "S.",
  choices: [
    { text: "What was it like at first?", next: s2_7c },
    { text: "Tell me about your journey overall.", next: s2_7d },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

// Level 5
const s2_5a = {
  text: "How did I figure out butch fit me as a trans person? It took a long time. I had to unlearn a lot of expectations.",
  speaker: "S.",
  choices: [
    { text: "Start at the beginning.", next: s2_6a },
    { text: "What obstacles did you face?", next: s2_6b },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const s2_6c = {
  text: "I came out as transfemme initially, but the feminine expectations never sat right. I kept trying to force it.",
  speaker: "S.",
  choices: [
    { text: "What were those expectations?", next: s2_7a },
    { text: "When did that change?", next: s2_7b },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const s2_6d = {
  text: "Therapy helped a lot. So did meeting other trans people who weren't following the standard narrative.",
  speaker: "S.",
  choices: [
    { text: "Tell me about therapy.", next: s2_7c },
    { text: "What about meeting others?", next: s2_7d },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const s2_5b = {
  text: "The process of figuring out butch identity as a trans person involved a lot of unlearning and relearning.",
  speaker: "S.",
  choices: [
    { text: "What did you unlearn?", next: s2_6c },
    { text: "What helped you?", next: s2_6d },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

// Level 4
const s2_4a = {
  text: "Figuring out butch as a trans person has been complicated. I came out as transfemme first, but that never quite fit.",
  speaker: "S.",
  choices: [
    { text: "Tell me about that journey.", next: s2_5a },
    { text: "What was complicated about it?", next: s2_5b },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const s2_5c = {
  text: "When I first came out, there was pressure to be feminine. I spent maybe a year and a half in therapy trying to figure out why that felt so wrong.",
  speaker: "S.",
  choices: [
    { text: "What did therapy reveal?", next: s2_6a },
    { text: "What was the pressure like?", next: s2_6b },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const s2_5d = {
  text: "The lack of representation was huge. I didn't see trans masculine butches anywhere. I was figuring it out alone.",
  speaker: "S.",
  choices: [
    { text: "How did that feel?", next: s2_6c },
    { text: "How did you navigate that?", next: s2_6d },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const s2_4b = {
  text: "It was a long process. There were obstacles—internal and external—that I had to work through.",
  speaker: "S.",
  choices: [
    { text: "What were the internal obstacles?", next: s2_5c },
    { text: "What about external?", next: s2_5d },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

// Level 3
const s2_3a = {
  text: "Figuring out that butch fit me as a trans person—yeah, that's a big part of my story. It took a long time and a lot of unpacking expectations I'd internalized about what being trans was supposed to mean.",
  speaker: "S.",
  choices: [
    { text: "Yeah, tell me.", next: s2_4a },
    { text: "Walk me through it.", next: s2_4b },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const s2_4c = {
  text: "I had to unlearn this idea that being trans meant moving toward femininity. That's not everyone's path.",
  speaker: "S.",
  choices: [
    { text: "What was your path?", next: s2_5a },
    { text: "What did you unlearn?", next: s2_5b },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const s2_4d = {
  text: "My religious background played into it. Growing up Orthodox Jewish, I didn't have any models for this.",
  speaker: "S.",
  choices: [
    { text: "Tell me about that background.", next: s2_5c },
    { text: "How did you find your way?", next: s2_5d },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const s2_3b = {
  text: "It's been a journey of figuring out what trans means for me, not what I was told it should mean.",
  speaker: "S.",
  choices: [
    { text: "What were you told?", next: s2_4c },
    { text: "What shaped your understanding?", next: s2_4d },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

// Level 2
const s2_2a = {
  text: "Figuring out butch fit me as a trans person was complicated. I came out as transfemme first, but that never quite sat right. There was a lot of unlearning I had to do about what being trans meant.",
  speaker: "S.",
  choices: [
    { text: "I'm really curious about this.", next: s2_3a },
    { text: "Tell me that story.", next: s2_3b },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

// Branch 3: Perception and masculinity (Root → 2 → 3 → 4 → 5 → 6 → 7 → 8 → 9)

// Level 9 - Terminal nodes
const s3_9a = {
  text: "A lot of people assume I'm a trans man because I present very masculine. Sometimes friends even have to correct people about my pronouns. And honestly? I kind of enjoy the confusion.",
  speaker: "S.",
  choices: [
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const s3_9b = {
  text: "My goal is often to be hard to categorize. That ambiguity feels affirming to me. I want people to look at me and have to sit with not knowing what box to put me in.",
  speaker: "S.",
  choices: [
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

// Level 8
const s3_8a = {
  text: "How other people usually perceive me is interesting. It varies a lot depending on context.",
  speaker: "S.",
  choices: [
    { text: "How do they perceive you?", next: s3_9a },
    { text: "Do you like that ambiguity?", next: s3_9b },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const s3_9c = {
  text: "I really enjoy when people can't immediately categorize me. Being perceived as androgynous or confusing feels affirming. It means I'm succeeding at something.",
  speaker: "S.",
  choices: [
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const s3_9d = {
  text: "Sometimes I even lean into that ambiguity intentionally. I choose things that will make people uncertain. That uncertainty is the point.",
  speaker: "S.",
  choices: [
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const s3_8b = {
  text: "Other people's perception of me definitely affects my self-image. There's this feedback loop.",
  speaker: "S.",
  choices: [
    { text: "How does it affect you?", next: s3_9c },
    { text: "Do you lean into that intentionally?", next: s3_9d },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

// Level 7
const s3_7a = {
  text: "Perception is complicated for me. I like being confusing. I like when people can't immediately read me.",
  speaker: "S.",
  choices: [
    { text: "How do people usually perceive you?", next: s3_8a },
    { text: "How does perception affect you?", next: s3_8b },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const s3_9e = {
  text: "In queer spaces, I enjoy presenting as confusing or androgynous. I want to be unreadable. That feels safe and affirming at the same time.",
  speaker: "S.",
  choices: [
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const s3_9f = {
  text: "Outside of queer spaces, especially in unfamiliar environments, there can be a safety element where being read more masculinely or as a man feels easier. It's strategic.",
  speaker: "S.",
  choices: [
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const s3_8c = {
  text: "Yes, my presentation does change depending on where I am. Context matters a lot for safety and comfort.",
  speaker: "S.",
  choices: [
    { text: "How does it change in queer spaces?", next: s3_9e },
    { text: "What about outside queer spaces?", next: s3_9f },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const s3_9g = {
  text: "I think masculinity for me means something protective and community-oriented—showing up for people, helping create safety. Not dominating, but caring.",
  speaker: "S.",
  choices: [
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const s3_9h = {
  text: "It's about engaging with masculinity in a healthier and more intentional way. I'm still figuring that out, but it's definitely not about traditional masculine power over others.",
  speaker: "S.",
  choices: [
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const s3_8d = {
  text: "What does masculinity mean to me now? That's something I'm still actively working on. It's evolving.",
  speaker: "S.",
  choices: [
    { text: "What does it mean so far?", next: s3_9g },
    { text: "How are you figuring it out?", next: s3_9h },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const s3_7b = {
  text: "What does butchness mean to me specifically? It's tied up in perception, presentation, and how I think about masculinity.",
  speaker: "S.",
  choices: [
    { text: "Does your presentation change by context?", next: s3_8c },
    { text: "What does masculinity mean to you?", next: s3_8d },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

// Level 6
const s3_6a = {
  text: "Butchness means a lot of things to me. Perception is a big part of it—how I'm seen and how that feeds back into how I see myself.",
  speaker: "S.",
  choices: [
    { text: "Tell me about perception.", next: s3_7a },
    { text: "What else does butchness mean?", next: s3_7b },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const s3_9i = {
  text: "I think New York feels comparatively safer and more community-oriented for queer people. There are more spaces, more events, and more opportunities to connect. The political and social climate absolutely makes a difference.",
  speaker: "S.",
  choices: [
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const s3_9j = {
  text: "New York has made queerness more visible and accessible for me. I wouldn't be who I am without this city. The community here shaped my understanding of what's possible.",
  speaker: "S.",
  choices: [
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const s3_8e = {
  text: "Living in New York has shaped my identity in really important ways. The city creates space for complexity.",
  speaker: "S.",
  choices: [
    { text: "How has the climate affected queer life?", next: s3_9i },
    { text: "What has New York given you personally?", next: s3_9j },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const s3_9k = {
  text: "Increasingly, masculinity for me means something protective and community-oriented—showing up for people, helping create safety, and engaging with masculinity in a healthier way. It's less about power and more about care.",
  speaker: "S.",
  choices: [
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const s3_9l = {
  text: "I think I'm still figuring that out. But it's less about traditional masculinity and more about care and intentionality. What does it mean to be masculine without being harmful?",
  speaker: "S.",
  choices: [
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const s3_8f = {
  text: "What masculinity means to me is something I'm actively working on. It's not a settled question.",
  speaker: "S.",
  choices: [
    { text: "What does it mean right now?", next: s3_9k },
    { text: "How are you exploring that?", next: s3_9l },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const s3_7c = {
  text: "Location and masculinity are both big parts of how I understand butchness. They're connected.",
  speaker: "S.",
  choices: [
    { text: "How has living in New York shaped you?", next: s3_8e },
    { text: "What does masculinity mean to you now?", next: s3_8f },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const s3_9m = {
  text: "My goal is often to be hard to categorize. That ambiguity feels affirming to me. I like when people can't immediately place me. It means I'm outside the boxes.",
  speaker: "S.",
  choices: [
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const s3_9n = {
  text: "Sometimes friends even have to correct people about my pronouns. I use any pronouns, so it's not about getting it 'right,' but honestly, I kind of enjoy the confusion. It means something's working.",
  speaker: "S.",
  choices: [
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const s3_8g = {
  text: "Being perceived as androgynous or confusing feels affirming. It validates something internal.",
  speaker: "S.",
  choices: [
    { text: "Why is that affirming?", next: s3_9m },
    { text: "How do people react to that?", next: s3_9n },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const s3_9o = {
  text: "In queer spaces, I enjoy presenting as confusing or androgynous. Outside of queer spaces, being read more masculinely or as a man feels easier for safety reasons. It's contextual.",
  speaker: "S.",
  choices: [
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const s3_9p = {
  text: "My presentation shifts based on context. It's strategic sometimes, affirming other times. Sometimes both at once.",
  speaker: "S.",
  choices: [
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const s3_8h = {
  text: "Context really matters for how I present. Safety, community, who I'm with—all of that affects my choices.",
  speaker: "S.",
  choices: [
    { text: "How does presentation change by context?", next: s3_9o },
    { text: "What drives those shifts?", next: s3_9p },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const s3_7d = {
  text: "Ambiguity and presentation are central to how I think about butchness. Being unreadable is part of the point.",
  speaker: "S.",
  choices: [
    { text: "Tell me about ambiguity.", next: s3_8g },
    { text: "How does your presentation shift by context?", next: s3_8h },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const s3_6b = {
  text: "What does butchness mean to me specifically? Perception, ambiguity, and how I move through the world. It's about being intentionally hard to categorize.",
  speaker: "S.",
  choices: [
    { text: "Tell me about location and masculinity.", next: s3_7c },
    { text: "Tell me about ambiguity and presentation.", next: s3_7d },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

// Level 5
const s3_5a = {
  text: "Butchness is about perception, presentation, and what masculinity means. Those three things are really intertwined for me.",
  speaker: "S.",
  choices: [
    { text: "Start with perception.", next: s3_6a },
    { text: "What does it all mean to you?", next: s3_6b },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const s3_6c = {
  text: "Perception and presentation—they're in conversation with each other. How I present affects how I'm perceived, which affects how I feel, which affects how I present.",
  speaker: "S.",
  choices: [
    { text: "Tell me about perception specifically.", next: s3_7a },
    { text: "What about presentation?", next: s3_7b },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const s3_6d = {
  text: "Masculinity is a big piece. Not traditional masculinity, but something more intentional and protective.",
  speaker: "S.",
  choices: [
    { text: "How does location play in?", next: s3_7c },
    { text: "Tell me about ambiguity.", next: s3_7d },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const s3_5b = {
  text: "For me, butchness is about how I'm perceived, how I present, and what I think masculinity means. It's all connected.",
  speaker: "S.",
  choices: [
    { text: "Break that down for me.", next: s3_6c },
    { text: "What about masculinity?", next: s3_6d },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

// Level 4
const s3_4a = {
  text: "What does butchness mean to me specifically? That's a big question. Let me try to break it down.",
  speaker: "S.",
  choices: [
    { text: "Yeah, tell me.", next: s3_5a },
    { text: "I want to understand.", next: s3_5b },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const s3_5c = {
  text: "Butchness for me is about being visibly queer, intentionally masculine, and hard to categorize. All at once.",
  speaker: "S.",
  choices: [
    { text: "Tell me about perception.", next: s3_6a },
    { text: "What about presentation?", next: s3_6b },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const s3_5d = {
  text: "It's about masculinity, but a queer masculinity. Not trying to be a man, but being masculine in a way that's intentionally trans.",
  speaker: "S.",
  choices: [
    { text: "How does perception fit in?", next: s3_6c },
    { text: "What does that masculinity mean?", next: s3_6d },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const s3_4b = {
  text: "Butchness means different things to different people. For me, it's really tied to perception and masculinity.",
  speaker: "S.",
  choices: [
    { text: "Tell me your specific take.", next: s3_5c },
    { text: "What kind of masculinity?", next: s3_5d },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

// Level 3
const s3_3a = {
  text: "Butchness means different things to different people. For me, it's really specific.",
  speaker: "S.",
  choices: [
    { text: "What does it mean to you?", next: s3_4a },
    { text: "Tell me your perspective.", next: s3_4b },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const s3_4c = {
  text: "For me, it's about perception—how people see me, how I want to be seen. It's intentional.",
  speaker: "S.",
  choices: [
    { text: "What do you want people to see?", next: s3_5a },
    { text: "How do you control that?", next: s3_5b },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const s3_4d = {
  text: "It's also about what masculinity means to me—which is different from traditional masculinity.",
  speaker: "S.",
  choices: [
    { text: "How is it different?", next: s3_5c },
    { text: "What does it mean to you?", next: s3_5d },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

const s3_3b = {
  text: "Butchness is tied to masculinity, presentation, and perception for me. Those are the big pieces.",
  speaker: "S.",
  choices: [
    { text: "Start with perception.", next: s3_4c },
    { text: "What about masculinity?", next: s3_4d },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

// Level 2
const s3_2a = {
  text: "What butchness means to me specifically—that's a good question. It's really tied to perception, presentation, and how I think about masculinity. Those three things are all connected for me.",
  speaker: "S.",
  choices: [
    { text: "I'm curious about this.", next: s3_3a },
    { text: "Tell me more.", next: s3_3b },
    { text: getRandomExitLine(), next: exitNode },
    { text: getRandomRestartLine(), next: restartMarker }
  ]
};

// Root
export const samDialogue = {
  text: "I'm S, 30 years old. I consider myself butch, non-binary, trans. None of that order. It doesn't really matter. I think I strongly identify with all of those. It's more shifting depending on the day.",
  speaker: "S.",
  choices: [
    { text: "Shifting depending on the day is real. What feels strongest today?", next: s1_2a },
    { text: "How did you figure out butch fit you as a trans person?", next: s2_2a },
    { text: "What does butchness mean to you specifically?", next: s3_2a },
    { text: getRandomExitLine(), next: exitNode }
  ]
};
