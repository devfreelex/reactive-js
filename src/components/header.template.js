import { html } from '../../core/render.js'
import styles from './header.styles.js'

export default (data) => {
    return html`
        <h1>${data.title}</h1>
        ${styles()}
        `
}