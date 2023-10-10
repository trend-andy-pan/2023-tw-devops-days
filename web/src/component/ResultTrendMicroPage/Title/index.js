import { Card, CardBody } from "@nextui-org/react";
import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";

export default function Title() {
  const fadeInAnimation = keyframes`${fadeIn}`;

  const FadeInDiv = styled.div`
    animation: 3s ${fadeInAnimation};
  `;

  return (
    <div className="max-md:my-1 my-8">
      <Card className="bg-transparent shadow-none" fullWidth>
        <CardBody>
          <FadeInDiv>
            <div className="flex flex-row gap-3 max-md:gap-1 text-2xl max-md:text-base justify-center">
              <p>
                我們也隨機調查了百位趨勢人的經歷，希望您更了解趨勢這個大家庭。
              </p>
            </div>
          </FadeInDiv>
        </CardBody>
      </Card>
    </div>
  );
}
