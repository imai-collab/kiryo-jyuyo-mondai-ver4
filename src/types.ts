export enum Color {
  Black = 0,
  White = 1,
}

export interface Position {
  x: number;
  y: number;
}

export interface Move {
  from?: Position;
  to: Position;
  piece?: string;
  promote?: boolean;
}

export interface BranchSequence {
  id: string;
  name?: string; // Optional label, e.g. "変化1", "△3一玉の応手"
  moves: Move[]; // Sequence of moves (user, response, user...)
}

export interface Problem {
  id: number;
  title: string;
  description: string;
  initialSfen: string; // SFEN format for initial board
  solution?: Move[]; // Sequence of correct moves (user, response, user...)
  branches?: BranchSequence[]; // Registered non-solution branches / response sequences
  answerImageUrl?: string; // Answer screenshot as Data URL
}

export interface DataSet {
  id: string;
  title: string;
  appTitle: string;
  clearUrl?: string;
  problems: Problem[];
  timestamp: number;
}
