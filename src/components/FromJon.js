import React from 'react'

export default () => <footer style={{
        textAlign: 'center',
        margin: 20,
        color: '#999'
      }}>
        <span style={{
            display: 'inline-block',
            maxWidth: 400
        }}>
            <i>
                This React Game was built to practice coding with hooks, context, and thunking functions.
            </i>        
            <a style={{display: 'inline-block', padding: 10, color: '#999', textDecoration: 'none'}} 
                href="https://fromjon.com"> Browse more apps at <u>  FromJon.com</u></a>
        </span>
      </footer>
