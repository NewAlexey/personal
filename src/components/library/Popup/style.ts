import styled from "styled-components";

import { COLOURS } from "utils/constants";
import { PopupType } from "src/components/library/Popup/Popup";

export const PopupContainer = styled.div`
  overflow: hidden;
  position: relative;

  width: 200px;
  height: 70px;
  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: center;

  box-shadow: 5px 0 15px 0 rgba(34, 60, 80, 0.7);
  background-color: white;
`;

export const PopupTypeIndicator = styled.div<{ type: PopupType }>`
  position: absolute;
  width: 7px;

  top: 0;
  bottom: 0;
  left: 0;

  background-color: ${({ type }) => {
        switch (type) {
        case "success": {
            return COLOURS.success;
        }

        case "error": {
            return COLOURS.error;
        }

        case "info": {
            return COLOURS.info;
        }

        default: {
            return "orange";
        }
        }
    }
};
`;
