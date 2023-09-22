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
      isDismissable={false}
    >
      <ModalContent>
        {() => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              專屬於您的 DevOps Story
            </ModalHeader>
            <ModalBody>
              <div className="text-center">
                <p>感謝您參與 趨勢科技 DevOpsDays 2023 限定活動</p>
                <p>這是您專屬的 DevOps Story，後續將寄送至您提供的個人信箱。</p>
              </div>
              <div className="bg-white">
                <DevopsRoadmap {...{ answers: getAllAnswers() }} />
              </div>
              <div>
                <p>請繼續完成步驟二：</p>
                <p className="text-danger">
                  <strong>分享</strong> FB置頂文章 並 <strong>按讚</strong>{" "}
                  <strong>追蹤</strong>，就可以到趨勢科技攤位抽獎喔！
                </p>
                <br />
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
                按讚、分享、追蹤 FB置頂文章 抽 <strong>Nespresso 咖啡機</strong>
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
