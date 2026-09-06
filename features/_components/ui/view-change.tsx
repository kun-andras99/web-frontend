"use client";

import { useScreenStore } from "@/features/_store/screen.store";

export default function ViewChange() {
    const { setDisplay } = useScreenStore();

    return (
        <>
            <button onClick={() => setDisplay("small-grid-view")}>1</button>
            <button onClick={() => setDisplay("big-grid-view")}>2</button>
            <button onClick={() => setDisplay("list-grid-view")}>3</button>
        </>
    );
}
