declare module 'russian-nouns-js' {
  export interface Lemma {
    text: string;
    gender?: Gender;
    indeclinable?: boolean;
    pluraleTantum?: boolean;
  }

  export enum Gender {
    MASCULINE = 'MASCULINE',
    FEMININE = 'FEMININE',
    NEUTER = 'NEUTER'
  }

  export enum Case {
    NOMINATIVE = 0,
    GENITIVE = 1,
    DATIVE = 2,
    ACCUSATIVE = 3,
    INSTRUMENTAL = 4,
    PREPOSITIONAL = 5,
    LOCATIVE = 6
  }

  export const CASES: Case[];

  export class Engine {
    decline(lemma: Lemma | { text: string; gender: Gender }, grammaticalCase: Case, pluralForm?: string): string[];
    pluralize(lemma: Lemma): string[];
  }

  export namespace Lemma {
    function create(config: {
      text: string;
      gender?: Gender;
      indeclinable?: boolean;
      pluraleTantum?: boolean;
    }): Lemma;
  }

  export function getDeclension(lemma: Lemma): number;

  const RussianNouns: {
    Engine: typeof Engine;
    Gender: typeof Gender;
    Case: typeof Case;
    Lemma: typeof Lemma;
    CASES: Case[];
    getDeclension: typeof getDeclension;
  };

  export default RussianNouns;
}
