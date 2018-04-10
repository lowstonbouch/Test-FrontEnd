import React, { Component } from 'react';

import Score from 'react-icons/lib/io/android-star';

export default class Player extends Component {

  render() {
    const { player } = this.props;
    console.log(player);

    return (
        <div className="player-wrapper">
            <p className="player-name">{player.name}</p>
            <p className="player-score">score: {player.score} <Score className="star" /></p>
            <img
                className="image"
                src={player.imageUrl}
            />
        </div>
    )
  }
}