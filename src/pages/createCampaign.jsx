import { useState, useEffect } from "react";
import api from "../api/api";

function CreateCampaign() {
  const [isPop, setIsPop] = useState(false);
  const [targetGroupList, setTargetGroupList] = useState([]);
  const [targetGroupSelected, setTargetGroupSelected] = useState([]);
  const [scriptTemplateList, setScriptTemplateList] = useState([]);
  const [openningMent, setOpenningMent] = useState("");
  const [serviceMent, setServiceMent] = useState("");
  const [temptingMent, setTemptingMent] = useState("");
  const [banMent, setBanMent] = useState("");
  const [addedQment, setAddedQment] = useState("");
  const [endingMent, setEndingMent] = useState("");

  const [isOpenningMent, setIsOpenningMent] = useState(true);
  const [isServiceMent, setIsServiceMent] = useState(false);
  const [isTemptingMent, setIsTemptingMent] = useState(false);
  const [isBanMent, setIsBanMent] = useState(false);
  const [isAddedQment, setIsAddedQment] = useState(false);
  const [isEndingMent, setIsEndingMent] = useState(false);

  const [campaignTitle, setCampaignTitle] = useState("");
  const [campaignDescription, setCampaignDescription] = useState("");
  const [aiNameForCreate, setAiNameForCreate] = useState("");
  const [aiLearningInfoForCreate, setAiLearningInfoForCreate] = useState("");

  const [aiAgents, setAiAgents] = useState([]);
  const [selectedAiAgentIndex, setSelectedAiAgentIndex] = useState("");

  const [passingScore, setPassingScore] = useState(70);

  const [handoffConditions, setHandoffConditions] = useState([
    {
      id: "PRICE_INQUIRY",
      enabled: true,
    },
    {
      id: "REPEATED_QUESTION",
      enabled: true,
      count: 2,
    },
    {
      id: "REQUEST_COUNSELOR",
      enabled: true,
    },
    {
      id: "AI_RESPONSE_FAILED",
      enabled: true,
    },
    {
      id: "CONTRACT_INTENT",
      enabled: true,
    },
    {
      id: "BLOCKED_KEYWORD",
      enabled: true,
      keywords: "",
    },
    {
      id: "CUSTOM",
      enabled: false,
      text: "",
    },
  ]);
  const [callSettings, setCallSettings] = useState({
    callerNumber: "02-1234-5678",
    startTime: "09:00",
    endTime: "18:00",
    weekdays: ["MON", "TUE", "WED", "THU", "FRI"],
    maxConcurrentCalls: 10,
    callIntervalSeconds: 3,
    retryCount: 2,
  });

  const passingScoreOptions = [50, 60, 70, 80, 90];

  const getTargetList = async () => {
    try {
      const res = await api.get("/api/clients_groups_list", {
        params: {
          group_name: "",
          writer: "",
        },
      });

      setTargetGroupList(res.data.items || []);
    } catch (err) {
      console.error(err);

      alert(err.response?.data?.message || "발신대상 그룹 목록 조회 실패");
    }
  };

  const getScriptTemplateList = async () => {
    try {
      const res = await api.get("/api/script_template_list", {
        params: {
          title: "",
          writer: "",
        },
      });

      setScriptTemplateList(res.data.items || []);
    } catch (err) {
      console.error("script template list error:", err);
      alert(
        err.response?.data?.message ||
          "스크립트 템플릿 목록 조회 중 오류가 발생했습니다.",
      );
    }
  };

  useEffect(() => {
    getTargetList();
    getScriptTemplateList();
  }, []);

  const getHandoffCondition = (id) => {
    return handoffConditions.find((item) => item.id === id);
  };

  const toggleHandoffCondition = (id) => {
    setHandoffConditions((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              enabled: !item.enabled,
            }
          : item,
      ),
    );
  };

  const changeHandoffConditionValue = (id, key, value) => {
    setHandoffConditions((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              [key]: value,
            }
          : item,
      ),
    );
  };

  const changeCallSetting = (key, value) => {
    setCallSettings((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const toggleWeekday = (day) => {
    setCallSettings((prev) => {
      const exists = prev.weekdays.includes(day);

      return {
        ...prev,
        weekdays: exists
          ? prev.weekdays.filter((item) => item !== day)
          : [...prev.weekdays, day],
      };
    });
  };

  const callerNumberOptions = [
    {
      value: "02-1234-5678",
      label: "02-1234-5678 (SK조달연구소 대표번호)",
    },
  ];

  const timeOptions = [
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
  ];

  const weekdayOptions = [
    { value: "MON", label: "월" },
    { value: "TUE", label: "화" },
    { value: "WED", label: "수" },
    { value: "THU", label: "목" },
    { value: "FRI", label: "금" },
    { value: "SAT", label: "토" },
    { value: "SUN", label: "일" },
  ];

  const maxConcurrentCallOptions = [1, 3, 5, 10, 20, 30];
  const callIntervalOptions = [3, 5, 10, 30, 60];
  const retryCountOptions = [0, 1, 2, 3];

  const makeCampaignPayload = (status) => {
    return {
      campaign_title: campaignTitle,
      campaign_desc: campaignDescription,

      ai_agents:
        selectedAiAgentIndex !== ""
          ? [aiAgents[Number(selectedAiAgentIndex)]]
          : [],
      target_group_ids: targetGroupSelected,

      script_json: {
        openning: openningMent,
        service: serviceMent,
        tempting: temptingMent,
        if_ban: banMent,
        added_question: addedQment,
        ending: endingMent,
      },

      transfer_conditions: {
        passingScore,
        handoffConditions,
      },

      call_settings: callSettings,

      status,
    };
  };

  const saveCampaign = async (status) => {
    try {
      if (!campaignTitle.trim()) {
        alert("캠페인 제목을 입력해 주세요.");
        return;
      }

      if (!targetGroupSelected.length) {
        alert("발신 대상 그룹을 선택해 주세요.");
        return;
      }
      if (selectedAiAgentIndex === "") {
        alert("AI 상담원을 선택해 주세요.");
        return;
      }

      if (!openningMent.trim()) {
        alert("오프닝 멘트를 입력해 주세요.");
        return;
      }

      const payload = makeCampaignPayload(status);

      const res = await api.post("/api/campaign", payload);

      if (!res.data.ok) {
        alert(res.data.message || "캠페인 저장 실패");
        return;
      }

      alert(
        status === "TEMP" ? "임시저장되었습니다." : "캠페인이 생성되었습니다.",
      );

      console.log("created campaign id:", res.data.id);
    } catch (err) {
      console.error("campaign save error:", err);
      alert(
        err.response?.data?.message || "캠페인 저장 중 오류가 발생했습니다.",
      );
    }
  };

  const createAiAgentInMemory = () => {
    if (!aiNameForCreate.trim()) {
      alert("AI 상담원 이름을 입력해 주세요.");
      return;
    }

    const newAgent = {
      name: aiNameForCreate,
      voice: "female_01",
      speed: "normal",
      tone: "friendly",
      learningInfo: aiLearningInfoForCreate,
    };

    setAiAgents((prev) => {
      const next = [...prev, newAgent];

      setSelectedAiAgentIndex(String(next.length - 1));

      return next;
    });

    setAiNameForCreate("");
    setAiLearningInfoForCreate("");
    setIsPop(false);
  };

  return (
    <>
      <div className="content_wrap">
        <h1>캠페인 생성</h1>
        <h5>새로운 아웃바운드 캠페인을 생성하세요.</h5>
        <div className="create_campaign_control">
          <div className="ai_agent_selector">
            Ai 상담원 선택
            <select
              value={selectedAiAgentIndex}
              onChange={(e) => setSelectedAiAgentIndex(e.target.value)}
            >
              <option value="">AI 상담원 선택</option>

              {aiAgents.map((agent, index) => (
                <option key={index} value={index}>
                  {agent.name}
                </option>
              ))}
            </select>
          </div>
          <button className="white fl">샘플듣기</button>
          <button
            className="blue fl"
            onClick={() => {
              setIsPop(true);
            }}
          >
            새로생성
          </button>
          <div className="fl_r">
            <button className="white" onClick={() => saveCampaign("TEMP")}>
              임시저장
            </button>
            <button className="blue" onClick={() => saveCampaign("READY")}>
              캠페인 생성
            </button>
          </div>
        </div>
        <div
          className="grid"
          style={{ width: "calc( 45% - 14px )", height: "323px" }}
        >
          <div className="grid_title">
            <div className="grid_title_no">1</div>기본정보
          </div>
          <div className="mid_title">
            캠페인 제목<span>*</span>
          </div>
          <input
            type="text"
            placeholder="예) 2026년 공공입찰 안내 캠페인"
            value={campaignTitle}
            onChange={(e) => {
              setCampaignTitle(e.target.value);
            }}
          />
          <div className="mid_title">캠페인 설명</div>
          <textarea
            placeholder="캠페인에 대한 간단한 설명을 입력해 주세요"
            value={campaignDescription}
            onChange={(e) => {
              setCampaignDescription(e.target.value);
            }}
          ></textarea>
        </div>
        <div
          className="grid"
          style={{ width: "calc( 55% - 14px )", height: "323px" }}
        >
          <div className="grid_title">
            <div className="grid_title_no">2</div>발신 대상 선택
          </div>
          <div className="mid_title">
            대상 그룹 선택<span>*</span>
          </div>
          <div className="select_box">
            <select
              onChange={(e) => {
                const value = Number(e.target.value);

                if (!value) return;

                setTargetGroupSelected((prev) => {
                  if (prev.includes(value)) return prev;
                  return [...prev, value];
                });
              }}
            >
              <option value="">그룹선택</option>

              {targetGroupList.map((data) => (
                <option key={data.id} value={data.id}>
                  {data.group_name}
                </option>
              ))}
            </select>
          </div>
          <div className="mid_title">선택된 그룹</div>

          {targetGroupSelected.map((id) => {
            const group = targetGroupList.find((item) => item.id === id);

            if (!group) return null;

            return (
              <div
                key={id}
                className="group_cell"
                onClick={() => {
                  setTargetGroupSelected((prev) =>
                    prev.filter((item) => item !== id),
                  );
                }}
              >
                {group.group_name}
              </div>
            );
          })}
        </div>

        <div
          className="grid"
          style={{ width: "calc( 55% - 14px )", height: "405px" }}
        >
          <div className="grid_title" style={{ position: "relative" }}>
            <div className="grid_title_no">3</div>AI 통화 스크립트
            <div
              className="select_box"
              style={{
                width: "200px",
                position: "absolute",
                right: "20px",
                top: "0px",
              }}
            >
              <select
                onChange={(e) => {
                  const id = Number(e.target.value);

                  if (!id) {
                    setOpenningMent("");
                    setServiceMent("");
                    setTemptingMent("");
                    setBanMent("");
                    setAddedQment("");
                    setEndingMent("");
                    return;
                  }

                  const template = scriptTemplateList.find(
                    (item) => item.id === id,
                  );

                  if (!template) return;

                  setOpenningMent(template.openning);
                  setServiceMent(template.service);
                  setTemptingMent(template.tempting);
                  setBanMent(template.if_ban);
                  setAddedQment(template.added_question);
                  setEndingMent(template.ending);
                }}
              >
                <option value="">템플릿을 선택해주세요</option>

                {scriptTemplateList.map((data) => (
                  <option key={data.id} value={data.id}>
                    {data.title}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="ment_wrap">
            <div className="ment_content">
              <button
                className={isOpenningMent ? "now" : ""}
                onClick={() => {
                  setIsOpenningMent(true);
                  setIsServiceMent(false);
                  setIsTemptingMent(false);
                  setIsBanMent(false);
                  setIsAddedQment(false);
                  setIsEndingMent(false);
                }}
              >
                1. 오프닝 멘트
              </button>
              <button
                className={isServiceMent ? "now" : ""}
                onClick={() => {
                  setIsOpenningMent(false);
                  setIsServiceMent(true);
                  setIsTemptingMent(false);
                  setIsBanMent(false);
                  setIsAddedQment(false);
                  setIsEndingMent(false);
                }}
              >
                2. 서비스 소개
              </button>
              <button
                className={isTemptingMent ? "now" : ""}
                onClick={() => {
                  setIsOpenningMent(false);
                  setIsServiceMent(false);
                  setIsTemptingMent(true);
                  setIsBanMent(false);
                  setIsAddedQment(false);
                  setIsEndingMent(false);
                }}
              >
                3. 관심 유도 질문
              </button>
              <button
                className={isBanMent ? "now" : ""}
                onClick={() => {
                  setIsOpenningMent(false);
                  setIsServiceMent(false);
                  setIsTemptingMent(false);
                  setIsBanMent(true);
                  setIsAddedQment(false);
                  setIsEndingMent(false);
                }}
              >
                4. 응답금지 키워드 관련 멘트
              </button>
              <button
                className={isAddedQment ? "now" : ""}
                onClick={() => {
                  setIsOpenningMent(false);
                  setIsServiceMent(false);
                  setIsTemptingMent(false);
                  setIsBanMent(false);
                  setIsAddedQment(true);
                  setIsEndingMent(false);
                }}
              >
                5. 추가 질문 (선택)
              </button>
              <button
                className={isEndingMent ? "now" : ""}
                onClick={() => {
                  setIsOpenningMent(false);
                  setIsServiceMent(false);
                  setIsTemptingMent(false);
                  setIsBanMent(false);
                  setIsAddedQment(false);
                  setIsEndingMent(true);
                }}
              >
                6. 마무리 멘트
              </button>
            </div>
            <div
              className="ment_content_rest"
              style={
                isOpenningMent ? { display: "block" } : { display: "none" }
              }
            >
              <b>오프닝 멘트</b>
              통화 시작시 AI가 고객에게 처음 하는 말입니다.
              <textarea
                placeholder="멘트를 입력해 주세요."
                value={openningMent}
                onChange={(e) => {
                  setOpenningMent(e.target.value);
                }}
              ></textarea>
            </div>
            <div
              className="ment_content_rest"
              style={isServiceMent ? { display: "block" } : { display: "none" }}
            >
              <b>서비스 소개</b>
              캠페인에서 내세우는 서비스에 대해 소개하는 말입니다.
              <textarea
                placeholder="멘트를 입력해 주세요."
                value={serviceMent}
                onChange={(e) => {
                  setServiceMent(e.target.value);
                }}
              ></textarea>
            </div>

            <div
              className="ment_content_rest"
              style={
                isTemptingMent ? { display: "block" } : { display: "none" }
              }
            >
              <b>관심유도 질문</b>
              고객의 관심유도를 위한 질문입니다.
              <textarea
                placeholder="멘트를 입력해 주세요."
                value={temptingMent}
                onChange={(e) => {
                  setTemptingMent(e.target.value);
                }}
              ></textarea>
            </div>

            <div
              className="ment_content_rest"
              style={isBanMent ? { display: "block" } : { display: "none" }}
            >
              <b>응답금지 키워드 관련 멘트</b>
              AI 선에서 대답할 수 없는 질문이 나왔을 때 고객에게 하는 말입니다.
              <textarea
                placeholder="멘트를 입력해 주세요."
                value={banMent}
                onChange={(e) => {
                  setBanMent(e.target.value);
                }}
              ></textarea>
            </div>

            <div
              className="ment_content_rest"
              style={isAddedQment ? { display: "block" } : { display: "none" }}
            >
              <b>추가 질문 (선택)</b>
              AI가 고객에게서 얻고자 하는 정보를 위해 하는 추가질문입니다.
              <textarea
                placeholder="멘트를 입력해 주세요."
                value={addedQment}
                onChange={(e) => {
                  setAddedQment(e.target.value);
                }}
              ></textarea>
            </div>

            <div
              className="ment_content_rest"
              style={isEndingMent ? { display: "block" } : { display: "none" }}
            >
              <b>마무리 멘트</b>
              통화 종료시 마무리 멘트입니다.
              <textarea
                placeholder="멘트를 입력해 주세요."
                value={endingMent}
                onChange={(e) => {
                  setEndingMent(e.target.value);
                }}
              ></textarea>
            </div>
          </div>
          <div className="ment_help">
            * 너무 길지 않게 작성해 주세요. (한 문장 또는 두 문장)
            <br />
            * 고객이 이해하기 쉬운 표현을 사용해 주세요.
            <br />* 민감한 표현이나 과장된 표현은 사용하지 마세요.
          </div>
        </div>
        <div
          className="grid"
          style={{ width: "calc( 45% - 14px )", height: "405px" }}
        >
          <div className="grid_title">
            <div className="grid_title_no">4</div>상담원 연결 조건
          </div>
          <div className="mid_title">
            다음 조건 충족시 상담원에게 연결됩니다.
          </div>

          <div className="wid_50">
            <div className="check-list">
              <label className="custom-checkbox">
                <input
                  type="checkbox"
                  checked={
                    getHandoffCondition("PRICE_INQUIRY")?.enabled || false
                  }
                  onChange={() => toggleHandoffCondition("PRICE_INQUIRY")}
                />
                <span className="checkmark"></span>
                <span className="text">가격 문의 시</span>
              </label>

              <label className="custom-checkbox">
                <input
                  type="checkbox"
                  checked={
                    getHandoffCondition("REQUEST_COUNSELOR")?.enabled || false
                  }
                  onChange={() => toggleHandoffCondition("REQUEST_COUNSELOR")}
                />
                <span className="checkmark"></span>
                <span className="text">상담 요청 시</span>
              </label>

              <label className="custom-checkbox">
                <input
                  type="checkbox"
                  checked={
                    getHandoffCondition("CONTRACT_INTENT")?.enabled || false
                  }
                  onChange={() => toggleHandoffCondition("CONTRACT_INTENT")}
                />
                <span className="checkmark"></span>
                <span className="text">계약 의사 표현 시</span>
              </label>

              <label className="custom-checkbox">
                <input
                  type="checkbox"
                  checked={
                    getHandoffCondition("BLOCKED_KEYWORD")?.enabled || false
                  }
                  onChange={() => toggleHandoffCondition("BLOCKED_KEYWORD")}
                />
                <span className="checkmark"></span>
                <span className="text">응답 금지 키워드 문의 시</span>
              </label>

              <input
                type="text"
                placeholder="응답금지 키워드. 콤마(,) 로 구분해서 입력해줍니다."
                value={getHandoffCondition("BLOCKED_KEYWORD")?.keywords || ""}
                onChange={(e) =>
                  changeHandoffConditionValue(
                    "BLOCKED_KEYWORD",
                    "keywords",
                    e.target.value,
                  )
                }
              />
            </div>
          </div>

          <div className="wid_50">
            <div className="check-list">
              <label className="custom-checkbox">
                <input
                  type="checkbox"
                  checked={
                    getHandoffCondition("REPEATED_QUESTION")?.enabled || false
                  }
                  onChange={() => toggleHandoffCondition("REPEATED_QUESTION")}
                />
                <span className="checkmark"></span>
                <span className="text">반복 질문 발생시 (2회 이상)</span>
              </label>

              <label className="custom-checkbox">
                <input
                  type="checkbox"
                  checked={
                    getHandoffCondition("AI_RESPONSE_FAILED")?.enabled || false
                  }
                  onChange={() => toggleHandoffCondition("AI_RESPONSE_FAILED")}
                />
                <span className="checkmark"></span>
                <span className="text">AI 응답 실패 시</span>
              </label>

              <label className="custom-checkbox">
                <input
                  type="checkbox"
                  checked={getHandoffCondition("CUSTOM")?.enabled || false}
                  onChange={() => toggleHandoffCondition("CUSTOM")}
                />
                <span className="checkmark"></span>
                <span className="text">기타 조건(직접입력)</span>
              </label>

              <input
                type="text"
                placeholder="예) 특정 키워드 포함시"
                value={getHandoffCondition("CUSTOM")?.text || ""}
                onChange={(e) =>
                  changeHandoffConditionValue("CUSTOM", "text", e.target.value)
                }
              />
            </div>
          </div>
          <div className="clear"></div>
          <div className="mid_title">
            관심도 점수 임계값{" "}
            <span>(AI가 계산한 관심도 점수가 이 값 이상이면 상담원 연결)</span>
          </div>

          <div className="select_box" style={{ marginTop: "10px" }}>
            <select
              value={passingScore}
              onChange={(e) => setPassingScore(Number(e.target.value))}
            >
              {passingScoreOptions.map((score) => (
                <option key={score} value={score}>
                  {score}점 이상
                </option>
              ))}
            </select>
          </div>
        </div>
        <div
          className="grid"
          style={{ width: "calc( 100% - 14px )", height: "240px" }}
        >
          <div className="grid_title">
            <div className="grid_title_no">5</div>발신 설정
          </div>

          <table className="with_grid">
            <tbody>
              <tr>
                <th>
                  <div className="mid_title">
                    발신 번호<span>*</span>
                  </div>
                </th>
                <th>
                  <div className="mid_title">
                    발신 시간<span>*</span>
                  </div>
                </th>
                <th>
                  <div className="mid_title">
                    발신 요일<span>*</span>
                  </div>
                </th>
                <th>
                  <div className="mid_title">
                    최대 동시 발신 수<span>*</span>
                  </div>
                </th>
                <th>
                  <div className="mid_title">
                    발신 간격<span>*</span>
                  </div>
                </th>
                <th>
                  <div className="mid_title">
                    재시도 설정<span>*</span>
                  </div>
                </th>
              </tr>

              <tr>
                <td>
                  <div className="select_box">
                    <select
                      value={callSettings.callerNumber}
                      onChange={(e) =>
                        changeCallSetting("callerNumber", e.target.value)
                      }
                    >
                      {callerNumberOptions.map((item) => (
                        <option key={item.value} value={item.value}>
                          {item.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </td>

                <td>
                  <div className="select_box inline">
                    <select
                      value={callSettings.startTime}
                      onChange={(e) =>
                        changeCallSetting("startTime", e.target.value)
                      }
                    >
                      {timeOptions.map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>{" "}
                  <em
                    style={{
                      marginTop: "10px",
                      display: "inline-block",
                      verticalAlign: "top",
                    }}
                  >
                    ~
                  </em>{" "}
                  <div className="select_box inline">
                    <select
                      value={callSettings.endTime}
                      onChange={(e) =>
                        changeCallSetting("endTime", e.target.value)
                      }
                    >
                      {timeOptions.map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>
                </td>

                <td>
                  <div className="check-list row">
                    {weekdayOptions.map((day) => (
                      <label className="custom-checkbox" key={day.value}>
                        <input
                          type="checkbox"
                          checked={callSettings.weekdays.includes(day.value)}
                          onChange={() => toggleWeekday(day.value)}
                        />
                        <span className="checkmark"></span>
                        <span className="text">{day.label}</span>
                      </label>
                    ))}
                  </div>
                </td>

                <td>
                  <div className="select_box">
                    <select
                      value={callSettings.maxConcurrentCalls}
                      onChange={(e) =>
                        changeCallSetting(
                          "maxConcurrentCalls",
                          Number(e.target.value),
                        )
                      }
                    >
                      {maxConcurrentCallOptions.map((count) => (
                        <option key={count} value={count}>
                          {count}
                        </option>
                      ))}
                    </select>
                  </div>
                </td>

                <td>
                  <div className="select_box">
                    <select
                      value={callSettings.callIntervalSeconds}
                      onChange={(e) =>
                        changeCallSetting(
                          "callIntervalSeconds",
                          Number(e.target.value),
                        )
                      }
                    >
                      {callIntervalOptions.map((seconds) => (
                        <option key={seconds} value={seconds}>
                          {seconds}초
                        </option>
                      ))}
                    </select>
                  </div>
                </td>

                <td>
                  <div className="select_box">
                    <select
                      value={callSettings.retryCount}
                      onChange={(e) =>
                        changeCallSetting("retryCount", Number(e.target.value))
                      }
                    >
                      {retryCountOptions.map((count) => (
                        <option key={count} value={count}>
                          {count}회
                        </option>
                      ))}
                    </select>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>

          <div className="mid_title">
            * 발신 시간 외에는 자동으로 발신이 중지됩니다. 재시도는 연결 실패 시
            자동으로 적용됩니다.
          </div>
        </div>
        <div
          className="create_campaign_control"
          style={{ marginTop: "20px", float: "left" }}
        >
          <div className="ai_agent_selector">
            Ai 상담원 선택
            <select
              value={selectedAiAgentIndex}
              onChange={(e) => setSelectedAiAgentIndex(e.target.value)}
            >
              <option value="">AI 상담원 선택</option>

              {aiAgents.map((agent, index) => (
                <option key={index} value={index}>
                  {agent.name}
                </option>
              ))}
            </select>
          </div>
          <button className="white fl">샘플듣기</button>
          <button
            className="blue fl"
            onClick={() => {
              setIsPop(true);
            }}
          >
            새로생성
          </button>
          <div className="fl_r">
            <button className="white" onClick={() => saveCampaign("TEMP")}>
              임시저장
            </button>
            <button className="blue" onClick={() => saveCampaign("READY")}>
              캠페인 생성
            </button>
          </div>
        </div>
      </div>
      {isPop && (
        <>
          <div className="popup_wrap">
            <div className="popup">
              <div className="popup_tit">
                AI 상담원 생성
                <div className="popup_close" onClick={() => setIsPop(false)}>
                  X
                </div>
              </div>
              <input
                type="text"
                placeholder="ai 상담원 이름"
                value={aiNameForCreate}
                onChange={(e) => {
                  setAiNameForCreate(e.target.value);
                }}
              />
              <select>
                <option>성우 선택</option>
                <option>성우 선택</option>
                <option>성우 선택</option>
                <option>성우 선택</option>
              </select>
              <select>
                <option>말 빠르기 선택</option>
                <option>성우 선택</option>
                <option>성우 선택</option>
                <option>성우 선택</option>
              </select>

              <select>
                <option>말투 선택</option>
                <option>성우 선택</option>
                <option>성우 선택</option>
                <option>성우 선택</option>
              </select>
              <button className="blue">들어보기</button>

              <textarea
                placeholder="캠페인 사전지식 학습내용(글자 입력)
본인의 직급이나 나이, 성격 같은거도 넣을 것, 완전 디테일 할수록 좋음. (고객하고 대화시 대응을 어떻게 할지도 구체적으로 넣음 좋습니다.)"
                value={aiLearningInfoForCreate}
                onChange={(e) => {
                  setAiLearningInfoForCreate(e.target.value);
                }}
              ></textarea>
              <div className="button_area">
                <button className="blue" onClick={createAiAgentInMemory}>
                  생성
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default CreateCampaign;
