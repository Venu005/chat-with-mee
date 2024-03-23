import { Conversation, Message, User } from "@prisma/client";

export type FullMessageType = Message & {
  sender: User;
  seen: User[];
};

export type FullConvesationType = Conversation & {
  users: User[];
  messages: FullMessageType[]; // making it error cause initailItems is an array type
};
