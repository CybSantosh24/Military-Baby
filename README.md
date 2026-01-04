========================================================================
                             MILITARY BABY
                   Operation Anti-Procrastination Interface
========================================================================

[ 1. ABOUT THE PROJECT ]
Military Baby is a web application designed to gamify daily chores for
children. It transforms mundane tasks (like "clean your room") into
high-stakes, sci-fi military missions.

Instead of a boring to-do list, the user interacts with a "Kid Commander"
AI that treats every chore like a tactical operation.

[ 2. KEY FEATURES ]
- Mission Generation: Instantly turns simple text into a sci-fi scenario.
- AI Voice Command: Uses Google Gemini to generate a custom voice briefing.
- "Neon-Nexus" UI: A futuristic, engaging terminal interface for kids.
- No-Login Required: Instant access for immediate fun.

[ 3. TECHNOLOGY STACK ]
- Frontend Framework: React
- Language: TypeScript
- Build Tool: Vite
- AI Intelligence: Google Gemini (Gemini 1.5 Flash)
- Audio Synthesis: Google Gemini Multimodal
- Styling: Custom CSS with Cyberpunk aesthetic

[ 4. PREREQUISITES ]
Before you begin, ensure you have the following installed:
- Node.js (v18 or higher)
- npm (Node Package Manager)
- A Google Cloud API Key with access to Gemini API

[ 5. INSTALLATION INSTRUCTIONS ]

Step 1: Clone or Download the repository
   (Extract the files if you downloaded a ZIP)

Step 2: Install Dependencies
   Open your terminal in the project folder and run:
   > npm install

Step 3: Configure Environment Variables
   Create a file named ".env" in the root directory.
   Add your Google API key inside it like this:
   VITE_GOOGLE_API_KEY=your_api_key_here

Step 4: Run the Development Server
   > npm run dev

Step 5: Launch
   Open your browser and navigate to the Local URL shown in the terminal
   (usually http://localhost:5173).

[ 6. PROJECT STRUCTURE ]
/src
  /components    - UI elements (MissionCard, TerminalInput, etc.)
  /services      - API logic (geminiService.ts handles text & audio)
  App.tsx        - Main application logic
  main.tsx       - Entry point
/public          - Static assets

[ 7. CREDITS ]
Developed for the Hackathon by: Poorna Venkata Santosh Maturi
Concept: Gamifying adulthood for the next generation.

========================================================================
                   "MISSION ACCOMPLISHED, SOLDIER!"
========================================================================
