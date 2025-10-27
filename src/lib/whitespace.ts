// dangerouslySetInnerHTML 사용 시 태그 들여쓰기로 인한 공백이 띄어쓰기로 간주되는 현상 존재
// 이를 방지하기 위해 명시적으로 공백을 넣는 경우를 제외하고 공백을 제거
export const cleanInlineWhitespace = (html: string): string => {
  return (
    html
      // inline 요소 시작 태그 뒤의 공백 제거
      .replace(/(<(strong|em|a|span|code|mark|small|sub|sup)[^>]*>)\s+/gi, '$1')

      // inline 요소 끝 태그 앞의 공백 제거
      .replace(
        /\s+(<\/(strong|em|a| requirement|code|mark|small|sub|sup)>)/gi,
        '$1',
      )

      // inline 요소 끝 태그 뒤의 줄바꿈/들여쓰기로 인한 공백 제거
      // &nbsp;는 실제 의미 있는 공백이므로 유지됨
      .replace(
        /(<\/(strong|em|a|span|code|mark|small|sub|sup)>)\s*[\n\r]+\s*/gi,
        '$1',
      )
  )
}