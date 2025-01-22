import React from "react";
import { Modal, Button } from "react-bootstrap";

type ModalComponentProps = {
  show: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  onSave?: () => void;
};

const SettingModalComponent: React.FC<ModalComponentProps> = ({
  show,
  onClose,
  title,
  children,
  onSave,
}) => {
  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title className="text-center font-bold">{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={onSave} className="bg-success">
          Save
        </Button>
        <Button variant="secondary" onClick={onClose}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SettingModalComponent;
