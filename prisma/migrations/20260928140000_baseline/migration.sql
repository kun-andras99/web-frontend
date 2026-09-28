-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "public";

-- CreateEnum
CREATE TYPE "Languages" AS ENUM ('ABKHAZIAN', 'AFRIKAANS', 'ALBANIAN', 'AMHARIC', 'ARABIC', 'ARMENIAN', 'ASSAMESE', 'AYMARA', 'AZERBAIJANI', 'BASHKIR', 'BASQUE', 'BELARUSIAN', 'BENGALI', 'BIHARI', 'BISLAMA', 'BOSNIAN', 'BRETON', 'BULGARIAN', 'BURMESE', 'CATALAN', 'CHINESE', 'CORSICAN', 'CROATIAN', 'CZECH', 'DANISH', 'DUTCH', 'ENGLISH', 'ESPERANTO', 'ESTONIAN', 'EWE', 'FAROESE', 'FARSI', 'FIJIAN', 'FINNISH', 'FRENCH', 'FRISIAN', 'GALICIAN', 'GEORGIAN', 'GERMAN', 'GREEK', 'GUARANI', 'GUJARATI', 'HAITIAN', 'HAUSA', 'HEBREW', 'HERERO', 'HINDI', 'HIRI_MOTU', 'HUNGARIAN', 'ICELANDIC', 'IGBO', 'INDONESIAN', 'INTERLINGUA', 'INTERLINGUE', 'INUKTITUT', 'INUPIAQ', 'IRISH', 'ITALIAN', 'JAPANESE', 'JAVANESE', 'KANNADA', 'KANURI', 'KASHMIRI', 'KAZAKH', 'KHMER', 'KIKUYU', 'KINYARWANDA', 'KIRGHIZ', 'KOMI', 'KOREAN', 'KUANYAMA', 'KURDISH', 'LAO', 'LATIN', 'LATVIAN', 'LIMBURGISH', 'LINGALA', 'LITHUANIAN', 'LUXEMBOURGISH', 'MACEDONIAN', 'MALAGASY', 'MALAY', 'MALAYALAM', 'MALTESE', 'MANX', 'MAORI', 'MARATHI', 'MARSHALLESE', 'MOLDAVIAN', 'MONGOLIAN', 'NAURU', 'NAVAJO', 'NDONGA', 'NEPALI', 'NORWEGIAN', 'OCCITAN', 'OJIBWE', 'ORIYA', 'OROMO', 'OSSETIAN', 'PALI', 'PASHTO', 'POLISH', 'PORTUGUESE', 'PUNJABI', 'QUECHUA', 'ROMANIAN', 'ROMANSH', 'RUNDI', 'RUSSIAN', 'SAMOAN', 'SANGO', 'SANSKRIT', 'SARDINIAN', 'SERBIAN', 'SHONA', 'SINDHI', 'SINHALA', 'SLOVAK', 'SLOVENIAN', 'SOMALI', 'SOTHO', 'SPANISH', 'SUNDANESE', 'SWAHILI', 'SWATI', 'SWEDISH', 'TAGALOG', 'TAHITIAN', 'TAJIK', 'TAMIL', 'TATAR', 'TELUGU', 'THAI', 'TIBETAN', 'TIGRINYA', 'TONGA', 'TSONGA', 'TSWANA', 'TURKISH', 'TURKMEN', 'TWI', 'UIGUR', 'UKRAINIAN', 'URDU', 'UZBEK', 'VENDA', 'VIETNAMESE', 'VOLAPUK', 'WALLOON', 'WELSH', 'WOLOF', 'XHOSA', 'YIDDISH', 'YORUBA', 'ZHUANG', 'ZULU');

-- CreateEnum
CREATE TYPE "HairColor" AS ENUM ('BLACK', 'DARK_BROWN', 'BROWN', 'LIGHT_BROWN', 'CHESTNUT', 'AUBURN', 'RED', 'GINGER', 'BLONDE', 'DARK_BLONDE', 'LIGHT_BLONDE', 'PLATINUM_BLONDE', 'GREY', 'WHITE', 'SALT_AND_PEPPER', 'DYED', 'MULTICOLORED', 'OTHER');

-- CreateEnum
CREATE TYPE "HairLength" AS ENUM ('BALD', 'VERY_SHORT', 'SHORT', 'AVERAGE', 'LONG', 'PUNK');

-- CreateEnum
CREATE TYPE "EyeColor" AS ENUM ('BROWN', 'DARK_BROWN', 'LIGHT_BROWN', 'HAZEL', 'AMBER', 'GREEN', 'BLUE', 'LIGHT_BLUE', 'GREY', 'DARK_GREY', 'BLACK', 'HETEROCHROMIA', 'OTHER');

-- CreateEnum
CREATE TYPE "BodyType" AS ENUM ('SLIM', 'LEAN', 'FIT', 'CURVY', 'AVERAGE', 'ATHLETIC', 'MUSCULAR', 'BELLY', 'STOCKY', 'PLUS_SIZE');

-- CreateEnum
CREATE TYPE "Beard" AS ENUM ('CLEAN_SHAVEN', 'DESIGNER_STUBBLE', 'SHORT', 'MEDIUM', 'LONG', 'FULL', 'MOUSTACHE', 'MUSTACHE_AND_BEARD', 'GOATEE', 'NO_BEARD');

-- CreateEnum
CREATE TYPE "BodyHair" AS ENUM ('SMOOTH', 'SHAVED', 'NOT_VERY_HAIR', 'HAIRY', 'VERY_HAIRY');

-- CreateEnum
CREATE TYPE "Ethnicity" AS ENUM ('ASIAN', 'BLACK', 'EAST_ASIAN', 'SOUTH_ASIAN', 'SOUTHEAST_ASIAN', 'CENTRAL_ASIAN', 'WEST_ASIAN', 'MIDDLE_EASTERN', 'NORTH_AFRICAN', 'LATINO', 'HISPANIC', 'NATIVE_AMERICAN', 'INDIGENOUS', 'PACIFIC_ISLANDER', 'WHITE', 'SOUTHERN_EUROPEAN', 'NORTHERN_EUROPEAN', 'EASTERN_EUROPEAN', 'WESTERN_EUROPEAN', 'MIXED', 'MULTIRACIAL', 'OTHER', 'PREFER_NOT_TO_SAY');

-- CreateEnum
CREATE TYPE "Smoker" AS ENUM ('NO', 'SOCIALLY', 'YES');

-- CreateEnum
CREATE TYPE "Tattoos" AS ENUM ('A_FEW', 'A_LOT', 'NO_TATTOOS');

-- CreateEnum
CREATE TYPE "Piercings" AS ENUM ('A_FEW', 'A_LOT', 'NO_PIERCINGS');

-- CreateEnum
CREATE TYPE "Position" AS ENUM ('TOP_ONLY', 'MORE_TOP', 'VERSATILE', 'MORE_BOTTOM', 'BOTTOM_ONLY');

-- CreateEnum
CREATE TYPE "DickSize" AS ENUM ('S', 'M', 'L', 'XL', 'XXL');

-- CreateEnum
CREATE TYPE "DickCircumcision" AS ENUM ('CLEAN_CUT', 'UNCUT');

-- CreateEnum
CREATE TYPE "Fetish" AS ENUM ('NONE', 'BDSM', 'BONDAGE', 'DOMINANCE', 'SUBMISSION', 'ROLEPLAY', 'LEATHER', 'LATEX', 'UNIFORM', 'LINGERIE', 'STOCKINGS', 'HIGH_HEELS', 'FEET', 'SOCKS', 'PIERCINGS', 'TATTOOS', 'MUSCLES', 'BODY_HAIR', 'VOYEURISM', 'EXHIBITIONISM', 'GROUP_PLAY', 'PUBLIC_PLAY', 'TOYS', 'SENSORY_PLAY', 'LIGHT_FETISH', 'MEDIUM_FETISH', 'EXTREME_FETISH', 'OTHER');

-- CreateEnum
CREATE TYPE "SexualOpenness" AS ENUM ('NOT_AT_ALL', 'SLIGHTLY', 'MODERATELY', 'VERY', 'EXTREMELY', 'WS_ONLY');

-- CreateEnum
CREATE TYPE "Fisting" AS ENUM ('NOT_INTERESTED', 'CURIOUS', 'OPEN_TO_IT', 'EXPERIENCED');

-- CreateEnum
CREATE TYPE "Sadism" AS ENUM ('NOT_INTERESTED', 'CURIOUS', 'OPEN_TO_IT', 'EXPERIENCED');

-- CreateEnum
CREATE TYPE "Masochism" AS ENUM ('NOT_INTERESTED', 'CURIOUS', 'OPEN_TO_IT', 'EXPERIENCED');

