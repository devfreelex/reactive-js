import { html, render } from '../../core/render.js'
import template from './header.template.js'

import event from '../../core/pubsub.js'

export default {
    name: 'header-component',
    data: { title: 'Cadastro' },
    events: ['click', 'mouseover'],
    methods() {

        const onInit = () => {

            const sbs1 = event.subscribe('onTeste', data => {
                console.log('teste', data)
            })

            setTimeout( () => {
                event.notify({teste: 'ok'})
            }, 3000)

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