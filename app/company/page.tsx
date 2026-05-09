import GhostButton from "../../components/GhostButton";
import Section from "../../components/Section";
import SystemLabel from "../../components/SystemLabel";

export default function Company() {
  const founders = [
    { initials: "AB", name: "Abubakr Batalvi", role: "TECHNICAL LEAD", bio: "Leads trajectory and perception research at TrXon. Currently working through the manifold-constraint optimization and B-spline continuity problems that anchor the technical stack." },
    { initials: "RC", name: "Rodrigo Cartagena", role: "PRODUCT & STRATEGY", bio: "Drives the economic and product strategy at TrXon. Background in clean-tech engineering and competitive market research." },
    { initials: "DA", name: "Dayem [Last name]", role: "ENGINEERING", bio: "Owns the system integration and front-end of the product." },
    { initials: "AR", name: "Aarush [Last name]", role: "RESEARCH", bio: "Focuses on perception research and sensor fusion." },
  ];

  return (
    <div className="page-enter-active">
      {/* Mission */}
      <Section className="pt-[80px] pb-[80px] md:pt-[100px] md:pb-[100px] lg:pt-[140px] lg:pb-[120px]">
        <SystemLabel text="/ COMPANY" />
        <div className="h-[32px]" />
        <h1 className="text-[40px] md:text-[48px] lg:text-[56px] font-medium text-text-primary tracking-[-2px] max-w-[600px]">
          We build for the terrain no one mapped.
        </h1>
        <div className="h-[40px]" />
        <p className="text-[15px] text-text-body max-w-[540px] leading-[1.8]">
          TrXon exists because the autonomous vehicle industry made a choice. They optimized for highways, where the roads are already drawn. The places where autonomy would actually save lives, like defense convoys, disaster zones, construction megaprojects, and remote logistics, got left to human drivers.
        </p>
        <div className="h-[20px]" />
        <p className="text-[15px] text-text-muted max-w-[540px]">
          We think that's the wrong place to stop. We're building the navigation stack for everywhere else.
        </p>
      </Section>

      {/* Values */}
      <Section borderTop bg="elevated" className="py-[80px] md:py-[100px] lg:py-[120px]">
        <SystemLabel text="/ VALUES" />
        <div className="h-[32px]" />
        <h2 className="text-[28px] md:text-[32px] lg:text-[36px] font-medium text-text-primary tracking-[-1px]">
          How we work.
        </h2>
        <div className="h-[64px]" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[48px]">
          <div>
            <div className="font-plex text-[32px] font-medium text-accent">01</div>
            <div className="h-[20px]" />
            <h3 className="text-[20px] font-medium text-text-primary">Engineering over marketing.</h3>
            <div className="h-[12px]" />
            <p className="text-[14px] text-text-muted leading-[1.7]">
              We'd rather show working math than animated mockups. If a claim isn't backed by a prototype, a research paper, or a real number, we don't make it.
            </p>
          </div>
          <div>
            <div className="font-plex text-[32px] font-medium text-accent">02</div>
            <div className="h-[20px]" />
            <h3 className="text-[20px] font-medium text-text-primary">Honest about what's hard.</h3>
            <div className="h-[12px]" />
            <p className="text-[14px] text-text-muted leading-[1.7]">
              Off-road autonomy is unsolved for a reason. We name our weak points before someone else does, and we kill the parts that don't work.
            </p>
          </div>
          <div>
            <div className="font-plex text-[32px] font-medium text-accent">03</div>
            <div className="h-[20px]" />
            <h3 className="text-[20px] font-medium text-text-primary">Built for the operators.</h3>
            <div className="h-[12px]" />
            <p className="text-[14px] text-text-muted leading-[1.7]">
              Defense logistics teams. Construction site managers. The people who actually move things across hard terrain. Those are the customers we build for, not the press.
            </p>
          </div>
        </div>
      </Section>

      {/* Founders */}
      <Section borderTop className="py-[80px] md:py-[100px] lg:py-[120px]">
        <SystemLabel text="/ FOUNDERS" />
        <div className="h-[32px]" />
        <h2 className="text-[28px] md:text-[32px] lg:text-[36px] font-medium text-text-primary tracking-[-1px]">
          The team.
        </h2>
        <div className="h-[64px]" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
          {founders.map((founder, i) => (
            <div key={i} className="bg-bg-card border-[0.5px] border-border rounded-[4px] p-[32px]">
              <div className="w-[64px] h-[64px] rounded-full bg-bg-elevated flex items-center justify-center font-plex text-[16px] font-medium text-accent">
                {founder.initials}
              </div>
              <div className="h-[20px]" />
              <h3 className="text-[18px] font-medium text-text-primary">{founder.name}</h3>
              <div className="h-[4px]" />
              <div className="font-plex text-[12px] tracking-[1.5px] uppercase text-accent">
                {founder.role}
              </div>
              <div className="h-[16px]" />
              <p className="text-[13px] text-text-body leading-[1.6] line-clamp-3">
                {founder.bio}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Closing */}
      <Section borderTop className="py-[120px] md:py-[150px] lg:py-[180px] min-h-[240px] flex flex-col items-center justify-center text-center">
        <h2 className="text-[28px] md:text-[32px] lg:text-[36px] font-medium text-text-primary tracking-[-1px] max-w-[480px]">
          We're at the start. The hard part is what comes next.
        </h2>
        <div className="h-[32px]" />
        <GhostButton href="/contact" text="REQUEST DEMO" />
      </Section>
    </div>
  );
}
