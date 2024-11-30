import React from "react";
import { LucideIcon } from "lucide-react";

interface PolicySectionProps {
  icon: LucideIcon;
  title: string;
  children: React.ReactNode;
}

export function PolicySection({
  icon: Icon,
  title,
  children,
}: PolicySectionProps) {
  return (
    <section className="mb-8">
      <div className="flex items-center mb-4">
        <Icon className="h-6 w-6 text-indigo-600 mr-2" />
        <h2 className="text-2xl font-semibold">{title}</h2>
      </div>
      {children}
    </section>
  );
}
