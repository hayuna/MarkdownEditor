import React from 'react'
export const pattern = (line) => {
    if (/^# (.+)/.test(line)) return <h1>{line.match(/^# (.+)/)?.[1]}</h1>
    else return <p>{line}</p>
}