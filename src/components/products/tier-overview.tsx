import React from "react";
import { Typography, Button } from "@material-tailwind/react";
import { ServerIcon, ShieldCheckIcon } from "@heroicons/react/24/outline";

function Icon({ children }) {
  return (
    <div className="mb-6 grid h-12 w-12 place-items-center rounded-full bg-dark p-2.5 text-white shadow-md">
      {children}
    </div>
  );
}

export function TierOverviewProducts() {
  return (
    <section className="p-8">
      <div className="container mx-auto">
        <div className="mb-20 grid lg:grid-cols-2">
          <div className="lg:pr-10">
            <img
              src="/IMG_9782.jpg"
              alt="1TB Home Cloud Storage Server"
              className="h-full min-h-[20rem] w-full rounded-xl object-cover"
            />
          </div>
          <div className="grid items-center py-12 px-2 lg:ml-8 lg:py-20">
            <Typography variant="h3" color="blue-gray" className="mb-4">
              1TB Mirrored Home Cloud Server
            </Typography>
            <Typography variant="lead" className="mb-10 font-normal !text-gray-500">
              Perfect for small families or individuals looking to replace cloud photo backups and document storage. Includes two matched 1TB hard drives with real time automatic drive mirroring.
              <br /><br />
              If one drive ever fails, your photos and documents remain 100% safe on the second drive with zero downtime.
            </Typography>
            <div className="w-max">
              <Button size="lg" color="dark">
                Learn More About 1TB Setup
              </Button>
            </div>
          </div>
        </div>

        <div className="mb-20 grid lg:grid-cols-2">
          <div className="grid items-center py-12 px-2 lg:mr-16 lg:py-20">
            <Typography variant="h3" color="blue-gray" className="mb-4">
              2TB Mirrored Home Cloud Server
            </Typography>
            <Typography variant="lead" className="mb-10 font-normal !text-gray-500">
              Designed for larger photo collections and families. Built with dual 2TB mirrored drives for maximum longevity and peace of mind for storing a ton of data.
              <br /><br />
              Includes full local installation, network configuration, and automatic syncing on all your family's devices.
            </Typography>
            <div className="w-max">
              <Button size="lg" color="dark">
                Learn More About 2TB Setup
              </Button>
            </div>
          </div>
          <div className="row-start-1 lg:row-auto lg:pl-10">
            <img
              src="/IMG_9783.jpg"
              alt="2TB Home Cloud Server System"
              className="h-full min-h-[20rem] w-full rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default TierOverviewProducts;
