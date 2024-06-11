import { FontAwesome5 } from '@expo/vector-icons';
import { Link, Redirect, Stack, router } from 'expo-router';
import { Channel as ChannelType } from 'stream-chat';
import { ChannelList } from 'stream-chat-expo';
import { useAuth } from '../../../providers/AuthProvider';

export default function MainTabScreen() {
	const { user } = useAuth();

	return (
		<>
			<Stack.Screen options={{
				headerRight: () =>
					// <Link href={'/(home)/users'} asChild>
					<FontAwesome5
						onPress={() => router.push('/(home)/users')}
						name="users"
						size={22}
						color="gray"
						style={{ marginHorizontal: 15 }}
					/>
				// </Link>
			}}
			/>
			<ChannelList
				filters={{ members: { $in: [user.id] } }}
				onSelect={(channel: ChannelType) => router.push(`/channel/${channel.cid}`)}
			/>
		</>
	);
}