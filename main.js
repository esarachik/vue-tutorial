const app = {
    data(){
        return{
            usuario:'',
            correo:'',
            clave:''        
        }
    },
    methods: {
        llamarSaludoHijo(){
            this.$refs.refMenuComponent.saludarDesdeHijo('prueba')
        }
    },
}
const _app = Vue.createApp(app)