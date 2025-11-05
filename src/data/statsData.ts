export interface StatItem {
  title: string;
  maxNumber: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  description?: string;
}

export const statsData: StatItem[] = [
  { 
    title: "Students Served",
    maxNumber: 200,
    suffix: "+",
    description: "Students who have benefited from our programs"
  },
  { 
    title: "Schools Reached",
    maxNumber: 11,
    suffix: "+",
    description: "Schools we've partnered with"
  },
  { 
    title: "Raised",
    maxNumber: 5000,
    prefix: "$",
    suffix: "+",
  },
  { 
    title: "Active Tutors",
    maxNumber: 10,
    suffix: "",
    description: "Our average rating from students and parents"
  }
];
