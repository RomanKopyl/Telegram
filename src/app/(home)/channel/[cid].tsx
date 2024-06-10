import { Ionicons } from '@expo/vector-icons';
import { useStreamVideoClient } from '@stream-io/video-react-native-sdk';
import * as Crypto from 'expo-crypto';
import { Stack, router, useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Channel as ChannelType } from 'stream-chat';
import { Channel, MessageInput, MessageList, useChatContext } from 'stream-chat-expo';

export default function CnannelScreen() {
	const [channel, setChannel] = useState<ChannelType>();
	const { cid } = useLocalSearchParams<{ cid: string }>();

	const { client } = useChatContext();
	const videoClient = useStreamVideoClient();


	useEffect(() => {
		const fetchChannel = async () => {
			const channels = await client.queryChannels({ cid });
			setChannel(channels[0]);
		};

		fetchChannel();
	}, [cid]);


	const joinCall = async () => {
		const members = Object
			.values(channel.state.members)
			.map(member => ({
				user_id: member.user_id,
			}));

		// create a call using the channel members
		const call = videoClient.call('default', Crypto.randomUUID());
		await call.getOrCreate({
			ring: true,
			data: { members },
		});

		// navigate to the call screen
		// router.push(`/call`);
	}

	if (!channel) {
		return <ActivityIndicator />;
	}

	return (
		<Channel channel={channel} audioRecordingEnabled>
			<Stack.Screen options={{
				title: 'Chat',
				headerRight: () => <Ionicons
					name="call"
					size={20}
					color="gray"
					onPress={joinCall} />,
			}} />
			< MessageList />
			<SafeAreaView edges={['bottom']}>
				<MessageInput />
			</SafeAreaView>
		</Channel >
	);
};