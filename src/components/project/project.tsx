import { LikeButton } from "@lyket/react";

export default function project({ data }: any) {
  const projectName = data.properties.Name.title[0].plain_text;
  const description = data.properties.Description.rich_text[0].plain_text;
  const github = data.properties.Github.url;
  const youtube = data.properties.Youtube.url;
  const homePage = data.properties.Page.url;
  const readMore = data.properties.ReadMore.url;
  const imgSrc = data.cover.external?.url || data.cover.file?.url;
  const tags = data.properties.Tags.multi_select;
  const startPeriod = data.properties.WorkPeriod.date.start;
  const endPeriod = data.properties.WorkPeriod.date.end;
  const participant = data.properties.Participant.number;
  const role = data.properties.Role.rich_text[0].plain_text;
  const primaryFunction = data.properties.Function.rich_text[0].plain_text;

  function openPopup() {
    // 타 사이트 페이지 URL
    let url = `${readMore}`;

    // 팝업 창 크기
    const width = 600;
    const height = 400;

    // 팝업 창 위치 (화면 중앙)
    const left = window.screen.width / 2 - width / 2;
    const top = window.screen.height / 2 - height / 2;

    // 스크롤바 여부
    const scrollbars = "no";
    const status = "no";
    const titlebar = "no";
    const directories = "no";
    const location = "no";
    const menubar = "no";
    const toolbar = "no";

    // 팝업 창 열기
    window.open(
      url,
      "popup",
      `width=${width}, height=${height}, left=${left}, top=${top}, scrollbars=${scrollbars}, status=${status}, titlebar=${titlebar}, directories=${directories}, location=${location}, menubar=${menubar}, toolbar=${toolbar}`
    );
  }

  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden">
        <>
          <div className="container px-5 py-24 mx-auto">
            <div className="lg:w-5/5 mx-auto flex flex-wrap">
              <img
                alt="ecommerce"
                className="border-2 border-blue-200 lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                src={imgSrc}
              />

              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 className="text-sm title-font text-gray-500 tracking-widest">
                  {startPeriod} &#126; {endPeriod}
                </h2>
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                  {projectName}
                </h1>

                <div className="flex mb-4">
                  <span className="flex items-center">
                    <span className="text-gray-600">
                      {tags.map((tag: any) => (
                        <span
                          key={tag.id}
                          className="px-2 py-1 mr-2 text-xs font-medium rounded-md bg-sky-200 dark:bg-sky-700"
                        >
                          {tag.name}
                        </span>
                      ))}
                    </span>
                  </span>
                  <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                    <a className="text-gray-500 mr-1" href={github}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="24"
                        height="24"
                        viewBox="0 0 50 50"
                      >
                        <path d="M 25 2 C 12.311335 2 2 12.311335 2 25 C 2 37.688665 12.311335 48 25 48 C 37.688665 48 48 37.688665 48 25 C 48 12.311335 37.688665 2 25 2 z M 25 4 C 36.607335 4 46 13.392665 46 25 C 46 25.071371 45.994849 25.141688 45.994141 25.212891 C 45.354527 25.153853 44.615508 25.097776 43.675781 25.064453 C 42.347063 25.017336 40.672259 25.030987 38.773438 25.125 C 38.843852 24.634651 38.893205 24.137377 38.894531 23.626953 C 38.991361 21.754332 38.362521 20.002464 37.339844 18.455078 C 37.586913 17.601352 37.876747 16.515218 37.949219 15.283203 C 38.031819 13.878925 37.910599 12.321765 36.783203 11.269531 L 36.494141 11 L 36.099609 11 C 33.416539 11 31.580023 12.12321 30.457031 13.013672 C 28.835529 12.386022 27.01222 12 25 12 C 22.976367 12 21.135525 12.391416 19.447266 13.017578 C 18.324911 12.126691 16.486785 11 13.800781 11 L 13.408203 11 L 13.119141 11.267578 C 12.020956 12.287321 11.919778 13.801759 11.988281 15.199219 C 12.048691 16.431506 12.321732 17.552142 12.564453 18.447266 C 11.524489 20.02486 10.900391 21.822018 10.900391 23.599609 C 10.900391 24.111237 10.947969 24.610071 11.017578 25.101562 C 9.2118173 25.017808 7.6020996 25.001668 6.3242188 25.046875 C 5.3845143 25.080118 4.6454422 25.135713 4.0058594 25.195312 C 4.0052628 25.129972 4 25.065482 4 25 C 4 13.392665 13.392665 4 25 4 z M 14.396484 13.130859 C 16.414067 13.322043 17.931995 14.222972 18.634766 14.847656 L 19.103516 15.261719 L 19.681641 15.025391 C 21.263092 14.374205 23.026984 14 25 14 C 26.973016 14 28.737393 14.376076 30.199219 15.015625 L 30.785156 15.273438 L 31.263672 14.847656 C 31.966683 14.222758 33.487184 13.321554 35.505859 13.130859 C 35.774256 13.575841 36.007486 14.208668 35.951172 15.166016 C 35.883772 16.311737 35.577304 17.559658 35.345703 18.300781 L 35.195312 18.783203 L 35.494141 19.191406 C 36.483616 20.540691 36.988121 22.000937 36.902344 23.544922 L 36.900391 23.572266 L 36.900391 23.599609 C 36.900391 26.095064 36.00178 28.092339 34.087891 29.572266 C 32.174048 31.052199 29.152663 32 24.900391 32 C 20.648118 32 17.624827 31.052192 15.710938 29.572266 C 13.797047 28.092339 12.900391 26.095064 12.900391 23.599609 C 12.900391 22.134903 13.429308 20.523599 14.40625 19.191406 L 14.699219 18.792969 L 14.558594 18.318359 C 14.326866 17.530484 14.042825 16.254103 13.986328 15.101562 C 13.939338 14.14294 14.166221 13.537027 14.396484 13.130859 z M 8.8847656 26.021484 C 9.5914575 26.03051 10.40146 26.068656 11.212891 26.109375 C 11.290419 26.421172 11.378822 26.727898 11.486328 27.027344 C 8.178972 27.097092 5.7047309 27.429674 4.1796875 27.714844 C 4.1152068 27.214494 4.0638483 26.710021 4.0351562 26.199219 C 5.1622058 26.092262 6.7509972 25.994233 8.8847656 26.021484 z M 41.115234 26.037109 C 43.247527 26.010033 44.835728 26.108156 45.962891 26.214844 C 45.934234 26.718328 45.883749 27.215664 45.820312 27.708984 C 44.24077 27.41921 41.699674 27.086688 38.306641 27.033203 C 38.411945 26.739677 38.499627 26.438219 38.576172 26.132812 C 39.471291 26.084833 40.344564 26.046896 41.115234 26.037109 z M 11.912109 28.019531 C 12.508849 29.215327 13.361516 30.283019 14.488281 31.154297 C 16.028825 32.345531 18.031623 33.177838 20.476562 33.623047 C 20.156699 33.951698 19.86578 34.312595 19.607422 34.693359 L 19.546875 34.640625 C 19.552375 34.634325 19.04975 34.885878 18.298828 34.953125 C 17.547906 35.020374 16.621615 35 15.800781 35 C 14.575781 35 14.03621 34.42121 13.173828 33.367188 C 12.696283 32.72356 12.114101 32.202331 11.548828 31.806641 C 10.970021 31.401475 10.476259 31.115509 9.8652344 31.013672 L 9.7832031 31 L 9.6992188 31 C 9.2325521 31 8.7809835 31.03379 8.359375 31.515625 C 8.1485707 31.756544 8.003277 32.202561 8.0976562 32.580078 C 8.1920352 32.957595 8.4308563 33.189581 8.6445312 33.332031 C 10.011254 34.24318 10.252795 36.046511 11.109375 37.650391 C 11.909298 39.244315 13.635662 40 15.400391 40 L 18 40 L 18 44.802734 C 10.967811 42.320535 5.6646795 36.204613 4.3320312 28.703125 C 5.8629338 28.414776 8.4265387 28.068108 11.912109 28.019531 z M 37.882812 28.027344 C 41.445538 28.05784 44.08105 28.404061 45.669922 28.697266 C 44.339047 36.201504 39.034072 42.31987 32 44.802734 L 32 39.599609 C 32 38.015041 31.479642 36.267712 30.574219 34.810547 C 30.299322 34.368135 29.975945 33.949736 29.615234 33.574219 C 31.930453 33.11684 33.832364 32.298821 35.3125 31.154297 C 36.436824 30.284907 37.287588 29.220424 37.882812 28.027344 z M 23.699219 34.099609 L 26.5 34.099609 C 27.312821 34.099609 28.180423 34.7474 28.875 35.865234 C 29.569577 36.983069 30 38.484177 30 39.599609 L 30 45.398438 C 28.397408 45.789234 26.72379 46 25 46 C 23.27621 46 21.602592 45.789234 20 45.398438 L 20 39.599609 C 20 38.508869 20.467828 37.011307 21.208984 35.888672 C 21.950141 34.766037 22.886398 34.099609 23.699219 34.099609 z M 12.308594 35.28125 C 13.174368 36.179258 14.222525 37 15.800781 37 C 16.579948 37 17.552484 37.028073 18.476562 36.945312 C 18.479848 36.945018 18.483042 36.943654 18.486328 36.943359 C 18.36458 37.293361 18.273744 37.645529 18.197266 38 L 15.400391 38 C 14.167057 38 13.29577 37.55443 12.894531 36.751953 L 12.886719 36.738281 L 12.880859 36.726562 C 12.716457 36.421191 12.500645 35.81059 12.308594 35.28125 z"></path>
                      </svg>
                    </a>
                    <a className="text-gray-500 mr-1" href={youtube}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="24"
                        height="24"
                        viewBox="0 0 50 50"
                      >
                        <path d="M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 41 C 44 42.668484 42.668484 44 41 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 15 8 C 15.414 9.013 17.402 13.381141 18 14.994141 L 18 19 L 20 19 L 20 15 L 23 8 L 20.599609 8 L 19 12 L 17.400391 8 L 15 8 z M 25 11 C 23.994 11 23.228969 11.275313 22.667969 11.945312 C 22.234969 12.440312 22.001953 13.23425 22.001953 14.28125 L 22 15.726562 C 22 16.767563 22.205672 17.487516 22.638672 17.978516 C 23.200672 18.645516 24.111 19 25 19 C 25.889 19 26.815906 18.645562 27.378906 17.976562 C 27.804906 17.486562 28 16.767562 28 15.726562 L 28 14.275391 C 28 13.227391 27.758031 12.440312 27.332031 11.945312 C 26.770031 11.275313 25.889 11 25 11 z M 29 11 L 29 16.837891 C 29 17.497891 29.098281 17.946375 29.238281 18.234375 C 29.468281 18.707375 29.928844 18.949703 30.589844 18.970703 C 31.500844 19.000703 32.185 18.41 33 17.625 L 33 19 L 35 19 L 35 11 L 33 11 L 33 16.375 C 32.545 16.914 32.021375 17.392578 31.609375 17.392578 C 31.336375 17.392578 31.05 17.267 31 17 L 31 11 L 29 11 z M 25 12.619141 C 25.552 12.619141 26 13.076625 26 13.640625 L 26 16.447266 C 26 17.010266 25.552 17.46875 25 17.46875 C 24.448 17.46875 24 17.011266 24 16.447266 L 24 13.640625 C 24 13.077625 24.448 12.619141 25 12.619141 z M 24.990234 22 C 24.990234 22 18.280781 22.000312 13.800781 22.320312 C 13.170781 22.390313 11.809844 22.400391 10.589844 23.650391 C 9.6298437 24.590391 9.3203125 26.75 9.3203125 26.75 C 9.3203125 26.75 9 28.280547 9 30.810547 L 9 33.179688 C 9 35.709688 9.3203125 37.240234 9.3203125 37.240234 C 9.3203125 37.240234 9.6298438 39.399609 10.589844 40.349609 C 11.809844 41.589609 13.409141 41.549688 14.119141 41.679688 C 16.679141 41.919688 25 42 25 42 C 25 42 31.719219 41.989922 36.199219 41.669922 C 36.829219 41.599922 38.190156 41.589844 39.410156 40.339844 C 40.370156 39.399844 40.679688 37.240234 40.679688 37.240234 C 40.679688 37.240234 41 35.709688 41 33.179688 L 41 30.810547 C 41 28.280547 40.679688 26.75 40.679688 26.75 C 40.679688 26.75 40.370156 24.590391 39.410156 23.650391 C 38.190156 22.400391 36.829219 22.390312 36.199219 22.320312 C 31.719219 22.000312 25.009766 22 25.009766 22 L 24.990234 22 z M 12 26 L 18 26 L 18 28 L 16 28 L 16 38 L 14 38 L 14 28 L 12 28 L 12 26 z M 25 26 L 27 26 L 27 30.380859 C 27.75 29.500859 28.149141 28.99 29.119141 29 C 29.879141 29.01 30.490234 29.440703 30.740234 30.220703 C 30.870234 30.640703 31 31.390859 31 32.380859 L 31 35.130859 C 30.99 36.010859 30.899297 36.400313 30.779297 36.820312 C 30.529297 37.600313 29.879141 38 29.119141 38 C 28.449141 38 27.63 37.53 27 36.75 L 27 38 L 25 38 L 25 26 z M 18 29 L 20 29 L 20 35.890625 C 20.05 36.180625 20.259531 36.289062 20.519531 36.289062 C 20.919531 36.289062 21.56 35.849531 22 35.269531 L 22 29 L 24 29 L 24 38 L 22 38 L 22 36.630859 C 21.21 37.490859 20.269062 38 19.539062 38 C 18.899062 38 18.450469 37.720937 18.230469 37.210938 C 18.100469 36.890937 18 36.409453 18 35.689453 L 18 29 z M 35.029297 29 C 36.019297 29 36.809375 29.319922 37.359375 29.919922 C 37.769375 30.359922 38 31.040469 38 31.980469 L 38 34 L 34 34 L 34 35.800781 C 34 36.260781 34.45 36.640625 35 36.640625 C 35.55 36.640625 36 36.260781 36 35.800781 L 36 35 L 38 35 C 38 35.51 37.939687 35.939609 37.929688 36.099609 C 37.859687 36.449609 37.700938 36.770781 37.460938 37.050781 C 36.920938 37.690781 36.110078 38 35.080078 38 C 34.040078 38 33.259453 37.699609 32.689453 37.099609 C 32.269453 36.669609 32 36.010078 32 35.080078 L 32 32.019531 C 32 31.079531 32.239922 30.359922 32.669922 29.919922 C 33.239922 29.319922 34.019297 29 35.029297 29 z M 35 30.449219 C 34.45 30.449219 34 30.819062 34 31.289062 L 34 32.609375 L 36 32.609375 L 36 31.289062 C 36 30.819063 35.55 30.449219 35 30.449219 z M 28.220703 30.75 C 28.065703 30.75 27.839531 30.827813 27.613281 30.945312 C 27.500156 31.004062 27.386406 31.072422 27.28125 31.146484 C 27.176094 31.220547 27.08 31.300859 27 31.380859 L 27 35.75 C 27.08 35.83 27.176094 35.904063 27.28125 35.96875 C 27.596719 36.162813 27.988203 36.279297 28.220703 36.279297 C 28.423203 36.279297 28.581836 36.22998 28.703125 36.111328 C 28.743555 36.071777 28.780625 36.024062 28.8125 35.96875 C 28.87625 35.858125 28.922187 35.714609 28.953125 35.533203 C 28.984063 35.351797 29 35.131641 29 34.869141 L 29 32.130859 C 29 31.868359 28.984063 31.649297 28.953125 31.470703 C 28.89125 31.113516 28.767187 30.913047 28.570312 30.818359 C 28.471875 30.771016 28.355703 30.75 28.220703 30.75 z"></path>
                      </svg>
                    </a>
                    <a className="text-gray-500" href={homePage}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="24"
                        height="24"
                        viewBox="0 0 30 30"
                      >
                        <path d="M26.701,7.812c2.444-6.242-2.303-5.805-2.303-5.805c-3.047,0-6.855,2.73-6.855,2.73S13,3.533,8.457,6.236 c-4.95,3.105-4.787,8.619-4.787,8.619c4.026-5.673,9.629-7.976,9.629-7.976v0.375C5.029,12.818,3.071,20.958,2.581,22.618 S2.417,28,5.899,28s7.018-2.76,7.018-2.76s0.761,0.161,2.829,0.161c8.706,0,10.772-7.549,10.772-7.549h-7.726 c0,0-0.542,2.464-3.317,2.464c-3.809,0-3.591-3.91-3.591-3.91h14.743c0.709-10.064-8.214-11.509-8.214-11.509 s3.153-2.194,5.875-2.194c4.315,0,2.275,4.974,2.275,4.974L26.701,7.812z M12.486,25.128c0,0-5.313,3.173-7.699,0.975 c-1.277-2.2,0.799-5.313,0.799-5.313S7.342,23.997,12.486,25.128z M18.876,12.982h-7.013c0,0-0.089-3.363,3.594-3.363 C19.017,9.619,18.876,12.982,18.876,12.982z"></path>
                      </svg>
                    </a>
                  </span>
                </div>
                <p className="leading-relaxed">{description}</p>
                <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                  <div className="flex">
                    <span className="mr-3 text-base font-bold">
                      개발 인원 : {participant}
                    </span>
                  </div>
                  <div className="flex ml-6 items-center ">
                    <span className="mr-3 text-base font-bold">
                      역할 : {role}
                    </span>
                  </div>
                </div>
                <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                  <div className="flex">
                    <span className="mr-3 text-base font-bold">
                      주요 기능 : {primaryFunction}
                    </span>
                  </div>
                </div>
                <div className="flex">
                  <button
                    onClick={openPopup}
                    className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                  >
                    자세히보기
                  </button>
                  <LikeButton
                    id="like"
                    namespace={data.id}
                    hideCounterIfLessThan={1}
                  >
                    {({
                      handlePress,
                      totalLikes,
                      userLiked,
                      isLoading,
                      isCounterVisible,
                    }) => (
                      <>
                        <button
                          onClick={handlePress}
                          disabled={isLoading}
                          className=" rounded-full w-10 h-10 bg-gray-100 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4"
                        >
                          <svg
                            fill={userLiked ? "red" : "currentColor"}
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                          </svg>
                        </button>
                        <div className="inline-flex justify-center ml-3 mt-1">
                          {totalLikes}
                        </div>
                      </>
                    )}
                  </LikeButton>
                </div>
              </div>
            </div>
          </div>
        </>
      </section>
    </>
  );
}
