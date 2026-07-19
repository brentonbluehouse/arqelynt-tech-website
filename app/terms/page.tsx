import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Terms of Service | Arqelynt Tech LLC",
  description: "Terms governing use of the Arqelynt Tech LLC website.",
};

export default function TermsOfService() {
  return (
    <section className="legal">
      <Container>
        <span className="eyebrow">LEGAL</span>
        <h1>Terms of Service</h1>
        <p className="legal-updated"><strong>Effective date:</strong> July 18, 2026</p>

        <p>These Terms of Service (“Terms”) govern your access to and use of arqelynttech.com (the “Website”), operated by Arqelynt Tech LLC (“Arqelynt,” “we,” “us,” or “our”). By using the Website, you agree to these Terms. If you do not agree, please do not use the Website.</p>

        <h2>1. Website Purpose</h2>
        <p>The Website provides general information about Arqelynt and its software development, artificial intelligence, SaaS, web application, cloud infrastructure, DevOps, and technical discovery services. Website content is provided for general informational and business-development purposes only.</p>

        <h2>2. Project Inquiries and Client Engagements</h2>
        <p>Submitting a form, sending an email, scheduling a conversation, or receiving a response does not create a client, consulting, fiduciary, partnership, employment, or other professional relationship. Any services will be governed exclusively by a separate written agreement signed by Arqelynt and the client.</p>
        <p>Project descriptions, timelines, budgets, technologies, and potential approaches discussed before a signed agreement are preliminary and may change after discovery and technical evaluation. Nothing on the Website constitutes a binding quote, proposal, warranty, or guarantee of availability or results.</p>

        <h2>3. Acceptable Use</h2>
        <p>You agree not to use the Website to:</p>
        <ul>
          <li>Violate any applicable law or the rights of another person or organization;</li>
          <li>Transmit malicious code, spam, deceptive content, or unlawful material;</li>
          <li>Attempt to gain unauthorized access to the Website, its systems, or related networks;</li>
          <li>Interfere with the Website’s operation, security, availability, or performance;</li>
          <li>Use automated means to extract content in a manner that materially burdens the Website; or</li>
          <li>Misrepresent your identity, affiliation, authority, or purpose.</li>
        </ul>

        <h2>4. Intellectual Property</h2>
        <p>The Website and its original text, design, graphics, branding, software, and other content are owned by Arqelynt or used with permission and are protected by applicable intellectual-property laws. Subject to these Terms, you may view the Website for your internal informational and business-evaluation purposes.</p>
        <p>You may not reproduce, distribute, modify, publicly display, sell, license, or create derivative works from Website content without prior written permission, except as permitted by applicable law. “Arqelynt,” “Arqelynt Tech LLC,” associated logos, and related branding may not be used in a manner that suggests sponsorship, endorsement, or affiliation without written permission.</p>

        <h2>5. Information You Submit</h2>
        <p>You represent that information you submit through the Website is accurate, lawful, and that you have authority to provide it. Please do not submit confidential, proprietary, regulated, or highly sensitive information through the general inquiry form. Our handling of personal information is described in our <a href="/privacy">Privacy Policy</a>.</p>

        <h2>6. Third-Party Services and Links</h2>
        <p>The Website may reference or link to third-party products, platforms, websites, or services. References do not imply endorsement or partnership. Third-party services are governed by their own terms and policies, and Arqelynt is not responsible for their availability, accuracy, security, content, or practices.</p>

        <h2>7. Disclaimers</h2>
        <p>To the fullest extent permitted by law, the Website and its content are provided “as is” and “as available,” without warranties of any kind, whether express, implied, or statutory. We do not warrant that the Website will always be available, error-free, secure, or suitable for a particular purpose, or that its content will be complete, current, or accurate.</p>
        <p>Website content is not legal, financial, accounting, cybersecurity, regulatory, or other professional advice. You should obtain advice appropriate to your circumstances before acting on information presented here.</p>

        <h2>8. Limitation of Liability</h2>
        <p>To the fullest extent permitted by applicable law, Arqelynt and its owners, employees, contractors, and representatives will not be liable for indirect, incidental, special, consequential, exemplary, or punitive damages, or for lost profits, revenue, data, business opportunities, or goodwill arising from or related to your use of—or inability to use—the Website.</p>
        <p>Nothing in these Terms excludes or limits liability that cannot lawfully be excluded or limited.</p>

        <h2>9. Changes and Availability</h2>
        <p>We may modify, suspend, or discontinue any part of the Website at any time. We may also update these Terms as the Website, our business, or applicable requirements change. Updated Terms will be posted on this page with a revised effective date. Continued use of the Website after an update constitutes acceptance of the revised Terms.</p>

        <h2>10. Governing Law</h2>
        <p>These Terms are governed by the laws of the State of Texas, without regard to conflict-of-laws principles. Subject to applicable law, disputes relating to these Terms or the Website will be brought in the state or federal courts located in Harris County, Texas, and you consent to their jurisdiction and venue.</p>

        <h2>11. Severability and Entire Agreement</h2>
        <p>If any provision of these Terms is found unenforceable, the remaining provisions will remain in effect, and the affected provision will be interpreted to the maximum extent enforceable. These Terms and the Privacy Policy constitute the entire agreement concerning your use of the Website, but they do not replace any separately signed client agreement.</p>

        <h2>12. Contact Us</h2>
        <p>Questions about these Terms may be sent to:</p>
        <address>
          <strong>Arqelynt Tech LLC</strong><br />
          6220 Westpark Dr, Suite 149G-2806<br />
          Houston, Texas 77057<br />
          <a href="mailto:contact@arqelynttech.com">contact@arqelynttech.com</a>
        </address>
      </Container>
    </section>
  );
}
