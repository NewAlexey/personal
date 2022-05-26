import React, { useState } from "react";
import styled from "styled-components";
import { NextApiRequestCookies } from "next/dist/server/api-utils";

import { isActiveAdminCookie } from "../../../../../utils/helpers";
import { Button, Modal } from "../../../library";
import { AdminLoginModal } from "./AdminLoginModal";

const AdminButtonComponent = styled(Button)`
  position: absolute;
  right: 50px;
`;

const Text = styled.span`
  padding: 0 15px;
`;

interface IAdminButton {
  cookie: NextApiRequestCookies;
}

export const AdminButton = ({ cookie }: IAdminButton): JSX.Element | null => {
  const [isOpen, setIsOpen] = useState(false);
  const isActive = isActiveAdminCookie(cookie);

  const handleClickOpenModal = (): void => setIsOpen(true);
  const handleCloseModal = (): void => setIsOpen(false);

  return isActive ? (
    <>
      <AdminButtonComponent onClick={handleClickOpenModal}>
        <Text>Hidden button</Text>
      </AdminButtonComponent>
      <Modal isOpen={isOpen} closeModal={handleCloseModal}>
        <AdminLoginModal closeModal={handleCloseModal} />
      </Modal>
    </>
  ) : null;
};
