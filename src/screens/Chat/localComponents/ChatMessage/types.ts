import { IMessage } from "~/@types/IMessage";

export interface IChatMessageProps {
  message: IMessage;
}

export interface IMessageContainerStyleProps {
  isSender: boolean;
}
