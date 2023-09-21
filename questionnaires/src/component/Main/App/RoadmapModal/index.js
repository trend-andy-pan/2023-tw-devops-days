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

  const handlePress = () => {
    window.open("http://pili.app/fb/SPgCvTT9", "_blank");
  };

  return (
    <Modal
      size="full"
      backdrop="blur"
      isOpen={isOpen}
      onClose={onClose}
      scrollBehavior="inside"
      hideCloseButton
      placement="center"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              專屬於您的 DevOps Story
            </ModalHeader>
            <ModalBody>
              <div className="text-center">
                <p>感謝您參與趨勢科技DevOpsDays2023限定活動</p>
                <p>這是您專屬的DevOps Story，後續將寄送至您提供的個人信箱。</p>
              </div>
              <div className="bg-white">
                <DevopsRoadmap {...{ answers: getAllAnswers() }} />
              </div>
              <div>
                <p className="text-danger">
                  請繼續完成 Step2:
                  分享FB置頂文章按讚搶先看後，到趨勢科技攤位抽獎！
                </p>
                <p>
                  活動期間 <strong>每日 下午4:10</strong> 加碼抽出{" "}
                  <strong>Nespresso 咖啡機</strong>{" "}
                  大獎，越早完成中獎機會越高唷！
                </p>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button
                className="flex-1"
                color="secondary"
                onPress={handlePress}
              >
                FB置頂文章 按讚分享 抽 <strong>Nespresso 咖啡機</strong>
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
