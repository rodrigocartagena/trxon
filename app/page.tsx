import GhostButton from "../components/GhostButton";
import Section from "../components/Section";
import SystemLabel from "../components/SystemLabel";

export default function Home() {
  return (
    <div className="page-enter-active">
      {/* Hero */}
      <Section className="pt-[80px] pb-[80px] md:pt-[100px] md:pb-[120px] lg:pt-[140px] lg:pb-[160px] min-h-[380px] flex items-center justify-start">
        <div>
          <h1 className="text-[40px] md:text-[52px] lg:text-[64px] font-medium text-text-primary leading-[1.0] tracking-[-2.5px]">
            Beyond the road.
          </h1>
          <div className="h-[28px]" />
          <p className="text-[15px] text-text-muted max-w-[380px] leading-[1.8]">
            Autonomous navigation for the world the road doesn't reach.
          </p>
          <div className="h-[48px]" />
          <GhostButton href="/technology" text="EXPLORE" />
        </div>
      </Section>

      {/* Problem */}
      <Section id="problem" borderTop className="py-[80px] md:py-[120px] lg:py-[160px]">
        <SystemLabel text="/ THE PROBLEM" />
        <div className="h-[32px]" />
        <h2 className="text-[28px] md:text-[36px] lg:text-[44px] font-medium text-text-primary max-w-[600px] leading-[1.15] tracking-[-1.5px]">
          95% of autonomous driving is built for roads that already exist.
        </h2>
        <div className="h-[56px]" />
        <div className="max-w-[540px]">
          <p className="text-[15px] text-text-body leading-[1.8]">
            Tesla, Waymo, and every major autonomous system depend on lane markings, mapped highways, and predictable terrain. The moment surfaces become unpredictable — mud, gravel, debris, partial roads — they hand back control to a human driver.
          </p>
          <div className="h-[20px]" />
          <p className="text-[15px] text-text-muted leading-[1.8]">
            Meanwhile, $80B+ of global heavy material transport happens every day on terrain that no one has mapped. Defense convoys move through contested ground. Construction megaprojects bleed time on dirt access roads. Disaster response can't reach the places that need it most. The technology stops where the road stops.
          </p>
        </div>
      </Section>

      {/* Solution */}
      <Section borderTop className="py-[80px] md:py-[120px] lg:py-[160px]">
        <SystemLabel text="/ THE SOLUTION" />
        <div className="h-[32px]" />
        <h2 className="text-[28px] md:text-[36px] lg:text-[44px] font-medium text-text-primary max-w-[600px] leading-[1.15] tracking-[-1.5px]">
          A vehicle-agnostic autonomy stack for terrain that no map describes.
        </h2>
        <div className="h-[56px]" />
        <div className="max-w-[540px]">
          <p className="text-[15px] text-text-body leading-[1.8]">
            TrX is a navigation system that retrofits onto any existing truck, defense vehicle, or construction transport. It doesn't need pre-mapped roads, lane markings, or a controlled environment. It builds its understanding of the terrain in real time, from the sensors mounted on the vehicle itself.
          </p>
          <div className="h-[20px]" />
          <p className="text-[15px] text-text-muted leading-[1.8]">
            The system fuses LiDAR, radar, and vision into a single live model of the world ahead, then plans a smooth, physically valid trajectory through it. No handoff. No geofence. No weather dependency.
          </p>
        </div>
      </Section>

      {/* Technology */}
      <Section borderTop className="py-[80px] md:py-[120px] lg:py-[160px]">
        <SystemLabel text="/ THE TECHNOLOGY" />
        <div className="h-[32px]" />
        <h2 className="text-[28px] md:text-[36px] lg:text-[44px] font-medium text-text-primary max-w-[600px] leading-[1.15] tracking-[-1.5px]">
          A neural network that learns the safest path, then keeps it stable.
        </h2>
        <div className="h-[56px]" />
        <div className="max-w-[540px]">
          <p className="text-[15px] text-text-body leading-[1.8]">
            Our trajectory engine treats the world as a field of obstacles — walls, cliffs, rubble, mountains — detected in real time by LiDAR and radar. A small evolutionary neural network optimizes for two things at once: minimize sharp turns, and maximize distance from the nearest obstacle.
          </p>
          <div className="h-[20px]" />
          <p className="text-[15px] text-text-muted leading-[1.8]">
            We have a working prototype of this optimization running on real obstacle data. The path it generates is smooth, physically drivable, and adapts as new sensor information comes in.
          </p>
        </div>
        
        <div className="h-[64px]" />
        
        <div className="max-w-[540px] border-t-[0.5px] border-border pt-[56px]">
          <SystemLabel text="THE PROBLEM WITH BASIC PATH OPTIMIZATION" className="text-text-system tracking-[2px]" />
          <div className="h-[20px]" />
          <p className="text-[15px] text-text-body leading-[1.8]">
            A direct neural network has a critical weakness: when a new obstacle is suddenly detected — a rock the LiDAR didn't see until now, a person stepping into the path — the entire trajectory shifts at once. To a human passenger, this feels like the vehicle swerving without warning. To the control system, it can mean unsafe braking or instability.
          </p>
        </div>
        
        <div className="h-[56px]" />
        
        <div className="max-w-[540px] border-t-[0.5px] border-border pt-[56px]">
          <SystemLabel text="OUR APPROACH — B-SPLINE CONTINUITY" className="text-text-system tracking-[2px]" />
          <div className="h-[20px]" />
          <p className="text-[15px] text-text-body leading-[1.8]">
            We rebuild the trajectory layer on top of B-splines — a class of curves that are mathematically guaranteed to be C² continuous. In practical terms, this means the path's curvature changes smoothly, never abruptly.
          </p>
          <div className="h-[20px]" />
          <p className="text-[15px] text-text-muted leading-[1.8]">
            When a new obstacle appears, only the local segment of the spline updates. The rest of the path stays stable. The vehicle doesn't swerve. The ride feels predictable. The control system stays in safe operating bounds.
          </p>
        </div>
      </Section>

      {/* Closing */}
      <Section borderTop className="py-[120px] md:py-[160px] lg:py-[200px] min-h-[280px] flex items-center justify-center text-center">
        <h2 className="text-[28px] md:text-[36px] lg:text-[40px] font-medium text-text-primary leading-[1.15] tracking-[-1.5px] max-w-[480px] mx-auto">
          Where mapped roads end, autonomy begins.
        </h2>
      </Section>
    </div>
  );
}
