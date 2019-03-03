import directives from '../core/directives.js'

const html = function(inputs, ...values) {
    return inputs.map( (text, i) => {
        return `${text} ${values[i] || ''}`
    }).join('');
}


const render = function (component, callback) {
    const { name, data } = component
    const container = document.querySelector(name)
    container.innerHTML = callback(data)
    directives.init(container, component)
}

export {
    html, render
}