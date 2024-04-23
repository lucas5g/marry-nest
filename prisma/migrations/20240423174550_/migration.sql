/*
  Warnings:

  - Added the required column `emailOrName` to the `Sale` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Sale` ADD COLUMN `emailOrName` VARCHAR(191) NOT NULL;
