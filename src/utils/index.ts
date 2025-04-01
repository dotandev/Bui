import { Cards, FaqData, RecentWinners, Names, CtaItems, Values } from "./../types/index";
import { AirdropEvent, HackEvent } from "../types";

export const hacksData: HackEvent[] = [
  {
    image:
      "https://i.pinimg.com/736x/a6/e9/2e/a6e92e2f61ec5404a33b1f46539d0825.jpg",
    eventName: "Bui DeFi Innovation Hackathon",
    prize: "50,000",
    organizers: "Bui Foundations",
    deadline: "Juy 30th,2025",
    desc: "Build the next generation of DeFi applications on Sui! Compete to create innovative lending protocols, DEXs, and stablecoin solutions.",
  },
  {
    image:
      "https://i.pinimg.com/736x/a6/e9/2e/a6e92e2f61ec5404a33b1f46539d0825.jpg",
    eventName: "Web3 Gaming Sprint",
    prize: "75,000",
    organizers: "Polygon Labs",
    deadline: "August 10th, 2025",
    desc: "A 2-week sprint for game developers to build play-to-earn experiences, NFT-integrated games, and scalable Web3 gaming solutions.",
  },
  {
    image:
      "https://i.pinimg.com/736x/a6/e9/2e/a6e92e2f61ec5404a33b1f46539d0825.jpg",
    eventName: "AI x Blockchain Hack",
    prize: "100,000",
    organizers: "OpenAI x Ethereum Foundation",
    deadline: "September 1st, 2025",
    desc: "Merge AI with blockchain! Build decentralized AI models, trustless data verification, and autonomous Web3 applications.",
  },
  {
    image:
      "https://i.pinimg.com/736x/a6/e9/2e/a6e92e2f61ec5404a33b1f46539d0825.jpg",
    eventName: "Cross-Chain Interoperability Hackathon",
    prize: "60,000",
    organizers: "LayerZero Labs",
    deadline: "July 20th, 2025",
    desc: "Design seamless cross-chain dApps, bridges, and smart contract integrations that redefine blockchain interoperability.",
  },
  {
    image:
      "https://i.pinimg.com/736x/a6/e9/2e/a6e92e2f61ec5404a33b1f46539d0825.jpg",
    eventName: "NFT Utility & Smart Contract Hack",
    prize: "40,000",
    organizers: "Magic Eden & Solana Labs",
    deadline: "August 25th, 2025",
    desc: "Create next-gen NFT utilities beyond PFPs, integrating real-world use cases, tokenized access, and ownership verification systems.",
  },
  {
    image:
      "https://i.pinimg.com/736x/a6/e9/2e/a6e92e2f61ec5404a33b1f46539d0825.jpg",
    eventName: "Zero-Knowledge Proofs (ZKP) Privacy Hackathon",
    prize: "90,000",
    organizers: "ZKSync x Starkware ",
    deadline: "September 15th, 2025",
    desc: "Build privacy-focused blockchain solutions using zero-knowledge proofs for identity verification, transactions, and compliance without exposing data.",
  },
  {
    image:
      "https://i.pinimg.com/736x/a6/e9/2e/a6e92e2f61ec5404a33b1f46539d0825.jpg",
    eventName: "SocialFi & Web3 Creator Economy Hack",
    prize: "55,000",
    organizers: "Lens Protocol x Aave",
    deadline: "August 5th, 2025",
    desc: "Empower the future of decentralized social media and content monetization by building SocialFi dApps and Web3 creator tools.",
  },
  {
    image:
      "https://i.pinimg.com/736x/a6/e9/2e/a6e92e2f61ec5404a33b1f46539d0825.jpg",
    eventName: "DAO Tooling & Governance Hackathon",
    prize: "70,000",
    organizers: " Aragon x Snapshot",
    deadline: "September 10th, 2025",
    desc: "Develop efficient DAO governance models, treasury management tools, and on-chain voting systems for the next wave of decentralized organizations.",
  },
];

