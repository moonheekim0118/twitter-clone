import React from "react";
import Textarea from "./Textarea";
import Side from "./Side";
import styled from "styled-components";
import ImagePath from "../Images/ImagePath";
import { ImageIcon } from "../Icons";

// type : post / modal / modify / comment

const TYPES = {
  post: {
    noborder: false,
    encType: "multipart/form-data",
    placeholder: "what is happening?",
  },
  modal: {
    noborder: true,
    encType: "multipart/form-data",
    placeholder: "what is happening?",
  },
  modify: {
    noborder: true,
    encType: "multipart/form-data",
    placeholder: "what is happening?",
  },
  comment: {
    noborder: false,
    encType: "",
    placeholder: "따뜻한 댓글을 남겨주세요",
  },
};

const Form = ({
  type,
  onChange,
  value,
  Button,
  onChangeImage = null,
  imageInput = null,
  onClickImageUpload = null,
}) => {
  return (
    <Container $noborder={TYPES[type].noborder} encType={TYPES[type].encType}>
      <Side />
      <FormMeta>
        <Textarea
          text={value}
          onChange={onChange}
          placeholder={TYPES[type].placeholder}
        />
        <Buttons>
          {type !== "comment" && type !== "modify" && (
            <>
              <input
                type="file"
                multiple
                name="image"
                hidden
                ref={imageInput}
                onChange={onChangeImage}
              />
              <ImageIcon onClick={onClickImageUpload} />
            </>
          )}

          {type !== "comment" ? (
            <TextLength limit={value.length >= 140}>
              {140 - value.length}
            </TextLength>
          ) : (
            <div></div>
          )}

          {Button}
        </Buttons>
        {type !== "comment" && type !== "modify" && <ImagePath />}
      </FormMeta>
    </Container>
  );
};

const Container = styled.form`
    display:flex;   
    flex-direction: row;

    position:relative;
    width:100%
    height: auto;
    min-height:${(props) => (props.$small ? "50px" : "130px")};

    margin-top:${({ theme }) => theme.margins.xxl};
    margin-bottom:${({ theme }) => theme.margins.xxxl};
    padding:${({ theme }) => theme.paddings.xxxl};
    padding-bottom:${(props) => (props.$small ? "1rem" : "0")};

    border:${(props) =>
      props.$noborder ? "1px solid transparent" : "1px solid #f4f4f4"}
`;

const FormMeta = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: 90%;
  position: relative;

  padding: 0 ${({ theme }) => theme.paddings.xxxl};
  margin-left: ${({ theme }) => theme.margins.xxxl};
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;

  margin-top: ${({ theme }) => theme.margins.xsmall};
  padding: ${({ theme }) => theme.paddings.base} 0;
  border-top: 1px solid ${({ theme }) => theme.colors.gray_3};

  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.blue_2};
`;

const TextLength = styled.span`
  position: absolute;
  top: 18px;
  right: 100px;
  font-size: ${({ theme }) => theme.fontSizes.base};
  color: ${(props) =>
      props.$limit ? "red" : `${({ theme }) => theme.colors.blue_2}`}${({
      theme,
    }) => theme.colors.blue_2};
`;

export default Form;
