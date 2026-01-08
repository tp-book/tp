/**
 * wordsFileToString.ts
 *
 * Fonctions utilitaires pour transformer un fichier "un mot par ligne"
 * en une chaîne où les mots sont séparés par des blancs.
 *
 * - Node.js: wordsFileToStringFromPath(filePath, separator)
 * - Navigateur: wordsFileToStringFromBlob(file, separator)
 */

import { promises as fs } from "node:fs";

/**
 * Nettoie le contenu : découpe par ligne, trim, enlève les lignes vides.
 */
function normalizeLinesToWords(content: string): string[] {
  return content
    .split(/\r?\n/)          // gère \n et \r\n
    .map(line => line.trim())// supprime espaces en début/fin
    .filter(Boolean);        // enlève lignes vides
}

/**
 * Node.js — lit un fichier depuis le système de fichiers et retourne
 * une string où les mots sont séparés par `separator` (par défaut un espace).
 *
 * @param filePath Chemin vers le fichier texte
 * @param separator Séparateur entre les mots dans la chaîne résultante (défaut: ' ')
 * @returns Promise<string> chaîne contenant tous les mots séparés
 */
export async function wordsFileToStringFromPath(
  filePath: string,
  separator = " "
): Promise<string> {
  const data = await fs.readFile(filePath, "utf8");
  const words = normalizeLinesToWords(data);
  return words.join(separator);
}

/**
 * Navigateur — lit un File ou Blob (par ex. <input type="file">) et retourne
 * une string où les mots sont séparés par `separator` (par défaut un espace).
 *
 * @param file File ou Blob à lire
 * @param separator Séparateur entre les mots dans la chaîne résultante (défaut: ' ')
 * @returns Promise<string> chaîne contenant tous les mots séparés
 */
export async function wordsFileToStringFromBlob(
  file: File | Blob,
  separator = " "
): Promise<string> {
  const text = await (file as File).text();
  const words = normalizeLinesToWords(text);
  return words.join(separator);
}

console.log(await wordsFileToStringFromPath('src/components/lorem/dictionary.txt', ' '));