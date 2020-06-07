import facepaint from "facepaint"

/**
 * handle media query
 * @param {object} breakpoint
 */
export const facepaintMQ = (breakpoint) => {
    const breakpointValues = Object.values(breakpoint).map(
        (val) => `@media(min-width: ${val}px)`
    )
    return facepaint(breakpointValues, { overlap: true, literal: true })
}

/**
 * generate media query
 * @param {string} bp 
 */
export const mq = (bp) => `@media (min-width: ${bp}px)`
