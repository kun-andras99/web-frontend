import React from "react";

export default function BottomPageWrapper({
    children,
}: {
    children: React.ReactNode;
}) {
    return <div className="bottom-page">{children}</div>;
}
