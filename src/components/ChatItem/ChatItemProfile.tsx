import { Image } from "@mantine/core";

interface ChatItemProfileProps {
  profile: string;
}

export default function ChatItemProfile({ profile }: ChatItemProfileProps) {
  return (
    <Image
      radius="xl"
      src={profile}
      width="40px"
      height="40px"
      alt="Profile Pic"
      sx={{ alignSelf: "flex-start" }}
    />
  );
}
