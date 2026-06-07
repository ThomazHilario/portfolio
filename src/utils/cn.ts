export const cn = (...classes: any[]) => {
    return classes.filter(value => typeof value === 'string' && value).join(' ')
}