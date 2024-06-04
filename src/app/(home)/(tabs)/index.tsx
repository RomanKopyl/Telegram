import { router } from 'expo-router';
import { Channel as ChannelType } from 'stream-chat';
import { ChannelList } from 'stream-chat-expo';
import { useAuth } from '../../../providers/AuthProvider';

export default function MainTabScreen() {
	const { user } = useAuth();

	return (
		<ChannelList
			filters={{ members: { $in: [user.id] } }}
			onSelect={(channel: ChannelType) => router.push(`/channel/${channel.cid}`)}
		/>
	);
}