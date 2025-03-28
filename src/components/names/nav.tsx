import { ConnectButton } from "@mysten/dapp-kit";
import { Box, Flex, Heading } from "@radix-ui/themes";

export default function Nav() {
  return (
    <Flex
    position="sticky" px="4" py="2" justify="between"
    style={{ backgroundColor: "var(--gray-a2)", backdropFilter: 'blur(20px)', border: '1px solid black', width: '100%' }}>
    <a href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
        <Heading>Bui</Heading>
    </a>
    <Box>
        <ConnectButton />
    </Box>
</Flex>
  )
}