import {defineComponent} from 'vue'

export default defineComponent({
    name: 'TButton',
    props: {
        type: {
            type: String,
            required: true
        }
    },
    emits: [],
    components: {},
    setup(props, ctx) {
        return () => <div>
            <button>tbutton</button>
        </div>
    }
})
