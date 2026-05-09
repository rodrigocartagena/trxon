import Section from "../../components/Section";
import SystemLabel from "../../components/SystemLabel";

export default function Applications() {
  const applications = [
    {
      id: "01",
      category: "Agriculture",
      title: "Feeding 500M+ farmers, season after season.",
      description: "Today's autonomous tractors hand back control the moment the field gets muddy or weather rolls in. TrXon keeps the machine working — through the night, through the rain, across uneven ground. At scale, that means cheaper food and fewer wasted hours in the planting and harvest windows.",
      image: "/agriculture_app.jpg",
      metrics: [
        { value: "500M+", label: "farmers globally" },
        { value: "24/7", label: "operating window" },
        { value: "95%+", label: "uptime target" },
      ]
    },
    {
      id: "02",
      category: "Mining",
      title: "Out of the cab, out of the danger zone.",
      description: "Mining is the highest-fatality industry on earth. Autonomous haul trucks are the future, but current systems require carefully geofenced, pre-mapped sites. TrXon extends autonomy into pits where the ground itself changes daily — letting operators run faster, longer, with humans further from harm.",
      image: "/mining_app.png",
      metrics: [
        { value: "3.7M", label: "mining workers" },
        { value: "#1", label: "fatality industry" },
        { value: "~85%", label: "software margin" },
      ]
    },
    {
      id: "03",
      category: "Disaster response",
      title: "Inside the 72-hour survival window.",
      description: "When buildings collapse, the first 72 hours decide who lives. Today, responders can't safely enter the rubble zone fast enough. TrXon enables autonomous ground robots to traverse unstable debris — searching, mapping, and reaching survivors while every minute still counts.",
      image: "/disaster_response_app.jpg",
      metrics: [
        { value: "72 hrs", label: "critical window" },
        { value: "0 ms", label: "delay in response" },
        { value: "100%", label: "safety focus" },
      ]
    }
  ];

  return (
    <div className="page-enter-active">
      <Section className="pt-[80px] pb-[60px] md:pt-[100px] md:pb-[80px] lg:pt-[140px] lg:pb-[100px]">
        <SystemLabel text="/ APPLICATIONS" />
        <div className="h-[32px]" />
        <h1 className="text-[40px] md:text-[48px] lg:text-[56px] font-medium text-text-primary tracking-[-2px]">
          Wherever the road ends, work begins.
        </h1>
        <div className="h-[28px]" />
        <p className="text-[15px] text-text-muted max-w-[480px] leading-[1.8]">
          TrXon ships as one stack. The terrain — and the impact — changes with the industry.
        </p>
      </Section>

      <Section borderTop className="py-20 md:py-32">
        <div className="flex flex-col gap-32">
          {applications.map((app, i) => (
            <div key={i} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div className="space-y-8">
                <SystemLabel text={`/ ${app.id} · ${app.category}`} />
                <h3 className="text-[32px] md:text-[40px] font-medium text-text-primary leading-[1.1] tracking-[-1px]">
                  {app.title}
                </h3>
                <p className="text-[16px] text-text-body leading-[1.8]">
                  {app.description}
                </p>
                <div className="grid grid-cols-3 gap-8 pt-8">
                  {app.metrics.map((metric, j) => (
                    <div key={j} className="space-y-1">
                      <div className="text-[24px] font-medium text-text-primary tracking-[-0.5px]">{metric.value}</div>
                      <div className="text-[10px] font-plex text-text-system uppercase tracking-[1px] leading-[1.2]">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="aspect-video bg-bg-elevated border border-border/50 rounded-[8px] overflow-hidden">
                <img 
                  src={`./${app.image.split('/').pop()}`} 
                  alt={app.category} 
                  className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
                />
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
