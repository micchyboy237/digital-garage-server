-- CreateEnum
CREATE TYPE "AuthProvider" AS ENUM ('EMAIL_PASSWORD', 'GOOGLE', 'APPLE');

-- CreateEnum
CREATE TYPE "AccountStatus" AS ENUM ('ONBOARDING', 'SELECT_SUBSCRIPTION', 'ACTIVE');

-- CreateEnum
CREATE TYPE "SubscriptionPlan" AS ENUM ('DAY', 'WEEK', 'MONTH', 'YEAR');

-- CreateEnum
CREATE TYPE "SubscriptionStatus" AS ENUM ('ACTIVE', 'CANCELED', 'EXPIRED');

-- CreateEnum
CREATE TYPE "PaymentStatus" AS ENUM ('PAID', 'REFUNDED', 'FAILED');

-- CreateEnum
CREATE TYPE "TransferStatus" AS ENUM ('REQUESTED', 'ACCEPTED', 'REJECTED');

-- CreateEnum
CREATE TYPE "FieldType" AS ENUM ('STRING', 'NUMBER', 'DATE', 'BOOLEAN');

-- CreateEnum
CREATE TYPE "PostCategory" AS ENUM ('GALLERY', 'HISTORY');

-- CreateEnum
CREATE TYPE "PostType" AS ENUM ('REMINDER', 'INVOICE', 'DOCUMENT');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "firebaseUid" TEXT NOT NULL,
    "isEmailVerified" BOOLEAN NOT NULL DEFAULT false,
    "firstName" TEXT,
    "lastName" TEXT,
    "displayPicture" TEXT,
    "location" TEXT,
    "accountStatus" "AccountStatus" NOT NULL DEFAULT 'ONBOARDING',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "provider" "AuthProvider" NOT NULL,
    "deviceFingerprint" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Subscription" (
    "id" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "plan" "SubscriptionPlan",
    "status" "SubscriptionStatus" NOT NULL DEFAULT 'ACTIVE',
    "startDate" TIMESTAMP(3),
    "endDate" TIMESTAMP(3),
    "expiresAt" TIMESTAMP(3),
    "userId" TEXT NOT NULL,

    CONSTRAINT "Subscription_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Payment" (
    "id" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "currencyCode" TEXT NOT NULL,
    "status" "PaymentStatus" NOT NULL,
    "transactionId" TEXT NOT NULL,
    "transactionDate" TIMESTAMP(3) NOT NULL,
    "subscriptionId" TEXT NOT NULL,

    CONSTRAINT "Payment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Photo" (
    "id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "thumbnailUrl" TEXT NOT NULL,
    "postId" TEXT,
    "ownershipId" TEXT,

    CONSTRAINT "Photo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ownership" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "vehicleId" TEXT NOT NULL,
    "isCurrentOwner" BOOLEAN NOT NULL DEFAULT true,
    "startDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "endDate" TIMESTAMP(3),
    "excludedPosts" TEXT[],
    "excludedPhotos" TEXT[],
    "excludedDocs" TEXT[],

    CONSTRAINT "Ownership_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Vehicle" (
    "id" TEXT NOT NULL,
    "make" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "registrationNumber" TEXT NOT NULL,
    "ownerId" TEXT NOT NULL,

    CONSTRAINT "Vehicle_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VehicleDetails" (
    "id" TEXT NOT NULL,
    "make" TEXT NOT NULL,
    "registrationNumber" TEXT NOT NULL,
    "colour" TEXT NOT NULL,
    "yearOfManufacture" INTEGER NOT NULL,
    "taxStatus" TEXT NOT NULL,
    "taxDueDate" TIMESTAMP(3) NOT NULL,
    "motStatus" TEXT NOT NULL,
    "engineCapacity" INTEGER NOT NULL,
    "co2Emissions" INTEGER NOT NULL,
    "fuelType" TEXT NOT NULL,
    "markedForExport" BOOLEAN NOT NULL,
    "typeApproval" TEXT NOT NULL,
    "wheelplan" TEXT NOT NULL,
    "artEndDate" TIMESTAMP(3),
    "motExpiryDate" TIMESTAMP(3),
    "monthOfFirstRegistration" TIMESTAMP(3),
    "euroStatus" TEXT,
    "dateOfLastV5CIssued" TIMESTAMP(3),
    "realDrivingEmissions" TEXT,
    "revenueWeight" INTEGER,

    CONSTRAINT "VehicleDetails_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VehicleTransfer" (
    "id" TEXT NOT NULL,
    "vehicleId" TEXT NOT NULL,
    "senderId" TEXT NOT NULL,
    "recipientId" TEXT NOT NULL,
    "status" "TransferStatus" NOT NULL DEFAULT 'REQUESTED',
    "transferDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "responseDate" TIMESTAMP(3),
    "reason" TEXT,

    CONSTRAINT "VehicleTransfer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VehicleDocument" (
    "id" TEXT NOT NULL,
    "fileUrl" TEXT NOT NULL,
    "mimeType" TEXT NOT NULL,
    "postId" TEXT,
    "ownershipId" TEXT,

    CONSTRAINT "VehicleDocument_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VehiclePost" (
    "id" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "title" TEXT NOT NULL,
    "category" "PostCategory" NOT NULL DEFAULT 'GALLERY',
    "description" TEXT,
    "type" "PostType",
    "createdById" TEXT NOT NULL,
    "ownershipId" TEXT,

    CONSTRAINT "VehiclePost_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_firebaseUid_key" ON "User"("firebaseUid");

-- CreateIndex
CREATE UNIQUE INDEX "Session_token_key" ON "Session"("token");

-- CreateIndex
CREATE UNIQUE INDEX "Session_deviceFingerprint_key" ON "Session"("deviceFingerprint");

-- CreateIndex
CREATE UNIQUE INDEX "Session_deviceFingerprint_userId_key" ON "Session"("deviceFingerprint", "userId");

-- CreateIndex
CREATE UNIQUE INDEX "Subscription_userId_key" ON "Subscription"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Photo_ownershipId_key" ON "Photo"("ownershipId");

-- CreateIndex
CREATE UNIQUE INDEX "Ownership_userId_vehicleId_key" ON "Ownership"("userId", "vehicleId");

-- CreateIndex
CREATE UNIQUE INDEX "Vehicle_registrationNumber_key" ON "Vehicle"("registrationNumber");

-- CreateIndex
CREATE UNIQUE INDEX "VehicleDetails_registrationNumber_key" ON "VehicleDetails"("registrationNumber");

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Subscription" ADD CONSTRAINT "Subscription_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_subscriptionId_fkey" FOREIGN KEY ("subscriptionId") REFERENCES "Subscription"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Photo" ADD CONSTRAINT "Photo_postId_fkey" FOREIGN KEY ("postId") REFERENCES "VehiclePost"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Photo" ADD CONSTRAINT "Photo_ownershipId_fkey" FOREIGN KEY ("ownershipId") REFERENCES "Ownership"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ownership" ADD CONSTRAINT "Ownership_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ownership" ADD CONSTRAINT "Ownership_vehicleId_fkey" FOREIGN KEY ("vehicleId") REFERENCES "Vehicle"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vehicle" ADD CONSTRAINT "Vehicle_registrationNumber_fkey" FOREIGN KEY ("registrationNumber") REFERENCES "VehicleDetails"("registrationNumber") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vehicle" ADD CONSTRAINT "Vehicle_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VehicleTransfer" ADD CONSTRAINT "VehicleTransfer_vehicleId_fkey" FOREIGN KEY ("vehicleId") REFERENCES "Vehicle"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VehicleTransfer" ADD CONSTRAINT "VehicleTransfer_senderId_fkey" FOREIGN KEY ("senderId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VehicleTransfer" ADD CONSTRAINT "VehicleTransfer_recipientId_fkey" FOREIGN KEY ("recipientId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VehicleDocument" ADD CONSTRAINT "VehicleDocument_postId_fkey" FOREIGN KEY ("postId") REFERENCES "VehiclePost"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VehicleDocument" ADD CONSTRAINT "VehicleDocument_ownershipId_fkey" FOREIGN KEY ("ownershipId") REFERENCES "Ownership"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VehiclePost" ADD CONSTRAINT "VehiclePost_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VehiclePost" ADD CONSTRAINT "VehiclePost_ownershipId_fkey" FOREIGN KEY ("ownershipId") REFERENCES "Ownership"("id") ON DELETE CASCADE ON UPDATE CASCADE;
