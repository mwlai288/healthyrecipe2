import * as React from "react";
import axios from "axios";

export default class Dashboard extends React.Component<any, any> {
  public componentDidMount = async () => {
    const res = await axios.get("http://localhost:8080/recipe");
    console.log(res);
  };

  public render() {
    return (
      <div>
        <h2>DASHBOARD</h2>
        {/* <Friends /> */}
      </div>
    );
  }
}
