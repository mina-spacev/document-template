import { POPUP_MESSAGE } from "../event/popup"
import { COPY_SUCCESS, COPY_URL } from "../event/url-copy"

export const FORBID_TAGS = [
  'script',
  'object',
  'embed',
  'applet',
  'base',
  'link',
  'meta',
  'style',
  'title',
  'head',
  'body',
  'html',
]

export const FORBID_ATTR = [
  'onload',
  'onerror',
  'onclick',
  'onmouseover',
  'onmouseout',
]

export const ADD_TAGS = ['iframe']

export const ADD_ATTR = [
  'allowfullscreen',
  'allow',
  'referrerpolicy',
  'title',
  COPY_URL,
  COPY_SUCCESS,
  POPUP_MESSAGE,
]
