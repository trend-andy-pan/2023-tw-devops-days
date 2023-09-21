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

  // const getValues = () => ({
  //   "answer-0": "Frontend Developer",
  //   "answer-2": "1~3年",
  //   "answer-4": ["Javascript"],
  //   "answer-3": "已上手",
  //   "answer-8": ["Gitlab"],
  //   "answer-10": ["Jarvis Wiki (Confluence)", "Clickup"],
  //   "answer-12": ["Api testing", "End-to-end testing"],
  //   "answer-14": ["Oracle Cloud", "Alibaba Cloud"],
  //   "answer-15": ["Virtual Machines", "Serverless"],
  //   "answer-16": ["Terraform", "CloudFormation"],
  //   "answer-18": "No",
  //   "answer-20": ["Puppet", "Chef"],
  //   "answer-21": ["Jenkins", "Circle CI"],
  //   "answer-23": ["Docker Swarm/Compose", "AWS ECS"],
  //   "answer-25": ["Prometheus", "Icinga", "Grafana"],
  //   "answer-27": ["Graylog", "CloudWatch"],
  //   "question-0": "你的工作性質屬於？",
  //   "question-2": "DevOps 的經驗",
  //   "question-4": "團隊使用的程式語言？",
  //   "question-6": "是否有接觸過網絡協議的相關經驗？",
  //   "question-8": "目前使用的版本控制服務?",
  //   "question-10": "目前使用的專案管理工具?",
  //   "question-12": "開發過的專案中，自動化測試有包含什麼項目呢？",
  //   "question-14": "使用的雲端服務?",
  //   "question-15": "使用中的基礎設施的架構?",
  //   "question-16": "使用中的基礎設施部署工具",
  //   "question-18":
  //     "是否使用過 Secret management 管理密碼、API 密鑰和其他機密資訊的經驗？",
  //   "question-20": "使用的配置管理工具?",
  //   "question-21": "使用的 CI/CD 工具?",
  //   "question-23": "使用的容器化管理工具?",
  //   "question-25": "使用過的系統監控軟體?",
  //   "question-27": "使用過的 Logs 管理工具?",
  // });

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
