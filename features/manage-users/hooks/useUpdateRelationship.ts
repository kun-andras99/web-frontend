"use client";

import { chatKeys } from "@/features/chat/hooks/chat.keys";
import { nearbyKeys } from "@/features/nearby-users/hooks/nearby.keys"; // igazítsd a mappa nevéhez
import { visitorKeys } from "@/features/visitors/hooks/visitors.keys";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateRelationship } from "../api/manage-users.api";
import type { RelationshipChanges } from "../schemas/manage-users.schema";
import { manageUsersKeys } from "./manage-users.keys";

interface Variables {
    userId: string;
    changes: RelationshipChanges;
}

export function useUpdateRelationship() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({ userId, changes }: Variables) =>
            updateRelationship(userId, changes),

        onSuccess: async (_result, { changes }) => {
            // A tiltás / feloldás a közeli, látogató és üzenet listákat is érinti.
            // Csak elavultnak jelöljük őket (nincs azonnali újratöltés), a következő megnyitáskor frissülnek.
            if (changes.blocked !== undefined) {
                void queryClient.invalidateQueries({
                    queryKey: nearbyKeys.all,
                    refetchType: "none",
                });
                void queryClient.invalidateQueries({
                    queryKey: visitorKeys.all,
                    refetchType: "none",
                });
                void queryClient.invalidateQueries({
                    queryKey: chatKeys.conversations(),
                    refetchType: "none",
                });
            }

            // A visszaadott promise miatt a mutation addig "pending", amíg a lista újra nem töltődött.
            await queryClient.invalidateQueries({
                queryKey: manageUsersKeys.lists(),
            });
        },
    });
}
