import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
	showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
	return (
		<Flex align="center">
			{ showProfileData && (
				<Box mr="4" textAlign="right">
				<Text>Ednan Jhony</Text>
					<Text color="gray.300" fontSize="small">
							123ednan@gmail.com
						</Text>
					</Box>
			)}

					<Avatar size="md" name="Ednan Jhony" src="https://github.com/ednanjhony.png" />
				</Flex>
	);
}