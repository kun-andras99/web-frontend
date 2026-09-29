import "server-only";

import { cache } from "react";
import { getGroupDetail } from "./groups.service";

export const loadGroupDetail = cache(getGroupDetail);