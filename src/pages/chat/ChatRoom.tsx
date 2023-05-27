import React from 'react';
import ChatBox from '../../components/chat/ChatBox';
import SendMessage from '../../components/chat/SendMessage';


const ChatRoom = () => {
  return (
    <div>
      <ChatBox/>
      <SendMessage/>
    </div>
  )
}

export default ChatRoom;