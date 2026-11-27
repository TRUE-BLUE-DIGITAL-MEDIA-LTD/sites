import { documents } from "@/lib/site";

// The downloadable documents, shown on the Document Library and About pages.
export default function DocumentList() {
  return (
    <section className="pb-[50px] md:px-[30px] md:pb-20">
      <div className="mx-auto page-width px-[15px] md:px-0">
        <div className="py-[10px]">
          <hr className="border-0 border-t border-dotted border-brand" />
        </div>
        {documents.map((doc) => (
          <div key={doc.title}>
            <h3 className="mt-2 py-[2px] font-playfair text-[23px] text-[#111010] md:text-[26px]">
              {doc.title}
            </h3>
            {doc.files.map((file) => (
              <p key={file.href} className="my-2 py-[2px] text-[15px] font-light md:text-lg">
                <a
                  href={file.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand"
                >
                  {file.label}
                </a>
              </p>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