-- CreateEnum
CREATE TYPE "SaferSex" AS ENUM ('SAFE', 'LETS_TALK', 'CONSOM', 'PREP', 'PREP_AND_CONSOM', 'TASP');

-- CreateEnum
CREATE TYPE "OpenTo" AS ENUM ('SEX', 'FRIENDS', 'RELATIONSHIP');

-- CreateEnum
CREATE TYPE "GoingOutInterest" AS ENUM ('ARTS', 'BARS', 'CLUBS', 'PUBS', 'RESTAURANTS', 'CAFES', 'COFFEE_SHOPS', 'CINEMAS', 'THEATERS', 'CONCERTS', 'FESTIVALS', 'LIVE_MUSIC', 'KARAOKE', 'NIGHTLIFE', 'PARTIES', 'BEACHES', 'POOLS', 'SPA', 'GYMS', 'SPORTS_EVENTS', 'ART_GALLERIES', 'MUSEUMS', 'SHOPPING', 'OUTDOOR_EVENTS', 'FOOD_EVENTS', 'PRIDE_EVENTS', 'COMMUNITY_EVENTS', 'OTHER');

-- CreateEnum
CREATE TYPE "LifestyleInterest" AS ENUM ('LIFESTYLE', 'SELF_CARE', 'WELLNESS', 'MINIMALISM', 'LUXURY', 'FASHION', 'BEAUTY', 'SHOPPING', 'INTERIOR_DESIGN', 'DIY', 'COLLECTING');

-- CreateEnum
CREATE TYPE "MusicInterest" AS ENUM ('MUSIC', 'POP', 'ROCK', 'METAL', 'PUNK', 'INDIE', 'ALTERNATIVE', 'ELECTRONIC', 'TECHNO', 'HOUSE', 'TRANCE', 'HIP_HOP', 'RAP', 'RNB', 'SOUL', 'FUNK', 'JAZZ', 'BLUES', 'CLASSICAL_MUSIC', 'COUNTRY_MUSIC', 'REGGAE', 'LATIN_MUSIC', 'K_POP', 'J_POP', 'DISCO', 'DANCE_MUSIC', 'LIVE_MUSIC', 'SINGING', 'DJING', 'PLAYING_INSTRUMENTS');

-- CreateEnum
CREATE TYPE "MoviesInterest" AS ENUM ('MOVIES', 'TV_SERIES', 'DOCUMENTARIES', 'ANIME', 'MANGA', 'HORROR', 'THRILLER', 'ACTION', 'ADVENTURE', 'COMEDY', 'DRAMA', 'ROMANCE', 'SCI_FI', 'FANTASY', 'MYSTERY', 'CRIME', 'PSYCHOLOGICAL', 'SUPERHEROES', 'ANIMATION', 'CLASSIC_MOVIES', 'FILMMAKING', 'ACTING');

-- CreateEnum
CREATE TYPE "BooksInterest" AS ENUM ('READING', 'BOOKS', 'FICTION', 'NON_FICTION', 'FANTASY_BOOKS', 'SCI_FI_BOOKS', 'ROMANCE_BOOKS', 'HORROR_BOOKS', 'CRIME_BOOKS', 'THRILLER_BOOKS', 'POETRY', 'PHILOSOPHY', 'PSYCHOLOGY', 'HISTORY', 'BIOGRAPHIES', 'COMICS', 'GRAPHIC_NOVELS', 'WRITING', 'JOURNALING');

-- CreateEnum
CREATE TYPE "GamingInterest" AS ENUM ('GAMING', 'PC_GAMING', 'CONSOLE_GAMING', 'MOBILE_GAMING', 'PLAYSTATION', 'XBOX', 'NINTENDO', 'MMORPG', 'RPG', 'FPS', 'STRATEGY_GAMES', 'SIMULATION_GAMES', 'SURVIVAL_GAMES', 'HORROR_GAMES', 'SPORTS_GAMES', 'RACING_GAMES', 'BOARD_GAMES', 'CARD_GAMES', 'TABLETOP_GAMES', 'ESPORTS', 'STREAMING', 'GAME_DEVELOPMENT');

-- CreateEnum
CREATE TYPE "SportsInterest" AS ENUM ('SPORTS', 'FOOTBALL', 'BASKETBALL', 'VOLLEYBALL', 'TENNIS', 'TABLE_TENNIS', 'BADMINTON', 'SWIMMING', 'DIVING', 'RUNNING', 'CYCLING', 'MOUNTAIN_BIKING', 'HIKING', 'CLIMBING', 'SURFING', 'SKATEBOARDING', 'ROLLERBLADING', 'SKIING', 'SNOWBOARDING', 'ICE_SKATING', 'BOXING', 'KICKBOXING', 'MARTIAL_ARTS', 'WRESTLING', 'YOGA', 'PILATES', 'GYM', 'FITNESS', 'BODYBUILDING', 'CROSSFIT', 'DANCING', 'HORSE_RIDING', 'MOTORSPORT', 'FISHING', 'GOLF');

-- CreateEnum
CREATE TYPE "TravelInterest" AS ENUM ('TRAVEL', 'BACKPACKING', 'CITY_TRIPS', 'ROAD_TRIPS', 'BEACH_HOLIDAYS', 'MOUNTAIN_TRIPS', 'CAMPING', 'LUXURY_TRAVEL', 'SOLO_TRAVEL', 'GROUP_TRAVEL', 'CRUISES', 'CULTURAL_TRAVEL', 'ADVENTURE_TRAVEL', 'FOOD_TRAVEL', 'PHOTOGRAPHY_TRAVEL', 'EXPLORING_NEW_PLACES');

-- CreateEnum
CREATE TYPE "FoodInterest" AS ENUM ('FOOD', 'COOKING', 'BAKING', 'GRILLING', 'VEGETARIAN_FOOD', 'VEGAN_FOOD', 'HEALTHY_FOOD', 'STREET_FOOD', 'FAST_FOOD', 'FINE_DINING', 'INTERNATIONAL_CUISINE', 'ITALIAN_FOOD', 'ASIAN_FOOD', 'MEXICAN_FOOD', 'JAPANESE_FOOD', 'INDIAN_FOOD', 'MEDITERRANEAN_FOOD', 'HUNGARIAN_FOOD', 'DESSERTS', 'CHOCOLATE', 'COFFEE', 'TEA', 'WINE', 'COCKTAILS', 'CRAFT_BEER', 'WINE_TASTING', 'COFFEE_TASTING');

-- CreateEnum
CREATE TYPE "ArtInterest" AS ENUM ('ART', 'PAINTING', 'DRAWING', 'DIGITAL_ART', 'PHOTOGRAPHY', 'VIDEOGRAPHY', 'GRAPHIC_DESIGN', 'FASHION_DESIGN', 'SCULPTURE', 'POTTERY', 'CRAFTS', 'KNITTING', 'SEWING', 'WOODWORKING', 'JEWELRY_MAKING', 'CALLIGRAPHY', 'COSPLAY');

-- CreateEnum
CREATE TYPE "TechnologyInterest" AS ENUM ('TECHNOLOGY', 'COMPUTERS', 'PROGRAMMING', 'WEB_DEVELOPMENT', 'APP_DEVELOPMENT', 'ARTIFICIAL_INTELLIGENCE', 'ROBOTICS', 'ELECTRONICS', 'CRYPTOCURRENCY', 'BLOCKCHAIN', 'GAMING_TECHNOLOGY', 'GADGETS', 'SMART_HOME', 'CYBERSECURITY', 'SCIENCE', 'ASTRONOMY', 'SPACE', 'PHYSICS', 'CHEMISTRY', 'BIOLOGY', 'ENGINEERING');

-- CreateEnum
CREATE TYPE "NatureInterest" AS ENUM ('NATURE', 'ANIMALS', 'DOGS', 'CATS', 'HORSES', 'BIRDS', 'AQUARIUMS', 'FISH', 'REPTILES', 'WILDLIFE', 'PETS', 'GARDENING', 'PLANTS', 'FLOWERS', 'FORESTS', 'MOUNTAINS', 'OCEANS', 'LAKES', 'CAMPING', 'ENVIRONMENT', 'SUSTAINABILITY');

-- CreateEnum
CREATE TYPE "SocialInterest" AS ENUM ('SOCIALIZING', 'FRIENDS', 'PARTIES', 'NIGHTLIFE', 'CLUBBING', 'BARS', 'PUBS', 'KARAOKE', 'DANCING', 'CONCERTS', 'FESTIVALS', 'LIVE_MUSIC', 'PUB_QUIZZES', 'MEETUPS', 'COMMUNITY_EVENTS');

