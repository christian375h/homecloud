import { Fragment, useState } from "react";
import { Accordion, AccordionHeader, AccordionBody, Typography } from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

export default function FAQProducts() {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <section className="py-20 px-8 max-w-4xl mx-auto">
      <Typography variant="h2" color="blue-gray" className="mb-8 text-center">
        Frequently Asked Questions
      </Typography>

      <Fragment>
        <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(1)}>
            What does "Mirrored Storage" mean?
          </AccordionHeader>
          <AccordionBody className="text-blue-gray-800 text-base">
            Mirrored storage (RAID 1) uses two identical hard drives inside your server. Every photo or file saved to the server is written to both drives simultaneously. If one drive physically fails over time, all your data remains completely safe on the second drive.
          </AccordionBody>
        </Accordion>

        <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(2)}>
            How much data can 1TB or 2TB actually store?
          </AccordionHeader>
          <AccordionBody className="text-blue-gray-800 text-base">
            1TB holds roughly 250,000 smartphone photos or 250 HD movies. 2TB holds approximately 500,000 photos. Since the system uses mirroring, a 1TB mirrored server contains two 1TB drives so that you get 1TB of usable fault-tolerant capacity.
          </AccordionBody>
        </Accordion>

        <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(3)}>
            Do I need to pay any monthly subscription fees?
          </AccordionHeader>
          <AccordionBody className="text-blue-gray-800 text-base">
            No. Once your server hardware is purchased and installed in your home, you own the system completely. You get permanent cloud convenience without monthly recurring bills.
          </AccordionBody>
        </Accordion>
      </Fragment>
    </section>
  );
}
