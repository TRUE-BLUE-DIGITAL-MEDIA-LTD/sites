type Member = { name: string; bio: string; image: string; imagePosition: string };

// Photo with the name and bio. On desktop the text is a blue panel that
// fades in over the photo on hover or keyboard focus; on phones and tablets
// it sits below the photo.
export default function TeamCard({ member }: { member: Member }) {
  return (
    <article
      tabIndex={0}
      className="group relative w-[calc(100%-30px)] max-w-[370px] md:w-full md:flex-1 desk:outline-offset-2 desk:focus-visible:outline-2 desk:focus-visible:outline-brand"
    >
      <div
        role="img"
        aria-label={member.name}
        className="aspect-square w-full bg-contain bg-no-repeat"
        style={{
          backgroundImage: `url(${member.image})`,
          backgroundPosition: member.imagePosition,
        }}
      />
      <div className="bg-brand px-[18px] py-[15px] text-white transition-[opacity,scale] duration-300 ease-out md:px-8 md:text-center desk:absolute desk:inset-0 desk:flex desk:scale-105 desk:flex-col desk:justify-center desk:py-[10px] desk:text-left desk:opacity-0 desk:group-hover:scale-100 desk:group-hover:opacity-100 desk:group-focus-visible:scale-100 desk:group-focus-visible:opacity-100">
        <h3 className="text-xl font-bold leading-[30px] md:text-[25px] md:leading-[38px]">{member.name}</h3>
        <p className="text-sm font-light leading-[21px]">{member.bio}</p>
      </div>
    </article>
  );
}
