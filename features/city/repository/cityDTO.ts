export interface CityGenderStatsDTO {
    male: number;
    female: number;
    transMale: number;
    transFemale: number;
}

export interface CityAgeStatsDTO {
    age18To25: number;
    age26To40: number;
    age41To60: number;
    age60Plus: number;
}

export interface CityStatsDTO {
    appCity: string;
    total: number;
    gender: CityGenderStatsDTO;
    age: CityAgeStatsDTO;
}
