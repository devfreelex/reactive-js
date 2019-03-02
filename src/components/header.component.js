import { html, render } from '../../core/render.js'
import template from './header.template.js'

export default {
    name: 'header-component',
    data: { title: 'Cadastro' },
    methods() {

        const onInit = () => {
            render(this, (data) => {
                return template(data)
            })
        }

        return {
            onInit
        }
    }
}