import type { Kysely } from "kysely";
import type { Database } from "./schema";

/**
 * Retrieves the Ayahs (verses) by the given Surah number and Edition ID.
 * @param db - The database instance.
 * @param surahNumber - The Surah number.
 * @param editionId - The Edition ID.
 * @returns A Promise that resolves to the Ayahs matching the given Surah number and Edition ID.
 */
export async function getAyahsBySurahNumberAndEditionID(
  db: Kysely<Database>,
  surahNumber: number,
  editionId: number,
) {
  try {
    const ayahs = await db
      .selectFrom("ayah")
      .selectAll()
      .where("ayah.surahNumber", "=", surahNumber)
      .where("ayah.editionId", "=", editionId)
      .execute();

    return ayahs;
  } catch (error) {
    console.error("Error fetching ayahs:", error);
    throw new Error("Failed to fetch ayahs");
  }
}

/**
 * Retrieves the Ayah by the given Surah number, Ayah number, and Edition ID.
 * @param db - The database instance.
 * @param surahNumber - The Surah number.
 * @param ayahNumber - The Ayah number.
 * @param editionId - The Edition ID.
 * @returns A Promise that resolves to the Ayah matching the given Surah number, Ayah number, and Edition ID.
 */
export async function getAyahBySurahNumberAyahNumberAndEditionID(
  db: Kysely<Database>,
  surahNumber: number,
  ayahNumber: number,
  editionId: number,
) {
  return db
    .selectFrom("ayah")
    .selectAll()
    .where("ayah.surahNumber", "=", surahNumber)
    .where("ayah.ayahNumber", "=", ayahNumber)
    .where("ayah.editionId", "=", editionId)
    .execute();
}

/**
 * Retrieves the Ayahs by the specified edition ID.
 * @param db - The database instance.
 * @param editionId - The ID of the edition.
 * @returns A Promise that resolves to the Ayahs matching the specified edition ID.
 */
export async function getAyahsByEditionID(
  db: Kysely<Database>,
  editionId: number,
) {
  return db
    .selectFrom("ayah")
    .selectAll()
    .where("ayah.editionId", "=", editionId)
    .execute();
}
/**
 * Retrieves the ayahs by the specified surah number.
 *
 * @param surahNumber - The number of the surah.
 * @returns A promise that resolves to the ayahs matching the surah number.
 */
export async function getAyahsBySurahNumber(
  db: Kysely<Database>,
  surahNumber: number,
) {
  const statement = db
    .selectFrom("ayah")
    .selectAll()
    .where("ayah.surahNumber", "=", surahNumber);

  const sqlStatement = statement.compile();
  console.log(sqlStatement.sql);

  return statement.execute();
}
