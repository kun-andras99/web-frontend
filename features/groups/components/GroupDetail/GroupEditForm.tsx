"use client";

import { useState, type FormEvent } from "react";
import { useUpdateGroup } from "@/features/groups/hooks/useGroupSettings";
import type { GroupDetailDTO } from "@/features/groups/schemas/groups.schema";
import { getGroupErrorMessage } from "@/features/groups/utils/group-errors";
import { VISIBILITY_LABELS } from "@/features/groups/utils/group-ui";

interface GroupEditFormProps {
    group: GroupDetailDTO;
    onDone: () => void;
}

export default function GroupEditForm({ group, onDone }: GroupEditFormProps) {
    const update = useUpdateGroup(group.id);
    const [name, setName] = useState(group.name);
    const [description, setDescription] = useState(group.description ?? "");
    const [visibility, setVisibility] = useState(group.visibility);

    function handleSubmit(event: FormEvent) {
        event.preventDefault();
        update.mutate(
            { name, description: description.trim() || null, visibility },
            { onSuccess: onDone },
        );
    }

    return (
        <form className="gd-form" onSubmit={handleSubmit}>
            <label className="gd-field">
                <span>Név</span>
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    minLength={2}
                    maxLength={60}
                    required
                />
            </label>

            <label className="gd-field">
                <span>Leírás</span>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    maxLength={500}
                    rows={4}
                />
            </label>

            <label className="gd-field">
                <span>Láthatóság</span>
                <select
                    value={visibility}
                    onChange={(e) =>
                        setVisibility(e.target.value as typeof visibility)
                    }>
                    {Object.entries(VISIBILITY_LABELS).map(([value, label]) => (
                        <option key={value} value={value}>
                            {label}
                        </option>
                    ))}
                </select>
            </label>

            {update.error && (
                <p role="alert" className="gd-error">
                    {getGroupErrorMessage(update.error)}
                </p>
            )}

            <div className="gd-form-actions">
                <button
                    type="button"
                    className="gd-btn"
                    onClick={onDone}
                    disabled={update.isPending}>
                    Mégse
                </button>
                <button
                    type="submit"
                    className="gd-btn gd-btn--primary"
                    disabled={update.isPending}>
                    {update.isPending ? "Mentés..." : "Mentés"}
                </button>
            </div>
        </form>
    );
}
