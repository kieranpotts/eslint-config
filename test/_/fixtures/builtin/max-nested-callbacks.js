/*
https://eslint.org/docs/latest/rules/max-nested-callbacks

This rule warns on nested callbacks of a depth of three or more.

To avoid callback hell, it is best practice to refactor legacy callbacks to
promises and use modern `async`/`await` syntax to interact with those promises.
*/

const log = (msg) => {
  return msg
}

const sync1 = () => {
  return null
}
const sync2 = () => {
  return null
}
const sync3 = () => {
  return null
}
const sync4 = () => {
  return null
}

const async1 = async () => {
  const result = await Promise.resolve(null)
  return result
}
const async2 = async () => {
  const result = await Promise.resolve(null)
  return result
}
const async3 = async () => {
  const result = await Promise.resolve(null)
  return result
}
const async4 = async () => {
  const result = await Promise.resolve(null)
  return result
}

/* ⚡WARNING: "Too many nested callbacks (4). Maximum allowed is 3." */
sync1((_sync1Result) => {
  sync2((_sync2Result) => {
    sync3((_sync3Result) => {
      sync4((_sync4Result) => {
        // …
      })
    })
  })
})

/* The above can be refactored by moving the callback function
declarations to the upper scope. */

/* ✅ */
const handleSync1Response = () => {
  sync2(handleSync2Response)
}
const handleSync2Response = () => {
  sync3(handleSync3Response)
}
const handleSync3Response = () => {
  sync3(handleSync4Response)
}
const handleSync4Response = () => {
  sync4()
}
sync1(handleSync1Response)

/* Alternatively all the functions can be "promisified". */

/* ✅ */
const result1 = await async1()
const result2 = await async2(result1)
const result3 = await async3(result2)
const result4 = await async4(result3)
log(result4)
