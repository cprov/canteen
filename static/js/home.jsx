import React from "react";
import LikeMe from './likeme.jsx';


export default class Home extends React.Component {
  render () {
    return (
      <div>
        <p>Hello World!</p>
        <LikeMe />
      </div>
    );
  }
}
