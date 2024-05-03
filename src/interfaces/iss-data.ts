export interface IssPosition {
    longitude: string;
    latitude: string;
}

export interface IssPositionData {
    iss_position: IssPosition;
    timestamp: string;
    message: string;
}