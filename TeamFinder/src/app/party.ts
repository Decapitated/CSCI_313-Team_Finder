export interface Party {
  id: number;
  owner: string;
  created: Date;
  title: string;
  description: string;
  game: string;
  maxPlayers: number;
  reservedPlayers: number;
  members: Set<string>;
}
