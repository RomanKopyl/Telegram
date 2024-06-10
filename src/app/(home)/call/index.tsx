import {
  RingingCallContent,
  StreamCall,
  useCall
} from '@stream-io/video-react-native-sdk';
import { router } from 'expo-router';


export default function CallScreen() {
  const calls = useCall();
  console.log('CALL', calls);
  const call = calls?.[0];


  // const [call, setCall] = useState<Call>();
  // const client = useStreamVideoClient();

  // useEffect(() => {
  //   const fetchCall = async () => {
  //     const call = client.call('default', id);
  //     await call.get();
  //     setCall(call);
  //   }
  //   fetchCall();

  //   return () => {
  //     if (call) {
  //       call.leave();
  //     }
  //   }
  // }, [id]);


  if (!call) {
    if ((router.canGoBack())) {
      router.back();
    } else {
      router.push('/');
    }

    return null;
  }

  return (
    <StreamCall call={call}>
      <RingingCallContent />
    </StreamCall>
  );
}