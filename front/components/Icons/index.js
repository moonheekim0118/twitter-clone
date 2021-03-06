import styled from "styled-components";
import {
  LeftOutlined,
  LoadingOutlined,
  CloseCircleOutlined,
  CloseOutlined,
  PlusOutlined,
  RetweetOutlined,
  HeartOutlined,
  EllipsisOutlined,
  MessageOutlined,
  AreaChartOutlined,
  SearchOutlined,
  RightCircleOutlined,
  LeftCircleOutlined,
  MinusOutlined,
  HomeOutlined,
  KeyOutlined,
  UserOutlined,
  TeamOutlined,
} from "@ant-design/icons";

// 뒤로가기 아이콘 , 왼쪽 상단에 붙어있음
export const PushBackIcon = styled(LeftOutlined)`
  position: absolute;
  left: 0px;
  font-size: ${({ theme }) => theme.fontSizes.xxl};

  &:hover {
    color: ${({ theme }) => theme.colors.blue_1};
  }
`;

// 로딩 아이콘
export const LoadingIcon = styled(LoadingOutlined)`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.blue_1};
`;

// 창닫기 아이콘, 왼쪽 상단
export const CloseCircleLeftIcon = styled(CloseCircleOutlined)`
  position: fixed;
  left: 0;
  top: 0;
  padding: ${({ theme }) => theme.paddings.base};
  font-size: ${({ theme }) => theme.fontSizes.buttonSize};
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  z-index: 7000;
`;

// 창닫기 아이콘, 오른쪽 상단
export const CloseCircleRightIcon = styled(CloseCircleOutlined)`
  position: absolute;
  top: 5px;
  right: 5px;

  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.black};

  cursor: pointer;
  z-index: 0;

  &:hover {
    color: red;
  }
`;

// 일반창닫기 버튼 오른쪽 상단
export const CloseRightIcon = styled(CloseOutlined)`
  position: absolute;
  right: 10px;
  top: 5px;

  padding: ${({ theme }) => theme.paddings.lg};
  border-radius: 50%;
  font-size: ${({ theme }) => theme.fontSizes.xl};

  transition: 0.2s background-color ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.hover};
  }
`;

export const CloseLeftIcon = styled(CloseOutlined)`
  padding: ${({ theme }) => theme.paddings.lg};
  border-radius: 50%;

  font-size: ${({ theme }) => theme.fontSizes.xl};
  transition: 0.2s background-color ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.hover};
  }
`;

export const RedCloseIcon = styled(CloseOutlined)`
  &:hover {
    color: red;
  }
`;

export const SearchIcon = styled(SearchOutlined)`
  font-size: ${({ theme }) => theme.fontSizes.lg};
`;

export const EditIcon = styled(PlusOutlined)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: ${({ theme }) => theme.paddings.base};

  font-size: ${({ theme }) => theme.fontSizes.xxxl};
  color: ${({ theme }) => theme.colors.white};

  border-radius: 50%;
  transition: 0.2s background-color ease-in-out;
  cursor: pointer;
  z-index: 1001;

  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }
`;

export const HeartIcon = styled(HeartOutlined)`
  padding: ${({ theme }) => theme.paddings.base};
  border-radius: 50%;
  color: inherit;
  transition: 0.2s background-color ease-in-out;

  &:hover {
    background-color: rgba(235, 47, 150, 0.3);
  }
`;

export const SmallRetweetIcon = styled(RetweetOutlined)`
  font-size: ${({ theme }) => theme.fontSizes.base};
`;

export const RetweetIcon = styled(RetweetOutlined)`
  padding: ${({ theme }) => theme.paddings.base};
  border-radius: 50%;
  color: ${(props) => (props.retweeted === "true" ? "lime" : "gray")};
  transition: 0.2s background-color ease-in-out;

  &:hover {
    color: lime;
    background-color: rgba(0, 255, 0, 0.3);
  }
`;

export const MoreIcon = styled(EllipsisOutlined)`
  padding: ${({ theme }) => theme.paddings.base};
  border-radius: 50%;
  transition: 0.2s background-color ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.blue_2};
    background-color: ${({ theme }) => theme.colors.hover};
  }
`;

export const CommentIcon = styled(MessageOutlined)`
  padding: ${({ theme }) => theme.paddings.base};
  border-radius: 50%;
  color: inherit;
  transition: 0.2s background-color ease-in-out;

  &:hover {
    background-color: rgba(0, 153, 204, 0.3);
  }
`;

export const ImageIcon = styled(AreaChartOutlined)`
  padding: ${({ theme }) => theme.paddings.lg};
  border-radius: 50%;
  transition: 0.2s background-color ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.hover};
  }
`;

export const IndicatorIcon = styled(MinusOutlined)`
  font-size: ${({ theme }) => theme.fontSizes.titleSize};
  color: ${(props) => (props.color === "true" ? "#fff" : "#bfbfbf")};
  cursor: pointer;
`;

export const LeftIcon = styled(LeftCircleOutlined)`
  position: fixed;
  top: 50%;
  left: 0;
  transform: translate(20%, -50%);
  font-size: ${({ theme }) => theme.fontSizes.buttonSize};
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  z-index: 7000;
`;

export const RightIcon = styled(RightCircleOutlined)`
  position: fixed;
  top: 50%;
  right: 0;
  transform: translate(-20%, -50%);
  font-size: ${({ theme }) => theme.fontSizes.buttonSize};
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  z-index: 7000;
`;

export const HomeIcon = styled(HomeOutlined)`
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  color: ${({ theme }) => theme.colors.blue_2};
`;

export const LoginIcon = styled(KeyOutlined)`
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  color: ${({ theme }) => theme.colors.blue_2};
`;

export const ProfileIcon = styled(UserOutlined)`
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  color: ${({ theme }) => theme.colors.blue_2};
`;

export const SignupIcon = styled(TeamOutlined)`
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  color: ${({ theme }) => theme.colors.blue_2};
`;
