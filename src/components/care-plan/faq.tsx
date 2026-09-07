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

export default function FAQCarePlan() {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <section className="py-20 px-8 max-w-4xl mx-auto">
      <Typography variant="h2" color="blue-gray" className="mb-8 text-center">
        Care Plan Questions
      </Typography>

      <Fragment>
        <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(1)}>
            Is a Care Plan required to buy a Home Cloud server?
          </AccordionHeader>
          <AccordionBody className="text-blue-gray-800 text-base">
            No. The Care Plan is entirely optional. When you purchase a Home Cloud server ($600 or $800), you own the hardware outright with zero forced subscriptions. The Care Plan is for homeowners who want hands free updates and priority local support.
          </AccordionBody>
        </Accordion>

        <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(2)}>
            Can Home Cloud access my private photos or files?
          </AccordionHeader>
          <AccordionBody className="text-blue-gray-800 text-base">
            No. Maintenance tasks are strictly limited to system software updates, security patches, and hardware drive health monitoring. Your personal photos, videos, and documents remain stored locally on your server inside your home.
          </AccordionBody>
        </Accordion>

        <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(3)}>
            Can I cancel or pause my Care Plan at any time?
          </AccordionHeader>
          <AccordionBody className="text-blue-gray-800 text-base">
            Yes. Care plans are billed month to month with no contracts or commitments. You can cancel or pause anytime while maintaining full access to your server.
          </AccordionBody>
        </Accordion>
      </Fragment>
    </section>
  );
}
