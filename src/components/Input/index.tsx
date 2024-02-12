import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from "react";
import { TouchableOpacity } from "react-native";
import { Icon } from "../Icon";

import {
  Container,
  IconContainer,
  Label,
  Border,
  Error,
  InputInternal,
} from "./styles";

import { InputProps, InputValueRef } from "./types";
import { useInputController } from "./useInputController";

const Input: React.ForwardRefRenderFunction<InputValueRef, InputProps> = (
  {
    color = "#6B7785",
    secureTextEntry,
    icon,
    iconColor,
    iconPosition = "right",
    label,
    error,
    backgroundActiveColor,
    onChangeText,
    iconButton,
    onMessageSend,
    ...rest
  },
  ref
) => {
  /**
   * Controller
   */
  const { text, selectedColorForActiveColorIcon, internalRef, setText } =
    useInputController({ color, error, iconColor, ref });

  /**
   * Callbacks
   */
  const renderIcon = useCallback(() => {
    if (onMessageSend) {
      return (
        <TouchableOpacity onPress={() => onMessageSend(text)}>
          <IconContainer iconPosition={iconPosition}>
            <Icon icon={"paperPlane"} />
          </IconContainer>
        </TouchableOpacity>
      );
    }

    if (icon) {
      return (
        <IconContainer iconPosition={iconPosition}>
          <Icon icon={icon} activeColor={selectedColorForActiveColorIcon} />
        </IconContainer>
      );
    }
    if (iconButton) {
      return iconButton;
    }
    return null;
  }, [
    secureTextEntry,
    icon,
    iconPosition,
    selectedColorForActiveColorIcon,
    iconButton,
  ]);

  return (
    <Container
      backgroundActiveColor={
        backgroundActiveColor ? backgroundActiveColor : "transparent"
      }
    >
      {!!label && (
        <Label color="#41474D" size={14}>
          {label}
        </Label>
      )}
      <Border color="transparent" borderColor={error ? "#D93936" : color}>
        {iconPosition === "left" && renderIcon()}
        <InputInternal
          ref={internalRef}
          value={text}
          onChangeText={(value: string) => {
            setText(value);
            onChangeText?.(value);
          }}
          {...rest}
        />
        {iconPosition === "right" && renderIcon()}
      </Border>
      {!!error && (
        <Error testID="error-input" color="#D93936" size={10}>
          {error}
        </Error>
      )}
    </Container>
  );
};

export default forwardRef(Input);
