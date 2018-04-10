import React, { Component } from 'react';
import Player from './Player';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          "id": "16066",
          "imageUrl": "https://randomuser.me/api/portraits/men/84.jpg",
          "name": "Keshav",
          "score": 12
        },
        {
          "id": "16732",
          "imageUrl": "https://randomuser.me/api/portraits/men/89.jpg",
          "name": "فاطمة",
          "score": 140
        },
        {
          "id": "18423",
          "imageUrl": "https://randomuser.me/api/portraits/men/79.jpg",
          "name": "ÁnGgel",
          "score": 40
        },
        {
          "id": "19023",
          "imageUrl": "https://randomuser.me/api/portraits/men/81.jpg",
          "name": "Abhijit",
          "score": 10
        },
        {
          "id": "18712",
          "imageUrl": "https://randomuser.me/api/portraits/women/74.jpg",
          "name": "Gianfranco",
          "score": 40
        }
      ]
    };
    this.bubbleSort = this.bubbleSort.bind(this);
  }

  bubbleSort(players){
    for (let i = 0; i < players.length - 1; i++) {
      let m_min = players[i].score;
      for (let j = i + 1; j < players.length; j++) {
        if (players[j].score > m_min) {
          let mm = players[i];
          m_min = players[j].score;
          players[i] = players[j];
          players[j] = mm;
        }
      }
    }
  return players;
  }

  componentDidMount(){
    this.setState({data: this.bubbleSort(this.state.data)})
  }

  render() {
    return (
    <div className="content">
      <h1>Global Score</h1>
      {this.state.data.map(player => 
        <Player key={player.id} player={player} /> 
      )}
    </div>)
  }
}

