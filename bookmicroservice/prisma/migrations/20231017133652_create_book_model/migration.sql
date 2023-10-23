-- CreateTable
CREATE TABLE "book" (
    "id" UUID NOT NULL DEFAULT GEN_RANDOM_UUID(),
    "book_name" VARCHAR(100) NOT NULL,
    "book_type" VARCHAR(100) NOT NULL,
    "book_picture" VARCHAR NOT NULL,
    "book_description" VARCHAR(150) NOT NULL,

    CONSTRAINT "book_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "book_book_name_key" ON "book"("book_name");
