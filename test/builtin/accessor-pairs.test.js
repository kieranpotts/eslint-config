// @ts-check

import { lint } from '../_/driver.js'

const rule_id = 'accessor-pairs'
const fixture = `builtin/${rule_id}.js`

describe(rule_id, () => {
  let lintResult = null

  beforeAll(async () => {
    lintResult = await lint(fixture)
  })

  test('error counts', () => {
    expect(lintResult.errorCount).toBe(0)
    expect(lintResult.fatalErrorCount).toBe(0)
    expect(lintResult.fixableErrorCount).toBe(0)
  })

  test('warning counts', () => {
    expect(lintResult.warningCount).toBe(3)
    expect(lintResult.fixableWarningCount).toBe(0)
  })

  test('messages', () => {
    expect(lintResult.messages.length).toBe(3)
    expect(lintResult.messages[0].ruleId).toBe(rule_id)
    expect(lintResult.messages[1].ruleId).toBe(rule_id)
    expect(lintResult.messages[2].ruleId).toBe(rule_id)
  })

  test('suppressed messages', () => {
    expect(lintResult.suppressedMessages.length).toBe(1)
    expect(lintResult.suppressedMessages[0].ruleId).toBe('max-classes-per-file')
  })

})
