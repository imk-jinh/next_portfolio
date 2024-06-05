import Image from 'next/image';
import Link from 'next/link';

export default function ProjectItem({ data }) {
  const title = data.properties.이름.title[0]?.plain_text;
  const github = data.properties.Git?.url;
  const description = data.properties.설명.rich_text[0]?.plain_text;
  const imgSrc = data.cover?.file?.url || data.cover?.external.url;
  const tags = data.properties.태그.multi_select;
  const start = data.properties.날짜?.date?.start;
  const end = data.properties.날짜?.date?.end;
  const id = data.id;
  const url = id.replace(/-/g, '');

  console.log(url);

  const calculatedPeriod = (start, end) => {
    if (!start || !end) return 0;

    const startDateStringArray = start.split('-');
    const endDateStringArray = end.split('-');

    const startDate = new Date(
      startDateStringArray[0],
      startDateStringArray[1] - 1,
      startDateStringArray[2]
    );
    const endDate = new Date(
      endDateStringArray[0],
      endDateStringArray[1] - 1,
      endDateStringArray[2]
    );

    console.log(`startDate: ${startDate}`);
    console.log(`endDate: ${endDate}`);

    const diffInMs = Math.abs(endDate - startDate);
    const result = diffInMs / (1000 * 60 * 60 * 24);

    console.log(`기간 : ${result}`);
    return result;
  };

  return (
    <div className="project-card">
      <Link
        href={`https://celestial-cheddar-71c.notion.site/${encodeURIComponent(
          title
        )}-${url}`}
        legacyBehavior
      >
        <a>
          {imgSrc && (
            <Image
              className="rounded-t-xl"
              src={imgSrc}
              alt="cover image"
              width={800}
              height={400}
              layout="responsive"
              objectFit="cover"
              quality={100}
            />
          )}
        </a>
      </Link>

      <div className="p-4 flex flex-col">
        <h1 className="text-2xl font-bold">{title}</h1>
        <h3 className="mt-4 text-xl">{description}</h3>
        {github && <a href={github}>GitHub 바로가기</a>}
        <p className="my-1">
          프로젝트 소요 기간 : {start} ~ {end} ({calculatedPeriod(start, end)}
          일)
        </p>
        <div className="flex items-start mt-2">
          {tags.map((aTag) => (
            <h1
              className="px-2 py-1 mr-2 rounded-md bg-sky-200 dark:bg-sky-700 w-30"
              key={aTag.id}
            >
              {aTag.name}
            </h1>
          ))}
        </div>
      </div>
    </div>
  );
}
