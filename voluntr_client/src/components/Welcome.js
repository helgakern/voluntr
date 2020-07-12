import React from "react";

export class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <main className="Welcome">
        <h1>
          One-On-One Volunteer App
          <br />
          Connecting helpers to those who need it
        </h1>
      </main>
    );
  }
}
