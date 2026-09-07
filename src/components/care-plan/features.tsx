import React from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import {
  ShieldCheckIcon,
  WrenchScrewdriverIcon,
  PhoneIcon,
  CircleStackIcon,
  ArrowPathIcon,
  LockClosedIcon,
} from "@heroicons/react/24/solid";

function FeatureCard({ icon, title, children }) {
  return (
    <Card color="transparent" shadow={false}>
      <CardBody className="grid justify-center text-center">
        <div className="mx-auto mb-6 grid h-12 w-12 place-items-center rounded-full bg-dark p-2.5 text-white shadow-md">
          {icon}
        </div>
        <Typography variant="h5" color="blue-gray" className="mb-2 !font-semibold">
          {title}
        </Typography>
        <Typography className="px-6 font-normal text-gray-700">
          {children}
        </Typography>
      </CardBody>
    </Card>
  );
}

const features = [
  {
    icon: <ArrowPathIcon className="h-6 w-6" strokeWidth={2} />,
    title: "Automated Background Updates",
    description:
      "Care plan members receive hands-off OS and system updates so your server stays secure without you lifting a finger.",
  },
  {
    icon: <CircleStackIcon className="h-6 w-6" strokeWidth={2} />,
    title: "Optional SMART Telemetry",
    description:
      "Opt in drive health monitoring sends anonymized disk status alerts so we can catch failing drives before you lose data.",
  },
  {
    icon: <LockClosedIcon className="h-6 w-6" strokeWidth={2} />,
    title: "Strict Privacy Boundary",
    description:
      "Zero file access ever. We never receive data from your server unless explicitly granted, and your personal files and photos remain completely unreadable to us.",
  },
  {
    icon: <PhoneIcon className="h-6 w-6" strokeWidth={2} />,
    title: "Support Available to Everyone",
    description:
      "Any customer can call or text for help anytime. Care Plan members enjoy waived labor fees, while non-members are billed a simple hourly rate.",
  },
  {
    icon: <WrenchScrewdriverIcon className="h-6 w-6" strokeWidth={2} />,
    title: "Hardware Repairs & Replacements",
    description:
      "All customers get full hardware and drive warranty support. Care Plan membership covers all labor costs for replacements automatically.",
  },
  {
    icon: <ShieldCheckIcon className="h-6 w-6" strokeWidth={2} />,
    title: "Network & Security Checkups",
    description:
      "Ongoing maintenance and assistance setting up new family phones, tablets, or remote access connections.",
  },
];

export function FeaturesCarePlan() {
  return (
    <section className="py-24 px-4 bg-blue-gray-50/30">
      <div className="container mx-auto mb-16 text-center">
        <Typography variant="h2" color="blue-gray" className="mb-4">
          Support & Maintenance
        </Typography>
        <Typography variant="lead" className="mx-auto w-full px-4 text-blue-gray-800 md:w-10/12 lg:w-7/12">
          Whether you prefer a monthly hands free plan or pay as you need support, we are always here to help keep your private cloud running smoothly.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
        {features.map(({ icon, title, description }) => (
          <FeatureCard key={title} icon={icon} title={title}>
            {description}
          </FeatureCard>
        ))}
      </div>
    </section>
  );
}

export default FeaturesCarePlan;
