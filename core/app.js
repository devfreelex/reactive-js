const initialize = (components) => {
    const keys = Object.keys(components)
    
    const methods = keys.map( component => {
        if (hasElement(component, components)) {
            return components[component]['methods']()
        }
        
    })

    methods.forEach( method => method.onInit())
}

const hasElement = (key, components) => {
    return document.querySelector(components[key]['name']) !== null
}

export default (config) => {
    
    const { components } = config

    initialize(components)

}