-- CreateEnum
CREATE TYPE "CultureInterest" AS ENUM ('CULTURE', 'HISTORY', 'ARCHITECTURE', 'MUSEUMS', 'ART_GALLERIES', 'THEATER', 'OPERA', 'BALLET', 'LITERATURE', 'LANGUAGES', 'CULTURAL_EVENTS', 'RELIGION', 'MYTHOLOGY', 'ANCIENT_CULTURES');

-- CreateEnum
CREATE TYPE "LearningInterest" AS ENUM ('LEARNING', 'ONLINE_COURSES', 'LANGUAGES', 'PSYCHOLOGY', 'PHILOSOPHY', 'HISTORY', 'ECONOMICS', 'BUSINESS', 'ENTREPRENEURSHIP', 'MARKETING', 'FINANCE', 'INVESTING', 'PERSONAL_DEVELOPMENT', 'SELF_IMPROVEMENT', 'PUBLIC_SPEAKING', 'SCIENCE');

-- CreateEnum
CREATE TYPE "AutomotiveInterest" AS ENUM ('CARS', 'CLASSIC_CARS', 'SPORTS_CARS', 'SUPERCARS', 'MOTORCYCLES', 'MOTORSPORT', 'FORMULA_1', 'RACING', 'CAR_TUNING', 'CAR_MEETUPS', 'BOATS', 'SAILING', 'AVIATION', 'PLANES', 'TRAINS');

-- CreateEnum
CREATE TYPE "OutdoorInterest" AS ENUM ('OUTDOORS', 'HIKING', 'CAMPING', 'TREKKING', 'CLIMBING', 'FISHING', 'HUNTING', 'CYCLING', 'MOUNTAIN_BIKING', 'KAYAKING', 'CANOEING', 'RAFTING', 'SURFING', 'SAILING', 'DIVING', 'SNORKELING', 'PARAGLIDING', 'SKYDIVING');

-- CreateEnum
CREATE TYPE "PersonalInterest" AS ENUM ('MEDITATION', 'MINDFULNESS', 'ASTROLOGY', 'HOROSCOPES', 'SPIRITUALITY', 'MOTIVATION', 'PERSONAL_GROWTH', 'HUMAN_BEHAVIOR', 'RELATIONSHIPS', 'DATING', 'SOCIAL_PSYCHOLOGY');

-- CreateEnum
CREATE TYPE "CollectingInterest" AS ENUM ('COIN_COLLECTING', 'STAMP_COLLECTING', 'VINYL_RECORDS', 'BOOK_COLLECTION', 'ART_COLLECTION', 'SNEAKER_COLLECTION', 'WATCHES', 'PERFUMES', 'MEMORABILIA');

-- CreateEnum
CREATE TYPE "FashionInterest" AS ENUM ('STREETWEAR', 'VINTAGE_FASHION', 'DESIGNER_FASHION', 'SNEAKERS', 'JEWELRY', 'WATCHES', 'TATTOOS', 'PIERCINGS', 'ALTERNATIVE_FASHION', 'COSPLAY', 'VINTAGE');

-- CreateEnum
CREATE TYPE "EventsInterest" AS ENUM ('FESTIVALS', 'CONCERTS', 'PRIDE_EVENTS', 'CULTURAL_EVENTS', 'FOOD_FESTIVALS', 'MUSIC_FESTIVALS', 'FILM_FESTIVALS', 'SPORTS_EVENTS', 'COMIC_CONVENTIONS', 'GAMING_EVENTS');

-- CreateEnum
CREATE TYPE "OtherInterest" AS ENUM ('VOLUNTEERING', 'CHARITY', 'ACTIVISM', 'COMMUNITY', 'SOCIAL_CAUSES', 'ENTREPRENEURSHIP', 'BUSINESS', 'CAREER', 'NETWORKING', 'OTHER');

-- CreateEnum
CREATE TYPE "BreastDevelopment" AS ENUM ('NONE', 'DEVELOPING', 'SMALL', 'AVERAGE', 'LARGE');

-- CreateEnum
CREATE TYPE "BreastImplant" AS ENUM ('NONE', 'IMPLANTS', 'FAT_TRANSFER', 'OTHER');

-- CreateEnum
CREATE TYPE "CupSize" AS ENUM ('AAA', 'AA', 'A', 'B', 'C', 'D', 'DD', 'DDD', 'E', 'F', 'FF', 'G', 'GG', 'H', 'HH', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'OTHER', 'PREFER_NOT_TO_SAY');

-- CreateEnum
CREATE TYPE "BraSize" AS ENUM ('AAA', 'AA', 'A', 'B', 'C', 'D', 'DD', 'DDD', 'E', 'F', 'FF', 'G', 'GG', 'H', 'HH', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'OTHER', 'PREFER_NOT_TO_SAY');

-- CreateEnum
CREATE TYPE "BraSizeSystem" AS ENUM ('EU', 'UK', 'US', 'FR', 'IT', 'AU', 'JP');

-- CreateEnum
CREATE TYPE "BinderSize" AS ENUM ('XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL');

-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('USER', 'ADMIN', 'MODERATOR');

-- CreateEnum
CREATE TYPE "VerificationTokenType" AS ENUM ('EMAIL_VERIFICATION', 'PASSWORD_RESET');

-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('MAN', 'WOMAN', 'TRANS_MAN', 'TRANS_WOMAN');

-- CreateEnum
CREATE TYPE "GenderInterest" AS ENUM ('MAN', 'WOMAN', 'TRANS_MAN', 'TRANS_WOMAN');

-- CreateEnum
CREATE TYPE "GenderCanSee" AS ENUM ('MAN', 'WOMAN', 'TRANS_MAN', 'TRANS_WOMAN');

-- CreateEnum
CREATE TYPE "Sexuality" AS ENUM ('STRAIGHT', 'GAY', 'LESBIAN', 'BISEXUAL', 'PANSEXUAL', 'ASEXUAL', 'DEMISEXUAL', 'QUEER', 'OMNISEXUAL', 'QUESTIONING', 'OTHER', 'PREFER_NOT_TO_SAY');

-- CreateEnum
CREATE TYPE "SexualityInterest" AS ENUM ('STRAIGHT', 'BISEXUAL', 'GAY', 'LESBIAN', 'PANSEXUAL', 'ASEXUAL', 'OTHER');

-- CreateEnum
CREATE TYPE "SexualityCanSee" AS ENUM ('STRAIGHT', 'BISEXUAL', 'GAY', 'LESBIAN', 'PANSEXUAL', 'ASEXUAL', 'OTHER');

-- CreateEnum
CREATE TYPE "TransStatus" AS ENUM ('CIS', 'TRANS');

-- CreateEnum
CREATE TYPE "TransStatusInterest" AS ENUM ('CIS', 'TRANS');

-- CreateEnum
CREATE TYPE "TransStatusCanSee" AS ENUM ('CIS', 'TRANS');

-- CreateEnum
CREATE TYPE "LookingFor" AS ENUM ('CHAT', 'FRIENDSHIP', 'CASUAL_DATING', 'SERIOUS_RELATIONSHIP', 'HOOKUP', 'NETWORKING', 'NOTHING_SPECIFIC');

-- CreateEnum
CREATE TYPE "RelationshipStatus" AS ENUM ('SINGLE', 'IN_RELATION', 'ENGAGED', 'MARRIED', 'SEPARATED', 'DIVORCED', 'WIDOWED', 'COMPLICATED', 'OPEN');

-- CreateEnum
CREATE TYPE "AppCity" AS ENUM ('CENTRUM', 'STRAIGHT', 'BISEXUAL', 'GAY', 'LESBIAN', 'TRANS');

-- CreateEnum
CREATE TYPE "GalleryType" AS ENUM ('PROFILE', 'USER');

-- CreateEnum
CREATE TYPE "GalleryVisibility" AS ENUM ('PUBLIC', 'PRIVATE');

-- CreateEnum
CREATE TYPE "GroupVisibility" AS ENUM ('PUBLIC', 'PRIVATE');

-- CreateEnum
CREATE TYPE "GroupMemberRole" AS ENUM ('MEMBER', 'ADMIN');

-- CreateEnum
CREATE TYPE "GroupJoinRequestStatus" AS ENUM ('PENDING', 'APPROVED', 'REJECTED', 'CANCELLED');

-- CreateEnum
CREATE TYPE "GroupInvitationStatus" AS ENUM ('PENDING', 'ACCEPTED', 'DECLINED', 'EXPIRED');

-- CreateEnum
CREATE TYPE "BlogVisibility" AS ENUM ('PUBLIC', 'PRIVATE');

