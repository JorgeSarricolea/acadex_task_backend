-- CreateEnum
CREATE TYPE "Status" AS ENUM ('TO_DO', 'IN_PROGRESS', 'DONE');

-- AlterTable
ALTER TABLE "Homework" ADD COLUMN     "status" "Status" NOT NULL DEFAULT 'TO_DO';
