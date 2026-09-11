export interface StationConf {
    id: string;
    title: string;
    file: string;
}

export interface Question {
    id?: string | number;
    question?: string;      
    image?: string;          
    type?: "text" | "image"; 
    options: string[];
    correct: number;
}

export interface stationProgress{
    completedStations: string[];
    scores: { [stationId: string]: number };
}