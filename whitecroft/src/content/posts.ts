// News posts, newest first. `excerpt` is the text shown in the post lists;
// `body` is the article, one entry per paragraph.
export type Post = {
  slug: string;
  title: string;
  author: string;
  date: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  excerpt: string;
  body: string[];
};

export const posts: Post[] = [
  {
    slug: "wills-estates-latest-updates",
    title: "Wills & Estates - Latest Updates",
    author: "Suntiparp Plienchote",
    date: "March 12, 2019",
    image: "/images/post-wills-estates.jpg",
    imageWidth: 1920,
    imageHeight: 1270,
    excerpt:
      "No one really wants to talk about their last will and testament, but this is one legal issue you don’t want to leave unattended. After all, it could lead to a major rift in your family, one which you are not around to mend. The importance of having a very clear will and testament takes on even greater magnitude if you have children from more than one marriage, if you have adopted children, and if you don’t have any children at all. Getting expert advice can save your loved ones heartache and grief at a time when they really need to focus on grieving and recovery.",
    body: [
      "No one really wants to talk about their last will and testament, but this is one legal issue you don’t want to leave unattended. After all, it could lead to a major rift in your family, one which you are not around to mend.",
      "The importance of having a very clear will and testament takes on even greater magnitude if you have children from more than one marriage, if you have adopted children, and if you don’t have any children at all. Getting expert advice can save your loved ones heartache and grief at a time when they really need to focus on grieving and recovery.",
    ],
  },
  {
    slug: "no-the-internet-is-not-your-best-source-of-legal-advice",
    title: "No, the Internet Is Not Your Best Source Of Legal Advice",
    author: "Suntiparp Plienchote",
    date: "March 11, 2019",
    image: "/images/post-legal-advice.png",
    imageWidth: 823,
    imageHeight: 821,
    excerpt:
      "An increasing number of people are turning to the internet for all sorts of advice. Fashion advice. Medical advice. Marriage advice. Here are Premium Law, we certainly won’t dissuade you from getting fashion advice online, but we strongly recommend that you don’t turn to Google for legal advice. Because it could end up costing you a whole lot more than you expected.",
    body: [
      "An increasing number of people are turning to the internet for all sorts of advice. Fashion advice. Medical advice. Marriage advice.",
      "Here are Premium Law, we certainly won’t dissuade you from getting fashion advice online, but we strongly recommend that you don’t turn to Google for legal advice. Because it could end up costing you a whole lot more than you expected.",
    ],
  },
];
