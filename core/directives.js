const defaultEvents = [
    'click', 
    'dbclick',
    'mousedown', 
    'mouseup', 
    'mousemove',
    'mouseover', 
    'mouseout', 
    'keyup', 
    'keydown',
    'keypress'
]

const setEvent = (element, event, method) => {
    element.addEventListener(event, method)
}

const setAction = (event, rootElement, component) => {
    const elements = rootElement.querySelectorAll(`[${event}]`)
    elements.forEach( element => {
        const method = element.getAttribute(event)
        const methods = component.methods()
        setEvent(element, event, methods[method])
    })
}

const init = (rootElement, component) => {
    const { events } = component
    events.forEach( event => {
        if(defaultEvents.includes(event)) {
            setAction(event, rootElement, component)
        }
    })
}


export default {
    init
}