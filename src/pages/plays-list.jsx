import Navigation from "../components/navigation/navigation";
import PlaysListItem from "../components/plays-list-item/plays-list-item";

const isPlaysListEmpty = false;

function PlaysList() {
  return (
    <div className="plays-list">
      <Navigation />
      <div className="plays-list__content">
        {isPlaysListEmpty && <div className="plays-list__empty-message">
          <span className="plays-list__empty-message-text">
            У вас нет ни одной сохранённой игры
          </span>
        </div>}
        {!isPlaysListEmpty && <div>
          <ul>
            <PlaysListItem number="1" firstPlayer={{name: 'Артемида', score: '11'}} secondPlayer={{name: 'Марсианин', score: '9'}} />
            <PlaysListItem number="2" firstPlayer={{name: 'Артемида', score: '11'}} secondPlayer={{name: 'Марсианин', score: '9'}} />
            <PlaysListItem number="3" firstPlayer={{name: 'Артемида', score: '11'}} secondPlayer={{name: 'Марсианин', score: '9'}} />
            <PlaysListItem number="4" firstPlayer={{name: 'Артемида', score: '11'}} secondPlayer={{name: 'Марсианин', score: '9'}} />
            <PlaysListItem number="5" firstPlayer={{name: 'Артемида', score: '11'}} secondPlayer={{name: 'Марсианин', score: '9'}} />
          </ul>
        </div>}
      </div>
    </div>
  );
}

export default PlaysList;
