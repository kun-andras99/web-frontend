import { FakeUserRepository } from "../fake/repositories/fake.user.rep";
import type { UserRepository } from "./user.rep";
// Ha kész a Prisma oldal, csak ezt kell bekötni — semmi más a kódbázisban
// nem fog tudni róla:
// import { PrismaUserRepository } from "../prisma/repositories/prisma.user.rep";

type DataSource = "fake" | "prisma";

function getDataSource(): DataSource {
    return (process.env.DATA_SOURCE as DataSource) ?? "fake";
}

let userRepository: UserRepository | undefined;

/**
 * Az egyetlen belépési pont, amin keresztül az app repository-t kér.
 * Ezen a fájlon (és a két implementáción) kívül SENKI nem importálhat
 * közvetlenül FakeUserRepository-t vagy PrismaUserRepository-t.
 */
export function getUserRepository(): UserRepository {
    if (userRepository) return userRepository;

    switch (getDataSource()) {
        case "fake":
            userRepository = new FakeUserRepository();
            break;
        case "prisma":
            // userRepository = new PrismaUserRepository(prismaClient);
            throw new Error("Prisma data source is not wired up yet");
        default:
            throw new Error(`Unknown DATA_SOURCE: ${getDataSource()}`);
    }

    return userRepository;
}
