/*
  Warnings:

  - You are about to drop the column `displayed_name` on the `UserData` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN "avatarUrl" TEXT;

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_UserData" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "avatar" TEXT,
    "nickname" TEXT,
    "description" TEXT,
    "bio" TEXT,
    "birth" DATETIME NOT NULL,
    "heightCm" INTEGER,
    "weightKg" INTEGER,
    "gender" TEXT,
    "sexuality" TEXT,
    "pronouns" TEXT,
    "city" TEXT,
    "country" TEXT,
    "avatarUrl" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "UserData_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_UserData" ("avatar", "avatarUrl", "bio", "birth", "city", "country", "createdAt", "description", "gender", "heightCm", "id", "pronouns", "sexuality", "updatedAt", "userId", "weightKg") SELECT "avatar", "avatarUrl", "bio", "birth", "city", "country", "createdAt", "description", "gender", "heightCm", "id", "pronouns", "sexuality", "updatedAt", "userId", "weightKg" FROM "UserData";
DROP TABLE "UserData";
ALTER TABLE "new_UserData" RENAME TO "UserData";
CREATE UNIQUE INDEX "UserData_userId_key" ON "UserData"("userId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
