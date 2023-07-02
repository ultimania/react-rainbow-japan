import { IconEnum } from "../../../assets/Types";
import {
  MailOutline,
  ArrowUpward,
  ArrowForward,
  ArrowDownward,
  ArrowBack,
  ArrowCircleRight,
  ArrowCircleRightOutlined,
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
  [IconEnum.ArrowCircleRightOutlined]: ArrowCircleRightOutlined,
  [IconEnum.ArrowCircleLeft]: ArrowCircleLeft,
}