// src/types/IStudent.ts

export interface IStudent {
  id: string;
  name: string;
  class: number;
  level: "Excellent" | "Optimal" | "Inefficient";
  avatar: string;
}
