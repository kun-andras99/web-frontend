-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('USER', 'ADMIN', 'MODERATOR');

-- CreateEnum
CREATE TYPE "VerificationTokenType" AS ENUM ('EMAIL_VERIFICATION', 'PASSWORD_RESET');

-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('MAN', 'WOMAN', 'TRANS_MAN', 'TRANS_WOMAN');

-- CreateEnum
CREATE TYPE "GenderInterest" AS ENUM ('MAN', 'WOMAN', 'TRANS_MAN', 'TRANS_WOMAN');

-- CreateEnum
CREATE TYPE "Sexuality" AS ENUM ('STRAIGHT', 'BISEXUAL', 'GAY', 'LESBIAN', 'PANSEXUAL', 'ASEXUAL', 'OTHER');

-- CreateEnum
CREATE TYPE "SexualityInterest" AS ENUM ('STRAIGHT', 'BISEXUAL', 'GAY', 'LESBIAN', 'PANSEXUAL', 'ASEXUAL', 'OTHER');

-- CreateEnum
CREATE TYPE "LookingFor" AS ENUM ('CHAT', 'FRIENDSHIP', 'CASUAL_DATING', 'SERIOUS_RELATIONSHIP', 'HOOKUP', 'NETWORKING', 'NOTHING_SPECIFIC');

-- CreateEnum
CREATE TYPE "RelationshipStatus" AS ENUM ('SINGLE', 'IN_RELATION', 'ENGAGED', 'MARRIED', 'SEPARATED', 'DIVORCED', 'WIDOWED', 'COMPLICATED', 'OPEN');

-- CreateEnum
CREATE TYPE "TransStatus" AS ENUM ('CIS', 'TRANS');

-- CreateEnum
CREATE TYPE "City" AS ENUM ('CENTRUM', 'STRAIGHT', 'BISEXUAL', 'GAY', 'LESBIAN', 'TRANS');

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
    "lat" DOUBLE PRECISION,
    "lng" DOUBLE PRECISION,
    "locationEnabled" BOOLEAN NOT NULL DEFAULT false,
    "locationUpdatedAt" TIMESTAMP(3),
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
CREATE TABLE "user_data" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "avatar" TEXT,
    "avatarUrl" TEXT,
    "nickname" TEXT,
    "description" TEXT,
    "bio" TEXT,
    "birth" TIMESTAMP(3) NOT NULL,
    "heightCm" INTEGER,
    "weightKg" INTEGER,
    "gender" "Gender",
    "sexuality" "Sexuality",
    "pronouns" TEXT,
    "city" "City",
    "transStatus" "TransStatus",
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_data_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_preferences" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "minAge" INTEGER,
    "maxAge" INTEGER,
    "minHeightCm" INTEGER,
    "maxHeightCm" INTEGER,
    "maxDistanceKm" INTEGER,
    "verifiedOnly" BOOLEAN NOT NULL DEFAULT false,
    "locationRequired" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_preferences_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_looking_for" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "value" "LookingFor" NOT NULL,

    CONSTRAINT "user_looking_for_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_gender_interest" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "value" "GenderInterest" NOT NULL,

    CONSTRAINT "user_gender_interest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_sexuality_interest" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "value" "SexualityInterest" NOT NULL,

    CONSTRAINT "user_sexuality_interest_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE INDEX "users_lat_lng_idx" ON "users"("lat", "lng");

-- CreateIndex
CREATE INDEX "users_locationEnabled_idx" ON "users"("locationEnabled");

-- CreateIndex
CREATE INDEX "users_createdAt_idx" ON "users"("createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "refresh_tokens_tokenHash_key" ON "refresh_tokens"("tokenHash");

-- CreateIndex
CREATE INDEX "refresh_tokens_userId_idx" ON "refresh_tokens"("userId");

-- CreateIndex
CREATE INDEX "refresh_tokens_expiresAt_idx" ON "refresh_tokens"("expiresAt");

-- CreateIndex
CREATE UNIQUE INDEX "verification_tokens_tokenHash_key" ON "verification_tokens"("tokenHash");

-- CreateIndex
CREATE INDEX "verification_tokens_userId_type_idx" ON "verification_tokens"("userId", "type");

-- CreateIndex
CREATE INDEX "verification_tokens_expiresAt_idx" ON "verification_tokens"("expiresAt");

-- CreateIndex
CREATE UNIQUE INDEX "user_data_userId_key" ON "user_data"("userId");

-- CreateIndex
CREATE INDEX "user_data_gender_idx" ON "user_data"("gender");

-- CreateIndex
CREATE INDEX "user_data_sexuality_idx" ON "user_data"("sexuality");

-- CreateIndex
CREATE INDEX "user_data_city_idx" ON "user_data"("city");

-- CreateIndex
CREATE UNIQUE INDEX "user_preferences_userId_key" ON "user_preferences"("userId");

-- CreateIndex
CREATE INDEX "user_looking_for_userId_idx" ON "user_looking_for"("userId");

-- CreateIndex
CREATE INDEX "user_looking_for_value_idx" ON "user_looking_for"("value");

-- CreateIndex
CREATE UNIQUE INDEX "user_looking_for_userId_value_key" ON "user_looking_for"("userId", "value");

-- CreateIndex
CREATE INDEX "user_gender_interest_userId_idx" ON "user_gender_interest"("userId");

-- CreateIndex
CREATE INDEX "user_gender_interest_value_idx" ON "user_gender_interest"("value");

-- CreateIndex
CREATE UNIQUE INDEX "user_gender_interest_userId_value_key" ON "user_gender_interest"("userId", "value");

-- CreateIndex
CREATE INDEX "user_sexuality_interest_userId_idx" ON "user_sexuality_interest"("userId");

-- CreateIndex
CREATE INDEX "user_sexuality_interest_value_idx" ON "user_sexuality_interest"("value");

-- CreateIndex
CREATE UNIQUE INDEX "user_sexuality_interest_userId_value_key" ON "user_sexuality_interest"("userId", "value");

-- AddForeignKey
ALTER TABLE "refresh_tokens" ADD CONSTRAINT "refresh_tokens_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "verification_tokens" ADD CONSTRAINT "verification_tokens_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_data" ADD CONSTRAINT "user_data_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_preferences" ADD CONSTRAINT "user_preferences_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_looking_for" ADD CONSTRAINT "user_looking_for_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_gender_interest" ADD CONSTRAINT "user_gender_interest_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_sexuality_interest" ADD CONSTRAINT "user_sexuality_interest_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
