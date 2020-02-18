import openIt from './openIt'
import rightClick from './rightClick'

export default (setMinefield) => ({
    openIt: openIt(setMinefield), 
    flagIt: rightClick(setMinefield,'flag'),
    maybeIt: rightClick(setMinefield,'maybe'),
    clearIt: rightClick(setMinefield,'closed'),
})
