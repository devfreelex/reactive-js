const listeners = {}

const subscribe = (eventName, callback) => {
    if (typeof eventName !== 'string' || typeof callback !== 'function') return false

    if (!listeners[eventName] || !Array.isArray(listeners[eventName])) {
        listeners[eventName] = []
        listeners[eventName].push(callback)
        return callback
    }
}

const unsubscribe = (eventName, callback) => {
    listeners[eventName] = listeners[eventName].filter(action => {
        if (action !== callback) return action
    })
}

const publish = (eventName, data) => {
    const keys = Object.keys(listeners)

    if (!keys || !keys.length) return false

    if (keys.includes(eventName)) {
        listeners[eventName].forEach(watcher => {
            watcher(data)
        })
    }
}

const notify = (data) => {
    for (let actions in listeners) {
        listeners[actions].forEach(action => {
            action(data)
        })
    }
}

export default {
    subscribe,
    unsubscribe,
    publish,
    notify
}