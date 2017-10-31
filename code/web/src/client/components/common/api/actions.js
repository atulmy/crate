// Actions Types
export const MESSAGE_SHOW = 'COMMON_MESSAGE_SHOW'
export const MESSAGE_HIDE = 'COMMON_MESSAGE_HIDE'

// Actions
export function messageShow(message) {
    return { type: MESSAGE_SHOW, message }
}

export function messageHide() {
    return { type: MESSAGE_HIDE }
}