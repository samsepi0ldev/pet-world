/*
  Warnings:

  - You are about to alter the column `hours` on the `Schedule` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Schedule" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "client_name" TEXT NOT NULL,
    "pet_name" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "description_service" TEXT NOT NULL,
    "service_to" DATETIME NOT NULL,
    "hours" BIGINT NOT NULL
);
INSERT INTO "new_Schedule" ("client_name", "description_service", "hours", "id", "pet_name", "phone_number", "service_to") SELECT "client_name", "description_service", "hours", "id", "pet_name", "phone_number", "service_to" FROM "Schedule";
DROP TABLE "Schedule";
ALTER TABLE "new_Schedule" RENAME TO "Schedule";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
