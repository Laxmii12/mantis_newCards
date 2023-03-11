import React from "react";
import { Card as MaterialCard } from "@material-ui/core";
import moment from "moment/moment";
import { Button } from "antd";

const Card = ({ data = {} }) => {
  const day = moment(data.posted_at).format("D");
  const month = moment(data.posted_at).format("MMM").toUpperCase();
  let relativeTime = moment(data.posted_at).format("YYYY/MM/DD");
  let startofday = moment().startOf("day").fromNow();

  const formatDate = (date) => {
    let postedDate = moment(date);
    let difference = moment().diff(postedDate, "days"); // 1
    console.log(difference);
    if (difference > 7) {
      return postedDate.format("DD MMM YYYY");
    } else {
      return postedDate.fromNow();
    }
  };

  const newwindow = () => {
    window.open(data.url);
  };
  console.log(data.posted_at);
  return (
    <MaterialCard
      style={{
        backgroundColor: "white",
        width: "30%",
        height: "490px",
        marginTop: 90,
        marginLeft: 140,
      }}
    >
      <div>
        <div style={{ backgroundColor: "white" }}>
          <div
            style={{ height: "200px", width: "400px", position: "relative" }}
          >
            <img
              style={{ height: "100%", width: "100%" }}
              src={data.thumbnail}
            />
            <div
              style={{
                position: "absolute",
                height: 50,
                width: 50,
                borderRadius: 25,
                backgroundColor: "#f03e3e",
                right: 40,
                top: 10,
              }}
            >
              <div
                style={{
                  textAlign: "center",
                  color: "white",
                  fontWeight: "600",
                }}
              >
                {day}
              </div>
              <div
                style={{
                  textAlign: "center",
                  color: "white",
                  fontSize: 12,
                  fontWeight: "600",
                }}
              >
                {month}
              </div>

              <div style={{ display: "flex", marginTop: 50 }}>
                <div
                  style={{
                    marginTop: 355,
                    marginLeft: -100,
                    fontSize: 12,
                  }}
                >
                  {formatDate(data.posted_at)}
                </div>

                <div
                  style={{
                    marginTop: 355,
                    marginLeft: -245,
                    fontSize: 12,
                  }}
                >
                  Posted By:{data.posted_by}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h4 style={{ textAlign: "left", marginLeft: 20, paddingRight: 10 }}>
            {" "}
            {data.title}
          </h4>

          <h5
            style={{
              textAlign: "left",
              marginLeft: 20,
              color: "#868e96",
              paddingRight: 10,
            }}
          >
            {data.description}
            <br />
          </h5>
          <div>
            <a target="_blank" href={data.url}>
              <Button
                style={{
                  backgroundColor: "#f03e3e",
                  width: 90,
                  height: 30,
                  color: "white",
                  fontSize: 14,
                  fontWeight: "bold",
                  borderRadius: 20,
                  paddingLeft: 10,
                  paddingTop: 3,
                  marginLeft: 20,
                }}
                onClick={() => newwindow(data.url)}
                type="danger"
                size="large"
                shape="round"
              >
                read more
              </Button>
            </a>
          </div>
        </div>
      </div>
    </MaterialCard>
  );
};
export default Card;
