import { router } from 'expo-router';
import { Channel as ChannelType } from 'stream-chat';
import { ChannelList } from 'stream-chat-expo';

export default function MainTabScreen() {
	return (
		<ChannelList
			onSelect={(channel: ChannelType) => router.push(`/channel/${channel.cid}`)}
		/>
	);
}