export const POPUP_MESSAGE = 'data-popup'

export const getPopupMessage = (target: HTMLElement) => {
  return target.getAttribute(POPUP_MESSAGE)
}

export const showPopup = (message: string) => {
  alert(message)
}
