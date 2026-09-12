"use client";

import { useState } from "react";

export function useDrawer() {
    const [open, setOpen] = useState(false);

    return {
        open,
        setOpen,
    };
}
