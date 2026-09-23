import React from "react";
import { Typography, Card, CardBody } from "@material-tailwind/react";
import {
  CheckIcon,
  WrenchScrewdriverIcon,
  ClockIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

const serviceHighlights = [
  "Free On-Site or Remote Initial Diagnostic",
  "No Cost if Resolved Within 30 Minutes",
  "Transparent Hourly Rate for Extended Repairs",
  "Drive Replacement & RAID Resync Assistance",
  "Network, Remote Access & Sync Troubleshooting",
  "No Subscriptions, Contracts, or Monthly Fees",
];

export function ServiceGuarantee() {
  return (
    <section id="care-pricing" className="p-8">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center">
          <Typography variant="h2" color="blue-gray">
            On Demand Support
          </Typography>
          <Typography variant="lead" className="mt-2 !text-gray-500">
            No monthly fees or subscriptions. Pay only when you need hands on help.
          </Typography>
        </div>

        <Card className="mt-12 w-full shadow-lg border border-blue-gray-100">
          <CardBody className="p-8 text-center sm:p-12">
            <div className="mt-4 flex items-baseline justify-center gap-x-2">
              <span className="text-5xl font-bold tracking-tight text-blue-gray-900">
                Free For Under an Hour
              </span>
            </div>

            <Typography variant="small" className="mt-2 text-gray-500 max-w-lg mx-auto">
              I’ll come and see your setup and inspect any issues free of charge. If it takes an hour or less to fix it’s completely free!
            </Typography>

            {/* Quick breakdown badges */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-md mx-auto">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-green-50 border border-green-100">
                <ClockIcon className="h-6 w-6 text-green-600 flex-shrink-0" />
                <div>
                  <Typography variant="small" className="font-bold text-green-900">
                    Under 60 Mins
                  </Typography>
                  <Typography variant="small" className="text-green-700 text-xs">
                    100% Free Service
                  </Typography>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-lg bg-blue-50 border border-blue-100">
                <WrenchScrewdriverIcon className="h-6 w-6 text-blue-600 flex-shrink-0" />
                <div>
                  <Typography variant="small" className="font-bold text-blue-900">
                    Over an Hour
                  </Typography>
                  <Typography variant="small" className="text-blue-700 text-xs">
                    Affordable Hourly Rate
                  </Typography>
                </div>
              </div>
            </div>

            <div className="my-8 border-t border-gray-100"></div>

            <ul className="space-y-4 text-left max-w-md mx-auto">
              {serviceHighlights.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-x-3">
                  <CheckIcon
                    className="h-5 w-5 flex-shrink-0 text-green-500"
                    strokeWidth={2.5}
                  />
                  <Typography
                    variant="small"
                    className="font-medium text-blue-gray-800"
                  >
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

export default ServiceGuarantee;
