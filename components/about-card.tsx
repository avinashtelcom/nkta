import {
  Card,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

interface AboutCardProp {
  title: string;
  subTitle: string;
  description: string[];
}

export function AboutCard({ title, description, subTitle }: AboutCardProp) {
  return (
    <Card shadow={false} placeholder="">
      <CardBody className="h-[453px] p-5 flex flex-col justify-center items-center rounded-2xl bg-gray-900 mt-10" placeholder="">
        <Typography variant="h4" className="text-center" color="white" placeholder="">
          {title}
        </Typography>
        {description.map((desc, idx) => (
          <Typography key={idx} variant="lead" className="mt-2 text-center" color="white" placeholder="">
            {desc}
          </Typography>
        ))}
        
        {/* <Button color="white" size="sm" placeholder="">
          view details
        </Button> */}
      </CardBody>
    </Card>
  );
}


export default AboutCard;
