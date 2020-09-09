import React, { Component } from "react";
import "./History.css";
import Axios from "axios";

class History extends Component {
  state = {
    history: [],
    showHistoryTable: false,
  };

  getHistory = () => {
    let url = "https://api.spacexdata.com/v3/history";
    Axios.get(url)
      .then((response) => {
        console.log(response);
        this.setState({
          history: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  componentDidMount() {
    this.getHistory();
  }

  toggleTableHandler = () => {
    const doesShow = this.state.showHistoryTable;
    this.setState({ showHistoryTable: !doesShow });
  };

  render() {
    let tableHistory = null;
    if (this.state.showHistoryTable === true) {
      tableHistory = (
        <div>
          {this.state.history.map((history) => {
            return (
              <tr key={history.id}>
                <td>{history.id}</td>
                <td className="justify">{history.title}</td>
                <td>{history.flight_number}</td>
                <td className="justify">{history.details}</td>
                <td>{history.event_date_unix}</td>
                <td>{history.event_date_utc}</td>
              </tr>
            );
          })}
        </div>
      );
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <button
              className="btn bg-primary btn-sm"
              onClick={this.toggleTableHandler}
            >
              Toggle History Table
            </button>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-12">
            <table className="table  text-center table-bordered">
              <tr className="bg-primary text-white">
                <th className="bold">DATA WILL APPEAR BELOW</th>
              </tr>

              <td className="bg-light">{tableHistory}</td>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default History;
