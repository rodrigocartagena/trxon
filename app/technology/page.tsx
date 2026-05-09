import Section from "../../components/Section";
import SystemLabel from "../../components/SystemLabel";

export default function Technology() {
  return (
    <div className="page-enter-active">
      {/* Intro */}
      <Section className="pt-[80px] pb-[60px] md:pt-[100px] md:pb-[80px] lg:pt-[140px] lg:pb-[100px]">
        <SystemLabel text="/ TECHNOLOGY" />
        <div className="h-[32px]" />
        <h1 className="text-[40px] md:text-[48px] lg:text-[56px] font-medium text-text-primary tracking-[-2px]">
          The stack.
        </h1>
        <div className="h-[28px]" />
        <p className="text-[15px] text-text-muted max-w-[480px] leading-[1.8]">
          Three layers, built for the conditions that stop existing autonomy systems.
        </p>
      </Section>

      {/* Three-layer stack */}
      <Section borderTop className="py-[80px] md:py-[100px] lg:py-[120px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[64px] md:gap-[48px]">
          <div>
            <div className="font-plex text-[12px] font-medium tracking-[2px] text-accent">01</div>
            <div className="h-[20px]" />
            <h3 className="text-[20px] font-medium text-text-primary tracking-[-0.3px]">Sense</h3>
            <div className="h-[12px]" />
            <p className="text-[13px] text-text-muted leading-[1.6] max-w-[220px]">
              Probabilistic sensor fusion built for the conditions that stop existing systems, including dust, mud, GPS loss, and blocked sightlines. The system fuses LiDAR, radar, and vision into one live model of the environment.
            </p>
          </div>
          <div>
            <div className="font-plex text-[12px] font-medium tracking-[2px] text-accent">02</div>
            <div className="h-[20px]" />
            <h3 className="text-[20px] font-medium text-text-primary tracking-[-0.3px]">Path</h3>
            <div className="h-[12px]" />
            <p className="text-[13px] text-text-muted leading-[1.6] max-w-[220px]">
              Trajectory optimization for terrain that no map describes. A small evolutionary neural network learns smooth, physically valid paths in real time, and B-spline continuity keeps the ride stable when new obstacles are detected.
            </p>
          </div>
          <div>
            <div className="font-plex text-[12px] font-medium tracking-[2px] text-accent">03</div>
            <div className="h-[20px]" />
            <h3 className="text-[20px] font-medium text-text-primary tracking-[-0.3px]">Ops</h3>
            <div className="h-[12px]" />
            <p className="text-[13px] text-text-muted leading-[1.6] max-w-[220px]">
              Multi-vehicle coordination across an entire deployment, covering mission planning, secure software updates, telemetry, and fleet command. Built for defense convoys and construction material transport.
            </p>
          </div>
        </div>
      </Section>

      {/* Prototype showcase */}
      <Section borderTop bg="elevated" className="py-[80px] md:py-[100px] lg:py-[120px]">
        <SystemLabel text="/ PROTOTYPE" />
        <div className="h-[32px]" />
        <h2 className="text-[28px] md:text-[32px] lg:text-[36px] font-medium text-text-primary max-w-[540px] tracking-[-1px]">
          Working math, today.
        </h2>
        <div className="h-[40px]" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[64px]">
          <div className="order-2 md:order-1">
            <p className="text-[15px] text-text-body leading-[1.8]">
              Our path-evolution engine is already running. A 64-genome evolutionary neural network learns obstacle-avoidance trajectories in real time, converging to a loss of 2.97×10⁻⁵ over 98 generations on test data.
            </p>
            <div className="h-[20px]" />
            <p className="text-[15px] text-text-muted leading-[1.8]">
              It isn't the final product, but it isn't vaporware either. The math works, the model converges, and the path it generates is smooth and physically drivable.
            </p>
            <div className="h-[32px]" />
            <a 
              href="https://www.desmos.com/calculator/fysuyv3c0a" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[13px] text-accent hover:text-text-primary transition-colors duration-200 inline-flex items-center gap-2 group"
            >
              <span>View the live prototype</span>
              <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </a>
          </div>
          <div className="order-1 md:order-2 overflow-hidden border-[0.5px] border-border-strong bg-bg-card aspect-4/3 w-full">
            <img 
              src="./desmos_nn_graph_real.png" 
              alt="Neural Network Convergence Graph" 
              className="w-full h-full object-cover opacity-80"
            />
          </div>
        </div>
      </Section>

      {/* Why now */}
      <Section borderTop className="py-[80px] md:py-[100px] lg:py-[120px]">
        <SystemLabel text="/ WHY NOW" />
        <div className="h-[32px]" />
        <h2 className="text-[28px] md:text-[32px] lg:text-[36px] font-medium text-text-primary max-w-[540px]">
          Three things changed in the last 24 months.
        </h2>
        <div className="h-[56px]" />
        <div className="flex flex-col gap-[48px]">
          <div className="flex flex-col md:flex-row gap-4 md:gap-[32px] lg:gap-[64px]">
            <div className="font-plex text-[32px] font-medium text-accent">01</div>
            <div className="max-w-[540px]">
              <h3 className="text-[20px] font-medium text-text-primary">Solid-state LiDAR collapsed in price.</h3>
              <div className="h-[12px]" />
              <p className="text-[14px] text-text-body leading-[1.7]">
                Long-range LiDAR dropped from $75,000 in 2015 to under $500 in 2025, with sub-$200 production targets by 2028. The hardware wall is gone.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4 md:gap-[32px] lg:gap-[64px]">
            <div className="font-plex text-[32px] font-medium text-accent">02</div>
            <div className="max-w-[540px]">
              <h3 className="text-[20px] font-medium text-text-primary">Foundation models for perception matured.</h3>
              <div className="h-[12px]" />
              <p className="text-[14px] text-text-body leading-[1.7]">
                Vision transformers and vision-language-action models can now generalize across terrain types with a fraction of the training data needed five years ago.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4 md:gap-[32px] lg:gap-[64px]">
            <div className="font-plex text-[32px] font-medium text-accent">03</div>
            <div className="max-w-[540px]">
              <h3 className="text-[20px] font-medium text-text-primary">The math caught up to the deployment need.</h3>
              <div className="h-[12px]" />
              <p className="text-[14px] text-text-body leading-[1.7]">
                Manifold-constraint optimization and B-spline trajectory planning already exist in research papers. What's left to close is engineering, not theory, and that's a five-year window.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
