import React from 'react';
import Conversation from './Conversation';
import useGetConversation from '../../hooks/useGetConversation';
import { getRandomEmoji } from '../../utils/emoji';

const Conversations = ({setSlide}) => {
  const { loading, conversations } = useGetConversation();
  return (
    <div className="my-2 flex flex-col overflow-auto">
      {loading ? (
        <span className="loading loading- mx-auto"></span>
      ) : (
        conversations.map((conversation, idx) => (
          <Conversation key={conversation._id} conversation={conversation}
          emoji={getRandomEmoji()}
          lastIdx={idx === conversations.length - 1}
          setSlide={setSlide}
          />
        ))
      )
      }
    </div>
  );
};

export default Conversations;
