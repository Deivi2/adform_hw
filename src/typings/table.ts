export interface ICampaign {
  id: number;
  name: string;
  startDate: Date | string | null;
  endDate: Date | string | null;
  Budget: number;
  userId: number;
}

export type ICampaigns = Array<ICampaign>;
