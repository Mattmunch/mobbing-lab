import Component from '../Component.js';
import TodoItem from './TodoItem.js';
import getCards from '../services/cards-api.js';


class TodoList extends Component {
    
    async onRender(list) {
        const cards = await getCards();
        console.log(cards);
        const onUpdate = this.props.onUpdate;
        const onRemove = this.props.onRemove; 

        cards.cards.forEach(card => {
            const cardToRender = new TodoItem({ card });
            const cardDOM = cardToRender.renderDOM();
            list.appendChild(cardDOM);
        });
    }
    renderHTML() {
        return /*html*/`
            <div></div>
        `;
    }
}

export default TodoList;
