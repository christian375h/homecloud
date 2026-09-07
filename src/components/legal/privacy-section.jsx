import React from "react";
import { Typography, Card, CardBody } from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";
import Navbar from "../navbar";

export function PrivacySection() {
  return (
    <ThemeProvider>
      <Navbar />
      <section className="px-8 pt-40 pb-20 bg-blue-gray-50/30 min-h-screen">
        <div className="container mx-auto max-w-4xl">
          <Card className="shadow-md">
            <CardBody className="p-8 sm:p-12 space-y-8">
              <div className="border-b border-gray-200 pb-6">
                <Typography variant="h2" color="blue-gray" className="mb-2">
                  Privacy Policy
                </Typography>
                <Typography variant="small" className="text-gray-500 font-normal">
                  Effective Date: September 7, 2026
                </Typography>
              </div>

              <div className="space-y-6 text-gray-700">
                <section>
                  <Typography variant="h5" color="blue-gray" className="mb-2">
                    1. Our Privacy Commitment
                  </Typography>
                  <Typography className="font-normal text-gray-600">
                    At Home Cloud LLC, we believe your personal data belongs to you. Our entire hardware and software architecture is designed so that your photos, documents, videos, and personal files remain stored locally inside your home. We never store, read, scan, or sell your files.
                  </Typography>
                </section>

                <section>
                  <Typography variant="h5" color="blue-gray" className="mb-2">
                    2. Zero File Access Guarantee
                  </Typography>
                  <Typography className="font-normal text-gray-600">
                    We do not receive any content or files from your server. Unless you explicitly grant us temporary remote support access to troubleshoot a specific issue, we have zero access to your operating system, private applications, or stored media.
                  </Typography>
                </section>

                <section>
                  <Typography variant="h5" color="blue-gray" className="mb-2">
                    3. Optional SMART Hardware Telemetry
                  </Typography>
                  <Typography className="font-normal text-gray-600">
                    For Care Plan subscribers who choose to enable hardware telemetry, we receive anonymized system status metrics (such as hard drive SMART temperature, drive wear indicators, and system uptime). This data contains no file content, metadata, or personally identifiable media and is used strictly to alert you before a storage drive fails.
                  </Typography>
                </section>

                <section>
                  <Typography variant="h5" color="blue-gray" className="mb-2">
                    4. Information We Collect
                  </Typography>
                  <Typography className="font-normal text-gray-600">
                    We only collect standard customer account information required to fulfill orders and provide direct customer support such as your name, contact phone number, email address, physical delivery address, and billing history.
                  </Typography>
                </section>

                <section>
                  <Typography variant="h5" color="blue-gray" className="mb-2">
                    5. Third Party Sharing
                  </Typography>
                  <Typography className="font-normal text-gray-600">
                    We do not sell, rent, or trade your personal information to advertisers or data brokers. Third party services are limited strictly to essential business operations, such as payment processing and transactional invoice emails.
                  </Typography>
                </section>

                <section>
                  <Typography variant="h5" color="blue-gray" className="mb-2">
                    6. Contacting Privacy Support
                  </Typography>
                  <Typography className="font-normal text-gray-600">
                    If you have questions about our privacy practices, call or text us at <strong>(801) 940-3943</strong> or email <strong>christian375h@gmail.com</strong>.
                  </Typography>
                </section>
              </div>
            </CardBody>
          </Card>
        </div>
      </section>
    </ThemeProvider>
  );
}

export default PrivacySection;
