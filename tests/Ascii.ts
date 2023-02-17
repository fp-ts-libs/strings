import { pipe } from '@fp-ts/core/Function'
import * as _ from '../src/Ascii'
import * as S from '@fp-ts/schema'

describe('Ascii', () => {
  it('isAscii', () => {
    expect(_.isAscii('abc')).toBe(true)
    expect(_.isAscii('\u03A9')).toBe(false)
  })
  it('schema', () => {
    const schema = pipe(S.string, _.ascii())
    expect(S.is(schema)('abc')).toBe(true)
    expect(S.is(schema)('\u03A9')).toBe(false)
  })
})
