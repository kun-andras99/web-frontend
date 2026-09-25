"use client";

import BottomPageWrapper from "@/features/(app)/(ui)/BottomPageWrapper";
import { useCityStats } from "@/features/city/hooks/useCityStats";

export default function CityScreen() {
    const { data, isLoading, isError } = useCityStats();

    if (isLoading) {
        return <BottomPageWrapper>Loading city...</BottomPageWrapper>;
    }

    if (isError || !data) {
        return (
            <BottomPageWrapper>
                Nem sikerült betölteni a városi adatokat.
            </BottomPageWrapper>
        );
    }

    return (
        <BottomPageWrapper>
            <h1>{data.appCity}</h1>

            <p>Összes felhasználó: {data.total}</p>

            <h2>Nemek</h2>

            <p>Férfi: {data.gender.male}</p>

            <p>Nő: {data.gender.female}</p>

            <p>Transz férfi: {data.gender.transMale}</p>

            <p>Transz nő: {data.gender.transFemale}</p>

            <h2>Életkor</h2>

            <p>18–25: {data.age.age18To25}</p>

            <p>26–40: {data.age.age26To40}</p>

            <p>41–60: {data.age.age41To60}</p>

            <p>60+: {data.age.age60Plus}</p>
        </BottomPageWrapper>
    );
}
