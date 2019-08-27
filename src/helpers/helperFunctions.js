export const createTimeString = (time = 0 ) => {
    const hours = new Date(time).getHours()
    const hoursString = hours > 9 ? `${hours}` : `0${hours}`
    const minutes = new Date(time).getMinutes()
    const minutesString = minutes > 9 ? `${minutes}` : `0${minutes}`

    return `${hoursString}:${minutesString}`
}

export const dynamicColors = () => {
    let r = Math.floor(Math.random() * 255)
    let g = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)

    return `rgb(${r},${g},${b})`
}