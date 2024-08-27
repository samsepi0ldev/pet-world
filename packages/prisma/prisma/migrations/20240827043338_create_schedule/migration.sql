-- CreateTable
CREATE TABLE "Schedule" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "client_name" TEXT NOT NULL,
    "pet_name" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "description_service" TEXT NOT NULL,
    "service_to" DATETIME NOT NULL,
    "hours" INTEGER NOT NULL
);
