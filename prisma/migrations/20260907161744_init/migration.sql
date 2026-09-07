-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "emailVerified" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "lat" REAL,
    "lng" REAL,
    "locationEnabled" BOOLEAN NOT NULL DEFAULT false,
    "locationUpdatedAt" DATETIME,
    "role" TEXT NOT NULL DEFAULT 'USER',
    "relationshipStatus" TEXT
);

-- CreateTable
CREATE TABLE "refresh_tokens" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "tokenHash" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "expiresAt" DATETIME NOT NULL,
    "revokedAt" DATETIME,
    "replacedBy" TEXT,
    "userAgent" TEXT,
    "ipAddress" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "refresh_tokens_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "verification_tokens" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "tokenHash" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "expiresAt" DATETIME NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "verification_tokens_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "user_data" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" TEXT NOT NULL,
    "avatar" TEXT,
    "avatarUrl" TEXT,
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
    "transStatus" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "user_data_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "user_preferences" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" TEXT NOT NULL,
    "minAge" INTEGER,
    "maxAge" INTEGER,
    "minHeightCm" INTEGER,
    "maxHeightCm" INTEGER,
    "maxDistanceKm" INTEGER,
    "verifiedOnly" BOOLEAN NOT NULL DEFAULT false,
    "locationRequired" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "user_preferences_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "user_looking_for" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    CONSTRAINT "user_looking_for_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "user_gender_interest" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    CONSTRAINT "user_gender_interest_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "user_sexuality_interest" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    CONSTRAINT "user_sexuality_interest_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE CASCADE
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
CREATE INDEX "user_data_country_idx" ON "user_data"("country");

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
