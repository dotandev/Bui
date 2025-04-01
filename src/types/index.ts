import { JSX } from "react/jsx-runtime"

export interface UserData { 
    username: string,
    walletAddress: string,
    basename:string,
    discord:string,
    twitter:string,
    telegram:string
}
export interface BuiEvent {
    eventName:string,
    desc:string,
    deadline:string,
    organizers:string,
    image:string
}
export interface HackEvent extends BuiEvent{
     prize: string,
}
export interface AirdropEvent extends BuiEvent{
    reward:string,
    CTA:string
}
export interface RecentWinners {
    username: string,
    competition: string,
    event: string,
    transactionProof: string,
    desc: string,
    reward:string
}

export interface FaqData {
    question: string,
    answer: string
}

export interface Cards {
    imageURL: string;
    text: string;
    link: string;
}

export interface UsageSummary {
    map(arg0: (data: any) => JSX.Element): import("react").ReactNode
    text: string;
    usage: number;
}

export interface Names{
    names: string[]
}

export interface CtaItems{
    href: string;
    label: string;
}

export interface Values{
    date: string;
    count: number;
}

export interface CtaItems{
    href: string;
    label: string;
}