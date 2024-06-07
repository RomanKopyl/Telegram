import { router } from 'expo-router';
import React from 'react';
import { Image, Pressable, StyleSheet, Text } from 'react-native';
import { useChatContext } from 'stream-chat-expo';
import { supabase } from '../lib/supabase';
import { useAuth } from '../providers/AuthProvider';

const UserListItem = ({ user }) => {
  const imageUrl = supabase.storage
    .from('avatars')
    .getPublicUrl(user.avatar_url)
    .data
    .publicUrl;

  const { client } = useChatContext();
  const { user: me } = useAuth();

  const onPress = async () => {
    const channel = client.channel('messaging', {
      members: [me.id, user.id],
    });

    await channel.watch();    
    router.replace(`/(home)/channel/${channel.cid}`);
  }

  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Image
        src={imageUrl}
        style={styles.image}
      />
      <Text style={styles.name}>
        {user.full_name}
      </Text>
    </Pressable>
  )
}

export default UserListItem;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  image: {
    width: 30,
    height: 30,
  },
  name: {
    fontWeight: '600',
    flex: 1,
  },
})