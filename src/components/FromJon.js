import React from 'react'

const Link = (props) => <a style = {{display: 'inline-block', color: '#999', textDecoration: 'none'}}
    href = {props.href}>{props.children}</a>

export default () => <footer style={{
        textAlign: 'center',
        margin: 20,
        color: '#999'
      }}>
        <span style={{
            display: 'inline-block',
            maxWidth: 400,
        }}>
            <i>
                This React Game was built to practice coding with hooks, context, and thunking functions.
            </i>        
            <Link href="https://fromjon.com"> Browse more apps at <u>FromJon.com</u></Link>
            <Link href="https://github.com/fromjdobson/mines">View this repository on <u>GitHub</u></Link>
          
          </span>
      </footer>
