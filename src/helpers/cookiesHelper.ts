// 'use server'
// import { cookies } from 'next/headers'

// // export const getCookie = async (name: string): string | null => {
// //     if (typeof document === 'undefined') return null
// //     const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'))
// //     return match ? decodeURIComponent(match[2]) : null
// // }

// export const setCookie = async (name: string, value: string) => {
//     const cookieStore = await cookies()
//     cookieStore.set(name, value)
//     if (value.length > 4000) {
//         console.warn('Too large for a cookie!')
//     }

//     console.log(value)
// }
