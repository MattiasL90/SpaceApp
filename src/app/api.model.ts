export class Potd {
    date: string;
    explanation: string;
    hdurl: string;
    media_type: string;
    service_version: string;
    title: string;
    url: string;
}

export class MarsApi {
    photos: Mars[];
}

export class Mars {
    id: number;
    sol: number;
    camera: Camera;
    img_src: string;
    earth_date: string;
    rover: Rover;
}

interface Camera {
    id: number;
    name: string;
    rover_id: number;
    full_name: string;
}

interface Rover {
    id: number;
    name: string;
    landing_date: string;
    launch_date: string;
    status: string;
}

export class MarsWeather {
    solOne: Sol;
    SolTwo: Sol;
    solKeys: number[];
}

interface Sol {
    at: At;
    first_UTC: string;
    hws: At;
    last_UTC: string;
    pre: At;
    season: string;
    wd: Wd;
}

interface At {
    av: number;
    ct: number;
    mn: number;
    mx: number;
}

interface Compass {
    compass_degrees: number;
    compass_point: string;
    compass_right: number;
    compass_up: number;
    ct: number;
}

interface Wd {
    compassOne: Compass;
}
