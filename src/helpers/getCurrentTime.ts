export const getCurrentTime = (): string => {
    const today = new Date()

    return `${
        today.getHours() < 10 ? `0${today.getHours()}` : today.getHours()
    }:${
        today.getMinutes() < 10 ? `0${today.getMinutes()}` : today.getMinutes()
    }`
}
