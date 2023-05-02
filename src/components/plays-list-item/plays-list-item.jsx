import "./_plays-list-item.scss";

function PlaysListItems({number, firstPlayer, secondPlayer}) {
  return (
    <div className="plays-list-item">
      <div className="plays-list-item__left-side">
        <sapn className="plays-list-item__text plays-list-item__number">{number}</sapn>
        <div className="plays-list-item__players">
          <sapn className="plays-list-item__text">{firstPlayer.name}</sapn>
          <sapn className="plays-list-item__text plays-list-item__players-separator">
            VS
          </sapn>
          <sapn className="plays-list-item__text">{secondPlayer.name}</sapn>
        </div>
      </div>
      <div className="plays-list-item__right-side">
        <sapn className="plays-list-item__text">{firstPlayer.score}</sapn>
        <sapn className="plays-list-item__text plays-list-item__score-separator">
          :
        </sapn>
        <sapn className="plays-list-item__text">{secondPlayer.score}</sapn>
      </div>
    </div>
  );
}

export default PlaysListItems;
