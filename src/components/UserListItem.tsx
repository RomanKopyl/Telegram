import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { supabase } from '../lib/supabase';

const UserListItem = ({ user }) => {
  const imageUrl = supabase.storage
    .from('avatars')
    .getPublicUrl(user.avatar_url)
    .data
    .publicUrl;

  return (
    <View style={styles.container}>
      <Image
        src={imageUrl}
        style={styles.image}
      />
      <Text style={styles.name}>
        {user.full_name}
      </Text>
    </View>
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