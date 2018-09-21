import * as React from "react";
import axios from "axios";

export default class Dashboard extends React.Component<any, any> {
  public componentDidMount = async () => {
    const res = await axios.get(
      `http://localhost:8080/users/${localStorage.getItem("userId")} `
    );
    const res2 = await axios.post(
      `http://localhost:8080/recipe/ids`,
      res.data.comment
    );
    console.log(res2);
  };

  public render() {
    return (
      <div>
        <h2>DASHBOARD</h2>
      </div>
    );
  }
}
