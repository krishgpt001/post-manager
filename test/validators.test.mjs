import assert from 'assert'
import validatePost from '../src/utils/validators.js'

function runTests(){
  // Valid post should produce no errors
  const valid = {
    title: 'Valid Title',
    author: 'Me',
    content: 'This is a long enough content to pass the validation requirement of at least fifty characters in total.',
    tags: 'react, testing'
  }
  const errorsValid = validatePost(valid)
  assert.deepStrictEqual(errorsValid, {}, 'Valid post should not return errors')

  // Missing title
  const missingTitle = { ...valid, title: '' }
  const errors1 = validatePost(missingTitle)
  assert.ok(errors1.title, 'Missing title should return a title error')

  // Short content
  const shortContent = { ...valid, content: 'short' }
  const errors2 = validatePost(shortContent)
  assert.ok(errors2.content, 'Short content should return a content error')

  // Bad tags
  const badTags = { ...valid, tags: 'a, b, ok' }
  const errors3 = validatePost(badTags)
  assert.ok(errors3.tags, 'Tags shorter than 2 chars should return a tags error')

  console.log('All validator tests passed')
}

runTests()
