import React from 'react';
import PropTypes from 'prop-types';
import { Consumer } from './Context';
import Player from './Player';

const PlayerList = (props) => {
  return (
    <Consumer>
      {context => (
        <React.Fragment>
          {context.players.map((player, index) =>
            <Player
              {...player}
              key={player.id.toString()}
              index={index}
              removePlayer={props.removePlayer}
            />
          )}
        </React.Fragment>
      )}
    </Consumer>

  );
}


export default PlayerList;