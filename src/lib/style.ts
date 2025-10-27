import { type ClassValue, clsx } from 'clsx'
import { extendTailwindMerge } from 'tailwind-merge'

// custom 클래스인 typo 클래스 그룹을 추가하여 병합이 될 수 있도록 설정
const customTwMerge = extendTailwindMerge<'typo'>({
  extend: {
    classGroups: {
      typo: [
        'typo-display1',
        'typo-display2',
        'typo-display3',
        'typo-title1',
        'typo-title2',
        'typo-title3',
        'typo-headline1',
        'typo-headline2',
        'typo-headline3',
        'typo-body1',
        'typo-body1-reading',
        'typo-body2',
        'typo-body2-reading',
        'typo-label1',
        'typo-label1-reading',
        'typo-label2',
        'typo-caption1',
        'typo-caption2',
        'typo-caption3',
      ],
    },
  },
})

export function cn(...inputs: ClassValue[]): string {
  return customTwMerge(clsx(inputs))
}
