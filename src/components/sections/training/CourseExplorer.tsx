"use client";

import { useState } from "react";
import { Section } from "@/components/common/Section";
import { CourseFilter } from "./CourseFilter";
import { CourseCard } from "./CourseCard";
import type { Dictionary } from "@/i18n/types";

interface CourseExplorerProps {
  filters: string[];
  courses: Dictionary["training"]["courses"];
  learnMore: string;
  href: string;
}

/** Container: owns the active filter and filters courses by their badge. */
export function CourseExplorer({ filters, courses, learnMore, href }: CourseExplorerProps) {
  const allLabel = filters[0];
  const [active, setActive] = useState(allLabel);

  const visible =
    active === allLabel ? courses : courses.filter((course) => course.badge === active);

  return (
    <Section tone="white" className="pt-2">
      <CourseFilter filters={filters} active={active} onSelect={setActive} />
      <div className="mt-7 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((course) => (
          <CourseCard key={course.title} course={course} learnMore={learnMore} href={href} />
        ))}
      </div>
    </Section>
  );
}