-- CreateEnum
CREATE TYPE "UserAccountStatus" AS ENUM ('ACTIVE', 'SUSPENDED', 'BANNED', 'DELETED');

-- CreateEnum
CREATE TYPE "FriendRequestStatus" AS ENUM ('PENDING', 'ACCEPTED', 'REJECTED', 'CANCELLED');

-- CreateEnum
CREATE TYPE "FriendshipStatus" AS ENUM ('ACTIVE', 'ENDED');

-- CreateEnum
CREATE TYPE "MatchActionType" AS ENUM ('LIKE', 'PASS');

-- CreateEnum
CREATE TYPE "MatchStatus" AS ENUM ('ACTIVE', 'UNMATCHED');

-- CreateEnum
CREATE TYPE "EyeCandyAction" AS ENUM ('RATE', 'SKIP');

-- CreateEnum
CREATE TYPE "MessageType" AS ENUM ('TEXT', 'IMAGE', 'SYSTEM');

-- CreateEnum
CREATE TYPE "RightNowDisplayType" AS ENUM ('ONE_HOUR', 'THREE_HOUR');

-- CreateEnum
CREATE TYPE "NotificationType" AS ENUM ('PROFILE_VISIT', 'PROFILE_VIEW', 'NEW_FAVORITE', 'FRIEND_REQUEST', 'FRIEND_ACCEPTED', 'GROUP_INVITATION', 'GROUP_JOIN_REQUEST', 'GROUP_JOIN_ACCEPTED', 'GALLERY_SHARED', 'BLOG_LIKE', 'MATCH', 'SYSTEM_MESSAGE');

-- CreateEnum
CREATE TYPE "ReportType" AS ENUM ('USER', 'BLOG', 'GROUP', 'MESSAGE', 'GALLERY', 'IMAGE');

-- CreateEnum
CREATE TYPE "ReportStatus" AS ENUM ('PENDING', 'REVIEWING', 'RESOLVED', 'REJECTED');

-- CreateEnum
CREATE TYPE "ModerationActionType" AS ENUM ('WARNING', 'CONTENT_REMOVED', 'USER_SUSPENDED', 'USER_BANNED', 'USER_UNBANNED', 'USER_UNBLOCKED');

-- CreateEnum
CREATE TYPE "VipTier" AS ENUM ('FREE', 'VIP');

-- CreateEnum
CREATE TYPE "SubscriptionStatus" AS ENUM ('ACTIVE', 'CANCELLED', 'EXPIRED', 'PENDING');

