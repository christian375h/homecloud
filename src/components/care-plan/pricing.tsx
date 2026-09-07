import React from "react";
import { Button, Typography, Card, CardBody } from "@material-tailwind/react";
import { CheckIcon } from "@heroicons/react/24/outline";

const carePlanFeatures = [
  "Automated Software & Security Updates",
  "24/7 Drive Health & SMART Monitoring",
  "Priority On-Site Support & Service Calls",
  "Free Labor for Drive Swap & Mirror Resyncing",
  "New Device Setup & Phone Sync Assistance",
  "Network & Remote Access Troubleshooting",
];

export function PricingCarePlan() {
  return (
    <section id="care-pricing" className="p-8">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center">
          <Typography variant="h2" color="blue-gray">
            Simple, Hands-Free Protection
          </Typography>
          <Typography variant="lead" className="mt-2 !text-gray-500">
            Optional monthly management for total peace of mind. No contracts—cancel or pause anytime.
          </Typography>
        </div>

        <Card className="mt-12 w-full shadow-lg border border-blue-gray-100">
          <CardBody className="p-8 text-center sm:p-12">
            <Typography variant="h4" color="blue-gray" className="uppercase tracking-wider">
              Home Cloud Care Plan
            </Typography>
            <div className="mt-4 flex items-baseline justify-center gap-x-2">
              <span className="text-5xl font-bold tracking-tight text-blue-gray-900">$15</span>
              <span className="text-base font-semibold text-gray-500">/ month</span>
            </div>
            <Typography variant="small" className="mt-2 text-gray-500">
              Covers complete server software maintenance & local hardware support
            </Typography>

            <div className="my-8 border-t border-gray-100"></div>

            <ul className="space-y-4 text-left max-w-md mx-auto">
              {carePlanFeatures.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-x-3">
                  <CheckIcon className="h-5 w-5 flex-shrink-0 text-green-500" strokeWidth={2.5} />
                  <Typography variant="small" className="font-medium text-blue-gray-800">
                    {feature}
                  </Typography>
                </li>
              ))}
            </ul>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

export default PricingCarePlan;
