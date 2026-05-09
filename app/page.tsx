import GhostButton from "../components/GhostButton";
import Section from "../components/Section";
import SystemLabel from "../components/SystemLabel";
import Link from "next/link";

export default function Home() {
  const stats = [
    { value: "95%", label: "OF WORK HAPPENS OFF-ROAD" },
    { value: "$100B+", label: "ADDRESSABLE MARKET BY 2032" },
    { value: "20 yrs", label: "DARPA-VALIDATED UNSOLVED FRONTIER" },
  ];

  const applications = [
    {
      id: "01",
      category: "Agriculture",
      title: "Feeding 500M+ farmers, season after season.",
      description: "Today's autonomous tractors hand back control the moment the field gets muddy or weather rolls in. TrXon keeps the machine working — through the night, through the rain, across uneven ground. At scale, that means cheaper food and fewer wasted hours in the planting and harvest windows.",
      image: "/agriculture_autonomous_field_top_view_1778296528229.png",
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
      image: "/mining_autonomous_haul_truck_pit_1778296576482.png",
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
      image: "/disaster_response_ground_robot_rubble_1778296594638.png",
      metrics: [
        { value: "72 hrs", label: "critical window" },
        { value: "0 ms", label: "delay in response" },
        { value: "100%", label: "safety focus" },
      ]
    }
  ];

  return (
    <div className="page-enter-active">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-[100px] pb-[100px] overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40" 
            style={{ backgroundImage: `url('./agriculture_autonomous_tractor_field_sunset_1778296356048.png')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-bg-deep/90 via-bg-deep/60 to-bg-deep" />
          {/* Subtle Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
        </div>

        <Section className="relative z-10 w-full">
          <div className="max-w-[800px]">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/30 bg-accent/10 backdrop-blur-sm mb-8">
              <div className="w-[6px] h-[6px] bg-accent rounded-full animate-pulse" />
              <span className="text-[10px] font-plex font-medium tracking-[2px] uppercase text-text-primary">
                DEEP TECH · PROTOTYPE PHASE
              </span>
            </div>
            
            <h1 className="text-[48px] md:text-[68px] lg:text-[84px] font-medium text-text-primary leading-[0.95] tracking-[-4px] mb-8">
              Autonomous navigation for the world <span className="text-accent">beyond roads.</span>
            </h1>
            
            <p className="text-[16px] md:text-[18px] text-text-muted max-w-[580px] leading-[1.6] mb-12">
              TrXon is a two-layer navigation stack that brings true autonomy to agriculture, mining, and disaster response — no handoff, no geofence, no weather dependency.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/contact" 
                className="bg-accent text-text-primary px-8 py-4 rounded-[4px] text-[13px] font-medium tracking-[0.5px] hover:bg-accent/90 transition-all duration-300 flex items-center gap-2 group"
              >
                Request a demo <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
              <GhostButton href="/technology" text="How it works" />
            </div>
          </div>
        </Section>
      </section>

      {/* Stats Section */}
      <Section className="py-12 md:py-20 border-b border-border/50">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col gap-2">
              <div className="text-[42px] font-medium text-accent tracking-[-1px]">{stat.value}</div>
              <div className="text-[10px] font-plex font-medium tracking-[2px] text-text-system uppercase">{stat.label}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Problem Section */}
      <Section id="problem" className="py-20 md:py-32">
        <div className="max-w-[800px]">
          <SystemLabel text="/ THE PROBLEM" />
          <div className="h-[32px]" />
          <h2 className="text-[40px] md:text-[52px] font-medium text-text-primary leading-[1.0] tracking-[-2px] mb-12">
            The road ends. Autonomy stops.
          </h2>
          <div className="space-y-8">
            <p className="text-[20px] text-text-body leading-[1.6]">
              95% of autonomous vehicle development targets structured roads. The $100B+ off-road equipment industry — agriculture, mining, disaster response — remains almost entirely human-operated. Current AV systems fail the moment terrain becomes unpredictable.
            </p>
            <p className="text-[16px] text-text-muted leading-[1.8] max-w-[640px]">
              John Deere's most advanced autonomous tractor hands control back to a human when conditions change. DARPA has run off-road AV challenges for over twenty years. The gap remains.
            </p>
          </div>
        </div>
      </Section>

      {/* Solution Section */}
      <Section bg="elevated" className="py-20 md:py-32 border-y border-border/50">
        <div className="mb-20">
          <SystemLabel text="/ OUR SOLUTION" />
          <div className="h-[32px]" />
          <h2 className="text-[40px] md:text-[52px] font-medium text-text-primary leading-[1.0] tracking-[-2px]">
            TrXon — a two-layer autonomous stack for unstructured terrain.
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-10 rounded-[8px] bg-bg-deep border border-border/50 hover:border-accent/50 transition-colors duration-300">
            <div className="w-[32px] h-[32px] text-accent mb-12">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18M15 3v18M3 9h18M3 15h18"/></svg>
            </div>
            <div className="text-[10px] font-plex text-text-system tracking-[2px] mb-4">LAYER 01</div>
            <h3 className="text-[24px] font-medium text-text-primary mb-4">Probabilistic perception</h3>
            <p className="text-[15px] text-text-muted leading-[1.7]">
              Sensor fusion built for off-road edge cases — mud, dust, rain, irregular obstacles — instead of clean lane markings.
            </p>
          </div>
          <div className="p-10 rounded-[8px] bg-bg-deep border border-border/50 hover:border-accent/50 transition-colors duration-300">
            <div className="w-[32px] h-[32px] text-accent mb-12">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
            </div>
            <div className="text-[10px] font-plex text-text-system tracking-[2px] mb-4">LAYER 02</div>
            <h3 className="text-[24px] font-medium text-text-primary mb-4">Manifold-constraint trajectory</h3>
            <p className="text-[15px] text-text-muted leading-[1.7]">
              Smooth, physically valid paths over irregular or partially unknown surfaces. No reliance on pre-mapped routes.
            </p>
          </div>
        </div>
      </Section>

      {/* Process Section */}
      <Section className="py-20 md:py-32">
        <SystemLabel text="/ THE PROCESS" />
        <div className="h-[64px]" />
        <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-4 overflow-x-auto pb-4">
          {[
            "Sensor input — LiDAR · radar · camera",
            "Probabilistic perception",
            "Manifold-constraint planner",
            "Smooth autonomous output",
            "OEM integration via API"
          ].map((step, i) => (
            <div key={i} className="flex-1 min-w-[200px] flex items-start gap-4">
              <div className="flex flex-col gap-4">
                <div className="text-[12px] font-plex text-accent">0{i+1}</div>
                <div className="text-[17px] text-text-primary leading-[1.4] font-medium pr-4">{step}</div>
              </div>
              {i < 4 && <div className="hidden md:block text-text-system mt-8">→</div>}
            </div>
          ))}
        </div>
      </Section>

      {/* Applications Section */}
      <Section id="applications" borderTop className="py-20 md:py-32">
        <div className="max-w-[700px] mb-20">
          <SystemLabel text="/ APPLICATIONS" />
          <div className="h-[32px]" />
          <h2 className="text-[40px] md:text-[52px] font-medium text-text-primary leading-[1.0] tracking-[-2px] mb-6">
            Wherever the road ends, work begins.
          </h2>
          <p className="text-[16px] text-text-muted leading-[1.8]">
            TrXon ships as one stack. The terrain — and the impact — changes with the industry.
          </p>
        </div>

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

      {/* Quote Section */}
      <Section borderTop className="py-32 flex flex-col items-center justify-center text-center">
        <blockquote className="max-w-[800px]">
          <p className="text-[32px] md:text-[44px] font-medium text-text-primary leading-[1.1] tracking-[-2px] mb-8">
            "Today's autonomy stops at the edge of the map. We're building for what's past it."
          </p>
          <cite className="not-italic text-[12px] font-plex text-accent uppercase tracking-[3px]">
            The TrXon Manifesto
          </cite>
        </blockquote>
      </Section>
    </div>
  );
}

