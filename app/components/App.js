import React, { Component } from 'react';
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
    this.loadData();
  }


  render() {
    return (
    <div>
      Hello, World!
    </div>)
  }
}

