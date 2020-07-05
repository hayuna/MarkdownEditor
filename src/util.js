import React from 'react'
export const pattern = (line) => {
    if (/^# (.+)/.test(line)) return <h1>{line.match(/^# (.+)/)?.[1]}</h1>
    if (/^## (.+)/.test(line)) return <h2>{line.match(/^## (.+)/)?.[1]}</h2>
    if (/^### (.+)/.test(line)) return <h3>{line.match(/^### (.+)/)?.[1]}</h3>
    if (/^#### (.+)/.test(line)) return <h4>{line.match(/^#### (.+)/)?.[1]}</h4>
    if (/^##### (.+)/.test(line)) return <h5>{line.match(/^##### (.+)/)?.[1]}</h5>
    else return <p>{line}</p>
}