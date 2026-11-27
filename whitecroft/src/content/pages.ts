// The practice-area pages that share one layout: a photo banner, a heading
// and a block of text. Blank lines in `body` are kept as written.
export type ServicePage = {
  slug: string;
  title: string;
  banner: string;
  body: string;
};

export const servicePages: ServicePage[] = [
  {
    slug: "corporate",
    title: "Corporate",
    banner: "/images/banner-corporate.jpg",
    body: "We help create business entities, such as corporations, partnerships and joint ventures. We also represent both foreign and domestic companies to ensure the legal passage of goods, services, capital and more across borders. Our clients include multinational companies as well as small businesses. \n\nComplete the form below, and one of our legal team will get in touch.\n\n",
  },
  {
    slug: "Litigation",
    title: "Litigation",
    banner: "/images/litigation.jpg",
    body: "We apply forward-thinking ideas and solutions to the most challenging legal issues you face, and approach each case with passion and commitment. From the first steps of the litigation process and right through to the end, we’ll handle everything you need to be in your best shape at trial. We know how complicated litigation can be. From pleadings, affidavits, examinations, motions, mediation, undertakings, refusals, pretrial, and finally, trial.\n\nComplete the form below and one of our legal team will be in touch.\n\n",
  },
  {
    slug: "employment",
    title: "Employment",
    banner: "/images/banner-employment.jpg",
    body: "We provide both public and private sector employers with practical and strategic advice and guidance to assist in making sound decisions that are consistent with applicable labor laws and best practices. As experts in traditional employment law services and specialize in human rights, pay equity, and occupational safety law.\n\nComplete the form below and one of our legal team will be in touch.\n",
  },
  {
    slug: "notary",
    title: "Notary Service",
    banner: "/images/banner-employment.jpg",
    body: "Our Thai notary service offers professional and reliable notarial services to meet your legal needs in Thailand. \n\nOur certified notaries are equipped to handle a wide range of documents, including affidavits, power of attorney, contracts, and property transactions. \n\nWe ensure all documents are authenticated and notarized in accordance with Thai law, providing you with peace of mind and legal assurance. Whether you are a business professional, expatriate, or local resident, our dedicated team is here to assist you with prompt and efficient notary services. \n\nTrust us for all your notarization needs in Thailand.\n\n",
  },
];
