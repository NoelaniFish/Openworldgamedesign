# Butch Identity Interactive Game

An interactive narrative game exploring butch, transmasc, and lesbian identities through conversations with diverse characters in Knoxville, TN and New York City.

## About

This project is an interactive dialogue-based game where players engage in meaningful conversations with characters representing different facets of butch and transmasc identities. Through these conversations, players explore themes of gender expression, community, location, and personal identity.

## Features

- **Interactive Dialogue System**: Branching conversations with multiple characters
- **Character-Driven Narratives**: Meet 7 unique characters with their own stories:
  - **A.** - Butch lesbian artist in Brooklyn
  - **R.** - Transmasc butch leather worker in NYC
  - **J.** - Black masc-presenting person in Knoxville
  - **D.** - Masc-presenting individual in Knoxville
  - **F.** - Trans butch woman
  - **P.** - Stud actor in New York
  - **S.** - Butch non-binary trans person

- **Two Locations**: Knoxville, TN and New York City with dynamic weather
- **Profile System**: Customize your character
- **Notepad & Tree Facts**: Collect insights and knowledge

## Technology Stack

- **React** + **TypeScript**
- **Tailwind CSS v4** for styling
- **React Router** for navigation
- **Vite** for build tooling
- **pnpm** for package management

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── *Dialogue.ts          # Character dialogue trees
│   │   ├── DialogueBox.tsx        # Dialogue UI component
│   │   ├── GameWorld.tsx          # Main game world
│   │   ├── NPC.tsx                # Character rendering
│   │   └── ui/                    # Reusable UI components
│   ├── pages/
│   │   ├── IntroPage.tsx          # Landing page
│   │   ├── ProfilePage.tsx        # Character creation
│   │   └── GameWorldPage.tsx     # Main game page
│   ├── hooks/                     # Custom React hooks
│   └── imports/                   # Assets (images, audio)
├── styles/
│   ├── globals.css
│   ├── fonts.css
│   └── theme.css
└── vite-env.d.ts
```

## Dialogue System

All character dialogue follows a consistent pattern where characters restate questions before answering:

```typescript
// Example from amberDialogue.ts
text: "What was the performance like before? Femininity always felt unreachable to me, like something I was copying. I could mimic it but never truly embody it—that performance exhausted me."
```

Each character has:
- 100+ dialogue nodes organized in branching trees
- 3 main conversation branches exploring different themes
- Dynamic choices that lead to different narrative paths
- Exit and restart options at any point

## Installation

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev
```

## Assets

The project includes:
- Character sprites (GIF animations)
- Background images
- Audio files (NYC subway, environmental sounds)
- Custom fonts

All assets are located in `src/app/imports/`

## Attribution

This project was created with Claude Code (Sonnet 4.5) as part of an interactive narrative exploration of butch and transmasc identities.

## License

This project is for educational and artistic purposes.
