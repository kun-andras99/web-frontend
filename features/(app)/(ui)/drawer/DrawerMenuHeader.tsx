interface DrawerMenuHeaderProps {
    title: string;
    content?: string;
}

export default function DrawerMenuHeader({
    title,
    content,
}: DrawerMenuHeaderProps) {
    return (
        <h2>
            {title} <span>{content}</span>
        </h2>
    );
}
