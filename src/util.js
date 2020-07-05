import React from 'react'
export const pattern = (line) => {
    if (/^# (.+)/.test(line)) return <h1>{line.match(/^# (.+)/)?.[1]}</h1>
    if (/^## (.+)/.test(line)) return <h2>{line.match(/^## (.+)/)?.[1]}</h2>
    else return <p>{line}</p>
}