export const airdropEvents: AirdropEvent[] = [
  {
    eventName: "Follow and Retweet for a chance to win",
    desc: "Follow @BuiPlatform on Twitter, retweet the pinned post, and tag 3 friends. Winners will be picked randomly",
    deadline: "July 25th, 2025",
    organizers: "Bui",
    image: "",
    reward: "10 USDT to 50 random winners",
    CTA: "Join now",
  },
  {
    eventName: "Join the Discord & Verify Your Wallet",
    desc: "Join the official Bui DAO Discord server, complete wallet verification, and earn a special community role + reward.",
    deadline: "July 28th, 2025",
    organizers: "Bui DAO",
    image: "",
    reward: "5 USDT + Exclusive Roles",
    CTA: "Join and Verify",
  },
  {
    eventName: "Register & Claim Your Airdrop",
    desc: "Sign up on XYZ Protocol, complete KYC verification, and receive 50 free tokens instantly.",
    deadline: "Ongoing",
    organizers: "XYZ Protocol",
    image: "",
    reward: "50 XYZ tokens",
    CTA: "Claim Airdrop",
  },
  {
    eventName: "Create & Share a Web3 Meme",
    desc: "Make a fun Web3 meme, post it on Twitter or Instagram with the hashtag #Web3MemeChallenge, and tag @LensProtocol.",
    deadline: "July 30th, 2025",
    organizers: "Lens Protocol",
    image: "",
    reward: "100 MATIC to the top 10 memes",
    CTA: "Submit Meme",
  },
  {
    eventName: "Follow and Retweet for a chance to win",
    desc: "Follow @BuiPlatform on Twitter, retweet the pinned post, and tag 3 friends. Winners will be picked randomly",
    deadline: "July 25th, 2025",
    organizers: "Bui",
    image: "",
    reward: "10 USDT to 50 random winners",
    CTA: "Join now",
  },
  {
    eventName: "Follow and Retweet for a chance to win",
    desc: "Follow @BuiPlatform on Twitter, retweet the pinned post, and tag 3 friends. Winners will be picked randomly",
    deadline: "July 25th, 2025",
    organizers: "Bui",
    image: "",
    reward: "10 USDT to 50 random winners",
    CTA: "Join now",
  },
  {
    eventName: "Follow and Retweet for a chance to win",
    desc: "Follow @BuiPlatform on Twitter, retweet the pinned post, and tag 3 friends. Winners will be picked randomly",
    deadline: "July 25th, 2025",
    organizers: "Bui",
    image: "",
    reward: "10 USDT to 50 random winners",
    CTA: "Join now",
  },
  {
    eventName: "Follow and Retweet for a chance to win",
    desc: "Follow @BuiPlatform on Twitter, retweet the pinned post, and tag 3 friends. Winners will be picked randomly",
    deadline: "July 25th, 2025",
    organizers: "Bui",
    image: "",
    reward: "10 USDT to 50 random winners",
    CTA: "Join now",
  },
  {
    eventName: "Follow and Retweet for a chance to win",
    desc: "Follow @BuiPlatform on Twitter, retweet the pinned post, and tag 3 friends. Winners will be picked randomly",
    deadline: "July 25th, 2025",
    organizers: "Bui",
    image: "",
    reward: "10 USDT to 50 random winners",
    CTA: "Join now",
  },
];

export const recentWinners: RecentWinners[] = [
  {
    username: "CryptoSecGuy",
    competition: "OpenZeppelin Bug Bounty",
    desc: "Discovered a critical vulnerability in a DeFi protocol.",
    event: "Smart Contract Security Challenge",
    transactionProof: "/cryptoGuy",
    reward: "10000",
  },
  {
    username: "DeFiWriter",
    competition: "BanklessDAO Research Contest",
    desc: "A detailed report on DeFi lending risks & solutions.",
    transactionProof: "/cryptoGuy",
    event: "Web3 Content Writing Challenge",
    reward: "2000",
    },
    {
        username: "MetaArtist",
        competition: "Magic Eden NFT Design Contest",
        event: "Magic Eden NFT Design Contest.",
        desc: "Created a 10-piece NFT collection focused on digital identity.",
        transactionProof: "/cryptoGuy",
        reward: "3000",
    },
      
  {
    username: "AIxCrypto",
    competition: "AI-powered Smart Contracts Hackathon",
    event: "AI & Blockchain Hackathon",
    desc: "Developed an AI-driven fraud detection system for Web3 transactions.",
    transactionProof: "/cryptoGuy",
    reward: "5000",
  },
  {
    username: "web3Joker",
    desc: "A viral meme on gas fees vs. transaction speed.",
    event: "Meme Challenge",
    competition: "Lens Protocol Meme Contest.",
    transactionProof: "/cryptoGuy",
    reward: "200 (USDC)",
  },
  {
    username: "MetaArtist",
    competition: "Magic Eden NFT Design Contest",
    event: "Magic Eden NFT Design Contest.",
    desc: "Created a 10-piece NFT collection focused on digital identity.",
    transactionProof: "/cryptoGuy",
    reward: "3000",
  },
];

