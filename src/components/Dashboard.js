import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Details from "./Details";
import useCollapse from "react-collapsed";

const Dashboard = () => {
  const [details, setDetails] = useState([]);
  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/users`
      );
      setDetails(data);
    };
    getData();
  });

  return (
    <>
      <Box
        sx={{
          height: "auto",
          width: "100vw",
          padding: "1rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "rgb(242, 234, 234)",
        }}
      >
        <h2>Information</h2>
        {details.map((i) => (
          <Box
            key={i.id}
            sx={{
              width: "100%",
              height: "auto",
              display: "flex",
              flexWrap: "wrap",
              flexDirection: "column",
            }}
          >
            <Box
              key={i.id}
              sx={{
                width: "100%",
                height: "100px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                backgroundColor: "#fff",
                marginTop: "1.5rem",
                padding: "0 1rem",
              }}
            >
              <Typography fontSize="14px">{i.username}</Typography>
              <Typography
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "center",
                  fontSize: "14px",
                }}
              >
                <strong>contact</strong>
                <span>{i.name}</span>
              </Typography>
              <Typography
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "center",
                  fontSize: "14px",
                }}
              >
                <strong>city</strong>
                <span>{i.address.city}</span>
              </Typography>
              <Typography
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "center",
                  fontSize: "14px",
                }}
              >
                <strong>street</strong>
                <span>{i.address.street}</span>
              </Typography>
              <Button
                {...getToggleProps({
                  onClick: () => setExpanded((prevExpanded) => !prevExpanded),
                })}
                sx={{
                  backgroundColor: "rgb(249, 4, 41)",
                  color: "rgb(242, 234, 234)",
                  padding: "0.5rem 1rem",
                  fontSize: "small",
                  borderRadius: "20px",
                }}
              >
                {isExpanded ? "Hide Details" : "View Details"}
              </Button>
            </Box>
            <Box {...getCollapseProps()}>
              <Details
                username={i.name}
                email={i.email}
                phone={i.phone}
                designation={i.designation}
                address={i.address.suite}
                city={i.address.city}
                street={i.address.street}
                country={i.address.country}
              />
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default Dashboard;
