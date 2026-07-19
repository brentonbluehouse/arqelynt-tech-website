import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Privacy Policy | Arqelynt Tech LLC",
  description: "Learn how Arqelynt Tech LLC collects, uses, and protects information submitted through this website.",
};

export default function PrivacyPolicy() {
  return (
    <section className="legal">
      <Container>
        <span className="eyebrow">LEGAL</span>
        <h1>Privacy Policy</h1>
        <p className="legal-updated"><strong>Effective date:</strong> July 18, 2026</p>

        <p>
          Arqelynt Tech LLC (“Arqelynt,” “we,” “us,” or “our”) respects your privacy. This Privacy Policy explains how we collect, use, disclose, and protect information when you visit arqelynttech.com, contact us, or submit a project inquiry.
        </p>

        <h2>1. Information We Collect</h2>
        <p>We may collect information that you voluntarily provide, including your name, work email address, company name, project type, project stage, estimated budget, project description, and any other information you include in a message to us.</p>
        <p>Our website and hosting providers may also collect limited technical information automatically, such as your IP address, browser type, device information, requested pages, timestamps, and diagnostic or security logs. We use this information to operate, protect, and improve the website.</p>

        <h2>2. How We Use Information</h2>
        <p>We may use the information we collect to:</p>
        <ul>
          <li>Review and respond to project inquiries and other communications;</li>
          <li>Evaluate whether our services may be appropriate for your needs;</li>
          <li>Operate, maintain, secure, and improve the website;</li>
          <li>Detect spam, fraud, misuse, or technical problems;</li>
          <li>Maintain business records and comply with applicable legal obligations; and</li>
          <li>Protect our rights, property, users, and operations.</li>
        </ul>

        <h2>3. How We Share Information</h2>
        <p>We do not sell your personal information. We may share information with service providers that support our website, hosting, communications, security, or business operations. These providers may process information only as needed to perform services on our behalf and subject to their applicable contractual and legal obligations.</p>
        <p>We may also disclose information when reasonably necessary to comply with law, respond to lawful requests, enforce our agreements, investigate misuse, protect rights or safety, or complete a merger, financing, acquisition, reorganization, or transfer of business assets.</p>

        <h2>4. Cookies and Similar Technologies</h2>
        <p>The current website does not intentionally use advertising cookies or behavioral tracking technologies. Essential hosting or security providers may use limited technologies necessary to deliver and protect the website. If we add analytics, advertising, or other nonessential tracking tools, we will update this policy and provide any notices or choices required by applicable law.</p>

        <h2>5. Data Retention</h2>
        <p>We retain personal information only for as long as reasonably necessary to respond to inquiries, maintain appropriate business records, protect the website, resolve disputes, and satisfy legal or contractual obligations. Retention periods may vary depending on the nature of the information and why it was collected.</p>

        <h2>6. Data Security</h2>
        <p>We use reasonable administrative, technical, and organizational measures designed to protect information against unauthorized access, loss, misuse, or alteration. No method of transmission or storage is completely secure, and we cannot guarantee absolute security.</p>

        <h2>7. Your Privacy Choices</h2>
        <p>You may ask us to access, correct, or delete personal information you have submitted by emailing <a href="mailto:contact@arqelynttech.com">contact@arqelynttech.com</a>. Depending on where you live and subject to applicable exceptions, you may have additional privacy rights. We may need to verify your identity before completing a request.</p>

        <h2>8. Children’s Privacy</h2>
        <p>This website and our services are intended for businesses and adults. We do not knowingly collect personal information from children under 13. If you believe a child has provided information through this website, please contact us so we can review and address the matter.</p>

        <h2>9. Third-Party Links</h2>
        <p>The website may link to third-party websites or services. Their privacy practices are governed by their own policies, and we are not responsible for their content, security, or privacy practices.</p>

        <h2>10. Changes to This Policy</h2>
        <p>We may update this Privacy Policy as our website, services, or legal obligations change. The revised version will be posted on this page with an updated effective date. Material changes may be communicated through an additional notice when appropriate.</p>

        <h2>11. Contact Us</h2>
        <p>Questions or requests concerning this Privacy Policy may be sent to:</p>
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
