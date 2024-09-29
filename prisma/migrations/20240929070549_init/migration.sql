/*
  Warnings:

  - You are about to drop the column `category_id` on the `Homework` table. All the data in the column will be lost.
  - You are about to drop the column `end_date` on the `Homework` table. All the data in the column will be lost.
  - You are about to drop the column `start_date` on the `Homework` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `Homework` table. All the data in the column will be lost.
  - You are about to drop the column `first_name` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `last_name` on the `User` table. All the data in the column will be lost.
  - Added the required column `categoryId` to the `Homework` table without a default value. This is not possible if the table is not empty.
  - Added the required column `endDate` to the `Homework` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startDate` to the `Homework` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Homework` table without a default value. This is not possible if the table is not empty.
  - Added the required column `firstName` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastName` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Homework" DROP CONSTRAINT "Homework_category_id_fkey";

-- DropForeignKey
ALTER TABLE "Homework" DROP CONSTRAINT "Homework_user_id_fkey";

-- AlterTable
ALTER TABLE "Homework" DROP COLUMN "category_id",
DROP COLUMN "end_date",
DROP COLUMN "start_date",
DROP COLUMN "user_id",
ADD COLUMN     "categoryId" TEXT NOT NULL,
ADD COLUMN     "endDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "startDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "first_name",
DROP COLUMN "last_name",
ADD COLUMN     "firstName" TEXT NOT NULL,
ADD COLUMN     "lastName" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Homework" ADD CONSTRAINT "Homework_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Homework" ADD CONSTRAINT "Homework_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