-- CreateEnum
CREATE TYPE "PaymentStatus" AS ENUM ('PENDING', 'COMPLETED', 'FAILED', 'REFUNDED');

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "emailVerified" TIMESTAMP(3),
    "role" "UserRole" NOT NULL DEFAULT 'USER',
    "status" "UserAccountStatus" NOT NULL DEFAULT 'ACTIVE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "lat" DOUBLE PRECISION,
    "lng" DOUBLE PRECISION,
    "locationEnabled" BOOLEAN NOT NULL DEFAULT false,
    "locationUpdatedAt" TIMESTAMP(3),
    "lastActiveAt" TIMESTAMP(3),
    "relationshipStatus" "RelationshipStatus",
    "partnerUserId" TEXT,

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
    "avatarUrl" TEXT,
    "nickname" TEXT,
    "description" TEXT,
    "bio" TEXT,
    "birth" TIMESTAMP(3) NOT NULL,
    "heightCm" INTEGER,
    "weightKg" INTEGER,
    "shoulderWidth" INTEGER,
    "neckCircumference" INTEGER,
    "chestCircumference" INTEGER,
    "bustCircumference" INTEGER,
    "underbustCircumference" INTEGER,
    "waistCircumference" INTEGER,
    "hipCircumference" INTEGER,
    "upperArmCircumference" INTEGER,
    "forearmCircumference" INTEGER,
    "wristCircumference" INTEGER,
    "armLength" INTEGER,
    "upperArmLength" INTEGER,
    "forearmLength" INTEGER,
    "thighCircumference" INTEGER,
    "kneeCircumference" INTEGER,
    "calfCircumference" INTEGER,
    "ankleCircumference" INTEGER,
    "legLength" INTEGER,
    "inseamLength" INTEGER,
    "outseamLength" INTEGER,
    "handLength" INTEGER,
    "handWidth" INTEGER,
    "fingerLength" INTEGER,
    "braSize" "BraSize",
    "braSizeSystem" "BraSizeSystem",
    "cupSize" "CupSize",
    "breastImplant" "BreastImplant",
    "breastDevelopment" "BreastDevelopment",
    "binderSize" "BinderSize",
    "appCity" "AppCity",
    "gender" "Gender",
    "genderCanSee" "GenderCanSee"[],
    "sexuality" "Sexuality",
    "sexualityCanSee" "SexualityCanSee"[],
    "transStatus" "TransStatus",
    "transStatusCanSee" "TransStatusCanSee"[],
    "languages" "Languages"[],
    "hairLength" "HairLength",
    "hairColor" "HairColor",
    "eyeColor" "EyeColor",
    "bodyType" "BodyType",
    "beard" "Beard",
    "bodyHair" "BodyHair",
    "ethnicity" "Ethnicity",
    "smoker" "Smoker",
    "tattoos" "Tattoos",
    "piercings" "Piercings",
    "position" "Position",
    "dickSize" "DickSize",
    "dickCircumcision" "DickCircumcision",
    "fetish" "Fetish",
    "sexualOpenness" "SexualOpenness",
    "fisting" "Fisting",
    "sadism" "Sadism",
    "masochism" "Masochism",
    "saferSex" "SaferSex",
    "openTo" "OpenTo",
    "goingOutInterests" "GoingOutInterest"[],
    "lifestyleInterests" "LifestyleInterest"[],
    "musicInterests" "MusicInterest"[],
    "movieInterests" "MoviesInterest"[],
    "gamingInterests" "GamingInterest"[],
    "sportsInterests" "SportsInterest"[],
    "booksInterests" "BooksInterest"[],
    "travelInterests" "TravelInterest"[],
    "foodInterests" "FoodInterest"[],
    "artInterests" "ArtInterest"[],
    "technologyInterests" "TechnologyInterest"[],
    "natureInterests" "NatureInterest"[],
    "cultureInterests" "CultureInterest"[],
    "learningInterests" "LearningInterest"[],
    "socialInterests" "SocialInterest"[],
    "automotiveInterests" "AutomotiveInterest"[],
    "outdoorInterests" "OutdoorInterest"[],
    "personalInterests" "PersonalInterest"[],
    "collectingInterests" "CollectingInterest"[],
    "fashionInterests" "FashionInterest"[],
    "eventsInterests" "EventsInterest"[],
    "otherInterests" "OtherInterest"[],
    "countryCode" TEXT,
    "region" TEXT,
    "city" TEXT,
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
    "minShoulderWidthCm" INTEGER,
    "maxShoulderWidthCm" INTEGER,
    "minNeckCircumferenceCm" INTEGER,
    "maxNeckCircumferenceCm" INTEGER,
    "minChestCircumferenceCm" INTEGER,
    "maxChestCircumferenceCm" INTEGER,
    "minBustCircumferenceCm" INTEGER,
    "maxBustCircumferenceCm" INTEGER,
    "minUnderbustCircumferenceCm" INTEGER,
    "maxUnderbustCircumferenceCm" INTEGER,
    "minWaistCircumferenceCm" INTEGER,
    "maxWaistCircumferenceCm" INTEGER,
    "minHipCircumferenceCm" INTEGER,
    "maxHipCircumferenceCm" INTEGER,
    "minUpperArmCircumferenceCm" INTEGER,
    "maxUpperArmCircumferenceCm" INTEGER,
    "minForearmCircumferenceCm" INTEGER,
    "maxForearmCircumferenceCm" INTEGER,
    "minWristCircumferenceCm" INTEGER,
    "maxWristCircumferenceCm" INTEGER,
    "minArmLengthCm" INTEGER,
    "maxArmLengthCm" INTEGER,
    "minUpperArmLengthCm" INTEGER,
    "maxUpperArmLengthCm" INTEGER,
    "minForearmLengthCm" INTEGER,
    "maxForearmLengthCm" INTEGER,
    "minThighCircumferenceCm" INTEGER,
    "maxThighCircumferenceCm" INTEGER,
    "minKneeCircumferenceCm" INTEGER,
    "maxKneeCircumferenceCm" INTEGER,
    "minCalfCircumferenceCm" INTEGER,
    "maxCalfCircumferenceCm" INTEGER,
    "minAnkleCircumferenceCm" INTEGER,
    "maxAnkleCircumferenceCm" INTEGER,
    "minLegLengthCm" INTEGER,
    "maxLegLengthCm" INTEGER,
    "minInseamLengthCm" INTEGER,
    "maxInseamLengthCm" INTEGER,
    "minOutseamLengthCm" INTEGER,
    "maxOutseamLengthCm" INTEGER,
    "minHandLengthCm" INTEGER,
    "maxHandLengthCm" INTEGER,
    "minHandWidthCm" INTEGER,
    "maxHandWidthCm" INTEGER,
    "minFingerLengthCm" INTEGER,
    "maxFingerLengthCm" INTEGER,
    "lookingFor" "LookingFor"[],
    "gender" "GenderInterest"[],
    "sexuality" "SexualityInterest"[],
    "transStatus" "TransStatusInterest"[],
    "hairLength" "HairLength"[],
    "hairColor" "HairColor"[],
    "eyeColor" "EyeColor"[],
    "bodyType" "BodyType"[],
    "beard" "Beard"[],
    "bodyHair" "BodyHair"[],
    "ethnicity" "Ethnicity"[],
    "smoker" "Smoker"[],
    "tattoos" "Tattoos"[],
    "piercings" "Piercings"[],
    "position" "Position"[],
    "dickSize" "DickSize"[],
    "dickCircumcision" "DickCircumcision"[],
    "fetish" "Fetish"[],
    "sexualOpenness" "SexualOpenness"[],
    "fisting" "Fisting"[],
    "sadism" "Sadism"[],
    "masochism" "Masochism"[],
    "saferSex" "SaferSex"[],
    "openTo" "OpenTo"[],
    "cupSizes" "CupSize"[],
    "braSizes" "BraSize"[],
    "binderSizes" "BinderSize"[],
    "goingOutInterests" "GoingOutInterest"[],
    "lifestyleInterests" "LifestyleInterest"[],
    "musicInterests" "MusicInterest"[],
    "movieInterests" "MoviesInterest"[],
    "gamingInterests" "GamingInterest"[],
    "sportsInterests" "SportsInterest"[],
    "booksInterests" "BooksInterest"[],
    "travelInterests" "TravelInterest"[],
    "foodInterests" "FoodInterest"[],
    "artInterests" "ArtInterest"[],
    "technologyInterests" "TechnologyInterest"[],
    "natureInterests" "NatureInterest"[],
    "cultureInterests" "CultureInterest"[],
    "learningInterests" "LearningInterest"[],
    "socialInterests" "SocialInterest"[],
    "automotiveInterests" "AutomotiveInterest"[],
    "outdoorInterests" "OutdoorInterest"[],
    "personalInterests" "PersonalInterest"[],
    "collectingInterests" "CollectingInterest"[],
    "fashionInterests" "FashionInterest"[],
    "eventsInterests" "EventsInterest"[],
    "otherInterests" "OtherInterest"[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_preferences_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_filters" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "minAge" INTEGER,
    "maxAge" INTEGER,
    "minHeightCm" INTEGER,
    "maxHeightCm" INTEGER,
    "minShoulderWidthCm" INTEGER,
    "maxShoulderWidthCm" INTEGER,
    "minNeckCircumferenceCm" INTEGER,
    "maxNeckCircumferenceCm" INTEGER,
    "minChestCircumferenceCm" INTEGER,
    "maxChestCircumferenceCm" INTEGER,
    "minBustCircumferenceCm" INTEGER,
    "maxBustCircumferenceCm" INTEGER,
    "minUnderbustCircumferenceCm" INTEGER,
    "maxUnderbustCircumferenceCm" INTEGER,
    "minWaistCircumferenceCm" INTEGER,
    "maxWaistCircumferenceCm" INTEGER,
    "minHipCircumferenceCm" INTEGER,
    "maxHipCircumferenceCm" INTEGER,
    "minUpperArmCircumferenceCm" INTEGER,
    "maxUpperArmCircumferenceCm" INTEGER,
    "minForearmCircumferenceCm" INTEGER,
    "maxForearmCircumferenceCm" INTEGER,
    "minWristCircumferenceCm" INTEGER,
    "maxWristCircumferenceCm" INTEGER,
    "minArmLengthCm" INTEGER,
    "maxArmLengthCm" INTEGER,
    "minUpperArmLengthCm" INTEGER,
    "maxUpperArmLengthCm" INTEGER,
    "minForearmLengthCm" INTEGER,
    "maxForearmLengthCm" INTEGER,
    "minThighCircumferenceCm" INTEGER,
    "maxThighCircumferenceCm" INTEGER,
    "minKneeCircumferenceCm" INTEGER,
    "maxKneeCircumferenceCm" INTEGER,
    "minCalfCircumferenceCm" INTEGER,
    "maxCalfCircumferenceCm" INTEGER,
    "minAnkleCircumferenceCm" INTEGER,
    "maxAnkleCircumferenceCm" INTEGER,
    "minLegLengthCm" INTEGER,
    "maxLegLengthCm" INTEGER,
    "minInseamLengthCm" INTEGER,
    "maxInseamLengthCm" INTEGER,
    "minOutseamLengthCm" INTEGER,
    "maxOutseamLengthCm" INTEGER,
    "minHandLengthCm" INTEGER,
    "maxHandLengthCm" INTEGER,
    "minHandWidthCm" INTEGER,
    "maxHandWidthCm" INTEGER,
    "minFingerLengthCm" INTEGER,
    "maxFingerLengthCm" INTEGER,
    "lookingFor" "LookingFor"[],
    "gender" "GenderInterest"[],
    "sexuality" "SexualityInterest"[],
    "transStatus" "TransStatusInterest"[],
    "hairLength" "HairLength"[],
    "hairColor" "HairColor"[],
    "eyeColor" "EyeColor"[],
    "bodyType" "BodyType"[],
    "beard" "Beard"[],
    "bodyHair" "BodyHair"[],
    "ethnicity" "Ethnicity"[],
    "smoker" "Smoker"[],
    "tattoos" "Tattoos"[],
    "piercings" "Piercings"[],
    "position" "Position"[],
    "dickSize" "DickSize"[],
    "dickCircumcision" "DickCircumcision"[],
    "fetish" "Fetish"[],
    "sexualOpenness" "SexualOpenness"[],
    "fisting" "Fisting"[],
    "sadism" "Sadism"[],
    "masochism" "Masochism"[],
    "saferSex" "SaferSex"[],
    "openTo" "OpenTo"[],
    "cupSizes" "CupSize"[],
    "braSizes" "BraSize"[],
    "binderSizes" "BinderSize"[],
    "goingOutInterests" "GoingOutInterest"[],
    "lifestyleInterests" "LifestyleInterest"[],
    "musicInterests" "MusicInterest"[],
    "movieInterests" "MoviesInterest"[],
    "gamingInterests" "GamingInterest"[],
    "sportsInterests" "SportsInterest"[],
    "booksInterests" "BooksInterest"[],
    "travelInterests" "TravelInterest"[],
    "foodInterests" "FoodInterest"[],
    "artInterests" "ArtInterest"[],
    "technologyInterests" "TechnologyInterest"[],
    "natureInterests" "NatureInterest"[],
    "cultureInterests" "CultureInterest"[],
    "learningInterests" "LearningInterest"[],
    "socialInterests" "SocialInterest"[],
    "automotiveInterests" "AutomotiveInterest"[],
    "outdoorInterests" "OutdoorInterest"[],
    "personalInterests" "PersonalInterest"[],
    "collectingInterests" "CollectingInterest"[],
    "fashionInterests" "FashionInterest"[],
    "eventsInterests" "EventsInterest"[],
    "otherInterests" "OtherInterest"[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_filters_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "profile_visits" (
    "id" TEXT NOT NULL,
    "visitorId" TEXT NOT NULL,
    "visitedUserId" TEXT NOT NULL,
    "visitedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "profile_visits_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "group_visits" (
    "id" TEXT NOT NULL,
    "groupId" TEXT NOT NULL,
    "visitorId" TEXT NOT NULL,
    "visitedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "group_visits_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "galleries" (
    "id" TEXT NOT NULL,
    "ownerId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" "GalleryType" NOT NULL DEFAULT 'USER',
    "visibility" "GalleryVisibility" NOT NULL DEFAULT 'PRIVATE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "galleries_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "gallery_images" (
    "id" TEXT NOT NULL,
    "galleryId" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "storageKey" TEXT,
    "mimeType" TEXT,
    "fileSize" INTEGER,
    "width" INTEGER,
    "height" INTEGER,
    "isAvatar" BOOLEAN NOT NULL DEFAULT false,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "uploadedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "gallery_images_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "gallery_shares" (
    "id" TEXT NOT NULL,
    "galleryId" TEXT NOT NULL,
    "ownerId" TEXT NOT NULL,
    "recipientId" TEXT NOT NULL,
    "grantedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "revokedAt" TIMESTAMP(3),
    "purgeAfter" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "gallery_shares_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "groups" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "creatorId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "visibility" "GroupVisibility" NOT NULL DEFAULT 'PUBLIC',

    CONSTRAINT "groups_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "group_members" (
    "id" TEXT NOT NULL,
    "groupId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "role" "GroupMemberRole" NOT NULL DEFAULT 'MEMBER',
    "joinedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "group_members_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "group_join_requests" (
    "id" TEXT NOT NULL,
    "groupId" TEXT NOT NULL,
    "requesterId" TEXT NOT NULL,
    "status" "GroupJoinRequestStatus" NOT NULL DEFAULT 'PENDING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "respondedAt" TIMESTAMP(3),
    "respondedById" TEXT,

    CONSTRAINT "group_join_requests_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "group_invitations" (
    "id" TEXT NOT NULL,
    "groupId" TEXT NOT NULL,
    "senderId" TEXT NOT NULL,
    "receiverId" TEXT NOT NULL,
    "status" "GroupInvitationStatus" NOT NULL DEFAULT 'PENDING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "respondedAt" TIMESTAMP(3),

    CONSTRAINT "group_invitations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "blogs" (
    "id" TEXT NOT NULL,
    "authorId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "visibility" "BlogVisibility" NOT NULL DEFAULT 'PUBLIC',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "blogs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "blog_tags" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "blogId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "blog_tags_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "blog_likes" (
    "id" TEXT NOT NULL,
    "blogId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "blog_likes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_favorites" (
    "id" TEXT NOT NULL,
    "fromUserId" TEXT NOT NULL,
    "toUserId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_favorites_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_blocks" (
    "id" TEXT NOT NULL,
    "blockerId" TEXT NOT NULL,
    "blockedId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_blocks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "friend_requests" (
    "id" TEXT NOT NULL,
    "senderId" TEXT NOT NULL,
    "receiverId" TEXT NOT NULL,
    "status" "FriendRequestStatus" NOT NULL DEFAULT 'PENDING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "respondedAt" TIMESTAMP(3),

    CONSTRAINT "friend_requests_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "friendships" (
    "id" TEXT NOT NULL,
    "user1Id" TEXT NOT NULL,
    "user2Id" TEXT NOT NULL,
    "status" "FriendshipStatus" NOT NULL DEFAULT 'ACTIVE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "endedAt" TIMESTAMP(3),
    "pairKey" TEXT NOT NULL,

    CONSTRAINT "friendships_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "match_actions" (
    "id" TEXT NOT NULL,
    "fromUserId" TEXT NOT NULL,
    "toUserId" TEXT NOT NULL,
    "type" "MatchActionType" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "match_actions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "matches" (
    "id" TEXT NOT NULL,
    "user1Id" TEXT NOT NULL,
    "user2Id" TEXT NOT NULL,
    "status" "MatchStatus" NOT NULL DEFAULT 'ACTIVE',
    "matchedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "unmatchedAt" TIMESTAMP(3),
    "pairKey" TEXT NOT NULL,

    CONSTRAINT "matches_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "eye_candy_contests" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "startAt" TIMESTAMP(3) NOT NULL,
    "endAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "eye_candy_contests_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "eye_candy_participants" (
    "id" TEXT NOT NULL,
    "contestId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "countryCode" TEXT,
    "region" TEXT,
    "city" TEXT,
    "totalScore" INTEGER NOT NULL DEFAULT 0,
    "voteCount" INTEGER NOT NULL DEFAULT 0,
    "globalRank" INTEGER,
    "regionalRank" INTEGER,
    "participatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "eye_candy_participants_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "eye_candy_images" (
    "id" TEXT NOT NULL,
    "participantId" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "storageKey" TEXT,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "uploadedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "eye_candy_images_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "eye_candy_votes" (
    "id" TEXT NOT NULL,
    "contestId" TEXT NOT NULL,
    "voterId" TEXT NOT NULL,
    "candidateId" TEXT NOT NULL,
    "action" "EyeCandyAction" NOT NULL,
    "rating" INTEGER,
    "candidateCountryCode" TEXT,
    "candidateRegion" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "eye_candy_votes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "quick_displays" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" "RightNowDisplayType" NOT NULL DEFAULT 'ONE_HOUR',
    "startedAt" TIMESTAMP(3) NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "quick_displays_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "conversations" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "conversations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "conversation_participants" (
    "id" TEXT NOT NULL,
    "conversationId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "joinedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" TIMESTAMP(3),
    "lastReadAt" TIMESTAMP(3),

    CONSTRAINT "conversation_participants_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "messages" (
    "id" TEXT NOT NULL,
    "conversationId" TEXT NOT NULL,
    "senderId" TEXT NOT NULL,
    "type" "MessageType" NOT NULL DEFAULT 'TEXT',
    "content" TEXT,
    "sentAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "revokedAt" TIMESTAMP(3),

    CONSTRAINT "messages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "message_reads" (
    "id" TEXT NOT NULL,
    "messageId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "readAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "message_reads_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "message_attachments" (
    "id" TEXT NOT NULL,
    "messageId" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "storageKey" TEXT,
    "mimeType" TEXT,
    "fileSize" INTEGER,
    "width" INTEGER,
    "height" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "message_attachments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "notifications" (
    "id" TEXT NOT NULL,
    "recipientId" TEXT NOT NULL,
    "actorId" TEXT,
    "type" "NotificationType" NOT NULL,
    "title" TEXT,
    "message" TEXT,
    "entityId" TEXT,
    "entityType" TEXT,
    "readAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "notifications_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "reports" (
    "id" TEXT NOT NULL,
    "reporterId" TEXT NOT NULL,
    "targetId" TEXT,
    "targetUserId" TEXT,
    "type" "ReportType" NOT NULL,
    "reason" TEXT NOT NULL,
    "description" TEXT,
    "status" "ReportStatus" NOT NULL DEFAULT 'PENDING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "resolvedAt" TIMESTAMP(3),

    CONSTRAINT "reports_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "moderation_actions" (
    "id" TEXT NOT NULL,
    "moderatorId" TEXT NOT NULL,
    "targetUserId" TEXT,
    "action" "ModerationActionType" NOT NULL,
    "reason" TEXT,
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "moderation_actions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "vip_plans" (
    "id" TEXT NOT NULL,
    "tier" "VipTier" NOT NULL,
    "name" TEXT NOT NULL,
    "price" DECIMAL(10,2) NOT NULL,
    "durationDays" INTEGER NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "features" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "vip_plans_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_subscriptions" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "planId" TEXT NOT NULL,
    "status" "SubscriptionStatus" NOT NULL DEFAULT 'PENDING',
    "startedAt" TIMESTAMP(3) NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "cancelledAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_subscriptions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "subscription_payments" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "planId" TEXT NOT NULL,
    "subscriptionId" TEXT,
    "amount" DECIMAL(10,2) NOT NULL,
    "currency" TEXT NOT NULL DEFAULT 'HUF',
    "status" "PaymentStatus" NOT NULL DEFAULT 'PENDING',
    "provider" TEXT,
    "providerPaymentId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "completedAt" TIMESTAMP(3),

    CONSTRAINT "subscription_payments_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_partnerUserId_key" ON "users"("partnerUserId");

-- CreateIndex
CREATE INDEX "users_lat_lng_idx" ON "users"("lat", "lng");

-- CreateIndex
CREATE INDEX "users_locationEnabled_idx" ON "users"("locationEnabled");

-- CreateIndex
CREATE INDEX "users_status_idx" ON "users"("status");

-- CreateIndex
CREATE INDEX "users_createdAt_idx" ON "users"("createdAt");

-- CreateIndex
CREATE INDEX "users_lastActiveAt_idx" ON "users"("lastActiveAt");

-- CreateIndex
CREATE INDEX "users_partnerUserId_idx" ON "users"("partnerUserId");

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
CREATE INDEX "user_data_countryCode_idx" ON "user_data"("countryCode");

-- CreateIndex
CREATE INDEX "user_data_region_idx" ON "user_data"("region");

-- CreateIndex
CREATE INDEX "user_data_city_idx" ON "user_data"("city");

-- CreateIndex
CREATE INDEX "user_data_appCity_idx" ON "user_data"("appCity");

-- CreateIndex
CREATE UNIQUE INDEX "user_preferences_userId_key" ON "user_preferences"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "user_filters_userId_key" ON "user_filters"("userId");

-- CreateIndex
CREATE INDEX "profile_visits_visitedUserId_visitedAt_idx" ON "profile_visits"("visitedUserId", "visitedAt");

-- CreateIndex
CREATE INDEX "profile_visits_visitorId_visitedAt_idx" ON "profile_visits"("visitorId", "visitedAt");

-- CreateIndex
CREATE INDEX "group_visits_groupId_visitedAt_idx" ON "group_visits"("groupId", "visitedAt");

-- CreateIndex
CREATE INDEX "group_visits_visitorId_visitedAt_idx" ON "group_visits"("visitorId", "visitedAt");

-- CreateIndex
CREATE INDEX "galleries_ownerId_idx" ON "galleries"("ownerId");

-- CreateIndex
CREATE INDEX "galleries_visibility_idx" ON "galleries"("visibility");

-- CreateIndex
CREATE UNIQUE INDEX "galleries_ownerId_name_key" ON "galleries"("ownerId", "name");

-- CreateIndex
CREATE INDEX "gallery_images_galleryId_sortOrder_idx" ON "gallery_images"("galleryId", "sortOrder");

-- CreateIndex
CREATE INDEX "gallery_images_galleryId_uploadedAt_idx" ON "gallery_images"("galleryId", "uploadedAt");

-- CreateIndex
CREATE INDEX "gallery_images_galleryId_isAvatar_idx" ON "gallery_images"("galleryId", "isAvatar");

-- CreateIndex
CREATE INDEX "gallery_shares_galleryId_recipientId_idx" ON "gallery_shares"("galleryId", "recipientId");

-- CreateIndex
CREATE INDEX "gallery_shares_recipientId_expiresAt_idx" ON "gallery_shares"("recipientId", "expiresAt");

-- CreateIndex
CREATE INDEX "gallery_shares_expiresAt_idx" ON "gallery_shares"("expiresAt");

-- CreateIndex
CREATE INDEX "gallery_shares_purgeAfter_idx" ON "gallery_shares"("purgeAfter");

-- CreateIndex
CREATE INDEX "groups_creatorId_idx" ON "groups"("creatorId");

-- CreateIndex
CREATE INDEX "groups_visibility_idx" ON "groups"("visibility");

-- CreateIndex
CREATE INDEX "groups_createdAt_idx" ON "groups"("createdAt");

-- CreateIndex
CREATE INDEX "group_members_userId_idx" ON "group_members"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "group_members_groupId_userId_key" ON "group_members"("groupId", "userId");

-- CreateIndex
CREATE INDEX "group_join_requests_groupId_status_idx" ON "group_join_requests"("groupId", "status");

-- CreateIndex
CREATE INDEX "group_join_requests_requesterId_status_idx" ON "group_join_requests"("requesterId", "status");

-- CreateIndex
CREATE UNIQUE INDEX "group_join_requests_groupId_requesterId_key" ON "group_join_requests"("groupId", "requesterId");

-- CreateIndex
CREATE INDEX "group_invitations_groupId_receiverId_idx" ON "group_invitations"("groupId", "receiverId");

-- CreateIndex
CREATE INDEX "group_invitations_receiverId_status_idx" ON "group_invitations"("receiverId", "status");

-- CreateIndex
CREATE INDEX "blogs_authorId_createdAt_idx" ON "blogs"("authorId", "createdAt");

-- CreateIndex
CREATE INDEX "blogs_visibility_createdAt_idx" ON "blogs"("visibility", "createdAt");

-- CreateIndex
CREATE INDEX "blog_tags_name_idx" ON "blog_tags"("name");

-- CreateIndex
CREATE UNIQUE INDEX "blog_tags_blogId_name_key" ON "blog_tags"("blogId", "name");

-- CreateIndex
CREATE INDEX "blog_likes_userId_idx" ON "blog_likes"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "blog_likes_blogId_userId_key" ON "blog_likes"("blogId", "userId");

-- CreateIndex
CREATE INDEX "user_favorites_toUserId_idx" ON "user_favorites"("toUserId");

-- CreateIndex
CREATE UNIQUE INDEX "user_favorites_fromUserId_toUserId_key" ON "user_favorites"("fromUserId", "toUserId");

-- CreateIndex
CREATE INDEX "user_blocks_blockedId_idx" ON "user_blocks"("blockedId");

-- CreateIndex
CREATE UNIQUE INDEX "user_blocks_blockerId_blockedId_key" ON "user_blocks"("blockerId", "blockedId");

-- CreateIndex
CREATE INDEX "friend_requests_receiverId_status_idx" ON "friend_requests"("receiverId", "status");

-- CreateIndex
CREATE INDEX "friend_requests_senderId_status_idx" ON "friend_requests"("senderId", "status");

-- CreateIndex
CREATE UNIQUE INDEX "friend_requests_senderId_receiverId_key" ON "friend_requests"("senderId", "receiverId");

-- CreateIndex
CREATE UNIQUE INDEX "friendships_pairKey_key" ON "friendships"("pairKey");

-- CreateIndex
CREATE INDEX "friendships_user1Id_idx" ON "friendships"("user1Id");

-- CreateIndex
CREATE INDEX "friendships_user2Id_idx" ON "friendships"("user2Id");

-- CreateIndex
CREATE INDEX "friendships_status_idx" ON "friendships"("status");

-- CreateIndex
CREATE INDEX "match_actions_toUserId_idx" ON "match_actions"("toUserId");

-- CreateIndex
CREATE UNIQUE INDEX "match_actions_fromUserId_toUserId_key" ON "match_actions"("fromUserId", "toUserId");

-- CreateIndex
CREATE UNIQUE INDEX "matches_pairKey_key" ON "matches"("pairKey");

-- CreateIndex
CREATE INDEX "matches_user2Id_idx" ON "matches"("user2Id");

-- CreateIndex
CREATE INDEX "matches_status_idx" ON "matches"("status");

-- CreateIndex
CREATE UNIQUE INDEX "matches_user1Id_user2Id_key" ON "matches"("user1Id", "user2Id");

-- CreateIndex
CREATE INDEX "eye_candy_contests_startAt_endAt_idx" ON "eye_candy_contests"("startAt", "endAt");

-- CreateIndex
CREATE INDEX "eye_candy_participants_contestId_totalScore_idx" ON "eye_candy_participants"("contestId", "totalScore");

-- CreateIndex
CREATE INDEX "eye_candy_participants_contestId_region_totalScore_idx" ON "eye_candy_participants"("contestId", "region", "totalScore");

-- CreateIndex
CREATE UNIQUE INDEX "eye_candy_participants_contestId_userId_key" ON "eye_candy_participants"("contestId", "userId");

-- CreateIndex
CREATE INDEX "eye_candy_images_participantId_sortOrder_idx" ON "eye_candy_images"("participantId", "sortOrder");

-- CreateIndex
CREATE INDEX "eye_candy_votes_contestId_candidateId_idx" ON "eye_candy_votes"("contestId", "candidateId");

-- CreateIndex
CREATE INDEX "eye_candy_votes_contestId_voterId_idx" ON "eye_candy_votes"("contestId", "voterId");

-- CreateIndex
CREATE INDEX "eye_candy_votes_createdAt_idx" ON "eye_candy_votes"("createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "eye_candy_votes_contestId_voterId_candidateId_key" ON "eye_candy_votes"("contestId", "voterId", "candidateId");

-- CreateIndex
CREATE INDEX "quick_displays_userId_expiresAt_idx" ON "quick_displays"("userId", "expiresAt");

-- CreateIndex
CREATE INDEX "quick_displays_expiresAt_idx" ON "quick_displays"("expiresAt");

-- CreateIndex
CREATE INDEX "conversations_updatedAt_idx" ON "conversations"("updatedAt");

-- CreateIndex
CREATE INDEX "conversation_participants_userId_deletedAt_idx" ON "conversation_participants"("userId", "deletedAt");

-- CreateIndex
CREATE UNIQUE INDEX "conversation_participants_conversationId_userId_key" ON "conversation_participants"("conversationId", "userId");

-- CreateIndex
CREATE INDEX "messages_conversationId_sentAt_idx" ON "messages"("conversationId", "sentAt");

-- CreateIndex
CREATE INDEX "messages_senderId_sentAt_idx" ON "messages"("senderId", "sentAt");

-- CreateIndex
CREATE INDEX "message_reads_userId_readAt_idx" ON "message_reads"("userId", "readAt");

-- CreateIndex
CREATE UNIQUE INDEX "message_reads_messageId_userId_key" ON "message_reads"("messageId", "userId");

-- CreateIndex
CREATE INDEX "message_attachments_messageId_idx" ON "message_attachments"("messageId");

-- CreateIndex
CREATE INDEX "notifications_recipientId_readAt_createdAt_idx" ON "notifications"("recipientId", "readAt", "createdAt");

-- CreateIndex
CREATE INDEX "notifications_actorId_createdAt_idx" ON "notifications"("actorId", "createdAt");

-- CreateIndex
CREATE INDEX "reports_reporterId_createdAt_idx" ON "reports"("reporterId", "createdAt");

-- CreateIndex
CREATE INDEX "reports_status_createdAt_idx" ON "reports"("status", "createdAt");

-- CreateIndex
CREATE INDEX "reports_targetUserId_idx" ON "reports"("targetUserId");

-- CreateIndex
CREATE INDEX "moderation_actions_moderatorId_createdAt_idx" ON "moderation_actions"("moderatorId", "createdAt");

-- CreateIndex
CREATE INDEX "moderation_actions_targetUserId_createdAt_idx" ON "moderation_actions"("targetUserId", "createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "vip_plans_tier_key" ON "vip_plans"("tier");

-- CreateIndex
CREATE INDEX "user_subscriptions_userId_status_idx" ON "user_subscriptions"("userId", "status");

-- CreateIndex
CREATE INDEX "user_subscriptions_userId_expiresAt_idx" ON "user_subscriptions"("userId", "expiresAt");

-- CreateIndex
CREATE INDEX "user_subscriptions_expiresAt_idx" ON "user_subscriptions"("expiresAt");

-- CreateIndex
CREATE INDEX "subscription_payments_userId_createdAt_idx" ON "subscription_payments"("userId", "createdAt");

-- CreateIndex
CREATE INDEX "subscription_payments_subscriptionId_idx" ON "subscription_payments"("subscriptionId");

-- CreateIndex
CREATE INDEX "subscription_payments_providerPaymentId_idx" ON "subscription_payments"("providerPaymentId");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_partnerUserId_fkey" FOREIGN KEY ("partnerUserId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "refresh_tokens" ADD CONSTRAINT "refresh_tokens_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "verification_tokens" ADD CONSTRAINT "verification_tokens_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_data" ADD CONSTRAINT "user_data_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_preferences" ADD CONSTRAINT "user_preferences_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_filters" ADD CONSTRAINT "user_filters_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "profile_visits" ADD CONSTRAINT "profile_visits_visitedUserId_fkey" FOREIGN KEY ("visitedUserId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "profile_visits" ADD CONSTRAINT "profile_visits_visitorId_fkey" FOREIGN KEY ("visitorId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "group_visits" ADD CONSTRAINT "group_visits_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "groups"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "group_visits" ADD CONSTRAINT "group_visits_visitorId_fkey" FOREIGN KEY ("visitorId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "galleries" ADD CONSTRAINT "galleries_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "gallery_images" ADD CONSTRAINT "gallery_images_galleryId_fkey" FOREIGN KEY ("galleryId") REFERENCES "galleries"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "gallery_shares" ADD CONSTRAINT "gallery_shares_galleryId_fkey" FOREIGN KEY ("galleryId") REFERENCES "galleries"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "gallery_shares" ADD CONSTRAINT "gallery_shares_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "gallery_shares" ADD CONSTRAINT "gallery_shares_recipientId_fkey" FOREIGN KEY ("recipientId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "groups" ADD CONSTRAINT "groups_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "group_members" ADD CONSTRAINT "group_members_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "groups"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "group_members" ADD CONSTRAINT "group_members_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "group_join_requests" ADD CONSTRAINT "group_join_requests_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "groups"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "group_join_requests" ADD CONSTRAINT "group_join_requests_requesterId_fkey" FOREIGN KEY ("requesterId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "group_join_requests" ADD CONSTRAINT "group_join_requests_respondedById_fkey" FOREIGN KEY ("respondedById") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "group_invitations" ADD CONSTRAINT "group_invitations_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "groups"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "group_invitations" ADD CONSTRAINT "group_invitations_receiverId_fkey" FOREIGN KEY ("receiverId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "group_invitations" ADD CONSTRAINT "group_invitations_senderId_fkey" FOREIGN KEY ("senderId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "blogs" ADD CONSTRAINT "blogs_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "blog_tags" ADD CONSTRAINT "blog_tags_blogId_fkey" FOREIGN KEY ("blogId") REFERENCES "blogs"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "blog_likes" ADD CONSTRAINT "blog_likes_blogId_fkey" FOREIGN KEY ("blogId") REFERENCES "blogs"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "blog_likes" ADD CONSTRAINT "blog_likes_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_favorites" ADD CONSTRAINT "user_favorites_fromUserId_fkey" FOREIGN KEY ("fromUserId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_favorites" ADD CONSTRAINT "user_favorites_toUserId_fkey" FOREIGN KEY ("toUserId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_blocks" ADD CONSTRAINT "user_blocks_blockedId_fkey" FOREIGN KEY ("blockedId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_blocks" ADD CONSTRAINT "user_blocks_blockerId_fkey" FOREIGN KEY ("blockerId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "friend_requests" ADD CONSTRAINT "friend_requests_receiverId_fkey" FOREIGN KEY ("receiverId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "friend_requests" ADD CONSTRAINT "friend_requests_senderId_fkey" FOREIGN KEY ("senderId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "friendships" ADD CONSTRAINT "friendships_user1Id_fkey" FOREIGN KEY ("user1Id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "friendships" ADD CONSTRAINT "friendships_user2Id_fkey" FOREIGN KEY ("user2Id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "match_actions" ADD CONSTRAINT "match_actions_fromUserId_fkey" FOREIGN KEY ("fromUserId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "match_actions" ADD CONSTRAINT "match_actions_toUserId_fkey" FOREIGN KEY ("toUserId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "matches" ADD CONSTRAINT "matches_user1Id_fkey" FOREIGN KEY ("user1Id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "matches" ADD CONSTRAINT "matches_user2Id_fkey" FOREIGN KEY ("user2Id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "eye_candy_participants" ADD CONSTRAINT "eye_candy_participants_contestId_fkey" FOREIGN KEY ("contestId") REFERENCES "eye_candy_contests"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "eye_candy_participants" ADD CONSTRAINT "eye_candy_participants_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "eye_candy_images" ADD CONSTRAINT "eye_candy_images_participantId_fkey" FOREIGN KEY ("participantId") REFERENCES "eye_candy_participants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "eye_candy_votes" ADD CONSTRAINT "eye_candy_votes_candidateId_fkey" FOREIGN KEY ("candidateId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "eye_candy_votes" ADD CONSTRAINT "eye_candy_votes_contestId_fkey" FOREIGN KEY ("contestId") REFERENCES "eye_candy_contests"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "eye_candy_votes" ADD CONSTRAINT "eye_candy_votes_voterId_fkey" FOREIGN KEY ("voterId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "quick_displays" ADD CONSTRAINT "quick_displays_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "conversation_participants" ADD CONSTRAINT "conversation_participants_conversationId_fkey" FOREIGN KEY ("conversationId") REFERENCES "conversations"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "conversation_participants" ADD CONSTRAINT "conversation_participants_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "messages" ADD CONSTRAINT "messages_conversationId_fkey" FOREIGN KEY ("conversationId") REFERENCES "conversations"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "messages" ADD CONSTRAINT "messages_senderId_fkey" FOREIGN KEY ("senderId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "message_reads" ADD CONSTRAINT "message_reads_messageId_fkey" FOREIGN KEY ("messageId") REFERENCES "messages"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "message_reads" ADD CONSTRAINT "message_reads_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "message_attachments" ADD CONSTRAINT "message_attachments_messageId_fkey" FOREIGN KEY ("messageId") REFERENCES "messages"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notifications" ADD CONSTRAINT "notifications_actorId_fkey" FOREIGN KEY ("actorId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notifications" ADD CONSTRAINT "notifications_recipientId_fkey" FOREIGN KEY ("recipientId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reports" ADD CONSTRAINT "reports_reporterId_fkey" FOREIGN KEY ("reporterId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reports" ADD CONSTRAINT "reports_targetUserId_fkey" FOREIGN KEY ("targetUserId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "moderation_actions" ADD CONSTRAINT "moderation_actions_moderatorId_fkey" FOREIGN KEY ("moderatorId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_subscriptions" ADD CONSTRAINT "user_subscriptions_planId_fkey" FOREIGN KEY ("planId") REFERENCES "vip_plans"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_subscriptions" ADD CONSTRAINT "user_subscriptions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "subscription_payments" ADD CONSTRAINT "subscription_payments_planId_fkey" FOREIGN KEY ("planId") REFERENCES "vip_plans"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "subscription_payments" ADD CONSTRAINT "subscription_payments_subscriptionId_fkey" FOREIGN KEY ("subscriptionId") REFERENCES "user_subscriptions"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "subscription_payments" ADD CONSTRAINT "subscription_payments_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
