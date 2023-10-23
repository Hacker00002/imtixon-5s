-- CreateTable
CREATE TABLE "language" (
    "id" UUID NOT NULL DEFAULT GEN_RANDOM_UUID(),
    "language_code" VARCHAR(2) NOT NULL,
    "language_title" VARCHAR(64) NOT NULL,

    CONSTRAINT "language_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "language_language_code_key" ON "language"("language_code");
