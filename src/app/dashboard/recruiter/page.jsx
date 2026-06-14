"use client";
import React from "react";
import { Spinner } from "@heroui/react";
import { useSession } from "@/lib/auth-client";
import { DashboardStats } from "../../../components/Dashboard/DashboardStat";
import {
  Briefcase,
  Persons,
  Thunderbolt,
  CircleCheck,
} from "@gravity-ui/icons";

const RecruiterDashboardHomePage = () => {
  const { data: session, isPending } = useSession();

  const recruiterStats = [
    { title: "Total Job Posts", value: "48", icon: Briefcase },
    { title: "Total Applicants", value: "1,284", icon: Persons },
    { title: "Active Jobs", value: "18", icon: Thunderbolt },
    { title: "Jobs Closed", value: "32", icon: CircleCheck },
  ];

  const user = session?.user;
  if (isPending) {
    return (
      <div className="flex items-center gap-4">
        <Spinner color="current" size="xl" />
      </div>
    );
  }
  return (
    <div className="pt-4 px-6 md:pt-8 md:px-12">
      <h1 className="text-3xl font-bold">
        Welcome Back! <span className="font-normal">{user?.name}</span>
      </h1>
      <DashboardStats statsData={recruiterStats} />
    </div>
  );
};

export default RecruiterDashboardHomePage;
