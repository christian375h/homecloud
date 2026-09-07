import React from "react";
import { Button, Typography, Card, CardBody } from "@material-tailwind/react";
import { CheckIcon } from "@heroicons/react/24/outline";

function Check() {
  return <CheckIcon className="mx-auto h-5 w-5 text-green-500" strokeWidth={2} />;
}

const comparisonData = [
  ["Usable Storage Capacity", "1 TB Usable Storage", "2 TB Usable Storage"],
  ["Physical Drives Included", "2x 1TB NAS Drives", "2x 2TB NAS Drives"],
  ["Hardware Warranty", "3-Year Drive Warranty", "3-Year Drive Warranty"],
  ["Drive Replacement Coverage", "Free Replacement within 3 Yrs", "Free Replacement within 3 Yrs"],
  ["RAID 1 Mirroring (Redundancy)", <Check key={1} />, <Check key={2} />],
  ["Zero Monthly Fees", <Check key={1} />, <Check key={2} />],
  ["On-Site Home Installation", <Check key={1} />, <Check key={2} />],
  ["Automated Phone Photo Syncing", <Check key={1} />, <Check key={2} />],
  ["Remote Encrypted Access", <Check key={1} />, <Check key={2} />],
  ["Existing Cloud Data Migration", <Check key={1} />, <Check key={2} />],
];

export function PricingComparisonProducts() {
  return (
    <section className="p-8 bg-blue-gray-50/50">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center">
          <Typography variant="h2" color="blue-gray">
            Clear, One-Time Pricing
          </Typography>
          <Typography variant="lead" className="mt-2 !text-gray-500">
            No subscription traps. Pay once for hardware, setup, and 3 years of warranty protection to own your cloud forever.
          </Typography>
        </div>

        {/* Removed 'overflow-scroll' and added '[&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]' to hide scrollbars */}
        <Card className="mt-16 w-full overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] shadow-md">
          <CardBody className="p-0 sm:p-6">
            <table className="w-full min-w-[500px] table-auto">
              <thead>
                <tr className="border-b border-blue-gray-100 bg-blue-gray-50/50">
                  <th className="px-6 py-6 text-left w-1/3">
                    <Typography variant="h6" color="blue-gray">
                      Package Features
                    </Typography>
                  </th>
                  <th className="px-6 py-6 text-center w-1/3">
                    <Typography variant="h5" color="blue-gray">
                      1TB Mirrored Server
                    </Typography>
                    <Typography variant="h2" color="blue-gray" className="mt-2 font-bold">
                      $600
                    </Typography>
                    <Typography variant="small" className="text-gray-500 font-normal">
                      One-time fee • Complete setup
                    </Typography>
                  </th>
                  <th className="px-6 py-6 text-center w-1/3 bg-blue-50/30 rounded-t-xl">
                    <Typography variant="h5" color="blue-gray">
                      2TB Mirrored Server
                    </Typography>
                    <Typography variant="h2" color="blue-gray" className="mt-2 font-bold">
                      $800
                    </Typography>
                    <Typography variant="small" className="text-gray-500 font-normal">
                      One-time fee • Complete setup
                    </Typography>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, key) => (
                  <tr key={key} className="border-b border-blue-gray-50 hover:bg-gray-50/50">
                    <td className="px-6 py-4 text-left">
                      <Typography variant="small" className="font-semibold text-blue-gray-800">
                        {row[0]}
                      </Typography>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <Typography variant="small" className="font-medium text-gray-700">
                        {row[1]}
                      </Typography>
                    </td>
                    <td className="px-6 py-4 text-center bg-blue-50/10">
                      <Typography variant="small" className="font-medium text-gray-700">
                        {row[2]}
                      </Typography>
                    </td>
                  </tr>
                ))}
                {/* <tr> */}
                {/*   <td className="px-6 py-6 text-left"></td> */}
                {/*   <td className="px-6 py-6 text-center"> */}
                {/*     <Button variant="outlined" color="dark" size="lg" className="w-full"> */}
                {/*       Order 1TB Model ($600) */}
                {/*     </Button> */}
                {/*   </td> */}
                {/*   <td className="px-6 py-6 text-center bg-blue-50/30 rounded-b-xl"> */}
                {/*     <Button variant="gradient" color="dark" size="lg" className="w-full"> */}
                {/*       Order 2TB Model ($800) */}
                {/*     </Button> */}
                {/*   </td> */}
                {/* </tr> */}
              </tbody>
            </table>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

export default PricingComparisonProducts;
