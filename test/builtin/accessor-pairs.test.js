// @ts-check

import { lint } from '../_/driver.js'

const rule_id = 'accessor-pairs'
const fixture = `builtin/${rule_id}.js`

describe(rule_id, () => {
  let result

  beforeAll(async () => {
    result = await lint(fixture)
  })

  const tests = [
    {
      'prop': 'errorCount',
      'value': 0,
    },
    {
      'prop': 'fatalErrorCount',
      'value': 0,
    },
    {
      'prop': 'fixableErrorCount',
      'value': 0,
    },
    {
      'prop': 'warningCount',
      'value': 3,
    },
    {
      'prop': 'fixableWarningCount',
      'value': 0,
    },
  ]

  test.each(tests)('$prop', ({
    prop,
    value,
  }) => {
    expect(result[prop]).toBe(value)
  })

  test('messages', () => {
    expect(result.messages.length).toBe(3)

    expect(result.messages.every((msg) => {
      return msg.ruleId === rule_id
    })).toBe(true)

    expect(result.suppressedMessages.length).toBe(1)
    expect(result.suppressedMessages[0].ruleId).toBe('max-classes-per-file')
  })

})
