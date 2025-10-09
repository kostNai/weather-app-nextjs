const capitalizeFirstLetter = (str: string): string =>
    str.charAt(0).toUpperCase() + str.slice(1)

export const getCurrentDate = (): string => {
    const today = new Date()
    const dayName = today.toLocaleDateString('uk-UA', { weekday: 'long' })

    return capitalizeFirstLetter(dayName)
}
