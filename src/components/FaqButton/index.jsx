import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledFaq = styled.div`
  .buttonFaq,
  .button-faq {
    position: fixed;
    bottom: 8px;
    right: 20px;
  }
`;

export default function FaqButton() {
  return (
    <StyledFaq>
      <div className="buttonFaq">
        <Link to="/faq">
          <Icon icon="fluent:question-circle-16-filled" color="#666" width="50" height="50" className="button-faq" />
        </Link>
      </div>
    </StyledFaq>
  );
}
