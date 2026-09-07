import React from "react";
import { Typography, Card, CardBody } from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";
import Navbar from "../navbar";

export function TermsSection() {
  return (
    <ThemeProvider>
      <Navbar />
      <section className="px-8 pt-40 pb-20 bg-blue-gray-50/30 min-h-screen">
        <div className="container mx-auto max-w-4xl">
          <Card className="shadow-md">
            <CardBody className="p-8 sm:p-12 space-y-8">
              <div className="border-b border-gray-200 pb-6">
                <Typography variant="h2" color="blue-gray" className="mb-2">
                  Terms of Service
                </Typography>
                <Typography variant="small" className="text-gray-500 font-normal">
                  Effective Date: September 7, 2026
                </Typography>
              </div>

              <div className="space-y-6 text-gray-700">
                <section>
                  <Typography variant="h5" color="blue-gray" className="mb-2">
                    1. Overview & Scope
                  </Typography>
                  <Typography className="font-normal text-gray-600">
                    Welcome to Home Cloud LLC ("Company," "we," "us," or "our"). These Terms of Service govern your purchase, installation, and use of our customized physical server hardware, self hosted software stacks, on site setup services, and ongoing maintenance Care Plans (collectively, the "Services").
                  </Typography>
                </section>

                <section>
                  <Typography variant="h5" color="blue-gray" className="mb-2">
                    2. Hardware & Installation
                  </Typography>
                  <Typography className="font-normal text-gray-600">
                    Hardware purchases include customized server builds, storage drives, and local network integration. On site installation is provided exclusively within our designated Northern Utah service area. You are responsible for providing adequate power, stable internet connectivity, and physical space for the server equipment.
                  </Typography>
                </section>

                <section>
                  <Typography variant="h5" color="blue-gray" className="mb-2">
                    3. Self-Hosted Software & Data Ownership
                  </Typography>
                  <Typography className="font-normal text-gray-600">
                    All software deployed on your server consists of open source or freely licensed software self hosted locally on your hardware. <strong>You retain 100% ownership and full control over your data.</strong> Home Cloud LLC does not store, host, inspect, or monetize your personal files, photos, media, or documents on remote servers.
                  </Typography>
                </section>

                <section>
                  <Typography variant="h5" color="blue-gray" className="mb-2">
                    4. Care Plans & Remote Maintenance
                  </Typography>
                  <Typography className="font-normal text-gray-600">
                    Subscribers to the Home Cloud Care Plan receive automated system updates, offsite backup monitoring, and remote technical support. Care Plans are billed monthly and may be canceled at any time. Cancellation removes automated backup destination routing and remote troubleshooting access, but you retain all physical hardware and local software configurations.
                  </Typography>
                </section>

                <section>
                  <Typography variant="h5" color="blue-gray" className="mb-2">
                    5. Limitation of Liability
                  </Typography>
                  <Typography className="font-normal text-gray-600">
                    While we configure automated local and offsite redundant backups under our Care Plans, Home Cloud LLC is not liable for data loss caused by drive hardware degradation, catastrophic physical damage, user error, or unmitigated security breaches on your local network. You are encouraged to maintain unique passwords and follow network security best practices.
                  </Typography>
                </section>

                <section>
                  <Typography variant="h5" color="blue-gray" className="mb-2">
                    6. Contact Information
                  </Typography>
                  <Typography className="font-normal text-gray-600">
                    For questions regarding these Terms, please reach out via phone/text at <strong>(801) 940-3943</strong> or by email at <strong>christian375h@gmail.com</strong>.
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

export default TermsSection;
