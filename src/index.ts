import * as components from './components'
import type {App} from 'vue'
import {forEach} from "lodash-es";

export const createXUi = () => {
    return {
        install: (app: App) => {
            forEach(components, component =>{
                app.component(component.name, component)
            })
        }
    }
}