/*
  Warnings:

  - You are about to drop the column `book_type` on the `book` table. All the data in the column will be lost.
  - Added the required column `book_price` to the `book` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "book" DROP COLUMN "book_type",
ADD COLUMN     "book_price" VARCHAR(100) NOT NULL;
