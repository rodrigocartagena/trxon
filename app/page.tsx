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
            Tesla, Waymo, and every major autonomous system depend on lane markings, mapped highways, and predictable terrain. The moment surfaces become unpredictable, the moment a road turns into mud or gravel or rubble, those systems hand control back to a human driver.
          </p>
          <div className="h-[20px]" />
          <p className="text-[15px] text-text-muted leading-[1.8]">
            That leaves over $80 billion of global heavy material transport on terrain nobody has mapped. Defense convoys still cross contested ground with human drivers behind the wheel. Construction megaprojects waste months on dirt access roads. Disaster response teams struggle to reach the places that need them most. The technology gets us 95% of the way there, then stops.
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
            TrXon is a navigation system that bolts onto any existing truck, defense vehicle, or construction transport. It doesn't need pre-mapped roads, lane markings, or a controlled environment. It builds its understanding of the terrain in real time, using only the sensors mounted on the vehicle.
          </p>
          <div className="h-[20px]" />
          <p className="text-[15px] text-text-muted leading-[1.8]">
            LiDAR, radar, and camera feeds get fused into one live model of what's ahead, and the system plans a smooth, physically valid path through it. There's no driver handoff, no geofenced area it has to stay inside, and no weather conditions that take it offline.
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
            Our trajectory engine treats the world as a field of obstacles, anything from walls to cliffs to rubble to mountains, picked up in real time by LiDAR and radar. A small evolutionary neural network then balances two competing goals at once: keep the path smooth, and keep it as far from obstacles as possible.
          </p>
          <div className="h-[20px]" />
          <p className="text-[15px] text-text-muted leading-[1.8]">
            We already have a working prototype running this optimization on real obstacle data. The paths it produces are smooth, physically drivable, and update as new sensor information comes in.
          </p>
        </div>
        
        <div className="h-[64px]" />
        
        <div className="max-w-[540px] border-t-[0.5px] border-border pt-[56px]">
          <SystemLabel text="THE PROBLEM WITH BASIC PATH OPTIMIZATION" className="text-text-system tracking-[2px]" />
          <div className="h-[20px]" />
          <p className="text-[15px] text-text-body leading-[1.8]">
            A direct neural network has a serious weakness. When a new obstacle is suddenly detected, like a rock the LiDAR couldn't see until the last moment, the entire trajectory recalculates at once. For a passenger, that feels like the vehicle yanking the wheel without warning. For the control system, it can trigger unsafe braking or instability.
          </p>
        </div>
        
        <div className="h-[56px]" />
        
        <div className="max-w-[540px] border-t-[0.5px] border-border pt-[56px]">
          <SystemLabel text="OUR APPROACH WITH B-SPLINE CONTINUITY" className="text-text-system tracking-[2px]" />
          <div className="h-[20px]" />
          <p className="text-[15px] text-text-body leading-[1.8]">
            We rebuild the trajectory layer on top of B-splines, a class of curves that are mathematically guaranteed to be C² continuous. In practical terms, the path's curvature changes gradually instead of jumping.
          </p>
          <div className="h-[20px]" />
          <p className="text-[15px] text-text-muted leading-[1.8]">
            When a new obstacle appears, only the local part of the spline near the obstacle updates. The rest of the path stays where it was. The vehicle adjusts without swerving, the ride stays predictable, and the control system stays in its safe operating range.
          </p>
        </div>
      </Section>

      {/* Closing */}
      <Section borderTop className="py-[120px] md:py-[160px] lg:py-[200px] min-h-[280px] flex items-center justify-center text-center">
        <h2 className="text-[28px] md:text-[36px] lg:text-[40px] font-medium text-text-primary leading-[1.15] tracking-[-1.5px] max-w-[480px] mx-auto">
          Where the mapped road ends, autonomy starts.
        </h2>
      </Section>
    </div>
  );
}
