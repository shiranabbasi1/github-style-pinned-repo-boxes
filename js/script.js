const {createApp, ref, computed, onMounted} = Vue;


const app = createApp({
    components: {
        "box": Box,
        "customize-pin-modal": CustomizePinModal
    },
    setup() {
        const customizePinModal = ref(null);
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
                pinned: true
            },
            {
                name: "github-style-pinned-repo-boxes",
                description: "A github style pinned repo boxes component",
                isPublic: true,
                language: "JavaScript",
                order: 6,
                pinned: true
            },
            {
                name: "fronetend-portfolio",
                description: "My website design portfolio",
                isPublic: true,
                language: "JavaScript",
                order: 5,
                pinned: true
            }
        ];

        const displayData = computed(() => {
            const result = data.filter(x => x.pinned).toSorted((a, b) => (a.order - b.order));
            return result;
        });

        function showCustomizePinModal() {
            customizePinModal.value.show();
        }

        onMounted(() => {
        });

        return {
            displayData,
            showCustomizePinModal,
            customizePinModal
        };
    }
});

app.mount("#root");
