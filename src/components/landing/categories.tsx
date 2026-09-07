import {
  Card,
  CardHeader,
  CardBody,

  Typography,
} from "@material-tailwind/react";

interface CategoriesCardPropsType {
  img: string;
  category: string;
}

function CategoriesCard({ img, category, desc }: CategoriesCardPropsType) {
  return (
    <Card
      shadow={false}
      className="relative grid h-[25rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center"
    >
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="absolute inset-0 m-0 h-full w-full rounded-none bg-cover bg-center"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
      </CardHeader>
      <CardBody className="relative py-14 px-6 md:px-12">
        <Typography
          variant="h4"
          color="white"
          className="mb-6 font-medium leading-[1.5]"
        >
          {category}
        </Typography>
        <Typography
          variant="h4"
          color="white"
          className="mb-6 text-5sm leading-[1.5]"
        >
          {desc}
        </Typography>
      </CardBody>
    </Card>
  );
}

const categories = [
  {
    img: "https://images.unsplash.com/photo-1703756291643-df456ffc8079?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Choose Your Storage",
    desc: "Select a home server capacity that fits your family's needs",
  },
  {
    img: "https://images.unsplash.com/photo-1698668975271-2ba9a323be6b?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Professional Setup",
    desc: "We bring the hardware to your house, install it, configure private access, and install the app on your devices.",
  },
  {
    img: "https://images.unsplash.com/photo-1616771499668-b7af9e431c5a?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Own Your Data",
    desc: "Import your existing photos from Google Photos or iCloud, cancel your cloud subscriptions, and enjoy complete digital ownership.",
  },
];

export function TeamSectionOne() {
  return (
    <section className="py-8 px-8 lg:py-16">
      <div className="container mx-auto">
        <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
          {categories.map((props, key) => (
            <CategoriesCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamSectionOne;
