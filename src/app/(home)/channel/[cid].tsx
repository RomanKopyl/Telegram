import { useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Channel as ChannelType } from 'stream-chat';
import { Channel, MessageInput, MessageList, useChatContext } from 'stream-chat-expo';

const CnannelScreen = () => {
    const [channel, setChannel] = useState<ChannelType>();
    const { cid } = useLocalSearchParams<{ cid: string }>();

    const { client } = useChatContext();


    useEffect(() => {
        const fetchChannel = async () => {
            const channels = await client.queryChannels({ cid });
            setChannel(channels[0]);
        };

        fetchChannel();
    }, [cid]);

    if (!channel) {
        return <ActivityIndicator />;
    }

    return (
        <Channel channel={channel}>
            <MessageList />
            <SafeAreaView edges={['bottom']}>
                <MessageInput />
            </SafeAreaView>
        </Channel>
    );
}

export default CnannelScreen

const styles = StyleSheet.create({})