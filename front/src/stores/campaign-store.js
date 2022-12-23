import { defineStore } from 'pinia'
import { api } from "../boot/axios";

export const useCampaignStore = defineStore('campaign', {
  state: () => {
    return {campaigns: []}
  },
  actions: {
    addList(campaign) {
      api.post("/campaign",campaign).then(res => this.campaigns.push(res.data))
    },
    updateVoteCounter(campaignId) {
      let campaign = {}
      api.get(`/campaign/${campaignId}`).then(res => campaign = res.data)
      const currentVote = campaign.totalVotes
      api.put(`/campaign/${campaignId}`,{totalVotes: currentVote + 1}).then(res => res.status !== 200 ?? new Error(res.status))
      updateCampaigns()
    },
    updateCampaigns() {
      api.get(`/campaign`).then(res => this.campaigns = res.data)
    }
  },
})