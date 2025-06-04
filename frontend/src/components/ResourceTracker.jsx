import React from 'react'

const ResourceTracker = () => {
    const resources = [
        { name: 'primos', amount: 1230 },
        { name: 'jade', amount: 500 }
    ]
    return (
        <div>
            <h2>Resources</h2>
            <ul>
                {resources.map((res) => (
                    <li key={res.name}>
                        {res.name}: {res.amount}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ResourceTracker