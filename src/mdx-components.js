import { useMDXComponents as getThemeComponents } from 'nextra-theme-docs'
import { DynamicCodeBlock } from './components/dynamic-code-block'
import { ColorPreview } from './components/color-preview'
import { Container, Article, Box } from './components/template'
import { Example } from './components/example'
 
// Get the default MDX components
const themeComponents = getThemeComponents()
 
// Merge components
export function useMDXComponents(components) {
  return {
    ...themeComponents,
    DynamicCodeBlock,
    ColorPreview,
    Container,
    Article,
    Box,
    Example,
    ...components
  }
}