import { Box, Typography } from "@mui/material";

const Details = ({
  id,
  username,
  designation,
  email,
  phone,
  address,
  city,
  street,
  country,
}) => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "400px",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#fff",
          padding: "0 1rem",
        }}
      >
        <Box>
          <Typography>
            <strong>description</strong>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus,
              praesentium fugiat alias accusantium cumque ratione dicta modi
              perferendis dolor explicabo.
            </p>
          </Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-evenly",
            marginTop: "2rem",
          }}
        >
          <Box>
            <Typography fontSize="14px" display="flex" flexDirection="column">
              <strong>contact person</strong>
              <span>{username}</span>
            </Typography>
            <Typography fontSize="14px" display="flex" flexDirection="column">
              <strong>desination</strong>
              <span>{designation}</span>
            </Typography>
            <Typography fontSize="14px" display="flex" flexDirection="column">
              <strong>emails</strong>
              <span>{email}</span>
            </Typography>
            <Typography fontSize="14px" display="flex" flexDirection="column">
              <strong>phone</strong>
              <span>{phone}</span>
            </Typography>
          </Box>
          <Box>
            <Typography fontSize="14px" display="flex" flexDirection="column">
              <strong>address</strong>
              <span>{address}</span>
            </Typography>
            <Typography fontSize="14px" display="flex" flexDirection="column">
              <strong>city</strong>
              <span>{city}</span>
            </Typography>
            <Typography fontSize="14px" display="flex" flexDirection="column">
              <strong>street</strong>
              <span>{street}</span>
            </Typography>
            <Typography fontSize="14px" display="flex" flexDirection="column">
              <strong>country</strong>
              <span>{country}</span>
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Details;
