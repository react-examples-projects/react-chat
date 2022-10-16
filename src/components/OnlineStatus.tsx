import { Box, BoxProps } from "@mantine/core";

export default function OnlineStatus(props: BoxProps) {
  return (
    <Box
      sx={() => ({
        width: "4px",
        height: "4px",
        borderRadius: "50%",
        boxShadow: "0 0 0 3px #9dff2e36;",
        backgroundColor: "#38E54D",
      })}
      {...props}
    />
  );
}
