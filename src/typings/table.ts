export interface ICampaign {
  active?: boolean;
  id: number;
  name: string;
  startDate: Date | string | number;
  endDate: Date | string | number;
  Budget: number | string;
  userId: number;
}

export type ICampaigns = Array<ICampaign>;

export interface IDateRange {
  startDate: Date | null;
  endDate: Date | null;
}
