import React, { useContext } from "react";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
import DevopsRoadmap from "./DevopsRoadmap";
import QuestionnairesContext from "../../../../context/questionnaires";

export default function RoadmapModal({
  isModalOpen: isOpen,
  onModalClose: onClose,
}) {
  const {
    ctxValue: { questionsForm },
  } = useContext(QuestionnairesContext);

  const { getValues = () => {} } = questionsForm;

  const getAllAnswers = () => {
    const values = getValues();
    const answers = Object.keys(values)
      .filter((key) => key.includes("answer"))
      .map((answer) => ({ [answer]: values[answer] }));
    return answers.reduce((obj, item) => ({ ...obj, ...item }), {});
  };

  return (
    <Modal
      size="5xl"
      backdrop="blur"
      isOpen={isOpen}
      onClose={onClose}
      scrollBehavior="inside"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              你的 DevOps Story
            </ModalHeader>
            <ModalBody className="bg-white">
              <DevopsRoadmap {...{ answers: getAllAnswers() }} />
            </ModalBody>
            <ModalFooter>
              <Button className="flex-1" color="secondary" onPress={onClose}>
                快到 FB 分享活動文章有機會抽到大獎喔
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
