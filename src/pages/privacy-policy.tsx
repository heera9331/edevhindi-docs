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
} from "lucide-react";
import { PolicySection } from "../components/policy/policy-section";

export function PrivacyPolicy() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Privacy Policy
            </h1>
            <p className="text-gray-600">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="space-y-8">
            <PolicySection icon={Shield} title="Information Collection and Use">
              <p className="text-gray-600 mb-4">
                At edevhindi, accessible from http://edevhindi.com, one of our
                main priorities is the privacy of our visitors. This Privacy
                Policy document contains types of information that is collected
                and recorded by edevhindi and how we use it.
              </p>
              <ul className="list-disc list-inside text-gray-600 ml-4 space-y-2">
                <li>Email address</li>
                <li>First name and last name</li>
                <li>Phone number</li>
                <li>Address, State, Province, ZIP/Postal code, City</li>
              </ul>
            </PolicySection>

            <PolicySection icon={Lock} title="Information Usage">
              <p className="text-gray-600 mb-4">
                We use the information we collect in various ways, including to:
              </p>
              <ul className="list-disc list-inside text-gray-600 ml-4 space-y-2">
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

            <PolicySection icon={UserCheck} title="GDPR Data Protection Rights">
              <p className="text-gray-600 mb-4">
                Under the GDPR, you have the following rights:
              </p>
              <ul className="list-disc list-inside text-gray-600 ml-4 space-y-2">
                <li>The right to access your personal data</li>
                <li>The right to rectification of inaccurate information</li>
                <li>The right to erasure of your personal data</li>
                <li>The right to restrict processing</li>
                <li>The right to object to processing</li>
                <li>The right to data portability</li>
              </ul>
            </PolicySection>

            <PolicySection icon={Eye} title="Log Files and Cookies">
              <p className="text-gray-600">
                edevhindi follows a standard procedure of using log files. These
                files log visitors when they visit websites. The information
                collected by log files includes internet protocol (IP)
                addresses, browser type, Internet Service Provider (ISP), date
                and time stamp, referring/exit pages, and possibly the number of
                clicks.
              </p>
            </PolicySection>

            <PolicySection icon={Bell} title="Email Privacy">
              <p className="text-gray-600">
                Your privacy and data security matter to us. We've updated our
                email privacy policies to improve your experience and keep your
                information safe. We only allow genuine email addresses and have
                upgraded our encryption to protect your data. Email generator
                addresses are not permitted.
              </p>
            </PolicySection>

            <PolicySection icon={FileText} title="Analytics">
              <p className="text-gray-600">
                We use Google Analytics to monitor and analyze the use of our
                Service. Google Analytics is a web analytics service that tracks
                and reports website traffic. You can opt-out by installing the
                Google Analytics opt-out browser add-on.
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

          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-600 text-center">
              This privacy policy was last updated on{" "}
              {new Date().toLocaleDateString()}. We reserve the right to update
              this policy at any time to reflect changes in our practices or for
              other operational, legal, or regulatory reasons.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
