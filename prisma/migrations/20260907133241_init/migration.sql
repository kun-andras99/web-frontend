-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('USER', 'ADMIN', 'MODERATOR');

-- CreateEnum
CREATE TYPE "VerificationTokenType" AS ENUM ('EMAIL_VERIFICATION', 'PASSWORD_RESET');

-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('Male', 'Female', 'NonBinary', 'Other');

-- CreateEnum
CREATE TYPE "Sexuality" AS ENUM ('Straight', 'Bisexual', 'Gay', 'Lesbian', 'Trans', 'Pansexual', 'Asexual', 'Other');

-- CreateEnum
CREATE TYPE "CrossdressStatus" AS ENUM ('Crossdress', 'No');

-- CreateEnum
CREATE TYPE "RelationshipStatus" AS ENUM ('Single', 'Relation', 'Engaged', 'Married', 'Separated', 'Divorced', 'Widowed', 'Complicated', 'Open');

-- CreateEnum
CREATE TYPE "LookingFor" AS ENUM ('Chat', 'Friendship', 'CasualDating', 'SeriousRelationship', 'Hookup', 'Networking', 'NothingSpecific');

-- CreateEnum
CREATE TYPE "GenderInterest" AS ENUM ('Men', 'Women', 'NonBinary', 'Everyone', 'PreferNotToSay');

-- CreateEnum
CREATE TYPE "TransStatus" AS ENUM ('Cis', 'Trans');

-- CreateEnum
CREATE TYPE "City" AS ENUM ('Centrum', 'Straight', 'Bisexual', 'Gay', 'Trans', 'BDSM');

-- CreateEnum
CREATE TYPE "FolderVisibility" AS ENUM ('PUBLIC', 'PRIVATE', 'RESTRICTED');

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "emailVerified" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "role" "UserRole" NOT NULL DEFAULT 'USER',
    "relationshipStatus" "RelationshipStatus",

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "refresh_tokens" (
    "id" TEXT NOT NULL,
    "tokenHash" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "revokedAt" TIMESTAMP(3),
    "replacedBy" TEXT,
    "userAgent" TEXT,
    "ipAddress" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "refresh_tokens_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "verification_tokens" (
    "id" TEXT NOT NULL,
    "tokenHash" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" "VerificationTokenType" NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "verification_tokens_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserData" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "avatar" TEXT,
    "nickname" TEXT,
    "description" TEXT,
    "bio" TEXT,
    "birth" TIMESTAMP(3) NOT NULL,
    "heightCm" INTEGER,
    "weightKg" INTEGER,
    "gender" "Gender",
    "sexuality" "Sexuality",
    "pronouns" TEXT,
    "city" TEXT,
    "country" TEXT,
    "avatarUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserPreference" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "minAge" INTEGER,
    "maxAge" INTEGER,
    "minHeightCm" INTEGER,
    "maxHeightCm" INTEGER,
    "maxDistanceKm" INTEGER,
    "verifiedOnly" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserPreference_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserLookingFor" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "value" "LookingFor" NOT NULL,

    CONSTRAINT "UserLookingFor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserGenderInterest" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "value" "GenderInterest" NOT NULL,

    CONSTRAINT "UserGenderInterest_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "refresh_tokens_tokenHash_key" ON "refresh_tokens"("tokenHash");

-- CreateIndex
CREATE INDEX "refresh_tokens_userId_idx" ON "refresh_tokens"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "verification_tokens_tokenHash_key" ON "verification_tokens"("tokenHash");

-- CreateIndex
CREATE INDEX "verification_tokens_userId_type_idx" ON "verification_tokens"("userId", "type");

-- CreateIndex
CREATE UNIQUE INDEX "UserData_userId_key" ON "UserData"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "UserPreference_userId_key" ON "UserPreference"("userId");

-- CreateIndex
CREATE INDEX "UserLookingFor_userId_idx" ON "UserLookingFor"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "UserLookingFor_userId_value_key" ON "UserLookingFor"("userId", "value");

-- CreateIndex
CREATE INDEX "UserGenderInterest_userId_idx" ON "UserGenderInterest"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "UserGenderInterest_userId_value_key" ON "UserGenderInterest"("userId", "value");

-- AddForeignKey
ALTER TABLE "refresh_tokens" ADD CONSTRAINT "refresh_tokens_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "verification_tokens" ADD CONSTRAINT "verification_tokens_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserData" ADD CONSTRAINT "UserData_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserPreference" ADD CONSTRAINT "UserPreference_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserLookingFor" ADD CONSTRAINT "UserLookingFor_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserGenderInterest" ADD CONSTRAINT "UserGenderInterest_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
