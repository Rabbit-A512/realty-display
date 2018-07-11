export interface Message {
  content: string;
  phone: string;
  call: string;
  user_id?: string;
  message_id?: string;
  time?: string;
  is_read?: boolean;
}
