import React from "react";
import {
  Shield,
  Lock,
  UserCheck,
  FileText,
  AlertCircle,
  BookOpen,
  Users,
  Eye,
  Bell,
  BanIcon,
  IceCreamIcon,
} from "lucide-react";
import { PolicySection } from "../components/policy/policy-section";
import Header from "../components/Header";

function PrivacyPolicy() {
  return (
    <>
      <div className="py-16 bg-gray-50">
        <div className="max-w-4xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="p-8 bg-white shadow-lg rounded-2xl">
            <div className="mb-12 text-center">
              <h1 className="mb-4 text-3xl font-bold text-gray-900">
                Privacy Policy
              </h1>
              <p className="text-gray-600">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>

            <div className="space-y-8">
              <PolicySection
                icon={Shield}
                title="Information Collection and Use"
              >
                <p className="mb-4 text-gray-600">
                  At edevhindi, accessible from http://edevhindi.com, one of our
                  main priorities is the privacy of our visitors. This Privacy
                  Policy document contains types of information that is
                  collected and recorded by edevhindi and how we use it.
                </p>
                <ul className="ml-4 space-y-2 text-gray-600 list-disc list-inside">
                  <li>Email address</li>
                  <li>First name and last name</li>
                  <li>Phone number</li>
                  <li>Address, State, Province, ZIP/Postal code, City</li>
                </ul>

                <p className="my-4 text-gray-600">
                  If you have additional questions or require more information
                  about our Privacy Policy, do not hesitate to contact us. This
                  Privacy Policy applies only to our online activities and is
                  valid for visitors to our website with regards to the
                  information that they shared and/or collected on edevhindi.
                  This policy is not applicable to any information collected
                  offline or via channels other than this website. Our Privacy
                  Policy was created with the help of the Privacy Policy
                  Generator.
                </p>
              </PolicySection>
              <PolicySection icon={Lock} title="Information We Collect">
                <p className="mb-4 text-gray-600">
                  The personal information that you are asked to provide, and
                  the reasons why you are asked to provide it, will be made
                  clear to you at the point we ask you to provide your personal
                  information. We also ask users to submit new passwords, if
                  applicable. We prioritize security and understand the
                  importance of strong passwords. That’s why we don’t use weak
                  passwords on our website, and we recommend that you use a
                  strong password to help safeguard your account from
                  unauthorized access. This commitment helps protect our users’
                  accounts and data, giving you peace of mind while using our
                  services. When you register for an Account, we may ask for
                  your:
                </p>
                <p className="mb-4 text-gray-600">
                  We use the information we collect in various ways, including
                  to:
                </p>
                <ul className="ml-4 space-y-2 text-gray-600 list-disc list-inside">
                  <li>Provide, operate, and maintain our website</li>
                  <li>Improve, personalize, and expand our website</li>
                  <li>Understand and analyze how you use our website</li>
                  <li>
                    Develop new products, services, features, and functionality
                  </li>
                  <li>Send you emails</li>
                  <li>Find and prevent fraud</li>
                </ul>
              </PolicySection>
              <PolicySection
                icon={UserCheck}
                title="GDPR Data Protection Rights"
              >
                <p className="mb-4 text-gray-600">
                  We want to ensure you are fully aware of all of your data
                  protection rights. Every user is entitled to the following:
                  <ul className="ml-4 space-y-2 text-gray-600 list-disc list-inside">
                    <li>
                      The right to access - You have the right to request copies
                      of your personal data. We may charge a small fee for this
                      service.
                    </li>
                    <li>
                      The right to rectification - You have the right to request
                      that we correct any information you believe is inaccurate.
                      You also have the right to request that we complete
                      information you believe is incomplete.
                    </li>
                    <li>
                      The right to erasure - You have the right to request that
                      we erase your personal data, under certain conditions.
                    </li>
                    <li>
                      The right to restrict processing - You have the right to
                      request that we restrict the processing of your personal
                      data, under certain conditions.
                    </li>
                    <li>
                      The right to object to processing - You have the right to
                      object to our processing of your personal data, under
                      certain conditions.
                    </li>
                    <li>
                      The right to data portability - You have the right to
                      request that we transfer the data collected to another
                      organization, or directly to you, under certain
                      conditions.
                    </li>
                  </ul>
                  <p className="py-2 mt-4">
                    If you would like to exercise any of these rights, please
                    contact us.
                  </p>
                  <p className="py-2">
                    If you make a request, we have one month to respond to you.
                  </p>
                </p>

                <p className="mb-4 text-gray-600">
                  Under the GDPR, you have the following rights:
                </p>
              </PolicySection>
              <PolicySection icon={Eye} title="Log Files and Cookies">
                <p className="text-gray-600">
                  edevhindi follows a standard procedure of using log files.
                  These files log visitors when they visit websites. The
                  information collected by log files includes internet protocol
                  (IP) addresses, browser type, Internet Service Provider (ISP),
                  date and time stamp, referring/exit pages, and possibly the
                  number of clicks.
                </p>
              </PolicySection>
              <PolicySection
                icon={IceCreamIcon}
                title=" Updated Browser Policies for Enhanced Security and Privacy"
              >
                <p className="text-gray-600">
                  Our browser policy updates are aimed at providing you with a
                  more secure experience. We’ve implemented advanced encryption,
                  limited cookie use to necessary functions, and enhanced our
                  ability to block harmful content. For the highest level of
                  protection, download the latest version of your preferred
                  browser.
                </p>
              </PolicySection>
              <PolicySection
                icon={IceCreamIcon}
                title=" Adult Content and Compliance with Pornography Laws"
              >
                <p className="text-gray-600">
                  To provide a secure and respectful space for all users, we
                  enforce pornography laws by banning adult content. Our
                  platform is designed to prevent any adult material from being
                  published and to swiftly address any violations, ensuring a
                  family-friendly environment.
                </p>
              </PolicySection>
              <PolicySection
                icon={IceCreamIcon}
                title="Third Party Privacy Policies"
              >
                <p className="text-gray-600">
                  edevhindi’s Privacy Policy does not apply to other advertisers
                  or websites. We advise you to consult the respective Privacy
                  Policies of these third-party ad servers for more detailed
                  information. It may include their practices and instructions
                  about how to opt-out of certain options. You can choose to
                  disable cookies through your individual browser options. More
                  detailed information about cookie management with specific web
                  browsers can be found at the browsers’ respective websites.
                </p>
              </PolicySection>
              <PolicySection
                icon={IceCreamIcon}
                title="CCPA Privacy Rights (Do Not Sell My Personal Information)"
              >
                <p className="text-gray-600">
                  To provide a secure and respectful space for all users, we
                  enforce pornography laws by banning adult content. Our
                  platform is designed to prevent any adult material from being
                  published and to swiftly address any violations, ensuring a
                  family-friendly environment. Third Party Privacy Policies
                </p>
              </PolicySection>
              <PolicySection
                icon={IceCreamIcon}
                title="CCPA Privacy Rights (Do Not Sell My Personal Information)"
              >
                <p className="text-gray-600">
                  Under the CCPA, among other rights, California consumers have
                  the right to: Request that a business that collects a
                  consumer’s personal data disclose the categories and specific
                  pieces of personal data collected about consumers. Request
                  that a business delete any personal data about the consumer
                  that a business has collected. Request that a business that
                  sells a consumer’s personal data, not sell the consumer’s
                  personal data. If you make a request, we have one month to
                  respond to you. If you would like to exercise any of these
                  rights, please contact us.
                </p>
              </PolicySection>

              <PolicySection icon={Bell} title="Use of Content">
                <p className="text-gray-600">
                  We are committed to maintaining high standards of content
                  quality and integrity. Consequently, we strictly prohibit the
                  use of Lorem Ipsum content, including but not limited to Lorem
                  Ipsum text, on our website. All content must be original,
                  relevant, and meaningful to our audience. This ensures that
                  our website remains a valuable and trustworthy resource for
                  our visitors.
                </p>
              </PolicySection>
              <PolicySection icon={Bell} title="Email Privacy">
                <p className="text-gray-600">
                  Your privacy and data security matter to us. We've updated our
                  email privacy policies to improve your experience and keep
                  your information safe. We only allow genuine email addresses
                  and have upgraded our encryption to protect your data. Email
                  generator addresses are not permitted.
                </p>
              </PolicySection>
              <PolicySection icon={BanIcon} title="Children's Information">
                <p className="text-gray-600">
                  Another part of our priority is adding protection for children
                  while using the internet. We encourage parents and guardians
                  to observe, participate in, and/or monitor and guide their
                  online activity. edevhindi does not knowingly collect any
                  personally identifiable information from children under 13. If
                  you think that your child provided this kind of information on
                  our website, we strongly encourage you to contact us
                  immediately, and we will do our best efforts to promptly
                  remove such information from our records. Entity Type: We use
                  individual platforms.
                </p>
              </PolicySection>
              <PolicySection icon={FileText} title="Analytics">
                <p className="text-gray-600">
                  We use Google Analytics to monitor and analyze the use of our
                  Service. Google Analytics is a web analytics service that
                  tracks and reports website traffic. You can opt-out by
                  installing the Google Analytics opt-out browser add-on.
                </p>
                <p className="mt-4 text-gray-600">
                  Google Analytics: Google Analytics is a web analytics service
                  offered by Google that tracks and reports website traffic.
                  Google uses the data collected to track and monitor the use of
                  our Service. This data is shared with other Google services.
                  Google may use the collected data to contextualize and
                  personalize ads within its advertising network. You can
                  opt-out by installing the Google Analytics opt-out browser
                  add-on, which prevents the Google Analytics JavaScript (ga.js,
                  analytics.js, and dc.js) from sharing information with Google
                  Analytics about visit activity.
                </p>
              </PolicySection>
              <PolicySection icon={AlertCircle} title="Contact Information">
                <p className="text-gray-600">
                  If you have any questions about this Privacy Policy, please
                  contact us at:{" "}
                  <a
                    href="mailto:heera@edevhindi.com"
                    className="text-indigo-600 hover:text-indigo-700"
                  >
                    heera@edevhindi.com
                  </a>
                </p>
              </PolicySection>
            </div>

            <div className="pt-8 mt-12 border-t border-gray-200">
              <p className="text-sm text-center text-gray-600">
                This privacy policy was last updated on{" "}
                {new Date().toLocaleDateString()}. We reserve the right to
                update this policy at any time to reflect changes in our
                practices or for other operational, legal, or regulatory
                reasons.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PrivacyPolicy;
