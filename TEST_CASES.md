# Test Cases for Russian Localization

## Edge Cases Testing

### Test Case 1: Numbers ending in 1 (except 11)
| Count | Expected Form | Grammatical Case |
|-------|--------------|------------------|
| 1 статья | статья | Nominative Singular |
| 21 статья | статья | Nominative Singular |
| 31 статья | статья | Nominative Singular |
| 1 ответ | ответ | Nominative Singular |
| 21 ответ | ответ | Nominative Singular |

### Test Case 2: Numbers ending in 2-4 (except 12-14)
| Count | Expected Form | Grammatical Case |
|-------|--------------|------------------|
| 2 статьи | статьи | Genitive Singular |
| 3 статьи | статьи | Genitive Singular |
| 4 статьи | статьи | Genitive Singular |
| 22 статьи | статьи | Genitive Singular |
| 2 ответа | ответа | Genitive Singular |
| 3 ответа | ответа | Genitive Singular |
| 4 ответа | ответа | Genitive Singular |

### Test Case 3: Numbers ending in 0, 5-9, 11-14
| Count | Expected Form | Grammatical Case |
|-------|--------------|------------------|
| 5 статей | статей | Genitive Plural |
| 11 статей | статей | Genitive Plural |
| 12 статей | статей | Genitive Plural |
| 13 статей | статей | Genitive Plural |
| 14 статей | статей | Genitive Plural |
| 20 ответов | ответов | Genitive Plural |
| 12 ответов | ответов | Genitive Plural |

### Test Case 4: Gender Agreement
| Gender | Expected Verb |
|--------|--------------|
| male | Создал |
| female | Создала |

## Implementation Verification

### react-i18next Implementation

Plural keys used:
- `restore_articles_one` - for counts like 1, 21, 31
- `restore_articles_few` - for counts like 2, 3, 4, 22, 23, 24
- `restore_articles_many` - for counts like 5, 11, 12, 20

Context keys used:
- `created_male` - when authorGender === 'male'
- `created_female` - when authorGender === 'female'

### russian-nouns-js Implementation

Helper function `getNounWithCount`:
- Returns Nominative case for numbers ending in 1 (except 11)
- Returns Genitive Singular for numbers ending in 2-4 (except 12-14)
- Returns Genitive Plural for numbers ending in 0, 5-9, 11-14

Gender selection:
- Simple conditional: `authorGender === 'male' ? 'Создал' : 'Создала'`

## Expected Output Examples

### Article Count = 1
- react-i18next: "Восстановить 1 статью?"
- russian-nouns-js: "Восстановить 1 статья?"

### Article Count = 2
- react-i18next: "Восстановить 2 статьи?"
- russian-nouns-js: "Восстановить 2 статьи?"

### Article Count = 5
- react-i18next: "Восстановить 5 из 11 статей?"
- russian-nouns-js: "Восстановить 5 из 11 статей?"

### Reply Count = 12
- react-i18next: "Посмотреть 12 ответов"
- russian-nouns-js: "Посмотреть 12 ответов"

### Author Gender = male
- react-i18next: "Создал Андрей Савельев 15 июля 2025 в 12:43"
- russian-nouns-js: "Создал Андрей Савельев 15 июля 2025 в 12:43"

### Author Gender = female
- react-i18next: "Создала Андрей Савельев 15 июля 2025 в 12:43"
- russian-nouns-js: "Создала Андрей Савельев 15 июля 2025 в 12:43"

## Success Criteria

✅ Both implementations produce identical Russian output
✅ No manual if/else chains for plural selection (encapsulated in helper or library)
✅ All UI text is in Russian
✅ Correct grammatical forms for all edge cases
✅ Real-time updates when controls are adjusted
