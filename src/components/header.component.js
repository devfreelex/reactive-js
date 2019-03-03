import { html, render } from '../../core/render.js'
import template from './header.template.js'

export default {
    name: 'header-component',
    data: { title: 'Cadastro' },
    events: ['click', 'mouseover'],
    methods() {

        const onInit = () => {
            render(this, (data) => {
                return template(data)
            })
        }

        const logger = (e) => {
            console.log(e.type)
        }

        return {
            onInit,
            logger
        }
    }
}