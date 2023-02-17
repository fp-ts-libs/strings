import * as S from "@fp-ts/schema";
import * as I from "@fp-ts/schema/internal/common"
import { pipe } from "@fp-ts/core/Function";


/*
 * @since 1.0.0
 */
// eslint-disable-next-line no-control-regex
export const regex = /^[\x00-\x7F]+$/;

/*
 * @since 1.0.0
 @ @type guard
 */
export const isAscii = (s: string): boolean => regex.test(s);

/*
 * @since 1.0.0
 @ @type filter
 */
export const ascii = <A extends string>(
    annotationOptions?: S.AnnotationOptions<A>
  ) =>
    (self: S.Schema<A>): S.Schema<A> =>
      pipe(
        self,
        I.filter((a): a is A => isAscii(a), {
          description: `an ascii character`,
          jsonSchema: { pattern: regex },
          ...annotationOptions
        })
      )
