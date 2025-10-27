'use client'

import { toast } from 'react-toastify'

type ColorToken = {
  name: string
  value: string
}

type ColorPreviewProps = {
  colors: ColorToken[]
  title?: string
}

export const ColorPreview = ({ colors, title = '컬러 토큰' }: ColorPreviewProps) => {
  const copyToClipboard = async (colorValue: string, colorName: string) => {
    try {
      await navigator.clipboard.writeText(colorValue)
      toast(`${colorName} 색상 코드가 복사되었습니다.`)
    } catch (err) {
      console.error('복사 실패:', err)
    }
  }

  return (
    <div className="my-6">
      <h4 className="text-lg font-semibold mb-4">{title}</h4>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {colors.map((color) => (
          <div 
            key={color.name} 
            className="border rounded-lg p-4 group cursor-pointer hover:shadow-md transition-shadow duration-200"
            onClick={() => copyToClipboard(color.value, color.name)}
            title="클릭하여 색상 코드 복사"
          >
            <div 
              className="w-full h-16 rounded mb-3 border relative"
              style={{ backgroundColor: color.value }}
            >
              
              {/* 호버 시 복사 힌트 */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 rounded transition-all duration-100 flex items-center justify-center">
                <span className="text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-100">
                  클릭하여 복사
                </span>
              </div>
            </div>
            <div className="text-sm">
              <div className="font-mono font-semibold">{color.name}</div>
              <div className="text-gray-600 font-mono">{color.value}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
