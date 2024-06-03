import { Stack } from "expo-router";
import { useEffect } from "react";
import { StreamChat } from 'stream-chat';
import { Chat, OverlayProvider } from 'stream-chat-expo';

const client = StreamChat.getInstance(process.env.EXPO_PUBLIC_CHAT_STREAM_API_KEY);

export default function HomeLayout() {

	useEffect(() => {
		const connect = async () => {
			await client.connectUser(
				{
					id: 'jlahey',
					name: 'Jim Lahey',
					image: 'https://i.imgur.com/fR9Jz14.png',
				},
				client.devToken('jlahey'),
			);


			// const channel = client.channel('messaging', 'the_park', {
			// 	name: 'The Park',
			// });

			// await channel.watch();
		}

		connect();
	}, []);

	return (
		<OverlayProvider>
			<Chat client={client}>
				<Stack>
					<Stack.Screen
						name="(tabs)"
						options={{ headerShown: false }}
					/>
				</Stack>
			</Chat>
		</OverlayProvider>
	);
}