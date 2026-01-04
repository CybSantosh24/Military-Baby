
import React, { useState, useCallback } from 'react';
import { TerminalInput } from './components/TerminalInput';
import { MissionCard } from './components/MissionCard';
import { generateMission } from './services/geminiService';
import { playMissionSpeech } from './services/audioService';
import { sounds } from './services/soundEffects';
import { MissionData, VoiceOption } from './types';

const App: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [mission, setMission] = useState<MissionData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [currentVoice, setCurrentVoice] = useState<VoiceOption>('boy');

  const handleInitiate = async (task: string, voice: VoiceOption) => {
    setCurrentVoice(voice);
    setLoading(true);
    setError(null);
    setMission(null);

    try {
      const generatedMission = await generateMission(task);
      setMission(generatedMission);
      
      await playMissionSpeech(generatedMission.voice_script, voice);
    } catch (err: any) {
      console.error(err);
      // Display the actual error message to help the user debug their environment
      setError(err?.message || "OOPS! DATA OVERLOAD! TRY AGAIN!");
    } finally {
      setLoading(false);
    }
  };

  const handleTaskCompleted = async () => {
    const happyPrompts = [
      "WOW! You are a superstar! Feed me more tasks!",
      "Victory! I'm still hungry for chores!",
      "You're too fast! Feed me more!",
      "YAY! Mission done! Feed me more tasks!"
    ];
    const randomPrompt = happyPrompts[Math.floor(Math.random() * happyPrompts.length)];
    await playMissionSpeech(randomPrompt, currentVoice);
  };

  const handleReset = () => {
    setMission(null);
    setError(null);
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start py-16 px-6 relative overflow-hidden">
      {/* Header Section */}
      <header className="text-center mb-24 relative z-10 w-full max-w-6xl flex flex-col items-center">
        <h1 className="cartoon-header titan text-8xl md:text-[14rem] select-none flex flex-col items-center mb-8">
          <span>MILITARY</span>
          <span>BABY</span>
        </h1>
        
        <p className="titan text-white text-4xl tracking-widest uppercase mt-12 bg-black/60 px-12 py-6 rounded-full border-4 border-white shadow-[10px_10px_0px_#000]">
          FEED ME TASKS!
        </p>
      </header>

      {/* Main Content */}
      <main className="w-full max-w-6xl flex flex-col items-center pb-64">
        {!mission && !loading && (
          <TerminalInput onInitiate={handleInitiate} isLoading={loading} />
        )}

        {error && (
          <div className="sticker-card w-full max-w-4xl border-red-500 bg-red-600 text-white p-14 mb-24 titan text-center">
            <span className="text-[10rem] block mb-10">💥</span>
            <p className="text-4xl md:text-6xl uppercase mb-6 -webkit-text-stroke-thin">SYSTEM ERROR!</p>
            <p className="text-2xl md:text-3xl opacity-90 mb-10 break-words max-w-full px-4">
              {error}
            </p>
            <button onClick={handleReset} className="btn-squishy px-16 py-6 text-3xl">TRY AGAIN</button>
          </div>
        )}

        {loading && !mission && (
          <div className="sticker-card w-full max-w-3xl text-center py-48 bg-purple-900 border-white">
             <div className="text-[18rem] mb-16 animate-spin-slow inline-block drop-shadow-[10px_10px_0px_#000]">🌀</div>
             <div className="cartoon-header titan text-6xl uppercase mb-10 animate-pulse">
                EATING TASKS...
             </div>
             <div className="titan text-white/50 text-2xl tracking-[0.4em] uppercase">Munch Munch Munch!</div>
          </div>
        )}

        {mission && !loading && (
          <MissionCard 
            mission={mission} 
            onComplete={handleTaskCompleted} 
            onReset={handleReset}
          />
        )}
      </main>

      <footer className="fixed bottom-12 left-12 right-12 flex flex-col md:flex-row justify-center items-center gap-10 titan text-2xl text-white pointer-events-none z-50">
      </footer>
      <style dangerouslySetInnerHTML={{ __html: `
        .animate-spin-slow { animation: spin 3s linear infinite; } 
        @keyframes spin { from {transform:rotate(0deg);} to {transform:rotate(360deg);} }
        .-webkit-text-stroke-thin { -webkit-text-stroke: 1.5px black; }
      ` }} />
    </div>
  );
};

export default App;
