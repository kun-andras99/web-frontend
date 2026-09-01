/*
  Warnings:

  - You are about to drop the column `interestedIn` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `lookingFor` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `preferredGender` on the `UserPreference` table. All the data in the column will be lost.
  - You are about to drop the column `relationshipGoal` on the `UserPreference` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "UserLookingFor" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "value" TEXT NOT NULL,
    CONSTRAINT "UserLookingFor_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "UserGenderInterest" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "value" TEXT NOT NULL,
    CONSTRAINT "UserGenderInterest_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "avatarUrl" TEXT,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "isVerified" BOOLEAN NOT NULL DEFAULT false,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "lat" REAL,
    "lng" REAL,
    "role" TEXT NOT NULL DEFAULT 'USER',
    "relationshipStatus" TEXT
);
INSERT INTO "new_User" ("avatarUrl", "createdAt", "email", "id", "isActive", "isVerified", "lat", "lng", "password", "relationshipStatus", "role", "updatedAt", "username") SELECT "avatarUrl", "createdAt", "email", "id", "isActive", "isVerified", "lat", "lng", "password", "relationshipStatus", "role", "updatedAt", "username" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
CREATE TABLE "new_UserPreference" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "minAge" INTEGER,
    "maxAge" INTEGER,
    "minHeightCm" INTEGER,
    "maxHeightCm" INTEGER,
    "maxDistanceKm" INTEGER,
    "verifiedOnly" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "UserPreference_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_UserPreference" ("createdAt", "id", "maxAge", "maxDistanceKm", "maxHeightCm", "minAge", "minHeightCm", "updatedAt", "userId", "verifiedOnly") SELECT "createdAt", "id", "maxAge", "maxDistanceKm", "maxHeightCm", "minAge", "minHeightCm", "updatedAt", "userId", "verifiedOnly" FROM "UserPreference";
DROP TABLE "UserPreference";
ALTER TABLE "new_UserPreference" RENAME TO "UserPreference";
CREATE UNIQUE INDEX "UserPreference_userId_key" ON "UserPreference"("userId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE INDEX "UserLookingFor_userId_idx" ON "UserLookingFor"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "UserLookingFor_userId_value_key" ON "UserLookingFor"("userId", "value");

-- CreateIndex
CREATE INDEX "UserGenderInterest_userId_idx" ON "UserGenderInterest"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "UserGenderInterest_userId_value_key" ON "UserGenderInterest"("userId", "value");
