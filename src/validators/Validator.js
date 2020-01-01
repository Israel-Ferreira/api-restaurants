export default class Validator {
    static validate(data){
        const  values = Object.values({...data})
        let errors = []

        values.forEach((prop) => {
            if(prop == null || prop == ""){
                errors.push(new Error(`Erro: Propriedade ${prop} nula ou vazia`))
            }
        })

        return errors.length == 0
    }
}