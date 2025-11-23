import ChatWindow from '@/components/ChatWindow';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chat - Clara.ai',
  description: 'Chat with the internet, chat with Clara.ai.',
};

const Home = () => {
  return <ChatWindow />;
};

export default Home;
