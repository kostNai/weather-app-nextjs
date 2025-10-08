export type GeoCodingResponse = {
    country: string
    lat: number
    lon: number
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    local_names?: any
    name: string
    state: string
}
