import Link from 'next/link';
import Animation from './animation';
import Image from 'next/image';

export default function Hero() {
  return (
    <>
      <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              안녕하세요 :)
              <br className="hidden lg:inline-block" />
              Backend 개발자 김진형입니다.
            </h1>
            <p className="mb-8 leading-relaxed">
              저는 건축학과로 대학교에 진학을 하였습니다. 건축 설계를 시작하고
              배우면서 창의적으로 무엇인가를 만들고 개발하는 것에 흥미를 조금 더
              느끼게 되었습니다. 그렇게 코딩을 알게 되었고 처음 마크업 언어를
              공부하며 Python을 시작하며 자연스럽게 컴퓨터공학과로 전과를
              하게되었습니다. 그 이후 더욱 깊이 있게 배우다보니 어느새 백엔드
              개발자를 꿈꾸게 되었습니다. 아직은 부족하고 배울 것이 많지만
              프로젝트를 통한 여러 도전과 마주하는 난관을 헤쳐나가면서 발전하고
              있습니다. 이 곳은 저의 그러한 발전 과정을 한 눈에 볼 수 있는
              공간입니다.
            </p>
            <div className="flex justify-center">
              <Link href="/projects" legacyBehavior>
                <button className="btn-project">프로젝트 보러가기.</button>
              </Link>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Animation />
          </div>
        </div>
      </section>
    </>
  );
}
