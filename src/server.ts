import app from "./app";

function main() {
    try {
        app.listen(3001, 'localhost', async () => {
            console.log('Starting server in http://localhost:3001')
        })
    } catch (err) {
        console.error(`Starting server Error: ${err}`)
    }
}
main()