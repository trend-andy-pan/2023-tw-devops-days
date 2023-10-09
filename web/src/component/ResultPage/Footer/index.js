import { Card, CardBody } from "@nextui-org/react";
import AnimatedNumbers from "react-animated-numbers";

export default function Footer() {
  return (
    <div className="max-md:my-1 my-8">
      <Card className="bg-transparent" fullWidth>
        <CardBody>
          <div className="flex flex-row gap-3 max-md:gap-1 text-2xl max-md:text-base justify-center">
            <p>問卷人數：</p>
            <AnimatedNumbers
              animateToNumber={367}
              configs={(number, index) => {
                return { mass: 1, tension: 130 * (index + 1), friction: 140 };
              }}
            />
            <p>人，感謝您的參與！</p>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
