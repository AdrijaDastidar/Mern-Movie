import React from 'react';
import Card from './Card';
import FlexContainer from './FlexContainer';

export default function ActorList({ header, actors, onClick }) {
  return (
    <FlexContainer title={header}>
      <div className="flex flex-wrap">
        {actors.map(actor => (
          <div
            className="m-2 w-44 cursor-pointer hover:opacity-90 transition-opacity duration-300"
            key={actor.credit_id}
            onClick={() => onClick(actor.id)}
          >
            <Card
              id={actor.id}
              showTitle={true}
              title={`${actor.name} ${actor.character ? `(${actor.character})` : ""}`}
              image={actor.profile_path}
            />
          </div>
        ))}
      </div>
    </FlexContainer>
  );
}
