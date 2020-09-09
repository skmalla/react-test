import React, { Component } from "react";
import "./History.css";
import Axios from "axios";

class History extends Component {
  state = {
    payload: [],
    showPayloadTable: false,
  };

  getPayload = () => {
    let url = "https://api.spacexdata.com/v3/payloads";
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
    this.getPayload();
  }

  toggleTableHandler = () => {
    const doesShow = this.state.showPayloadTable;
    this.setState({ showPayloadTable: !doesShow });
  };

  render() {
    let tablePayload = null;
    if (this.state.showPayloadTable === true) {
      tablePayload = (
        <div>
          {this.state.history.map((payload) => {
            return (
              <tr key={payload.payload_id} className="justify">
                <td>{payload.payload_id}</td>
                <td>{payload.customers}</td>
                <td>{payload.manufacturer}</td>
                <td>{payload.nationality}</td>
                <td>{payload.orbit_params.apoapsis_km}</td>
                <td>{payload.payload_mass_kg}</td>
                <td>{payload.payload_mass_lbs}</td>
                <td>{payload.payload_type}</td>
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
              Toggle Payload Table
            </button>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-12">
            <table className="table  text-center table-bordered">
              <tr className="bg-primary text-white">
                <th className="bold">DATA WILL APPEAR BELOW</th>
              </tr>

              <td className="bg-light">{tablePayload}</td>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default History;
