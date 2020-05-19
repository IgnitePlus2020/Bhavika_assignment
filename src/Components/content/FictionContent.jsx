import React, { Component } from "./node_modules/react";
import Books from "../../data/Books.json";

class FictionContent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      myData: Books.fiction,
    };
  }

  render() {
    return (
      <div>
        <br />
        <center>
          <h3
            style={{
              color: "#282c34",
              fontFamily: "Helvetica Neue",
              fontWeight: 700,
            }}
          >
            Fiction Novels:
          </h3>
          <br />
          <table
            width="1000"
            style={{
              
              boxShadow: "0px 10px 50px #555",
              borderRadius: "10px",
            }}
          >
            <tr>
              <td>
                <h5
                  className="my-auto"
                  style={{
                    color: "black",
                    textAlign: "center",
                    fontFamily: "Segoe UI",
                    fontWeight: 400,
                  }}
                >
                  Id
                </h5>
              </td>

              <td>
                <h5
                  className="my-auto"
                  style={{
                    color: "black",
                    textAlign: "center",
                    fontFamily: "Segoe UI",
                    fontWeight: 400,
                  }}
                >
                  Name
                </h5>
              </td>

              <td>
                <h5
                  className="my-auto"
                  style={{
                    color: "black",
                    textAlign: "center",
                    fontFamily: "Segoe UI",
                    fontWeight: 400,
                  }}
                >
                  Price
                </h5>
              </td>
            </tr>
            {this.state.myData.map((item) => {
              return (
                <tr>
                  <td>
                    <h6
                      style={{
                        color: "black",
                        textAlign: "center",
                        fontFamily: "Segoe UI",
                        fontWeight: "lighter",
                      }}
                    >
                      <div className="dropdown-divider"></div>
                      {item.id_no}
                    </h6>
                  </td>

                  <td>
                    <h6
                      style={{
                        color: "black",
                        textAlign: "center",
                        fontFamily: "Segoe UI",
                        fontWeight: "lighter",
                      }}
                    >
                      <div className="dropdown-divider"></div>
                      {item.book_name}
                    </h6>
                  </td>

                  <td>
                    <h6
                      style={{
                        color: "black",
                        textAlign: "center",
                        fontFamily: "Segoe UI",
                        fontWeight: "lighter",
                      }}
                    >
                      <div className="dropdown-divider"></div>
                      {item.price}
                    </h6>
                  </td>
                </tr>
              );
            })}
          </table>
        </center>
      </div>
    );
  }
}


export default FictionContent;