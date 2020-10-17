import Vue from 'vue'

export default Vue.extend({
    data(){
        return {
            text: 'test'
        }
    },
    methods:{
        changeText(){
            this.text = 'test123'
        }
    }
})