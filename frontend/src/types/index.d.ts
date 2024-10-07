declare module '*.png' {
  const path: string
  export default path
}

declare module '*.gif' {
  const path: string
  export default path
}

declare module '*.jpeg' {
  const path: string
  export default path
}

declare global {
  interface Window {
    kakao: any
  }
}
