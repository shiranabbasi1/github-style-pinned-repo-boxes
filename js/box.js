const Box = {
    props: ["data"],
    setup(props) {
        const {name, description, isPublic, language} = props.data;

        return {
            name,
            description,
            isPublic,
            language
        }
    },
    template: `
        <div class="box">
            <h3>{{ name }}  <span>{{ isPublic ? 'Public' : 'Private' }}</span></h3>
            <p>{{ description }}</p>
            <p>{{ language }}</p>
        </div>
    `
};
