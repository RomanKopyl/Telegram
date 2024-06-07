import {
  CallContent,
  StreamCall,
  useStreamVideoClient
} from '@stream-io/video-react-native-sdk';

const callId = 'default_c61440d8-fd69-4a3b-9a93-cf654c50a04d';

export default function CallScreen() {
  const client = useStreamVideoClient();
  const call = client.call('default', callId);
  call.join({ create: true });

  return (
    <StreamCall call={call}>
      <CallContent />
    </StreamCall>
  );
}