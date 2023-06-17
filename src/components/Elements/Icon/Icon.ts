import { IconEnum } from "../../Types";
import {
  MailOutline,
  ArrowUpward,
  ArrowForward,
  ArrowDownward,
  ArrowBack,
  ArrowCircleRight,
  ArrowCircleLeft,
} from '@mui/icons-material';

export const Icon = {
  'undefined': "",
  [IconEnum.Mail]: MailOutline,
  [IconEnum.ArrowUp]: ArrowUpward,
  [IconEnum.ArrowRight]: ArrowForward,
  [IconEnum.ArrowDown]: ArrowDownward,
  [IconEnum.ArrowLeft]: ArrowBack,
  [IconEnum.ArrowCircleRight]: ArrowCircleRight,
  [IconEnum.ArrowCircleLeft]: ArrowCircleLeft,
}