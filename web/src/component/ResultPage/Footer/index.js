import { Card, CardBody, CardFooter, Button } from "@nextui-org/react";
import AnimatedNumbers from "react-animated-numbers";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  const routeChange = () => {
    let path = `/result/trend-micro`;
    navigate(path);
  };

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
        <CardFooter className="justify-center">
          <Button
            color="danger"
            size="lg"
            variant="ghost"
            onClick={routeChange}
          >
            來看看趨勢人怎麼說
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
