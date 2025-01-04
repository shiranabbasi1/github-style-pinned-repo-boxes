const {createApp, ref} = Vue;


const app = createApp({
    components: {
        Box
    },
    setup() {
        const data = [
            {
                name: "vuejs-collapseable-side-menu",
                description: "A collapsable side menu in vue js",
                isPublic: true,
                language: "JavaScript"
            },
            {
                name: "tic-tac-toe",
                description: "A tic tac toe in react js",
                isPublic: true,
                language: "JavaScript"
            },
            {
                name: "nasa-react-app",
                description: "A nasa picture of the day app",
                isPublic: true,
                language: "JavaScript"
            },
            {
                name: "react-rodolist",
                description: "A todo list in react js",
                isPublic: true,
                language: "JavaScript"
            }
        ];
        return {
            data
        };
    }
});

app.mount("#root");
