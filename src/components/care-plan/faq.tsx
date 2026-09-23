import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Typography,
} from "@material-tailwind/react";

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

const faqs = [
  {
    id: 1,
    question: "How does the free under hour support offer work?",
    answer:
      "When you run into an issue or need assistance, I will diagnose and work on your setup. If the fix takes less than an hour, the service call is free of charge. If it requires more time, you will only be charged a simple hourly rate.",
  },
  {
    id: 2,
    question: "Are there any recurring monthly subscriptions or hidden fees?",
    answer:
      "No. Once you purchase your Home Cloud server, you own the hardware completely. There are zero forced monthly subscriptions or maintenance fees. You only pay for support if you request it for extended repairs.",
  },
  {
    id: 3,
    question: "What happens if a fix takes longer than expected?",
    answer:
      "I'll evaluate the situation right away and let you know before starting any extensive repairs. If a task goes over an hour, you'll simply be billed for the additional time at a standard, transparent hourly rate.",
  },
  {
    id: 4,
    question: "Can you see my personal photos or files during a service call?",
    answer:
      "No. Service and support are strictly focused on hardware health, operating system settings, network connections, and app functionality. Your personal photos, videos, and private documents remain completely encrypted and stored locally on your device.",
  },
];

export default function FAQSupport() {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <section className="py-20 px-8 max-w-4xl mx-auto">
      <Typography variant="h2" color="blue-gray" className="mb-8 text-center">
        Support & Service FAQs
      </Typography>

      <Fragment>
        {faqs.map((faq) => (
          <Accordion
            key={faq.id}
            open={open === faq.id}
            icon={<Icon id={faq.id} open={open} />}
          >
            <AccordionHeader onClick={() => handleOpen(faq.id)}>
              {faq.question}
            </AccordionHeader>
            <AccordionBody className="text-blue-gray-800 text-base">
              {faq.answer}
            </AccordionBody>
          </Accordion>
        ))}
      </Fragment>
    </section>
  );
}
