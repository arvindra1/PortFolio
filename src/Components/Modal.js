import React, { useState } from 'react';
import { Button, Modal,Progress } from 'antd';
const Modal1 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button onClick={showModal}>
        Skill Level
      </Button>
      <Modal title="Skill Level" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>HTML<Progress percent={90} status="active" /></p>
        <p>CSS / Tailwind / Bootstrap<Progress percent={85} status="active" /></p>
        <p>JavaScript<Progress percent={90} status="active" /></p>
        <p>React js<Progress percent={90} status="active" /></p>
        <p>React Native<Progress percent={90} status="active" /></p>
        <p>Node js<Progress percent={85} status="active" /></p>
        <p>C / C++<Progress percent={85} status="active" /></p>
      </Modal>
    </>
  );
};
export default Modal1;