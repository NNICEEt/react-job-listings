import { FunctionComponent } from "react";
import styled from "styled-components";

interface BadgeProps {
  primaryColor: string;
  className?: string;
}

interface BadgeButtonProps extends BadgeProps {
  canClose?: boolean;
  onClose?: React.MouseEventHandler<HTMLInputElement>;
  onClick?: React.MouseEventHandler<HTMLInputElement>;
  secondaryColor: string;
}

const Badge: FunctionComponent<BadgeProps> = ({
  primaryColor,
  className,
  children,
}) => {
  return (
    <BadgeContainer className={className} primaryColor={primaryColor}>
      {children}
    </BadgeContainer>
  );
};

const BadgeButton: FunctionComponent<BadgeButtonProps> = (props) => {
  const {
    primaryColor,
    className,
    canClose,
    onClose,
    onClick,
    secondaryColor,
    children,
  } = props;
  return (
    <BadgeButtonContainer
      className={className}
      primaryColor={primaryColor}
      secondaryColor={secondaryColor}
      canClose={canClose}
    >
      <div className="btn" onClick={onClick}>{children}</div>
      <div className="close-btn" onClick={onClose}>
        X
      </div>
    </BadgeButtonContainer>
  );
};

const BadgeContainer = styled.div<BadgeProps>`
  display: inline-block;
  padding: 0.3rem 0.6rem;
  border-radius: 2rem;
  background-color: ${(props) => props.primaryColor};
`;

const BadgeButtonContainer = styled.div<BadgeButtonProps>`
  display: inline-block;
  border-radius: 0.5rem;
  overflow: hidden;
  cursor: pointer;
  div {
    display: inline-block;
  }
  .btn {
    font-weight: 700;
    padding: 0.5rem 0.6rem;
    color: ${(props) => props.secondaryColor};
    background-color: ${(props) => props.primaryColor};
    &:hover {
      color: ${(props) =>
        props.canClose ? props.secondaryColor : props.primaryColor};
      background-color: ${(props) =>
        props.canClose ? props.primaryColor : props.secondaryColor};
    }
  }
  .close-btn {
    padding: 0.5rem;
    color: ${(props) => props.primaryColor};
    background-color: ${(props) => props.secondaryColor};
    display: ${(props) => (props.canClose ? "inline-block" : "none")};
    &:hover {
      background-color: #444;
    }
  }
`;

export { BadgeButton };
export default Badge;
