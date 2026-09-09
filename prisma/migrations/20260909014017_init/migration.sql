/*
  Warnings:

  - You are about to drop the `RefreshToken` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "RefreshToken" DROP CONSTRAINT "RefreshToken_userId_fkey";

-- DropForeignKey
ALTER TABLE "user_data" DROP CONSTRAINT "user_data_userId_fkey";

-- DropForeignKey
ALTER TABLE "user_gender_interest" DROP CONSTRAINT "user_gender_interest_userId_fkey";

-- DropForeignKey
ALTER TABLE "user_looking_for" DROP CONSTRAINT "user_looking_for_userId_fkey";

-- DropForeignKey
ALTER TABLE "user_preferences" DROP CONSTRAINT "user_preferences_userId_fkey";

-- DropForeignKey
ALTER TABLE "user_sexuality_interest" DROP CONSTRAINT "user_sexuality_interest_userId_fkey";

-- DropForeignKey
ALTER TABLE "verification_tokens" DROP CONSTRAINT "verification_tokens_userId_fkey";

-- DropTable
DROP TABLE "RefreshToken";

-- DropTable
DROP TABLE "users";

-- CreateTable
CREATE TABLE "Users" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "emailVerified" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "lat" DOUBLE PRECISION,
    "lng" DOUBLE PRECISION,
    "locationEnabled" BOOLEAN NOT NULL DEFAULT false,
    "locationUpdatedAt" TIMESTAMP(3),
    "role" "UserRole" NOT NULL DEFAULT 'USER',
    "relationshipStatus" "RelationshipStatus",

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "refreshToken" (
    "id" TEXT NOT NULL,
    "tokenHash" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "revokedAt" TIMESTAMP(3),
    "replacedBy" TEXT,
    "userAgent" TEXT,
    "ipAddress" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "refreshToken_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_username_key" ON "Users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");

-- CreateIndex
CREATE INDEX "Users_lat_lng_idx" ON "Users"("lat", "lng");

-- CreateIndex
CREATE INDEX "Users_locationEnabled_idx" ON "Users"("locationEnabled");

-- CreateIndex
CREATE INDEX "Users_createdAt_idx" ON "Users"("createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "refreshToken_tokenHash_key" ON "refreshToken"("tokenHash");

-- CreateIndex
CREATE INDEX "refreshToken_userId_idx" ON "refreshToken"("userId");

-- CreateIndex
CREATE INDEX "refreshToken_expiresAt_idx" ON "refreshToken"("expiresAt");

-- AddForeignKey
ALTER TABLE "refreshToken" ADD CONSTRAINT "refreshToken_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "verification_tokens" ADD CONSTRAINT "verification_tokens_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_data" ADD CONSTRAINT "user_data_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_preferences" ADD CONSTRAINT "user_preferences_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_looking_for" ADD CONSTRAINT "user_looking_for_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_gender_interest" ADD CONSTRAINT "user_gender_interest_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_sexuality_interest" ADD CONSTRAINT "user_sexuality_interest_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
