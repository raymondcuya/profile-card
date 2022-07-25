import Card from '../card/card.component';

import './card-list.styles.css';

const CardList = ({ profiles }) => (
  <div className="card-list">
    {profiles.map((profile) => {
      return <Card profile={profile} />;
    })}
  </div>
);

export default CardList;
