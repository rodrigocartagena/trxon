import Section from "../../components/Section";
import SolidButton from "../../components/SolidButton";
import SystemLabel from "../../components/SystemLabel";

export default function Contact() {
  return (
    <div className="page-enter-active">
      {/* Header */}
      <Section className="pt-[80px] pb-[60px] md:pt-[100px] md:pb-[60px] lg:pt-[140px] lg:pb-[80px]">
        <SystemLabel text="/ CONTACT" />
        <div className="h-[32px]" />
        <h1 className="text-[40px] md:text-[48px] lg:text-[56px] font-medium text-text-primary tracking-[-2px]">
          Talk to us.
        </h1>
        <div className="h-[28px]" />
        <p className="text-[15px] text-text-muted max-w-[480px]">
          We're early. If you're a potential partner, customer, investor, or technical advisor — start a conversation.
        </p>
      </Section>

      {/* Form */}
      <Section borderTop className="pt-[80px] pb-[120px] md:pb-[160px]">
        <div className="max-w-[540px]">
          <form className="flex flex-col gap-[24px]">
            <div className="flex flex-col">
              <label htmlFor="name" className="font-plex text-[12px] text-text-system tracking-[1.5px] uppercase mb-[8px]">
                NAME
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                className="w-full bg-transparent border-b-[0.5px] border-border-strong py-[12px] text-[15px] text-text-primary placeholder:text-text-system focus:outline-none focus:border-accent transition-colors duration-200"
                required
              />
            </div>
            
            <div className="flex flex-col">
              <label htmlFor="email" className="font-plex text-[12px] text-text-system tracking-[1.5px] uppercase mb-[8px]">
                EMAIL
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="you@company.com"
                className="w-full bg-transparent border-b-[0.5px] border-border-strong py-[12px] text-[15px] text-text-primary placeholder:text-text-system focus:outline-none focus:border-accent transition-colors duration-200"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="organization" className="font-plex text-[12px] text-text-system tracking-[1.5px] uppercase mb-[8px]">
                ORGANIZATION
              </label>
              <input
                type="text"
                id="organization"
                name="organization"
                placeholder="Where you're reaching out from"
                className="w-full bg-transparent border-b-[0.5px] border-border-strong py-[12px] text-[15px] text-text-primary placeholder:text-text-system focus:outline-none focus:border-accent transition-colors duration-200"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="interest" className="font-plex text-[12px] text-text-system tracking-[1.5px] uppercase mb-[8px]">
                I'M INTERESTED IN
              </label>
              <select
                id="interest"
                name="interest"
                className="w-full bg-bg-deep border-b-[0.5px] border-border-strong py-[12px] text-[15px] text-text-primary focus:outline-none focus:border-accent transition-colors duration-200"
                required
                defaultValue=""
              >
                <option value="" disabled className="text-text-system">Choose one</option>
                <option value="partnering">Partnering with TrXon</option>
                <option value="customer">Becoming a customer</option>
                <option value="investing">Investing</option>
                <option value="joining">Joining the team</option>
                <option value="collaboration">Technical collaboration</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label htmlFor="message" className="font-plex text-[12px] text-text-system tracking-[1.5px] uppercase mb-[8px]">
                MESSAGE
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell us what you're working on"
                rows={4}
                className="w-full bg-transparent border-b-[0.5px] border-border-strong py-[12px] text-[15px] text-text-primary placeholder:text-text-system focus:outline-none focus:border-accent transition-colors duration-200 resize-y"
                required
              />
            </div>

            <div className="h-[32px]" />
            <div className="self-start">
              <SolidButton text="SEND MESSAGE" type="submit" />
            </div>
          </form>

          <div className="h-[64px]" />
          <div className="font-plex text-[13px] text-text-system">
            OR EMAIL US DIRECTLY: team@trx.ai
          </div>
        </div>
      </Section>
    </div>
  );
}
