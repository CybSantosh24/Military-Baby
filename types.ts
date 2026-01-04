
export enum ThreatLevel {
  LOW = "LOW",
  MEDIUM = "MEDIUM",
  CRITICAL = "CRITICAL",
  APOCALYPSE = "APOCALYPSE"
}

export type VoiceOption = 'boy' | 'girl';

export type AnimationCategory = 'CLEANING_COMBAT' | 'SPEED_SORTING' | 'GENERIC_VICTORY';

export interface MissionData {
  mission_title: string;
  threat_level: string;
  mission_briefing: string;
  voice_script: string;
  steps: string[];
  reward_xp: number;
  animation_category: AnimationCategory;
  enemy_name?: string;
}

export interface GeneratedResponse {
  mission: MissionData;
  audioBase64?: string;
}

// Fix for: Property 'dotlottie-player' does not exist on type 'JSX.IntrinsicElements'
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'dotlottie-player': any;
    }
  }
}
