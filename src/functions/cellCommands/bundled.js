import openIt from './openIt'
import flagIt from './flagIt'
import maybeIt from './maybeIt'
import clearIt from './clearIt'

export default (setMinefield) => ({
    openIt: openIt(setMinefield), 
    flagIt: flagIt(setMinefield),
    maybeIt: maybeIt(setMinefield),
    clearIt: clearIt(setMinefield),
})
