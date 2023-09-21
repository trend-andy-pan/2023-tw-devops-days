import React from "react";

const DevopsRoadmap = ({ answers }) => {
  const selectBgColor = "#d71920";
  const selectTextColor = "#FFFFFF";
  const unSelectBgColor = "#9CA3AF";
  const unSelectTextColor = "#000000";

  const isSelected = (answerNo, value, type) => {
    const selectColor = type === "text" ? selectTextColor : selectBgColor;
    const unSelectColor = type === "text" ? unSelectTextColor : unSelectBgColor;

    let answer = answers[`answer-${answerNo}`];

    if (!Array.isArray(answer)) answer = [answer];

    return answer.includes(value) ? selectColor : unSelectColor;
  };

  return (
    <div id="devops_roadmap">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="152 49 1251 2260"
      >
        <g>
          <path
            stroke="rgb(43,120,228)"
            id="svg_120"
            strokeDasharray="0.8 12"
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="4"
            fill="none"
            d="m875.39794,358.60205q81.94481,-18.4407 117.60078,-27.80103"
          />
          <path
            id="svg_210"
            strokeDasharray="0.8 12"
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="4"
            fill="none"
            d="m504,1780q0,57.11422 0,114"
            stroke="rgb(43,120,228)"
          />
          <path
            id="svg_209"
            strokeDasharray="0.8 12"
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="4"
            fill="none"
            d="m637,1778.74588q0,55.73889 0,111.25412"
            stroke="rgb(43,120,228)"
          />
          <path
            id="svg_208"
            strokeDasharray="undefined"
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="4"
            fill="none"
            d="m1254.54544,1837.64256q-487.26805,0 -974.53611,0"
            stroke="rgb(43,120,228)"
          />
          <path
            id="svg_197"
            strokeDasharray="0.8 12"
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="4"
            fill="none"
            d="m469.78787,1641.45458q-61.88223,-36.07696 -129.51514,-37.45453"
            stroke="rgb(43,120,228)"
          />
          <path
            id="svg_196"
            strokeDasharray="0.8 12"
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="4"
            fill="none"
            d="m472.78788,1569.33337q-41.53893,19.53436 -103.0303,24.9394"
            stroke="rgb(43,120,228)"
          />
          <path
            id="svg_191"
            strokeDasharray="0.8 12"
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="4"
            stroke="rgb(43,120,228)"
            fill="none"
            d="m833,1309.75758q0,39.03458 0,78.24242"
          />
          <path
            transform="rotate(-153.458 1101.18 1255.48)"
            id="svg_190"
            strokeDasharray="0.8 12"
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="4"
            stroke="rgb(43,120,228)"
            fill="none"
            d="m1149.64773,1244.7066q-58.05447,-3.14065 -96.93725,21.88906"
          />
          <path
            id="svg_188"
            strokeDasharray="0.8 12"
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="4"
            fill="none"
            d="m1150.64773,1282.80106q-55.65892,-3.98798 -92.93725,27.79458"
            stroke="rgb(43,120,228)"
          />
          <path
            id="svg_183"
            strokeDasharray="0.8 12"
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="4"
            fill="none"
            d="m444.78788,811.81823q-41.53893,19.53436 -103.0303,24.9394"
            stroke="rgb(43,120,228)"
          />
          <path
            id="svg_182"
            strokeDasharray="0.8 12"
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="4"
            fill="none"
            d="m441.78787,883.93944q-61.88224,-36.07696 -129.51515,-37.45454"
            stroke="rgb(43,120,228)"
          />
          <path
            stroke="rgb(43,120,228)"
            id="svg_141"
            strokeDasharray="0.8 12"
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="4"
            fill="none"
            d="m280.63912,637.756q1.55279,25.41831 1.55279,65.87285"
          />
          <path
            id="svg_93"
            strokeDasharray="undefined"
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="4"
            fill="none"
            d="m1253.54544,1408.64256q-487.26806,0 -974.53611,0"
            stroke="rgb(43,120,228)"
          />
          <path
            id="svg_164"
            strokeDasharray="0.8 12"
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="4"
            stroke="rgb(43,120,228)"
            fill="none"
            d="m898,1037.75758q0,39.03458 0,78.24242"
          />
          <path
            id="svg_161"
            strokeDasharray="0.8 12"
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="4"
            stroke="rgb(43,120,228)"
            fill="none"
            d="m1052,1035.75758q0,39.03458 0,78.24242"
          />
          <path
            id="svg_153"
            strokeDasharray="undefined"
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="4"
            fill="none"
            d="m1253.54545,1125.64256q-485.76799,0 -971.53598,0"
            stroke="rgb(43,120,228)"
          />
          <path
            id="svg_96"
            strokeDasharray="0.8 12"
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="4"
            fill="none"
            d="m925.64749,719.66892q0,39.02543 0,78.22407"
            stroke="rgb(43,120,228)"
          />
          <path
            id="svg_95"
            strokeDasharray="0.8 12"
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="4"
            fill="none"
            d="m845.65384,719.66892q0,39.02543 0,78.22406"
            stroke="rgb(43,120,228)"
          />
          <path
            id="svg_81"
            strokeDasharray="0.8 12"
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="4"
            fill="none"
            d="m1003.97461,717.44687q0,50.38818 0,101"
            stroke="rgb(43,120,228)"
          />
          <path
            stroke="rgb(43,120,228)"
            id="svg_21"
            strokeDasharray="0.8 12"
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="4"
            fill="none"
            d="m955.60066,507.84522q1.55279,25.40928 1.55279,65.84945"
          />
          <path
            stroke="rgb(43,120,228)"
            id="svg_20"
            strokeDasharray="0.8 12"
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="4"
            fill="none"
            d="m858.47138,519.29702q1.55279,25.41831 1.55279,65.87285"
          />
          <path
            stroke="rgb(43,120,228)"
            id="svg_25"
            strokeDasharray="0.8 12"
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="4"
            fill="none"
            d="m648.63912,521.756q1.55279,25.41831 1.55279,65.87285"
          />
          <path
            id="svg_10"
            strokeDasharray="undefined"
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="4"
            fill="none"
            d="m1255,518q0,97.12121 0,194.24242"
            stroke="rgb(43,120,228)"
          />
          <path
            id="svg_44"
            strokeDasharray="0.8 12"
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="4"
            stroke="rgb(43,120,228)"
            fill="none"
            d="m1071,1749.74589q0,87.30221 0,174.25411"
          />
          <path
            id="svg_48"
            strokeDasharray="undefined"
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="4"
            fill="none"
            d="m1255,1838.41453q0,114.8339 0,229.6678"
            stroke="rgb(43,120,228)"
          />
          <path
            id="svg_49"
            strokeDasharray="undefined"
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="4"
            fill="none"
            d="m279,1411.4145q0,213.00691 0,426.0138"
            stroke="rgb(43,120,228)"
          />
          <path
            id="svg_68"
            strokeDasharray="0.8 12"
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="4"
            stroke="rgb(43,120,228)"
            fill="none"
            d="m961,1763q0,85.17032 0,170"
          />
          <path
            id="svg_72"
            strokeDasharray="undefined"
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="4"
            fill="none"
            d="m281,724.42422q0,200.34851 0,400.69699"
            stroke="rgb(43,120,228)"
          />
          <path
            id="svg_73"
            strokeDasharray="0.8 12"
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="4"
            stroke="rgb(43,120,228)"
            fill="none"
            d="m1255,717.0303q0,43.01515 0,86.03031"
          />
          <path
            stroke="rgb(43,120,228)"
            id="svg_76"
            strokeDasharray="0.8 12"
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="4"
            fill="none"
            d="m750.68644,522.16582q1.5528,25.41831 1.5528,65.87285"
          />
          <path
            id="svg_77"
            strokeDasharray="undefined"
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="4"
            stroke="rgb(43,120,228)"
            fill="none"
            d="m756,247q0,134.40909 0,268.81818"
          />
          <text
            stroke="null"
            id="svg_78"
            fontSize="32px"
            fontWeight="normal"
            fontStyle="normal"
            fill="rgb(0,0,0)"
            y="220.664"
            x="700"
          >
            <tspan stroke="null" id="svg_79">
              DevOps
            </tspan>
          </text>
          <path
            id="svg_121"
            strokeDasharray="0.8 12"
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="4"
            fill="none"
            d="m873,347q66.90532,-8.44367 121,-78"
            stroke="rgb(43,120,228)"
          />
          <path
            transform="rotate(13.0107 936.5 408.209)"
            id="svg_122"
            strokeDasharray="0.8 12"
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="4"
            fill="none"
            d="m869.89522,392.5149q101.26986,-4.33572 133.20956,31.85152"
            stroke="rgb(43,120,228)"
          />
          <path
            id="svg_224"
            strokeDasharray="0.8 12"
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="4"
            fill="none"
            d="m873.15911,367.05845q85.99551,-2.70222 113.1178,19.85134"
            stroke="rgb(43,120,228)"
          />
          <g
            id="svg_123"
            data-group-id="100-language"
            className="clickable-group"
            stroke="null"
          >
            <rect
              id="svg_124"
              strokeWidth="2.7"
              fill="rgb(17 24 39)"
              rx="2"
              height="47.3"
              width="224.30001"
              y="334.35"
              x="651.34998"
              stroke="rgb(0,0,0)"
            />
          </g>
          <g
            id="svg_127"
            data-group-id="101-language:ruby"
            className="clickable-group"
            stroke="null"
          >
            <rect
              id="svg_128"
              strokeWidth="2.7"
              fill={isSelected(2, ".Net", "bg")}
              rx="2"
              height="44.3"
              width="98.3"
              y="307.35"
              x="1094.35"
              stroke="rgb(0,0,0)"
            />
            <text
              xmlSpace="preserve"
              textAnchor="start"
              fontSize="17px"
              strokeWidth="0"
              id="svg_82"
              y="333.5"
              x="1125.07732"
              fill={isSelected(2, ".Net", "text")}
              stroke="null"
              transform="matrix(0.970385 0 0 1 34.2749 1)"
            >
              .Net
            </text>
          </g>
          <g
            id="svg_136"
            data-group-id="100-language:python"
            className="clickable-group"
          >
            <rect
              id="svg_137"
              strokeWidth="2.7"
              stroke="rgb(0,0,0)"
              fill={isSelected(2, "Python", "bg")}
              rx="2"
              height="44.3"
              width="94.3"
              y="306.35"
              x="991.35"
            />
            <text
              id="svg_138"
              fontSize="17px"
              fontWeight="normal"
              fontStyle="normal"
              fill={isSelected(2, "Python", "text")}
              y="334.671"
              x="1013"
            >
              <tspan id="svg_139">Python</tspan>
            </text>
          </g>
          <g
            id="svg_145"
            data-group-id="102-language:javascript"
            className="clickable-group"
          >
            <rect
              id="svg_146"
              strokeWidth="2.7"
              stroke="rgb(0,0,0)"
              fill={isSelected(2, "JavaScript", "bg")}
              rx="2"
              height="44.3"
              width="204.3"
              y="407.35"
              x="989.35"
            />
            <text
              id="svg_147"
              fontSize="17px"
              fontWeight="normal"
              fontStyle="normal"
              fill={isSelected(2, "JavaScript", "text")}
              y="435.739"
              x="1013"
            >
              <tspan id="svg_148">JavaScript / Node.js</tspan>
            </text>
          </g>
          <g
            id="svg_154"
            data-group-id="103-language:go"
            className="clickable-group"
          >
            <rect
              id="svg_155"
              strokeWidth="2.7"
              stroke="rgb(0,0,0)"
              fill={isSelected(2, "Go", "bg")}
              rx="2"
              height="44.3"
              width="94.3"
              y="356.35"
              x="991.35"
            />
            <text
              stroke="null"
              id="svg_156"
              fontSize="17px"
              fontWeight="normal"
              fontStyle="normal"
              fill={isSelected(2, "Go", "text")}
              y="384.6795"
              x="1027"
            >
              <tspan stroke="null" id="svg_157">
                Go
              </tspan>
            </text>
          </g>
          <g
            id="svg_162"
            data-group-id="104-language:rust"
            className="clickable-group"
            stroke="null"
          >
            <rect
              id="svg_163"
              strokeWidth="2.7"
              fill={isSelected(2, "C/C++", "bg")}
              rx="2"
              height="44.3"
              width="99.3"
              y="357.35"
              x="1094.35"
              stroke="rgb(0,0,0)"
            />
            <text
              fill={isSelected(2, "C/C++", "text")}
              strokeWidth="0"
              x="1123.73112"
              y="385.5"
              id="svg_86"
              fontSize="17px"
              textAnchor="start"
              xmlSpace="preserve"
              transform="matrix(0.980257 0 0 1 23.8302 0)"
              stroke="rgb(0,0,0)"
            >
              C/C++
            </text>
          </g>
          <path
            id="svg_171"
            strokeDasharray="0.8 12"
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="4"
            stroke="rgb(43,120,228)"
            fill="none"
            d="m756,53.93939q0,57.51046 0,115.02093"
          />
          <circle
            id="svg_243"
            fill="rgb(255,255,255)"
            r="10"
            cy="938"
            cx="1187"
          />
          <g
            id="svg_267"
            data-group-id="100-vcs-hosting:github"
            className="clickable-group"
          >
            <rect
              id="svg_268"
              strokeWidth="2.7"
              stroke="rgb(0,0,0)"
              fill={isSelected(4, "GitHub", "bg")}
              rx="2"
              height="44.3"
              width="105.3"
              y="777.35"
              x="1202.35"
            />
            <text
              id="svg_269"
              fontSize="17px"
              fontWeight="normal"
              fontStyle="normal"
              fill={isSelected(4, "GitHub", "text")}
              y="805.6795"
              x="1228"
            >
              <tspan id="svg_270">GitHub</tspan>
            </text>
          </g>
          <g
            id="svg_271"
            data-group-id="101-vcs-hosting:gitlab"
            className="clickable-group"
          >
            <rect
              id="svg_272"
              strokeWidth="2.7"
              stroke="rgb(0,0,0)"
              fill={isSelected(4, "GitLab", "bg")}
              rx="2"
              height="44.3"
              width="109.3"
              y="828.35"
              x="1200.35"
            />
            <text
              id="svg_273"
              fontSize="17px"
              fontWeight="normal"
              fontStyle="normal"
              fill={isSelected(4, "GitLab", "text")}
              y="856.6795"
              x="1229"
            >
              <tspan id="svg_274">GitLab</tspan>
            </text>
          </g>
          <g
            id="svg_278"
            data-group-id="102-vcs-hosting:bitbucket"
            className="clickable-group"
          >
            <rect
              id="svg_279"
              strokeWidth="2.7"
              stroke="rgb(0,0,0)"
              fill={isSelected(4, "Bitbucket", "bg")}
              rx="2"
              height="44.3"
              width="109.3"
              y="879.35"
              x="1200.35"
            />
            <text
              id="svg_280"
              fontSize="17px"
              fontWeight="normal"
              fontStyle="normal"
              fill={isSelected(4, "Bitbucket", "text")}
              y="907.637"
              x="1220"
            >
              <tspan id="svg_281">Bitbucket</tspan>
            </text>
          </g>
          <g
            id="svg_400"
            data-group-id="114-infrastructure-monitoring"
            className="clickable-group"
          >
            <rect
              id="svg_401"
              strokeWidth="2.7"
              stroke="rgb(0,0,0)"
              fill="rgb(17 24 39)"
              rx="2"
              height="44.3"
              width="235.3"
              y="1811.35"
              x="453.35"
            />
          </g>
          <g
            id="svg_404"
            data-group-id="102-infrastructure-monitoring:grafana"
            className="clickable-group"
          >
            <rect
              id="svg_405"
              strokeWidth="2.7"
              stroke="rgb(0,0,0)"
              fill={isSelected(14, "Grafana", "bg")}
              rx="2"
              height="44.3"
              width="127.3"
              y="1741.35"
              x="577.35"
            />
            <text
              id="svg_406"
              fontSize="17px"
              fontWeight="normal"
              fontStyle="normal"
              fill={isSelected(14, "Grafana", "text")}
              y="1769.6795"
              x="609"
            >
              <tspan id="svg_407">Grafana</tspan>
            </text>
          </g>
          <g
            id="svg_412"
            data-group-id="102-infrastructure-monitoring:datadog"
            className="clickable-group"
          >
            <rect
              id="svg_413"
              strokeWidth="2.7"
              stroke="rgb(0,0,0)"
              fill={isSelected(14, "Datadog", "bg")}
              rx="2"
              height="44.3"
              width="127.3"
              y="1740.35"
              x="442.35"
            />
            <text
              id="svg_414"
              fontSize="17px"
              fontWeight="normal"
              fontStyle="normal"
              fill={isSelected(14, "Datadog", "text")}
              y="1768.6965"
              x="473"
            >
              <tspan id="svg_415">Datadog</tspan>
            </text>
          </g>
          <g
            id="svg_421"
            data-group-id="102-infrastructure-monitoring:zabbix"
            className="clickable-group"
          >
            <rect
              id="svg_422"
              strokeWidth="2.7"
              stroke="rgb(0,0,0)"
              fill={isSelected(14, "Icinga", "bg")}
              rx="2"
              height="44.3"
              width="126.3"
              y="1889.35"
              x="442.35"
            />
          </g>
          <g
            id="svg_430"
            data-group-id="100-infrastructure-monitoring:prometheus"
            className="clickable-group"
          >
            <rect
              id="svg_431"
              strokeWidth="2.7"
              stroke="rgb(0,0,0)"
              fill={isSelected(14, "Prometheus", "bg")}
              rx="2"
              height="44.3"
              width="127.3"
              y="1889.35"
              x="577.35"
            />
            <text
              id="svg_432"
              fontSize="17px"
              fontWeight="normal"
              fontStyle="normal"
              fill={isSelected(14, "Prometheus", "text")}
              y="1917.671"
              x="592"
            >
              <tspan id="svg_433">Prometheus</tspan>
            </text>
            <g id="svg_434" />
          </g>
          <g
            id="svg_504"
            data-group-id="107-cloud-providers"
            className="clickable-group"
            stroke="null"
          >
            <rect
              id="svg_505"
              strokeWidth="2.7"
              fill="rgb(17 24 39)"
              rx="2"
              height="46.3"
              width="148.30001"
              y="820.35"
              x="204.35"
              stroke="rgb(0,0,0)"
            />
          </g>
          <g
            id="svg_508"
            data-group-id="100-cloud-providers:aws"
            className="clickable-group"
          >
            <rect
              id="svg_509"
              strokeWidth="2.7"
              stroke="rgb(0,0,0)"
              fill={isSelected(7, "AWS", "bg")}
              rx="2"
              height="43.3"
              width="138.3"
              y="801.35"
              x="431.35"
            />
            <text
              id="svg_510"
              fontSize="17px"
              fontWeight="normal"
              fontStyle="normal"
              fill={isSelected(7, "AWS", "text")}
              y="828.688"
              x="483"
            >
              <tspan id="svg_511">AWS</tspan>
            </text>
          </g>
          <g
            id="svg_516"
            data-group-id="101-cloud-providers:google-cloud"
            className="clickable-group"
          >
            <rect
              id="svg_517"
              strokeWidth="2.7"
              stroke="rgb(0,0,0)"
              fill={isSelected(7, "Google Cloud", "bg")}
              rx="2"
              height="44.3"
              width="146.3"
              y="801.35"
              x="575.35"
            />
            <text
              id="svg_518"
              fontSize="17px"
              fontWeight="normal"
              fontStyle="normal"
              fill={isSelected(7, "Google Cloud", "text")}
              y="830.6795"
              x="597"
            >
              <tspan id="svg_519">Google Cloud</tspan>
            </text>
          </g>
          <g
            id="svg_525"
            data-group-id="102-cloud-providers:azure"
            className="clickable-group"
            stroke="null"
          >
            <rect
              id="svg_526"
              strokeWidth="2.7"
              fill={isSelected(7, "Azure", "bg")}
              rx="2"
              height="44.3"
              width="140.3"
              y="851.35"
              x="430.35"
              stroke="rgb(0,0,0)"
            />
            <text
              id="svg_527"
              fontSize="17px"
              fontWeight="normal"
              fontStyle="normal"
              fill={isSelected(7, "Azure", "text")}
              y="879.688"
              x="481.26586"
              stroke="null"
              transform="matrix(0.992923 0 0 1 3.7746 0)"
            >
              <tspan id="svg_528" stroke="null">
                Azure
              </tspan>
            </text>
          </g>
          <g
            id="svg_534"
            data-group-id="104-cloud-providers:digital-ocean"
            className="clickable-group"
          >
            <rect
              id="svg_535"
              strokeWidth="2.7"
              stroke="rgb(0,0,0)"
              fill={isSelected(7, "Alibaba Cloud", "bg")}
              rx="2"
              height="44.3"
              width="146.3"
              y="852.35"
              x="576.35"
            />
          </g>
          <g
            id="svg_542"
            data-group-id="103-cloud-providers:heroku"
            className="clickable-group"
            stroke="null"
          >
            <rect
              id="svg_543"
              strokeWidth="2.7"
              fill={isSelected(5, "ClickUp", "bg")}
              rx="2"
              height="43.3"
              width="77.29999"
              y="788.35"
              x="886.34999"
              stroke="rgb(0,0,0)"
            />
          </g>
          <g
            id="svg_551"
            data-group-id="105-cloud-providers:linode"
            className="clickable-group"
            stroke="null"
          >
            <rect
              id="svg_552"
              strokeWidth="2.7"
              fill={isSelected(5, "Jarvis Wiki (Confluence)", "bg")}
              rx="2"
              height="44.3"
              width="219.3"
              y="839.35"
              x="817.35001"
              stroke="rgb(0,0,0)"
            />
            <g id="svg_555" stroke="null" />
          </g>
          <g
            id="svg_560"
            data-group-id="106-cloud-providers:vultr"
            className="clickable-group"
            stroke="null"
          >
            <rect
              id="svg_561"
              strokeWidth="2.7"
              fill={isSelected(5, "Trello", "bg")}
              rx="2"
              height="44.3"
              width="63.30003"
              y="787.35"
              x="973.34999"
              stroke="rgb(0,0,0)"
            />
          </g>
          <g
            id="svg_569"
            data-group-id="104-cloud-providers:albaba-cloud"
            className="clickable-group"
            stroke="null"
          >
            <rect
              id="svg_570"
              strokeWidth="2.7"
              fill={isSelected(5, "Jira", "bg")}
              rx="2"
              height="43.3"
              width="60.29999"
              y="789.35"
              x="815.34999"
              stroke="rgb(0,0,0)"
            />
            <g id="svg_573" stroke="null" />
          </g>
          <path
            id="svg_578"
            strokeDasharray="undefined"
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="4"
            fill="none"
            d="m1255,1125.06064q0,141.68179 0,283.36359"
            stroke="rgb(43,120,228)"
          />
          <g
            id="svg_586"
            data-group-id="100-configuration-management:ansible"
            className="clickable-group"
          >
            <rect
              id="svg_587"
              strokeWidth="2.7"
              stroke="rgb(0,0,0)"
              fill={isSelected(11, "Ansible", "bg")}
              rx="2"
              height="44.3"
              width="151.3"
              y="1192.35"
              x="759.35"
            />
            <text
              id="svg_588"
              fontSize="17px"
              fontWeight="normal"
              fontStyle="normal"
              fill={isSelected(11, "Ansible", "text")}
              y="1220.688"
              x="804"
            >
              <tspan id="svg_589">Ansible</tspan>
            </text>
          </g>
          <g
            id="svg_590"
            data-group-id="101-configuration-management:chef"
            className="clickable-group"
          >
            <rect
              id="svg_591"
              strokeWidth="2.7"
              stroke="rgb(0,0,0)"
              fill={isSelected(11, "Chef", "bg")}
              rx="2"
              height="44.3"
              width="151.3"
              y="1242.35"
              x="759.35"
            />
            <text
              id="svg_592"
              fontSize="17px"
              fontWeight="normal"
              fontStyle="normal"
              fill={isSelected(11, "Chef", "text")}
              y="1270.6625"
              x="814"
            >
              <tspan id="svg_593">Chef</tspan>
            </text>
          </g>
          <g
            id="svg_594"
            data-group-id="102-configuration-management:puppet"
            className="clickable-group"
          >
            <rect
              id="svg_595"
              strokeWidth="2.7"
              stroke="rgb(0,0,0)"
              fill={isSelected(11, "Puppet", "bg")}
              rx="2"
              height="44.3"
              width="151.3"
              y="1292.35"
              x="759.35"
            />
            <text
              id="svg_596"
              fontSize="17px"
              fontWeight="normal"
              fontStyle="normal"
              fill={isSelected(11, "Puppet", "text")}
              y="1320.671"
              x="805"
            >
              <tspan id="svg_597">Puppet</tspan>
            </text>
          </g>
          <g
            id="svg_617"
            data-group-id="100-logs-management:elastic-stack"
            className="clickable-group"
          >
            <rect
              id="svg_618"
              strokeWidth="2.7"
              stroke="rgb(0,0,0)"
              fill={isSelected(15, "Elastic Stack", "bg")}
              rx="2"
              height="44.3"
              width="146.3"
              y="1738.35"
              x="883.35"
            />
            <text
              id="svg_619"
              fontSize="17px"
              fontWeight="normal"
              fontStyle="normal"
              fill={isSelected(15, "Elastic Stack", "text")}
              y="1766.6625"
              x="910"
            >
              <tspan id="svg_620">Elastic Stack</tspan>
            </text>
          </g>
          <g
            id="svg_625"
            data-group-id="101-logs-management:graylog"
            className="clickable-group"
          >
            <rect
              id="svg_626"
              strokeWidth="2.7"
              stroke="rgb(0,0,0)"
              fill={isSelected(15, "CloudWatch", "bg")}
              rx="2"
              height="44.3"
              width="146.3"
              y="1887.35"
              x="884.35"
            />
          </g>
          <g
            id="svg_634"
            data-group-id="102-logs-management:splunk"
            className="clickable-group"
          >
            <rect
              id="svg_635"
              strokeWidth="2.7"
              stroke="rgb(0,0,0)"
              fill={isSelected(15, "Graylog", "bg")}
              rx="2"
              height="44.3"
              width="83.3"
              y="1887.35"
              x="1037.35"
            />
          </g>
          <g
            id="svg_652"
            data-group-id="103-logs-management:loki"
            className="clickable-group"
          >
            <rect
              id="svg_653"
              strokeWidth="2.7"
              stroke="rgb(0,0,0)"
              fill={isSelected(15, "Loki", "bg")}
              rx="2"
              height="44.3"
              width="85.3"
              y="1738.35"
              x="1036.35"
            />
            <text
              id="svg_654"
              fontSize="17px"
              fontWeight="normal"
              fontStyle="normal"
              fill={isSelected(15, "Loki", "text")}
              y="1766.637"
              x="1063"
            >
              <tspan id="svg_655">Loki</tspan>
            </text>
          </g>
          <g
            id="svg_660"
            data-group-id="117-containers"
            className="clickable-group"
            stroke="null"
          >
            <rect
              id="svg_661"
              strokeWidth="2.7"
              fill="rgb(17 24 39)"
              rx="2"
              height="44.3"
              width="212.30001"
              y="1578.35"
              x="173.35"
              stroke="rgb(0,0,0)"
            />
          </g>
          <g
            id="svg_664"
            data-group-id="100-containers:docker-swarm"
            className="clickable-group"
            stroke="null"
          >
            <rect
              id="svg_665"
              strokeWidth="2.7"
              fill={isSelected(13, "Docker Swarm / Compose", "bg")}
              rx="2"
              height="43.3"
              width="216.29999"
              y="1554.35"
              x="653.35"
              stroke="rgb(0,0,0)"
            />
          </g>
          <g
            id="svg_681"
            data-group-id="101-containers:gke-eks-aks"
            className="clickable-group"
          >
            <rect
              id="svg_682"
              strokeWidth="2.7"
              stroke="rgb(0,0,0)"
              fill={isSelected(13, "GKE / EKS / AKS", "bg")}
              rx="2"
              height="43.3"
              width="190.3"
              y="1554.35"
              x="456.35"
            />
            <text
              id="svg_683"
              fontSize="17px"
              fontWeight="normal"
              fontStyle="normal"
              fill={isSelected(13, "GKE / EKS / AKS", "text")}
              y="1581.739"
              x="485"
            >
              <tspan id="svg_684">GKE / EKS / AKS</tspan>
            </text>
          </g>
          <g
            id="svg_690"
            data-group-id="102-containers:ecs-fargate"
            className="clickable-group"
          >
            <rect
              id="svg_691"
              strokeWidth="2.7"
              stroke="rgb(0,0,0)"
              fill={isSelected(13, "AWS ECS / Fargate", "bg")}
              rx="2"
              height="43.3"
              width="190.3"
              y="1603.35"
              x="456.35"
            />
            <text
              id="svg_692"
              fontSize="17px"
              fontWeight="normal"
              fontStyle="normal"
              fill={isSelected(13, "AWS ECS / Fargate", "text")}
              y="1630.739"
              x="471"
            >
              <tspan id="svg_693">AWS ECS / Fargate</tspan>
            </text>
          </g>
          <g
            id="svg_913"
            data-group-id="113-secret-management"
            className="clickable-group"
            stroke="null"
          >
            <rect
              id="svg_914"
              strokeWidth="2.7"
              fill="rgb(17 24 39)"
              rx="2"
              height="44.3"
              width="234.3"
              y="1252.35"
              x="1132.35"
              stroke="rgb(0,0,0)"
            />
            <text
              id="svg_915"
              fontSize="17px"
              fontWeight="normal"
              fontStyle="normal"
              fill="#FFFFFF"
              y="1280.6625"
              x="1171"
              stroke="null"
            >
              <tspan id="svg_916" stroke="null">
                Secret Management
              </tspan>
            </text>
          </g>
          <path
            id="svg_949"
            strokeDasharray="0.8 12"
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="4"
            fill="none"
            d="m573,1299.10981q0,85.90861 0,171.96623"
            stroke="rgb(43,120,228)"
          />
          <path
            id="svg_950"
            strokeDasharray="0.8 12"
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="4"
            stroke="rgb(43,120,228)"
            fill="none"
            d="m442,1299.10981q0,85.19073 0,170.52921"
          />
          <g
            id="svg_955"
            data-group-id="101-ci-cd:jenkins"
            className="clickable-group"
          >
            <rect
              id="svg_956"
              strokeWidth="2.7"
              stroke="rgb(0,0,0)"
              fill={isSelected(12, "Jenkins", "bg")}
              rx="2"
              height="43.3"
              width="108.3"
              y="1195.35"
              x="526.35"
            />
            <text
              id="svg_957"
              fontSize="17px"
              fontWeight="normal"
              fontStyle="normal"
              fill={isSelected(12, "Jenkins", "text")}
              y="1222.637"
              x="551"
            >
              <tspan id="svg_958">Jenkins</tspan>
            </text>
          </g>
          <g
            id="svg_963"
            data-group-id="100-ci-cd:gitlab-ci"
            className="clickable-group"
          >
            <rect
              id="svg_964"
              strokeWidth="2.7"
              stroke="rgb(0,0,0)"
              fill={isSelected(12, "Gitlab CI", "bg")}
              rx="2"
              height="43.3"
              width="150.3"
              y="1195.35"
              x="368.35"
            />
            <text
              id="svg_965"
              fontSize="17px"
              fontWeight="normal"
              fontStyle="normal"
              fill={isSelected(12, "Gitlab CI", "text")}
              y="1222.6795"
              x="410"
            >
              <tspan id="svg_966">Gitlab CI</tspan>
            </text>
          </g>
          <g
            id="svg_971"
            data-group-id="103-ci-cd:travis-ci"
            className="clickable-group"
          >
            <rect
              id="svg_972"
              strokeWidth="2.7"
              stroke="rgb(0,0,0)"
              fill={isSelected(12, "Travis CI", "bg")}
              rx="2"
              height="43.3"
              width="108.3"
              y="1244.35"
              x="526.35"
            />
            <text
              id="svg_973"
              fontSize="17px"
              fontWeight="normal"
              fontStyle="normal"
              fill={isSelected(12, "Travis CI", "text")}
              y="1271.637"
              x="545"
            >
              <tspan id="svg_974">Travis CI</tspan>
            </text>
          </g>
          <g
            id="svg_980"
            data-group-id="102-ci-cd:github-actions"
            className="clickable-group"
          >
            <rect
              id="svg_981"
              strokeWidth="2.7"
              stroke="rgb(0,0,0)"
              fill={isSelected(12, "GitHub Actions", "bg")}
              rx="2"
              height="43.3"
              width="149.3"
              y="1244.35"
              x="369.35"
            />
            <text
              id="svg_982"
              fontSize="17px"
              fontWeight="normal"
              fontStyle="normal"
              fill={isSelected(12, "GitHub Actions", "text")}
              y="1271.688"
              x="387"
            >
              <tspan id="svg_983">GitHub Actions</tspan>
            </text>
          </g>
          <g
            id="svg_997"
            data-group-id="107-ci-cd:circle-ci"
            className="clickable-group"
          >
            <rect
              id="svg_998"
              strokeWidth="2.7"
              stroke="rgb(0,0,0)"
              fill={isSelected(12, "Circle CI", "bg")}
              rx="2"
              height="44.3"
              width="149.3"
              y="1294.35"
              x="369.35"
            />
            <text
              id="svg_999"
              fontSize="17px"
              fontWeight="normal"
              fontStyle="normal"
              fill={isSelected(12, "Circle CI", "text")}
              y="1322.637"
              x="410"
            >
              <tspan id="svg_1000">Circle CI</tspan>
            </text>
          </g>
          <g
            id="svg_1005"
            data-group-id="108-ci-cd:drone"
            className="clickable-group"
          >
            <rect
              id="svg_1006"
              strokeWidth="2.7"
              stroke="rgb(0,0,0)"
              fill={isSelected(12, "Others", "bg")}
              rx="2"
              height="44.3"
              width="109.3"
              y="1294.35"
              x="526.35"
            />
          </g>
          <g
            id="svg_1014"
            data-group-id="106-ci-cd:azure-devops-services"
            className="clickable-group"
            stroke="null"
          >
            <rect
              id="svg_1015"
              strokeWidth="2.7"
              fill={isSelected(12, "Azure DevOps Services", "bg")}
              rx="2"
              height="44.3"
              width="266.3"
              y="1463.35"
              x="368.35"
              stroke="rgb(0,0,0)"
            />
            <text
              id="svg_1016"
              fontSize="17px"
              fontWeight="normal"
              fontStyle="normal"
              fill={isSelected(12, "Azure DevOps Services", "text")}
              y="1491.6965"
              x="416"
              stroke="null"
            >
              <tspan id="svg_1017" stroke="null">
                Azure DevOps Services
              </tspan>
            </text>
          </g>
          <path
            id="svg_1027"
            strokeDasharray="undefined"
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="4"
            stroke="rgb(43,120,228)"
            fill="none"
            d="m755.65641,2069.41452q0,46.78932 0,93.57864"
          />
          <text
            id="svg_1028"
            fontSize="28px"
            fontWeight="normal"
            fontStyle="normal"
            fill="rgb(0,0,0)"
            y="2209.108"
            x="698"
          >
            <tspan id="svg_1029">持續學習</tspan>
          </text>
          <path
            id="svg_1030"
            strokeDasharray="0.8 12"
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="4"
            stroke="rgb(43,120,228)"
            fill="none"
            d="m755.65641,2237.41452q0,36.58646 0,73.17291"
          />
          <path
            id="svg_1031"
            strokeDasharray="undefined"
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="4"
            stroke="rgb(43,120,228)"
            fill="none"
            d="m1253.5303,515.57576q-247.76515,0 -495.5303,0"
          />
          <g
            id="svg_1032"
            data-group-id="101-operating-systems"
            className="clickable-group"
            stroke="null"
          >
            <rect
              id="svg_1033"
              strokeWidth="2.7"
              fill="rgb(17 24 39)"
              rx="2"
              height="46.3"
              width="334.16794"
              y="485.75983"
              x="627.60927"
              stroke="rgb(0,0,0)"
            />
          </g>
          <path
            id="svg_1044"
            strokeDasharray="undefined"
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="4"
            fill="none"
            d="m1254.54545,703.64256q-433.26803,0 -866.53606,0"
            stroke="rgb(43,120,228)"
          />
          <g
            id="svg_1049"
            data-group-id="104-vcs-hosting"
            className="clickable-group"
            stroke="null"
          >
            <rect
              id="svg_1050"
              strokeWidth="2.7"
              fill="rgb(17 24 39)"
              rx="2"
              height="47.3"
              width="188.3"
              y="679.27175"
              x="1156.83931"
              stroke="rgb(0,0,0)"
            />
          </g>
          <text
            xmlSpace="preserve"
            textAnchor="start"
            fontSize="32px"
            id="svg_1141"
            y="212.4995"
            x="760.99974"
            fill="rgb(0,0,0)"
          />
          <rect
            id="svg_84"
            strokeWidth="2.7"
            fill={isSelected(2, "Java", "bg")}
            rx="2"
            height="44.3"
            width="94.77555"
            y="252.35"
            x="991.34999"
            stroke="rgb(0,0,0)"
          />
          <text
            xmlSpace="preserve"
            textAnchor="start"
            fontSize="17px"
            id="svg_88"
            y="279.5"
            x="1020.32113"
            fill={isSelected(2, "Java", "text")}
            stroke="null"
          >
            Java
          </text>
          <rect
            id="svg_90"
            strokeWidth="2.7"
            fill={isSelected(2, "PHP", "bg")}
            rx="2"
            height="44.3"
            width="93.77554"
            y="253.35"
            x="1096.87445"
            stroke="rgb(0,0,0)"
          />
          <text
            fill={isSelected(2, "PHP", "text")}
            strokeWidth="0"
            x="1128.31611"
            y="281.5"
            id="svg_83"
            fontSize="17px"
            textAnchor="start"
            xmlSpace="preserve"
            stroke="rgb(0,0,0)"
          >
            PHP
          </text>
          <rect
            id="svg_92"
            strokeWidth="2.7"
            stroke="rgb(0,0,0)"
            fill={isSelected(3, "剛入門", "bg")}
            rx="2"
            height="44.3"
            width="94.3"
            y="566.44829"
            x="595.90817"
          />
          <rect
            id="svg_94"
            strokeWidth="2.7"
            stroke="rgb(0,0,0)"
            fill={isSelected(3, "已上手", "bg")}
            rx="2"
            height="44.3"
            width="94.3"
            y="567.26794"
            x="704.31799"
          />
          <rect
            stroke="rgb(0,0,0)"
            id="svg_14"
            strokeWidth="2.7"
            fill={isSelected(3, "這個世界好難懂", "bg")}
            rx="2"
            height="44.3"
            width="138.3"
            y="565.44829"
            x="920.4821"
          />
          <rect
            id="svg_15"
            strokeWidth="2.7"
            stroke="rgb(0,0,0)"
            fill={isSelected(3, "熟門熟路", "bg")}
            rx="2"
            height="44.3"
            width="94.3"
            y="566.44829"
            x="814.17056"
          />
          <text
            fill="#FFFFFF"
            stroke="rgb(0,0,0)"
            strokeWidth="0"
            x="682.39219"
            y="514.45687"
            id="svg_54"
            fontSize="17px"
            textAnchor="start"
            xmlSpace="preserve"
          >
            網絡協議的相關經驗的掌握度
          </text>
          <text
            xmlSpace="preserve"
            textAnchor="start"
            fontSize="17px"
            id="svg_2"
            y="593.59829"
            x="617.14834"
            strokeWidth="0"
            stroke="rgb(0,0,0)"
            fill={isSelected(3, "剛入門", "text")}
          >
            剛入門
          </text>
          <text
            xmlSpace="preserve"
            textAnchor="start"
            fontSize="17px"
            id="svg_3"
            y="594.41794"
            x="725.96799"
            strokeWidth="0"
            stroke="rgb(0,0,0)"
            fill={isSelected(3, "已上手", "text")}
          >
            已上手
          </text>
          <text
            xmlSpace="preserve"
            textAnchor="start"
            fontSize="17px"
            id="svg_4"
            y="593.59829"
            x="827.82056"
            strokeWidth="0"
            stroke="rgb(0,0,0)"
            fill={isSelected(3, "熟門熟路", "text")}
          >
            熟門熟路
          </text>
          <text
            xmlSpace="preserve"
            textAnchor="start"
            fontSize="17px"
            id="svg_7"
            y="592.59829"
            x="931.13211"
            strokeWidth="0"
            stroke="rgb(0,0,0)"
            fill={isSelected(3, "這個世界好難懂", "text")}
          >
            這個世界好難懂
          </text>
          <text
            fill="#FFFFFF"
            stroke="rgb(43,120,228)"
            strokeWidth="0"
            strokeDasharray="0.8 12"
            x="687"
            y="363.5"
            id="svg_11"
            fontSize="17"
            fontFamily="'Alegreya'"
            textAnchor="start"
            xmlSpace="preserve"
          >
            主要使用的程式語言
          </text>
          <text
            fill="#FFFFFF"
            stroke="rgb(43,120,228)"
            strokeWidth="0"
            strokeDasharray="0.8 12"
            x="1203"
            y="709.5"
            id="svg_12"
            fontSize="17px"
            textAnchor="start"
            xmlSpace="preserve"
          >
            版本控制服務
          </text>
          <g
            id="svg_17"
            data-group-id="104-vcs-hosting"
            className="clickable-group"
            stroke="null"
          >
            <rect
              id="svg_16"
              strokeWidth="2.7"
              fill="rgb(17 24 39)"
              rx="2"
              height="47.3"
              width="228.29682"
              y="678.27175"
              x="810.83931"
              stroke="rgb(0,0,0)"
            />
          </g>
          <text
            stroke="rgb(43,120,228)"
            fill="#FFFFFF"
            strokeWidth="0"
            strokeDasharray="0.8 12"
            x="874.22208"
            y="707.6111"
            id="svg_13"
            fontSize="17px"
            textAnchor="start"
            xmlSpace="preserve"
          >
            專案管理工具
          </text>
          <text
            fill={isSelected(5, "Jira", "text")}
            stroke="rgb(43,120,228)"
            strokeWidth="0"
            strokeDasharray="0.8 12"
            x="833"
            y="816.5"
            id="svg_22"
            fontSize="17px"
            textAnchor="start"
            xmlSpace="preserve"
          >
            Jira
          </text>
          <text
            fill={isSelected(5, "Jarvis Wiki (Confluence)", "text")}
            stroke="rgb(43,120,228)"
            strokeWidth="0"
            strokeDasharray="0.8 12"
            x="837"
            y="868.5"
            id="svg_23"
            fontSize="17px"
            textAnchor="start"
            xmlSpace="preserve"
          >
            Jarvis Wiki (Confluence)
          </text>
          <text
            fill={isSelected(5, "ClickUp", "text")}
            stroke="rgb(43,120,228)"
            strokeWidth="0"
            strokeDasharray="0.8 12"
            x="895"
            y="816.5"
            id="svg_24"
            fontSize="17px"
            textAnchor="start"
            xmlSpace="preserve"
          >
            ClickUp
          </text>
          <text
            fill={isSelected(5, "Trello", "text")}
            stroke="rgb(43,120,228)"
            strokeWidth="0"
            strokeDasharray="0.8 12"
            x="985"
            y="815.5"
            id="svg_53"
            fontSize="17px"
            textAnchor="start"
            xmlSpace="preserve"
          >
            Trello
          </text>
          <g
            id="svg_102"
            data-group-id="105-cloud-providers:linode"
            className="clickable-group"
            stroke="null"
          >
            <rect
              id="svg_100"
              strokeWidth="2.7"
              fill={isSelected(6, "Unit testing", "bg")}
              rx="2"
              height="44.3"
              width="219.3"
              y="346.68502"
              x="170.02134"
              stroke="rgb(0,0,0)"
            />
            <g id="svg_101" stroke="null" />
          </g>
          <g
            id="svg_105"
            data-group-id="105-cloud-providers:linode"
            className="clickable-group"
            stroke="null"
          >
            <rect
              id="svg_103"
              strokeWidth="2.7"
              fill={isSelected(6, "API testing", "bg")}
              rx="2"
              height="44.3"
              width="219.3"
              y="396.35132"
              x="170.79913"
              stroke="rgb(0,0,0)"
            />
            <g id="svg_104" stroke="null" />
          </g>
          <g
            id="svg_108"
            data-group-id="105-cloud-providers:linode"
            className="clickable-group"
            stroke="null"
          >
            <rect
              id="svg_106"
              strokeWidth="2.7"
              fill={isSelected(6, "End-to-end testing", "bg")}
              rx="2"
              height="44.3"
              width="219.3"
              y="449.35094"
              x="170.79913"
              stroke="rgb(0,0,0)"
            />
            <g id="svg_107" stroke="null" />
          </g>
          <g
            id="svg_111"
            data-group-id="105-cloud-providers:linode"
            className="clickable-group"
            stroke="null"
          >
            <rect
              id="svg_109"
              strokeWidth="2.7"
              fill={isSelected(6, "Integration testing", "bg")}
              rx="2"
              height="44.3"
              width="219.3"
              y="500.23946"
              x="170.79913"
              stroke="rgb(0,0,0)"
            />
            <g id="svg_110" stroke="null" />
          </g>
          <g
            id="svg_114"
            data-group-id="105-cloud-providers:linode"
            className="clickable-group"
            stroke="null"
          >
            <rect
              id="svg_112"
              strokeWidth="2.7"
              fill={isSelected(6, "Performance testing", "bg")}
              rx="2"
              height="44.3"
              width="219.3"
              y="550.79466"
              x="169.68802"
              stroke="rgb(0,0,0)"
            />
            <g id="svg_113" stroke="null" />
          </g>
          <text
            fill={isSelected(6, "Unit testing", "text")}
            stroke="rgb(43,120,228)"
            strokeWidth="0"
            strokeDasharray="0.8 12"
            x="234"
            y="375.5"
            id="svg_8"
            fontSize="17px"
            textAnchor="start"
            xmlSpace="preserve"
          >
            Unit testing
          </text>
          <text
            fill={isSelected(6, "API testing", "text")}
            stroke="rgb(43,120,228)"
            strokeWidth="0"
            strokeDasharray="0.8 12"
            x="237"
            y="424.5"
            id="svg_9"
            fontSize="17px"
            textAnchor="start"
            xmlSpace="preserve"
          >
            API testing
          </text>
          <text
            fill={isSelected(6, "End-to-end testing", "text")}
            stroke="rgb(43,120,228)"
            strokeWidth="0"
            strokeDasharray="0.8 12"
            x="209"
            y="476.5"
            id="svg_18"
            fontSize="17px"
            textAnchor="start"
            xmlSpace="preserve"
          >
            End-to-end testing
          </text>
          <text
            fill={isSelected(6, "Integration testing", "text")}
            stroke="rgb(43,120,228)"
            strokeWidth="0"
            strokeDasharray="0.8 12"
            x="209"
            y="527.5"
            id="svg_19"
            fontSize="17px"
            textAnchor="start"
            xmlSpace="preserve"
          >
            Integration testing
          </text>
          <text
            fill={isSelected(6, "Performance testing", "text")}
            stroke="rgb(43,120,228)"
            strokeWidth="0"
            strokeDasharray="0.8 12"
            x="200"
            y="577.5"
            id="svg_55"
            fontSize="17px"
            textAnchor="start"
            xmlSpace="preserve"
          >
            Performance testing
          </text>
          <g
            id="svg_59"
            data-group-id="105-cloud-providers:linode"
            className="clickable-group"
            stroke="null"
          >
            <rect
              id="svg_57"
              strokeWidth="2.7"
              fill={isSelected(6, "Static Code Analysis", "bg")}
              rx="2"
              height="44.3"
              width="219.3"
              y="600.79466"
              x="169.68802"
              stroke="rgb(0,0,0)"
            />
            <g id="svg_58" stroke="null" />
          </g>
          <text
            fill={isSelected(6, "Static Code Analysis", "text")}
            stroke="rgb(43,120,228)"
            strokeWidth="0"
            strokeDasharray="0.8 12"
            x="204"
            y="629.5"
            id="svg_56"
            fontSize="17px"
            textAnchor="start"
            xmlSpace="preserve"
          >
            Static Code Analysis
          </text>
          <text
            xmlSpace="preserve"
            textAnchor="start"
            fontSize="17px"
            id="svg_89"
            y="880.5"
            x="596"
            strokeDasharray="undefined"
            strokeWidth="0"
            stroke="rgb(43,120,228)"
            fill={isSelected(7, "Alibaba Cloud", "text")}
          >
            Alibaba Cloud
          </text>
          <text
            xmlSpace="preserve"
            textAnchor="start"
            fontSize="17px"
            strokeWidth="0"
            id="svg_97"
            y="848.5"
            x="246"
            fill="#FFFFFF"
          >
            雲端服務
          </text>
          <path
            id="svg_118"
            strokeDasharray="0.8 12"
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="4"
            stroke="rgb(43,120,228)"
            fill="none"
            d="m661,1042.75758q0,39.03458 0,78.24242"
          />
          <path
            id="svg_119"
            strokeDasharray="0.8 12"
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="4"
            stroke="rgb(43,120,228)"
            fill="none"
            d="m507,1041.75758q0,39.03458 0,78.24242"
          />
          <g
            id="svg_130"
            data-group-id="100-cloud-providers:aws"
            className="clickable-group"
            stroke="null"
          >
            <rect
              id="svg_125"
              strokeWidth="2.7"
              fill={isSelected(8, "Bare Metal (實體主機)", "bg")}
              rx="2"
              height="43.3"
              width="139.3"
              y="962.35"
              x="430.35"
              stroke="rgb(0,0,0)"
            />
          </g>
          <g
            id="svg_134"
            data-group-id="101-cloud-providers:google-cloud"
            className="clickable-group"
          >
            <rect
              id="svg_131"
              strokeWidth="2.7"
              stroke="rgb(0,0,0)"
              fill={isSelected(8, "Virtual Machines", "bg")}
              rx="2"
              height="44.3"
              width="146.3"
              y="961.35"
              x="578.35"
            />
          </g>
          <g
            id="svg_142"
            data-group-id="102-cloud-providers:azure"
            className="clickable-group"
          >
            <rect
              id="svg_135"
              strokeWidth="2.7"
              stroke="rgb(0,0,0)"
              fill={isSelected(8, "Containers", "bg")}
              rx="2"
              height="44.3"
              width="141.3"
              y="1012.35"
              x="429.35"
            />
          </g>
          <g
            id="svg_144"
            data-group-id="104-cloud-providers:digital-ocean"
            className="clickable-group"
          >
            <rect
              id="svg_143"
              strokeWidth="2.7"
              stroke="rgb(0,0,0)"
              fill={isSelected(8, "Serverless", "bg")}
              rx="2"
              height="44.3"
              width="146.3"
              y="1012.35"
              x="579.35"
            />
          </g>
          <text
            xmlSpace="preserve"
            textAnchor="start"
            fontSize="17px"
            id="svg_149"
            y="1038.5"
            x="615"
            strokeDasharray="undefined"
            strokeWidth="0"
            stroke="rgb(43,120,228)"
            fill={isSelected(8, "Serverless", "text")}
          >
            Serverless
          </text>
          <g
            id="svg_116"
            data-group-id="107-cloud-providers"
            className="clickable-group"
          >
            <rect
              id="svg_115"
              strokeWidth="2.7"
              stroke="rgb(0,0,0)"
              fill="rgb(17 24 39)"
              rx="2"
              height="46.3"
              width="301.3"
              y="1099.35"
              x="429.35"
            />
          </g>
          <text
            xmlSpace="preserve"
            textAnchor="start"
            fontSize="17px"
            strokeWidth="0"
            id="svg_117"
            y="1127.5"
            x="526"
            fill="#FFFFFF"
          >
            基礎設施架構
          </text>
          <text
            xmlSpace="preserve"
            textAnchor="start"
            fontSize="17px"
            id="svg_150"
            y="1039.5"
            x="461"
            strokeDasharray="undefined"
            strokeWidth="0"
            stroke="rgb(43,120,228)"
            fill={isSelected(8, "Containers", "text")}
          >
            Containers
          </text>
          <text
            xmlSpace="preserve"
            textAnchor="start"
            fontSize="17px"
            id="svg_151"
            y="988.5"
            x="462"
            strokeDasharray="undefined"
            strokeWidth="0"
            stroke="rgb(43,120,228)"
            fill={isSelected(8, "Bare Metal (實體主機)", "text")}
          >
            Bare Metal
          </text>
          <text
            xmlSpace="preserve"
            textAnchor="start"
            fontSize="17px"
            id="svg_152"
            y="988.5"
            x="588"
            strokeDasharray="undefined"
            strokeWidth="0"
            stroke="rgb(43,120,228)"
            fill={isSelected(8, "Virtual Machines", "text")}
          >
            Virtual Machines
          </text>
          <g
            id="svg_159"
            data-group-id="107-cloud-providers"
            className="clickable-group"
          >
            <rect
              id="svg_158"
              strokeWidth="2.7"
              stroke="rgb(0,0,0)"
              fill="rgb(17 24 39)"
              rx="2"
              height="46.3"
              width="301.3"
              y="1095.35"
              x="821.35"
            />
          </g>
          <text
            xmlSpace="preserve"
            textAnchor="start"
            fontSize="17px"
            strokeWidth="0"
            id="svg_160"
            y="1123.5"
            x="910"
            fill="#FFFFFF"
          >
            基礎設施部署工具
          </text>
          <g
            id="svg_166"
            data-group-id="100-cloud-providers:aws"
            className="clickable-group"
          >
            <rect
              id="svg_165"
              strokeWidth="2.7"
              stroke="rgb(0,0,0)"
              fill={isSelected(9, "AWS CDK", "bg")}
              rx="2"
              height="43.3"
              width="138.3"
              y="956.35"
              x="818.35"
            />
          </g>
          <g
            id="svg_168"
            data-group-id="101-cloud-providers:google-cloud"
            className="clickable-group"
          >
            <rect
              id="svg_167"
              strokeWidth="2.7"
              stroke="rgb(0,0,0)"
              fill={isSelected(9, "CloudFormation", "bg")}
              rx="2"
              height="44.3"
              width="146.3"
              y="955.35"
              x="966.35"
            />
          </g>
          <g
            id="svg_170"
            data-group-id="102-cloud-providers:azure"
            className="clickable-group"
          >
            <rect
              id="svg_169"
              strokeWidth="2.7"
              stroke="rgb(0,0,0)"
              fill={isSelected(9, "Terraform", "bg")}
              rx="2"
              height="44.3"
              width="141.3"
              y="1006.35"
              x="817.35"
            />
          </g>
          <g
            id="svg_173"
            data-group-id="104-cloud-providers:digital-ocean"
            className="clickable-group"
          >
            <rect
              id="svg_172"
              strokeWidth="2.7"
              stroke="rgb(0,0,0)"
              fill={isSelected(9, "Serverless", "bg")}
              rx="2"
              height="44.3"
              width="146.3"
              y="1006.35"
              x="967.35"
            />
          </g>
          <text
            xmlSpace="preserve"
            textAnchor="start"
            fontSize="17px"
            id="svg_174"
            y="1032.5"
            x="1003"
            strokeDasharray="undefined"
            strokeWidth="0"
            stroke="rgb(43,120,228)"
            fill={isSelected(9, "Serverless", "text")}
          >
            Serverless
          </text>
          <text
            xmlSpace="preserve"
            textAnchor="start"
            fontSize="17px"
            id="svg_175"
            y="1033.5"
            x="854"
            strokeDasharray="undefined"
            strokeWidth="0"
            stroke="rgb(43,120,228)"
            fill={isSelected(9, "Terraform", "text")}
          >
            Terraform
          </text>
          <text
            xmlSpace="preserve"
            textAnchor="start"
            fontSize="17px"
            id="svg_176"
            y="984.5"
            x="850"
            strokeDasharray="undefined"
            strokeWidth="0"
            stroke="rgb(43,120,228)"
            fill={isSelected(9, "AWS CDK", "text")}
          >
            AWS CDK
          </text>
          <text
            xmlSpace="preserve"
            textAnchor="start"
            fontSize="17px"
            id="svg_177"
            y="982.5"
            x="980"
            strokeDasharray="undefined"
            strokeWidth="0"
            stroke="rgb(43,120,228)"
            fill={isSelected(9, "CloudFormation", "text")}
          >
            CloudFormation
          </text>
          <g
            id="svg_180"
            data-group-id="104-cloud-providers:albaba-cloud"
            className="clickable-group"
            stroke="null"
          >
            <rect
              id="svg_178"
              strokeWidth="2.7"
              fill={isSelected(10, "Yes", "bg")}
              rx="2"
              height="43.3"
              width="100.29995"
              y="1225.35"
              x="970.35"
              stroke="rgb(0,0,0)"
            />
            <g id="svg_179" stroke="null" />
          </g>
          <text
            fill={isSelected(10, "Yes", "text")}
            stroke="rgb(43,120,228)"
            strokeWidth="0"
            strokeDasharray="0.8 12"
            x="1008"
            y="1252.5"
            id="svg_181"
            fontSize="17px"
            textAnchor="start"
            xmlSpace="preserve"
          >
            Yes
          </text>
          <g
            id="svg_187"
            data-group-id="104-vcs-hosting"
            className="clickable-group"
            stroke="null"
          >
            <rect
              id="svg_186"
              strokeWidth="2.7"
              fill="rgb(17 24 39)"
              rx="2"
              height="47.3"
              width="218.29683"
              y="684.27175"
              x="170.83931"
              stroke="rgb(0,0,0)"
            />
          </g>
          <text
            fill="#FFFFFF"
            stroke="rgb(43,120,228)"
            strokeWidth="0"
            strokeDasharray="0.8 12"
            x="220.32571"
            y="713.92943"
            id="svg_99"
            fontSize="17px"
            textAnchor="start"
            xmlSpace="preserve"
          >
            自動化測試項目
          </text>
          <g
            id="svg_74"
            data-group-id="104-cloud-providers:albaba-cloud"
            className="clickable-group"
            stroke="null"
          >
            <rect
              id="svg_1"
              strokeWidth="2.7"
              fill={isSelected(10, "No", "bg")}
              rx="2"
              height="43.3"
              width="100.29995"
              y="1276.35"
              x="972.35"
              stroke="rgb(0,0,0)"
            />
            <g id="svg_6" stroke="null" />
          </g>
          <text
            fill={isSelected(10, "No", "text")}
            stroke="rgb(43,120,228)"
            strokeWidth="0"
            strokeDasharray="0.8 12"
            x="1013"
            y="1304.5"
            id="svg_185"
            fontSize="17px"
            textAnchor="start"
            xmlSpace="preserve"
          >
            No
          </text>
          <g
            id="svg_132"
            data-group-id="113-secret-management"
            className="clickable-group"
          >
            <rect
              id="svg_98"
              strokeWidth="2.7"
              stroke="rgb(0,0,0)"
              fill="rgb(17 24 39)"
              rx="2"
              height="44.3"
              width="234.3"
              y="1385.35"
              x="720.35"
            />
          </g>
          <text
            fill="#FFFFFF"
            x="787"
            y="1414.5"
            id="svg_140"
            strokeWidth="0"
            fontSize="17px"
            textAnchor="start"
            xmlSpace="preserve"
          >
            配置管理工具
          </text>
          <g
            id="svg_193"
            data-group-id="113-secret-management"
            className="clickable-group"
          >
            <rect
              id="svg_192"
              strokeWidth="2.7"
              stroke="rgb(0,0,0)"
              fill="rgb(17 24 39)"
              rx="2"
              height="44.3"
              width="234.3"
              y="1384.35"
              x="391.35"
            />
          </g>
          <text
            fill="#FFFFFF"
            x="458"
            y="1413.5"
            id="svg_194"
            strokeWidth="0"
            fontSize="17px"
            textAnchor="start"
            xmlSpace="preserve"
          >
            CI / CD 工具
          </text>
          <text
            fill={isSelected(12, "Others", "text")}
            x="554"
            y="1322.5"
            id="svg_195"
            strokeWidth="0"
            fontSize="17px"
            textAnchor="start"
            xmlSpace="preserve"
          >
            Others
          </text>
          <g
            id="svg_201"
            data-group-id="100-containers:docker-swarm"
            className="clickable-group"
            stroke="null"
          >
            <rect
              id="svg_198"
              strokeWidth="2.7"
              fill={isSelected(13, "Kubernetes", "bg")}
              rx="2"
              height="43.3"
              width="217.29999"
              y="1603.35"
              x="652.35"
              stroke="rgb(0,0,0)"
            />
          </g>
          <text
            fill={isSelected(13, "Kubernetes", "text")}
            stroke="null"
            strokeWidth="0"
            x="720"
            y="1629.5"
            id="svg_203"
            fontSize="17px"
            textAnchor="start"
            xmlSpace="preserve"
          >
            Kubernetes
          </text>
          <text
            fill={isSelected(13, "Docker Swarm / Compose", "text")}
            x="663"
            y="1581.5"
            id="svg_204"
            strokeWidth="0"
            fontSize="17px"
            textAnchor="start"
            xmlSpace="preserve"
          >
            Docker Swarm / Compose
          </text>
          <text
            fill="#FFFFFF"
            stroke="null"
            strokeWidth="0"
            x="220"
            y="1604.5"
            id="svg_207"
            fontSize="17px"
            textAnchor="start"
            xmlSpace="preserve"
          >
            容器化管理工具
          </text>
          <text
            fill="#FFFFFF"
            x="520"
            y="1837.5"
            id="svg_215"
            strokeWidth="0"
            fontSize="17px"
            textAnchor="start"
            xmlSpace="preserve"
          >
            系統監控軟體
          </text>
          <text
            fill={isSelected(14, "Icinga", "text")}
            x="484"
            y="1917.5"
            id="svg_216"
            strokeWidth="0"
            fontSize="17px"
            textAnchor="start"
            xmlSpace="preserve"
          >
            Icinga
          </text>
          <g
            id="svg_218"
            data-group-id="114-infrastructure-monitoring"
            className="clickable-group"
          >
            <rect
              id="svg_217"
              strokeWidth="2.7"
              stroke="rgb(0,0,0)"
              fill="rgb(17 24 39)"
              rx="2"
              height="44.3"
              width="235.3"
              y="1810.35"
              x="886.35"
            />
          </g>
          <text
            fill="#FFFFFF"
            x="956"
            y="1837.5"
            id="svg_219"
            strokeWidth="0"
            fontSize="17px"
            textAnchor="start"
            xmlSpace="preserve"
          >
            Logs 管理工具
          </text>
          <text
            fill={isSelected(15, "Graylog", "text")}
            x="1050"
            y="1915.5"
            id="svg_220"
            strokeWidth="0"
            fontSize="17px"
            textAnchor="start"
            xmlSpace="preserve"
          >
            Graylog
          </text>
          <text
            fill={isSelected(15, "CloudWatch", "text")}
            strokeWidth="0"
            x="912"
            y="1915.5"
            id="svg_221"
            fontSize="17px"
            textAnchor="start"
            xmlSpace="preserve"
          >
            CloudWatch
          </text>
          <path
            stroke="rgb(43,120,228)"
            id="svg_223"
            strokeDasharray="undefined"
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="4"
            fill="none"
            d="m1253.54542,2069.64256q-247.43984,0 -494.87969,0"
          />
          <path
            fill="none"
            stroke="rgb(43,120,228)"
            strokeWidth="4"
            strokeDasharray="0.8 12"
            opacity="NaN"
            d="m693,2477"
            id="svg_226"
          />
          <path
            fill="none"
            stroke="rgb(43,120,228)"
            strokeWidth="4"
            strokeDasharray="0.8 12"
            opacity="NaN"
            d="m680,2300"
            id="svg_227"
          />
        </g>
      </svg>
    </div>
  );
};
export default DevopsRoadmap;
