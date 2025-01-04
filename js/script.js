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
                language: "JavaScript",
                order: 4,
                pinned: true
            },
            {
                name: "tic-tac-toe",
                description: "A tic tac toe in react js",
                isPublic: true,
                language: "JavaScript",
                order: 2,
                pinned: true
            },
            {
                name: "nasa-react-app",
                description: "A nasa picture of the day app",
                isPublic: true,
                language: "JavaScript",
                order: 3,
                pinned: true
            },
            {
                name: "react-rodolist",
                description: "A todo list in react js",
                isPublic: true,
                language: "JavaScript",
                order: 1,
                pinned: false
            }
        ];
        return {
            data
        };
    }
});

app.mount("#root");
