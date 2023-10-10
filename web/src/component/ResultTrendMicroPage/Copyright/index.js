import { Card, CardBody } from "@nextui-org/react";

export default function Copyright() {
  return (
    <div className="max-md:mt-0 mt-8 max-md:p-3">
      <Card className="bg-transparent shadow-none">
        <CardBody className="py-0">
          <div className="flex flex-row gap-3 max-md:gap-1 max-md:text-base justify-center">
            <p>
              Copyright © 2023 Trend Micro Incorporated. All rights reserved.
            </p>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
