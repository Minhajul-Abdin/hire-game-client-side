"use client";

import {
  Magnifier,
  ChartLine,
  LayoutCellsLarge,
  Bookmark,
  Thunderbolt,
  Receipt,
  BranchesRight,
  ArrowUpRight, // Confirmed working naming vector for upward trajectory/growth
} from "@gravity-ui/icons";

export default function FeaturesSection() {
  const features = [
    {
      title: "Smart Search",
      description: "Find your ideal job with advanced filters.",
      Icon: Magnifier,
    },
    {
      title: "Salary Insights",
      description: "Get real salary data to negotiate confidently.",
      Icon: ChartLine,
    },
    {
      title: "Top Companies",
      description: "Apply to vetted companies that are hiring.",
      Icon: LayoutCellsLarge,
    },
    {
      title: "Saved Jobs",
      description: "Manage apps & favorites on your dashboard.",
      Icon: Bookmark,
    },
    {
      title: "One-Click Apply",
      description: "Simplify your job applications for an easier process!",
      Icon: Thunderbolt,
    },
    {
      title: "Resume Builder",
      description: "Create professional resumes with modern templates.",
      Icon: Receipt,
    },
    {
      title: "Skill-Based Matching",
      description: "Discover jobs that match your skills and experience.",
      Icon: BranchesRight,
    },
    {
      title: "Career Growth Resources",
      description: "Boost your career with quick interview tips.",
      Icon: ArrowUpRight,
    },
  ];

  return (
    <section className="w-full bg-zinc-950 text-white py-35 px-6 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Top Subheading Label */}
        <div className="flex items-center gap-2 text-[10px] font-bold tracking-widest text-zinc-500 uppercase mb-3">
          <span className="w-1.5 h-1.5 bg-indigo-500 rounded-sm" />
          Features Job
          <span className="w-1.5 h-1.5 bg-indigo-500 rounded-sm" />
        </div>

        {/* Main Section Header */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-center max-w-xl leading-tight mb-16">
          Everything you need <br /> to succeed
        </h2>

        {/* Features Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 w-full">
          {features.map((feature, index) => {
            const IconComponent = feature.Icon;
            return (
              <div
                key={index}
                className="flex items-start gap-4 group transition-all duration-300"
              >
                {/* Dark Glass Icon Container with Subtle Pink Glow/Border */}
                <div className="flex items-center justify-center shrink-0 w-14 h-14 rounded-xl bg-zinc-900/40 border border-zinc-800/80 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] group-hover:border-pink-500/30 group-hover:shadow-[0_0_15px_rgba(244,63,94,0.1)] transition-all duration-300">
                  <IconComponent
                    className="text-pink-400/90 group-hover:text-pink-400 group-hover:scale-105 transition-all duration-300"
                    size={20}
                  />
                </div>

                {/* Feature Texts */}
                <div className="flex flex-col gap-1 pt-1">
                  <h3 className="text-sm font-semibold tracking-wide text-zinc-100 group-hover:text-white transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed max-w-[200px]">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
