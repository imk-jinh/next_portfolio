import Image from 'next/image';
import Link from 'next/link';

export default function ProjectItem({ data }) {
  const title = data.properties.이름.title.plain_text;
  const github = data.properties.Git.url;
  const description = data.properties.설명.rich_text[0].plain_text;
  const imgSrc = data.cover.file?.url || data.cover.external.url;
  const tags = data.properties.태그.multi_select;
  const start = data.properties.날짜.date.start;
  const end = data.properties.날짜.date.end;
  const id = data.id; // 이 부분을 Notion 페이지의 ID로 수정
  const url = id.replace(/-/g, ''); // '-'를 제거하여 URL에 사용

  console.log(url);

  const calculatedPeriod = (start, end) => {
    const startDateStringArray = start.split('-');
    const endDateStringArray = end.split('-');

    var startDate = new Date(
      startDateStringArray[0],
      startDateStringArray[1],
      startDateStringArray[2]
    );
    var endDate = new Date(
      endDateStringArray[0],
      endDateStringArray[1],
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
          <Image
            className="rounded-t-xl"
            src={imgSrc}
            alt="cover image"
            width="100%"
            height="50%"
            layout="responsive"
            objectFit="cover"
            quality={100}
          />
        </a>
      </Link>

      {/* className="m-5 bg-text-green-500" */}
      <div className="p-4 flex flex-col">
        <h1 className="text-2xl font-bold">{title}</h1>
        <h3 className="mt-4 text-xl">{description}</h3>
        <a href={github}>GitHub 바로가기</a>
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
