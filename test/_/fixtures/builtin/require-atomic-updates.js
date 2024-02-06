/*
https://eslint.org/docs/latest/rules/require-atomic-updates

This rule disallows assignments in combination with `await`, which can
lead to race conditions.
*/

const log = (...args) => {
  return args
}

const timeout = 1000

const setTimeout = (callback, delay) => {
  callback(delay)
}

const sleep = (time) => {
  return new Promise((resolve) => {
    setTimeout(
      resolve,
      Math.ceil(time * timeout),
    )
  })
}

const users = [
  {
    id: 1,
    posts: 5,
  },
  {
    id: 2,
    posts: 3,
  },
]
let totalPosts = 0

/* There is a race condition in the following code. If you run it,
`totalPosts` will be 3 or 5 interchangeably. The random delay (implemented
with `sleep`) in fetching a user's posts means there is a race to which
call to `addPosts` updates `totalPosts` from zero first. */

const getPosts = async (userId) => {
  await sleep(Math.random() * timeout)
  return users.find((user) => {
    return user.id === userId
  }).posts
}

/* ❗ERROR: "Possible race condition: `totalPosts` might be reassigned based on
an outdated value of `totalPosts`." */
const addPosts = async (userId) => {
  totalPosts += await getPosts(userId)
}

const user1 = 1
const user2 = 2

await Promise.all([
  addPosts(user1),
  addPosts(user2),
])

log(totalPosts)

/* To avoid this kind of race condition, we must read variables at the same
they are updated. */

let countPosts = 0

/* ✅ */
const addPostsSafe = async (userId) => {
  const posts = await getPosts(userId)
  /* Variable is read and immediately updated: */
  countPosts += posts
}

await Promise.all([
  addPostsSafe(user1),
  addPostsSafe(user2),
])

log(countPosts)
