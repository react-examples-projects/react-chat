import { Box, Text, Image } from "@mantine/core";
import OnlineStatus from "./OnlineStatus";

export default function ActiveUser() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        padding: "0.8rem 0.6rem",
        borderRadius: "5px",
        "&:hover": {
          backgroundColor: "rgb(37, 38, 43)",
        },
        "&:not(:last-child)": { marginBottom: "0.3rem" },
      }}
    >
      <Image
        src="https://i.pinimg.com/564x/5f/2d/98/5f2d987179679a47e396484942ced933.jpg"
        width={30}
        height={30}
        radius="xl"
        alt="Username Pic"
        title="Username Pic"
        mr="0.4rem"
      />
      <Text size="sm">Carlos Mendez Rengifo</Text>
      <OnlineStatus ml="sm" />
    </Box>
  );
}
