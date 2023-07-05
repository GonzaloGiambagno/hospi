import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Typography,
} from "@material-tailwind/react";

export default function Ubicacion() {
  const data = [
    {
      label: "Hospital Italiano",
      value: "Hospital Italiano",
      linkMap: `It really matters and then like it really doesn't matter.
        What matters is the people who are sparked by it. And the people
        who are like offended by it, it doesn't matter.`,
    },
    {
      label: "Centro de Hepatologia y Gastroenterologia",
      value: "Centro de Hepatologia y Gastroenterologia",
      linkMap: `Because it's about motivating the doers. Because I'm here
        to follow my dreams and inspire other people to follow their dreams, too.`,
    },
  ];

  return (
    <div className="mx-auto max-w-screen-2xl mt-2">
    <Typography variant="h3" color="green" className="p-8">Donde Estamos?</Typography>
      <Tabs id="custom-animation" value="Hospital Italiano">
        <TabsHeader
          indicatorProps={{
            className: "bg-green-500/80 rounded-xl",
          }}
        >
          {data.map(({ label, value }) => (
            <Tab key={value} value={value}>
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody
          animate={{
            initial: { y: 250 },
            mount: { y: 0 },
            unmount: { y: 250 },
          }}
        >
          {data.map(({ value, linkMap }) => (
            <TabPanel key={value} value={value}>
              {linkMap}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  );
}
