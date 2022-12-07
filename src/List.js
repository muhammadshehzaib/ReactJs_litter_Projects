import React, { useState }  from 'react';
import data from './data';

const List = () => {
  const [people, setPeople] = useState(data)

  return (
    <>
      <h2>{people.length} Birthday today</h2>

      {people.map((person) => {
        return (
          <article  className="person">
            <img src={person.image} alt="" />
            <div>
              <h4>{person.name}</h4>
              <p>{person.age} years</p>
            </div>
          </article>
        )
      })}
        <button onClick={(() => {
              setPeople([])
            })}>Clear ALL</button>
    </>
  );
};

export default List