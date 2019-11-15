import Component from '../Component.js';

class TodoItem extends Component {

    onRender(dom) {
        // const card = this.props.card;
        //const onUpdate = this.props.onUpdate;
        //const onRemove = this.props.onRemove;

        
    }

    renderHTML() {
        const card = this.props.card;

        return /*html*/`
            <img src="${card.image}">
        `;
    }
}

export default TodoItem;