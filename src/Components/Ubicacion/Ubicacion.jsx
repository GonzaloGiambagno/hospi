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
      linkMap:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3270.8123622046423!2d-57.9736784189495!3d-34.936242556703974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e87804cb71cd%3A0xffe3371a1bde60ea!2sHospital%20Italiano!5e0!3m2!1ses-419!2sar!4v1688602712355!5m2!1ses-419!2sar",
      descripcion:
        "Calle 51 entre 29 y 30 Nº 1725",
      colectivos1:
        "Desde Estación de Trenes y Terminal de Ómnibus > Colectivo Línea 307 (A B C D E F); Línea 506 80.",
      colectivos2: "Por Calle 31 > Línea Este (45 / 46)",
      horario: "Guardia: Todo el año las 24 hs. Atención ambulatoria: de lunes a viernes de 8 a 20hs. y sábados de 8 a 12hs.",
      contacto: "(0221) 512-9500",
    },
    {
      label: "Centro de Hepatologia y Gastroenterologia",
      value: "Centro de Hepatologia y Gastroenterologia",
      linkMap:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.821140111276!2d-57.97476831122171!3d-34.91093780376125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e714904ea9cd%3A0x3d25246605bd59b7!2sCentro%20de%20Hepatolog%C3%ADa%20y%20Gastroenterolog%C3%AD%C2%ADa!5e0!3m2!1ses-419!2sar!4v1688602848740!5m2!1ses-419!2sar",
      descripcion:
        "Calle 37 Nº 926 e/ 13 y 14.",
      colectivos1:
        "Desde Estación de Trenes > Colectivo Línea TALP, Línea Oeste (16 24 26) y Norte 13",
      colectivos2:
        "Desde Terminal de Ómnibus > Colectivo Línea TALP, Línea Oeste (24 26)",
      horario: "Lunes a viernes de 9:00 a 16:00 hs",
      contacto: "(0221) 483-8537",
    },
  ];

  return (
    <div className="mx-auto max-w-screen-2xl mt-2">
      <Typography variant="h3" color="green" className="p-8">
        Donde Estamos?
      </Typography>
      <Tabs id="custom-animation" value="Hospital Italiano">
        <TabsHeader
          indicatorProps={{
            className: "bg-green-500/80 rounded-xl",
          }}
          className="z-0"
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
          {data.map(
            ({ value, linkMap, descripcion, colectivos1, colectivos2, horario, contacto }) => (
              <TabPanel key={value} value={value} className="p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <div className="grid gap-2 place-content-center">
                    <div className="flex flex-col gap-1 justify-center mb-2 ">
                      <Typography variant="h6" color="green">
                        Ubicacion:
                      </Typography>
                      <Typography>{descripcion}</Typography>
                    </div>
                    <div className="flex flex-col gap-1 justify-center mb-2">
                      <Typography variant="h6" color="green">
                        Colectivos:
                      </Typography>
                      <Typography>{colectivos1}</Typography>
                      <Typography>{colectivos2}</Typography>
                    </div>
                    <div className="flex flex-col gap-1 justify-center mb-2">
                      <Typography variant="h6" color="green">
                        Horario:
                      </Typography>
                      <Typography>{horario}</Typography>
                    </div>
                    <div className="flex flex-col gap-1 justify-center mb-2">
                      <Typography variant="h6" color="green">
                        Telefono:
                      </Typography>
                      <Typography>{contacto}</Typography>
                    </div>
                  </div>
                  <div className="grid place-content-center">
                    <iframe
                      title={value}
                      src={linkMap}
                      className="rounded-xl shadow-lg"
                      width="450" 
                      height="400"
                      loading="lazy" 
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>
              </TabPanel>
            )
          )}
        </TabsBody>
      </Tabs>
    </div>
  );
}