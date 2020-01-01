import App from './app'

const server = new App()
const PORT =  process.env.PORT || 6350


server.startup(PORT, () => {
    console.log(`Server is Started on Port ${PORT}`)
})
