import React, { useState } from "react";
import {
  Typography,
  Card,
  CardBody,
  Input,
  Textarea,
  Button,
} from "@material-tailwind/react";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/solid";
import ThemeProvider from "../theme-provider";
import Navbar from "../navbar";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission / API logic here
    setSubmitted(true);
  };

  return (
    <ThemeProvider>
      <Navbar />
      <section className="px-8 pt-40 bg-blue-gray-50/30 min-h-screen">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Typography variant="h2" color="blue-gray" className="mb-4">
              Get in Touch
            </Typography>
            <Typography variant="lead" className="mx-auto max-w-2xl text-gray-600">
              Have questions about setting up a private home server, need a custom quote, or need support? Call, text, or send us a message anytime.
            </Typography>
          </div>

          <div className="text-center">
            <Typography variant="lead" className="mx-auto max-w-2xl text-gray-600">
              This page is currently under construction, feel free to reach out at <br></br>
              (801) 940-3943 or to christian375h@gmail.com
            </Typography>
          </div>

          {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-8"> */}
          {/*   <Card className="bg-dark text-white p-8 shadow-xl flex flex-col justify-between"> */}
          {/*     <div> */}
          {/*       <Typography variant="h4" color="white" className="mb-6"> */}
          {/*         Contact Information */}
          {/*       </Typography> */}
          {/*       <Typography variant="paragraph" className="text-gray-300 mb-8"> */}
          {/*         We offer direct, local support across Northern Utah for both Care Plan subscribers and standard server owners. */}
          {/*       </Typography> */}
          {/**/}
          {/*       <div className="space-y-6 flex flex-col gap-6"> */}
          {/*         <div className="flex items-center gap-4"> */}
          {/*           <div className="p-3 bg-white/10 rounded-lg"> */}
          {/*             <PhoneIcon className="h-6 w-6 text-white" /> */}
          {/*           </div> */}
          {/*           <div> */}
          {/*             <Typography variant="small" className="text-gray-400 font-normal"> */}
          {/*               Call or Text */}
          {/*             </Typography> */}
          {/*             <Typography variant="h6" color="white"> */}
          {/*               (801) 940-3943 */}
          {/*             </Typography> */}
          {/*           </div> */}
          {/*         </div> */}
          {/**/}
          {/*         <div className="flex items-center gap-4"> */}
          {/*           <div className="p-3 bg-white/10 rounded-lg"> */}
          {/*             <EnvelopeIcon className="h-6 w-6 text-white" /> */}
          {/*           </div> */}
          {/*           <div> */}
          {/*             <Typography variant="small" className="text-gray-400 font-normal"> */}
          {/*               Email Us */}
          {/*             </Typography> */}
          {/*             <Typography variant="h6" color="white"> */}
          {/*               support@homecloud.llc */}
          {/*             </Typography> */}
          {/*           </div> */}
          {/*         </div> */}
          {/**/}
          {/*         <div className="flex items-center gap-4"> */}
          {/*           <div className="p-3 bg-white/10 rounded-lg"> */}
          {/*             <MapPinIcon className="h-6 w-6 text-white" /> */}
          {/*           </div> */}
          {/*           <div> */}
          {/*             <Typography variant="small" className="text-gray-400 font-normal"> */}
          {/*               Service Area */}
          {/*             </Typography> */}
          {/*             <Typography variant="h6" color="white"> */}
          {/*               Northern Utah (On Site Visits) */}
          {/*             </Typography> */}
          {/*           </div> */}
          {/*         </div> */}
          {/*       </div> */}
          {/*     </div> */}
          {/**/}
          {/*     <div className="mt-12 pt-6 border-t border-white/10"> */}
          {/*       <div className="flex items-center gap-3 text-gray-300"> */}
          {/*         <ChatBubbleLeftRightIcon className="h-5 w-5 text-green-400" /> */}
          {/*         <Typography variant="small"> */}
          {/*           Texts welcomed for quick support or questions! */}
          {/*         </Typography> */}
          {/*       </div> */}
          {/*     </div> */}
          {/*   </Card> */}
          {/**/}
          {/*   <Card className="shadow-md"> */}
          {/*     <CardBody className="p-8 sm:p-10"> */}
          {/*       {submitted ? ( */}
          {/*         <div className="text-center py-16"> */}
          {/*           <Typography variant="h3" color="blue-gray" className="mb-4"> */}
          {/*             Message Sent! */}
          {/*           </Typography> */}
          {/*           <Typography variant="lead" className="text-gray-600 mb-6"> */}
          {/*             Thank you for reaching out. We will get back to you shortly. */}
          {/*           </Typography> */}
          {/*           <Button color="dark" onClick={() => setSubmitted(false)}> */}
          {/*             Send Another Message */}
          {/*           </Button> */}
          {/*         </div> */}
          {/*       ) : ( */}
          {/*         <form onSubmit={handleSubmit} className="flex flex-col gap-6"> */}
          {/*           <Typography variant="h4" color="blue-gray"> */}
          {/*             Send Us a Message */}
          {/*           </Typography> */}
          {/**/}
          {/*           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6"> */}
          {/*             <Input */}
          {/*               size="lg" */}
          {/*               label="First Name" */}
          {/*               required */}
          {/*               crossOrigin="" */}
          {/*             /> */}
          {/*             <Input */}
          {/*               size="lg" */}
          {/*               label="Last Name" */}
          {/*               required */}
          {/*               crossOrigin="" */}
          {/*             /> */}
          {/*           </div> */}
          {/**/}
          {/*           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6"> */}
          {/*             <Input */}
          {/*               size="lg" */}
          {/*               type="email" */}
          {/*               label="Email Address" */}
          {/*               required */}
          {/*               crossOrigin="" */}
          {/*             /> */}
          {/*             <Input */}
          {/*               size="lg" */}
          {/*               type="tel" */}
          {/*               label="Phone Number" */}
          {/*               crossOrigin="" */}
          {/*             /> */}
          {/*           </div> */}
          {/**/}
          {/*           <Textarea */}
          {/*             size="lg" */}
          {/*             label="How can we help?" */}
          {/*             rows={5} */}
          {/*             required */}
          {/*           /> */}
          {/**/}
          {/*           <Button type="submit" color="dark" size="lg" className="mt-2"> */}
          {/*             Submit */}
          {/*           </Button> */}
          {/*         </form> */}
          {/*       )} */}
          {/*     </CardBody> */}
          {/*   </Card> */}
          {/* </div> */}
        </div>
      </section>
    </ThemeProvider>
  );
}

export default ContactSection;
