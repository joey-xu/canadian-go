// Winner lines may contain **bold** segments, rendered via <RichText>.
export type SeasonResult = {
  event: string
  eventHighlight?: boolean
  date: string
  winners: string[]
  note?: string
}

export const seasonResults: SeasonResult[] = [
  {
    event: '2025 Trinity Fall Open',
    date: 'November 22, 2025',
    winners: ['Ivan Lo'],
  },
  {
    event: '2025 Korea Prime Minister Cup',
    eventHighlight: true,
    date: 'November 7-14, 2025',
    winners: [
      'Manuel Velasco (18th, Canadian Adult Representative)',
      'Michael Xu (11th, Canadian Youth Representative)',
    ],
  },
  {
    event: '2025 Canada Go Team Tournament',
    date: 'October 19, 2025',
    winners: ['Shengda "Leo" Tan, Daniel Zhou, Hongyi Li'],
  },
  {
    event: '2025 Toronto Fall',
    date: 'September 27–28, 2025',
    winners: ['Ivan Lo'],
  },
  {
    event: '2025 King Square',
    date: 'August 31, 2025',
    winners: ['Qiyou Wu'],
  },
  {
    event: '2025 World Youth Goe Championship',
    eventHighlight: true,
    date: 'August 22-27, 2025',
    winners: ['Crane Kuo (6th, Canadian Representative)'],
  },
  {
    event: '2025 NAGF Pro Exam',
    eventHighlight: true,
    date: '2025',
    winners: ['**Guanyu Song** (defeated Eric Yoder) to become a **professional** go player'],
    note: 'Other Canadian participants: Qiyou Wu (semifinals), Michael Xu (semifinals), Daniel Zhou (3–2 group stage)',
  },
  {
    event: '2025 HuaXia August',
    date: 'August 3, 2025',
    winners: ['Qiyou Wu'],
  },
  {
    event: '2025 9th Annual World Collegiate WEICHI Championship',
    eventHighlight: true,
    date: 'July 26-August 1, 2025',
    winners: ['Anyuan Cheng (Unknown ranking, representing Canada)'],
  },
  {
    event: '2025 Trinity Summer Rapid',
    date: 'July 19, 2025',
    winners: ['Jeffrey Tsang'],
  },
  {
    event: '2025 Redmond Cup Junior',
    eventHighlight: true,
    date: 'July 15, 2025',
    winners: ['Daniel Zhou'],
  },
  {
    event: '2025 City League (League A)',
    eventHighlight: true,
    date: 'December 7, 2024 - July 12, 2025',
    winners: ['Toronto Small Avalanche: 3rd place'],
    note: 'Team members: Ivan Lo, Shengda "Leo" Tan, Hongyi Li, Qiyou Wu, Tony Zhao',
  },
  {
    event: '2025 City League (League C)',
    eventHighlight: true,
    date: 'December 7, 2024 - July 12, 2025',
    winners: ['Toronto Breakthrough: **1st place**'],
    note: 'Team members: Daniel Zhou, Chit Lam "Calvin" Cheung, Zihang "Albert" Fu, Raymond Xu, James Sedgwick',
  },
  {
    event: '2025 Canadian Open',
    eventHighlight: true,
    date: 'June 28–30, 2025',
    winners: ['**Shengda "Leo" Tan**'],
  },
  {
    event: '2025 World Amateur Go Championship',
    eventHighlight: true,
    date: 'May 16-23, 2025',
    winners: ['Brady Zhang (10th, Canadian Representative)'],
  },
  {
    event: '2025 Toronto Spring',
    date: 'April 26, 2025',
    winners: ['Qiyou Wu'],
  },
  {
    event: '2025 Trinity Spring Open',
    date: 'April 5, 2025',
    winners: ['Ivan Lo'],
  },
  {
    event: '2025 HuaXia March',
    date: 'March 8, 2025',
    winners: ['Hongyi Li'],
  },
  {
    event: '2025 Nanyang Amateur',
    eventHighlight: true,
    date: 'February 28-March 1, 2025',
    winners: ['Qiyou Wu (14th, Canadian Representative)'],
  },
  {
    event: '2025 HuaXia–Lawrence Park',
    date: 'January 18, 2025',
    winners: ['Toronto HuaXia defeated Lawrence Park'],
  },
]

export const rankGuidance: [fox: string, cga: string][] = [
  ['3d/3段', '1k'],
  ['4d/4段', '1d'],
  ['5d/5段', '2d'],
  ['6d/6段', '3d'],
  ['7d/7段', '4d'],
  ['8d/8段', '5d'],
  ['9d/9段', '6d'],
]
