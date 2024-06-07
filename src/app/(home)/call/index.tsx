import {
  CallContent,
  StreamCall,
  StreamVideo,
  StreamVideoClient,
  User
} from '@stream-io/video-react-native-sdk';
import { Text } from 'react-native';

const apiKey = process.env.EXPO_PUBLIC_STREAM_API_KEY;
const userId = 'ddee4ba4-bfad-4176-b529-25ea4034a1a0';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiZGRlZTRiYTQtYmZhZC00MTc2LWI1MjktMjVlYTQwMzRhMWEwIn0.D7zGMZLHRYxax67itSbP_UGgkL6nfk_Ln1604mqTl3o';
const callId = 'default_c61440d8-fd69-4a3b-9a93-cf654c50a04d';
const user: User = { id: userId };

const client = new StreamVideoClient({ apiKey, user, token });
const call = client.call('default', callId);
call.join({ create: true });

export default function CallScreen() {
  return (
    <StreamVideo client={client}>
      <StreamCall call={call}>
        <CallContent />
      </StreamCall>
    </StreamVideo>
  );
}