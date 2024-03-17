import Convertation from "../models/convertation.model.js";
import Message from "../models/message.model.js";

export const sendMessage = async(req, res) => {
  try {
  const {id:receiverId} = req.params;
  const {message} = req.body;
  const senderId = req.user._id;

  let conversation = await Convertation.findOne({
    participants: {
      $all: [
        senderId,
        receiverId
      ]
    }
  })
  
  if(!conversation){
    conversation = await Convertation.create({
      participants: [
        senderId,
        receiverId
      ]
    })
  }

  const newMessage = new Message({
    senderId,
    receiverId,
    message
  })

  if(newMessage){
    conversation.messages.push(newMessage._id)
  }

  await conversation.save()
  await newMessage.save()
  
  res.status(200).json(newMessage)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "Something went wrong" })
  }
}

export const getMessages = async(req, res) => {
  try {
    const {id:receiverId} = req.params;
    const {id:senderId} = req.user;
    const conversation = await Convertation.findOne({
      participants: {
        $all: [
          senderId,
          receiverId
        ]
      }
    }).populate("messages");

    if(!conversation){
      return res.status(200).json([])
    }
    res.status(200).json(conversation.messages)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "Something went wrong" })
  }
}