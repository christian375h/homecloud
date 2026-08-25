import { Typography, Button } from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";

export function ContentSectionOne() {
  return (
    <ThemeProvider>
      <section className="py-16 px-8 lg:py-28">
        <div className="container mx-auto grid items-center lg:grid-cols-2">
          <div className="row-start-2 mt-12 lg:row-auto lg:mt-0 lg:pr-12">
            <Typography variant="h2" color="blue-gray" className="mb-6">
              What is Home Cloud?
            </Typography>
            <Typography variant="lead" color="gray" className="mb-12">
              Simply put we are a service that installs easily accessable, affordable and
              private cloud storage right inside your home. We aim to offer the same
              convienience as Google Drive, Google Photos, iCloud, Dropbox and more while
              giving you real ownership of your personal information.
              <br />
              <br />
              We will transfer away personal data like photos, passwords, documents and
              credit card information into a secure storage server located right inside your
              home instead of some data center located across the world.
              <br />
              <br />
              You can also say goodbye to those monthy subscription fees that corporations
              require you to pay just to maintain access to your photos and documents. With
              your personal home cloud you keep that same convienient access to your information
              from anywhere in the world, bypassing the need to pay those subscriptions
              that just keep getting more and more expensive.
            </Typography>
            <div className="inline-flex flex-wrap gap-3">
              <Button variant="outlined" color="dark" size="lg">
                get in touch
              </Button>
              <Button color="dark" size="lg">our process</Button>
            </div>
          </div>
          <img
            src="https://images.unsplash.com/photo-1703319952940-ec62d23def39?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="team work"
            className="max-h-[50vh] w-full rounded-xl object-cover object-center md:max-h-[75vh]"
          />
        </div>
      </section>
    </ThemeProvider>
  );
}

export default ContentSectionOne;
