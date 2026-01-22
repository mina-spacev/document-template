import { copy } from "../copy"

export const COPY_URL = 'data-copy-url'
export const COPY_SUCCESS = 'data-copy-success'

export const getURL = (target: HTMLElement) => {
  return target.getAttribute(COPY_URL)
}

export const getSuccessMessage = (target: HTMLElement) => {
  return target.getAttribute(COPY_SUCCESS) || '주소가 복사되었습니다.'
}

export const copyURL = async ({
  url,
  successMessage,
}: {
  url: string
  successMessage: string
}) => {
  const { success } = await copy(url)

  if (success) {
    alert(successMessage)
  }
}
