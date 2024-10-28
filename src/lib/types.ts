export interface TeamCardData {
  id: string;
  name: string;
  color: string;
  points: number;
}

export interface TeamChartData {
  team: {
    name: string;
    color: string;
  }
  pointEvents: number[];
}

export interface TeamsChartData {
  teams: {
    name: string;
    color: string;
  }[]
  pointEvents: number[][];
}