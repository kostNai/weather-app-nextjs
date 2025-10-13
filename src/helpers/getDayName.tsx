const capitalizeFirstLetter = (str: string): string =>
    str.charAt(0).toUpperCase() + str.slice(1)

export const getDayName = (epocheDate: number): string => {
    const date = new Date(epocheDate * 1000)
    const dayName = date.toLocaleDateString('uk-UA', { weekday: 'long' })

    return capitalizeFirstLetter(dayName)
}