export const faqData: FaqData[] = [
    {
        question: 'What is Bui?',
        answer:
          'Bui is a decentralized competition platform that allows organizations to list hackathons, bounties, and other competitive tasks, while ensuring verified payouts, transparent fund management, and on-chain reputation tracking for participants.',
      },
      {
        question: 'How do I join a competition on Bui?',
        answer:
          'Simply browse through featured competitions, select one that interests you, and click "Join Now." Ensure you meet the entry criteria and submit your work before the deadline.',
      },
      {
        question: 'How does Bui verify competitions and payouts?',
        answer:
          'We use on-chain verification and smart contract-based fund management to ensure that all competitions listed on Bui are legitimate, and that winners receive their payouts securely and transparently. Users can also track all fund disbursements on our Explorer.',
      },
      {
        question: 'What are .bui-sui tags?',
        answer:
          'A .bui-sui tag is a unique on-chain identity that serves as your verification and connection profile on Bui. It helps build credibility by showcasing your verified achievements, competition history, and network. Example Jesus.bui-sui. With a .bui-sui tag, you can: Verify your identity as a participant or organizer. Link your social media accounts (Twitter, Instagram, Discord, etc.). Connect your wallet for seamless transactions. Display your Bui activity – competitions you’ve joined, winnings, and rankings. Enhance discoverability – others can find and connect with you easily.',
      },
      {
        question: 'Can I trust the competitions listed on Bui?',
        answer:
          'Yes! Every competition is reviewed before listing. Additionally, prize funds are managed by Bui’s smart contract system, ensuring that rewards are real and verifiable before competitions begin.',
      },
      {
        question: 'How can organizations list their competitions?',
        answer:
          'Organizations can sign up and apply for verification through our Verified Organizations Database. Once verified, they can list competitions, manage submissions, and automate prize payouts securely.',
      },
      {
        question: 'Where can I see past winners and payouts?',
        answer:
          'We provide a Leaderboard & Explorer where you can view past winners and check on-chain transaction details for transparency.',
      },
      {
        question: 'How does Bui make money?',
        answer:
          'Bui operates on a sustainable revenue model by charging: Listing fees for organizations posting competitions. Verification subscriptions for users acquiring a .bui-sui tag. Premium features like priority competition listings and advanced analytics.',
      },
];

export const cards: Cards[] = [
    {
        imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTahpRIkAr_gOxjVkKcKoeHjvnD8Dj5PimGjA&s',
        text: 'Participate in a Competition',
        link: '/participate'
    },
    {
        imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwWDJRMnw1dFmYRtaLGE72rbThuWd2CsBnSQ&s',
        text: 'Subscribe for a name',
        link: '/subscribe'
    }, {
        imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaov_zRKeLM2uhhh23bEsJ2_ORWu929doRdg&s',
        text: 'Verify an Organisation',
        link: '/create'
    }, {
        imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW1YLjSv2HJqhVCWiQVEsXKtWuzusfM7uR9Q&s',
        text: 'Link Your Social profile',
        link: '/socials'
    }, {
        imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAr1wnq4wSNnr0PBMwej4e7Rh68YyYKFrv73jOsNAzlfTb0Z34Qg6ioOOh3zCdu_hP6O0&usqp=CAU',
        text: 'Learn more about us.',
        link: '/learn'
    },
    {
        imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQujn_jhRK8aP8jDn4wt5-aBsKnMiY6rwbAeg&s',
        text: 'View verified Organisations Registry',
        link: '/create'
    },
];

export const usageSummary: { text: string; usage: number; }[] = [
    {
        text: 'Trasaction on Sui and Bui',
        usage: 516
    },
    {
        text: 'Unique Days active',
        usage: 12
    },
    {
        text: 'longest days streak',
        usage: 11
    },
    {
        text: 'Day Activity period',
        usage: 9
    },
    {
        text: 'Token swapped performed',
        usage: 2
    },
    {
        text: 'Bridge transactions',
        usage: 1
    },
    {
        text: 'Lend/Borrow/Stake Transactions',
        usage: 30
    },
    {
        text: 'ENS contract interactions',
        usage: 4
    },
    {
        text: 'Smart Contracts deployed',
        usage: 2
    },
];

export const names: Names = {names:[ 
    "jesus.bui.sui",
    "fuhad.bui.sui",
    "biokes.bui.sui",
    "dotannddev.bui.sui",
    "aliphatic.bui.sui",
    "bui.bui.sui",
    "funahhh.bui.sui",
    ]
};

export const ctaItems: CtaItems[] = [
    { href: '/competitions', label: 'Join a Competition' },
    { href: '/organizer', label: 'List Your Competition' },
    { href: '/explorer', label: 'Verify Transactions' },
    { href: '/identity', label: 'Get Your .bui-sui Tag' },
    { href: '/organizations', label: 'Explore Verified Organizations' },
    { href: '/overview', label: 'Explore Bui' },
];

export const values: Values[] = [
    {date: "2024-01-01", count: 1},
    {date: "2024-01-02", count: 3},
    {date: "2024-01-05", count: 5},
    {date: "2024-01-10", count: 2},

];