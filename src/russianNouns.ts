import RussianNouns, { Lemma as LemmaType } from 'russian-nouns-js';

const engine = new RussianNouns.Engine();
const Gender = RussianNouns.Gender;
const Case = RussianNouns.Case;
const Lemma = RussianNouns.Lemma;

// Pre-create lemmas for performance
export const articleLemma = Lemma.create({
  text: 'статья',
  gender: Gender.FEMININE
});

export const replyLemma = Lemma.create({
  text: 'ответ',
  gender: Gender.MASCULINE
});

/**
 * Get correctly declined noun form based on Russian numeral-noun agreement rules
 * @param lemma - RussianNouns.Lemma object
 * @param count - numeric count
 * @returns correctly declined noun form
 */
export function getNounWithCount(lemma: LemmaType, count: number): string {
  const lastDigit = count % 10;
  const lastTwoDigits = count % 100;

  // Ends in 1 (except 11): Nominative singular
  if (lastDigit === 1 && lastTwoDigits !== 11) {
    return engine.decline(lemma, Case.NOMINATIVE)[0];
  }
  
  // Ends in 2-4 (except 12-14): Genitive singular
  if (lastDigit >= 2 && lastDigit <= 4 && (lastTwoDigits < 12 || lastTwoDigits > 14)) {
    return engine.decline(lemma, Case.GENITIVE)[0];
  }
  
  // Ends in 0, 5-9, 11-14: Genitive plural
  const pluralNominative = engine.pluralize(lemma)[0];
  return engine.decline(lemma, Case.GENITIVE, pluralNominative)[0];
}

export { engine };
