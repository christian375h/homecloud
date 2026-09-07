import React from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import {
  CurrencyDollarIcon,
  LockClosedIcon,
  EyeSlashIcon,
  BoltIcon,
  FaceSmileIcon,
  LinkIcon,
  HeartIcon,
} from "@heroicons/react/24/solid";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

function FeatureCard({ icon, title, children }: FeatureCardProps) {
  return (
    <Card color="transparent" shadow={false}>
      <CardBody className="grid justify-center text-center">
        <div className="mx-auto mb-6 grid h-12 w-12 place-items-center rounded-full bg-dark p-2.5 text-white">
          {icon}
        </div>
        <Typography
          variant="h5"
          color="blue-gray"
          className="mb-2 !font-semibold"
        >
          {title}
        </Typography>
        <Typography
          className="px-8 font-normal text-gray-700"
        >
          {children}
        </Typography>
      </CardBody>
    </Card>
  );
}

const features = [
  {
    icon: <CurrencyDollarIcon className="h-6 w-6" strokeWidth={2} />,
    title: "Zero Monthly Fees",
    description:
      "Pay once for your hardware and installation. Stop paying Google and Apple monthly subscriptions just to keep your storage.",
  },
  {
    icon: (
      <EyeSlashIcon className="h-6 w-6" strokeWidth={2} />
    ),
    title: "Complete Privacy",
    description:
      "Your photos and documents stay on a physical drive inside your home. No big corporations looking through your data for ads or training AI models.",
  },
  {
    icon: <BoltIcon className="h-6 w-6" strokeWidth={2} />,
    title: "Automatic Backup",
    description:
      "Seamlessly back up your high resolution photos and videos from your phone the second you take a picture or video.",
  },
  {
    icon: <FaceSmileIcon className="h-6 w-6" strokeWidth={2} />,
    title: "Simple Access",
    description:
      "Access your photos, videos and files securely from anywhere in the world without exposing those files to the internet.",
  },
  {
    icon: <LockClosedIcon className="h-6 w-6" strokeWidth={2} />,
    title: "Automated Protection",
    description:
      "Built in redundancy and optional encrypted backups mean your memories stay protected against hardware failure.",
  },
  {
    icon: <HeartIcon className="h-6 w-6" strokeWidth={2} />,
    title: "Local Support",
    description:
      "No offshore call centers or AI chatbots. Get direct support and setup assistance from a local expert right here in the Salt Lake Area.",
  },
];

export function FeatureSectionOne() {
  return (
    <section className="py-28 px-4">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h2" color="blue-gray" className="mb-4">
          Bring Cloud Storage Home
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 text-blue-gray-800 md:w-10/12 lg:w-7/12 lg:px-8"
        >
          Setting up secure and private access to your documents and photos is easier and cheaper than ever.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-y-20 md:grid-cols-2 lg:grid-cols-3">
        {features.map(({ icon, title, description }) => (
          <FeatureCard key={title} icon={icon} title={title}>
            {description}
          </FeatureCard>
        ))}
      </div>
    </section>
  );
}

export default FeatureSectionOne;
