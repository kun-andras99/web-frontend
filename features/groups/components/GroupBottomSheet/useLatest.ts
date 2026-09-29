import { useEffect, useRef } from "react";

/** Mindig a legfrissebb értéket adja vissza ref-ben, így effect dependency-ből kihagyható. */
export function useLatest<T>(value: T) {
    const ref = useRef(value);

    useEffect(() => {
        ref.current = value;
    }, [value]);

    return ref;
}
