export default (config) => {
    
    const { components } = config

    const keys = Object.keys(components)
    const methods = keys.map( component => {
        return components[component]['methods']()
    })

    methods.forEach( method => method.onInit())

    // for (let component in components) {
    //     const instanceComponent = components[component]['methods']()
    //     instanceComponent.onInit()
    // }

    return {
        components
    }
}
