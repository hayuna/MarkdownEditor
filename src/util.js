import React from 'react'
export const pattern = (line) => {
    if (/^# (.+)/.test(line)) return <h1>{line.match(/^# (.+)/)?.[1]}</h1>
    if (/^## (.+)/.test(line)) return <h2>{line.match(/^## (.+)/)?.[1]}</h2>
    if (/^### (.+)/.test(line)) return <h3>{line.match(/^### (.+)/)?.[1]}</h3>
    else return <p>{line}</p>
}