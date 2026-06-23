import { useState, useEffect } from "react";
import MyDatePicker from "../components/datePicker";
import Pagination from "../components/pagination";
import { add } from "date-fns";
import api from "../api/api";

function ScriptTemplate() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [total, setTotal] = useState(10);
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [isPop, setIsPop] = useState(false);

  const [isCreate, setIsCreate] = useState(false);

  const [scriptTitle, setScriptTitle] = useState("");
  const [openning, setOpenning] = useState(true);
  const [openningMent, setOpenningMent] = useState("");
  const [service, setService] = useState(false);
  const [serviceMent, setServiceMent] = useState("");
  const [tempting, setTempting] = useState(false);
  const [temptingMent, setTemptingMent] = useState("");
  const [ifBan, setIfBan] = useState(false);
  const [ifBanMent, setIfBanMent] = useState("");
  const [addedQuestion, setAddedQuestion] = useState(false);
  const [addedQuestionMent, setAddedQuestionMent] = useState("");
  const [ending, setEnding] = useState(false);
  const [endingMent, setEndingMent] = useState("");
  const [searchTitle, setSearchTitle] = useState("");
  const [list, setList] = useState([]);
  const [searchWriter, setSearchWriter] = useState("");
  const [checkedIds, setCheckedIds] = useState([]);
  const [selectedScript, setSelectedScript] = useState(null);
  const [scriptTitleForRead, setScriptTitleForRead] = useState("");

  const scriptSave = async () => {
    try {
      if (!scriptTitle.trim()) {
        alert("스크립트 명을 입력해 주세요.");
        return;
      }

      const payload = {
        title: scriptTitle.trim(),
        writer: sessionStorage.getItem("adminName"),
        openning: openningMent.trim(),
        service: serviceMent.trim(),
        tempting: temptingMent.trim(),
        if_ban: ifBanMent.trim(),
        added_question: addedQuestionMent.trim(),
        ending: endingMent.trim(),
      };

      const res = await api.post("/api/script_template", payload);

      alert(res.data?.message || "스크립트 템플릿이 등록되었습니다.");

      setScriptTitle("");
      setOpenningMent("");
      setServiceMent("");
      setTemptingMent("");
      setIfBanMent("");
      setAddedQuestionMent("");
      setEndingMent("");

      setOpenning(true);
      setService(false);
      setTempting(false);
      setIfBan(false);
      setAddedQuestion(false);
      setEnding(false);

      setIsCreate(false);
      setPage(1);
      await getList(1);
    } catch (err) {
      console.error("scriptSave error:", err);
      alert(
        err.response?.data?.message ||
          "스크립트 템플릿 등록 중 오류가 발생했습니다.",
      );
    }
  };

  useEffect(() => {
    getList(page);
  }, [page]);

  const getList = async (targetPage = page) => {
    try {
      const res = await api.get("/api/script_template_list", {
        params: {
          page: targetPage,
          limit,
          title: searchTitle.trim(),
          writer: searchWriter.trim(),
        },
      });

      setList(res.data.items || []);
      setTotal(res.data.total || 0);
      setCheckedIds([]);
    } catch (err) {
      console.error("script template list error:", err);
      alert(
        err.response?.data?.message ||
          "스크립트 템플릿 목록 조회 중 오류가 발생했습니다.",
      );
    }
  };

  const deleteScripts = async () => {
    try {
      if (checkedIds.length === 0) {
        alert("삭제할 스크립트를 선택해 주세요.");
        return;
      }

      if (!window.confirm("선택한 스크립트를 삭제하시겠습니까?")) {
        return;
      }

      const res = await api.delete("/api/script_template", {
        data: {
          ids: checkedIds,
        },
      });

      alert(res.data.message);

      setCheckedIds([]);
      await getList(page);
    } catch (err) {
      console.error(err);
      alert(
        err.response?.data?.message || "스크립트 삭제 중 오류가 발생했습니다.",
      );
    }
  };

  return (
    <>
      <div className="content_wrap">
        <h1>스크립트 템플릿</h1>
        <h5>에이아이의 대본 템플릿을 만들어서 활용해주세요.</h5>

        <div className="big_tab">
          <div
            className={`big_tab_cell ${!isCreate && " ac"} `}
            onClick={() => {
              setIsCreate(false);
              setScriptTitle("");
              setOpenningMent("");
              setServiceMent("");
              setTemptingMent("");
              setIfBanMent("");
              setAddedQuestionMent("");
              setEndingMent("");

              setOpenning(true);
              setService(false);
              setTempting(false);
              setIfBan(false);
              setAddedQuestion(false);
              setEnding(false);
            }}
          >
            목록
          </div>
          <div
            className={`big_tab_cell ${isCreate && " ac"} `}
            onClick={() => {
              setIsCreate(true);
              setScriptTitle("");
              setOpenningMent("");
              setServiceMent("");
              setTemptingMent("");
              setIfBanMent("");
              setAddedQuestionMent("");
              setEndingMent("");

              setOpenning(true);
              setService(false);
              setTempting(false);
              setIfBan(false);
              setAddedQuestion(false);
              setEnding(false);
            }}
          >
            새로 생성
          </div>
        </div>
        <div id="list" style={{ display: !isCreate ? "block" : "none" }}>
          <div className="btn_control">
            <span>스크립트 명</span>
            <input
              type="text"
              placeholder="스크립트 명"
              value={searchTitle}
              onChange={(e) => {
                setSearchTitle(e.target.value);
              }}
            />{" "}
            &nbsp;&nbsp;&nbsp;&nbsp; <em>|</em>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span>작성자</span>
            <input
              type="text"
              placeholder="작성자"
              value={searchWriter}
              onChange={(e) => {
                setSearchWriter(e.target.value);
              }}
            />
            <button
              className="blue"
              onClick={() => {
                setPage(1);
                getList(1);
              }}
            >
              검색
            </button>{" "}
            <button className="blue" onClick={deleteScripts}>
              선택한 스크립트 삭제
            </button>
          </div>
          <table>
            <colgroup>
              <col style={{ width: "150px" }} />
            </colgroup>
            <thead>
              <tr>
                <th>
                  <div className="checks">
                    <input
                      id="check_all"
                      type="checkbox"
                      checked={
                        list.length > 0 &&
                        list.every((item) => checkedIds.includes(item.id))
                      }
                      onChange={(e) => {
                        if (e.target.checked) {
                          setCheckedIds(list.map((item) => item.id));
                        } else {
                          setCheckedIds([]);
                        }
                      }}
                    />
                    <label htmlFor={`check_all`}></label>
                  </div>
                </th>
                <th>스크립트 명</th>
                <th>작성자</th>
                <th>작성일</th>
              </tr>
            </thead>
            <tbody>
              {list.length > 0 ? (
                list.map((data, i) => {
                  return (
                    <tr
                      key={`script_${data.id || i}`}
                      onClick={() => {
                        setSelectedScript(data);
                        setScriptTitleForRead(data.title);
                        setIsPop(true);
                      }}
                    >
                      <td>
                        <div className="checks">
                          <input
                            type="checkbox"
                            id={`chk_${data.id}`}
                            checked={checkedIds.includes(data.id)}
                            onClick={(e) => {
                              e.stopPropagation();
                            }}
                            onChange={(e) => {
                              if (e.target.checked) {
                                setCheckedIds((prev) => [...prev, data.id]);
                              } else {
                                setCheckedIds((prev) =>
                                  prev.filter((id) => id !== data.id),
                                );
                              }
                            }}
                          />
                          <label
                            htmlFor={`chk_${data.id}`}
                            onClick={(e) => {
                              e.stopPropagation();
                            }}
                          ></label>
                        </div>
                      </td>
                      <td style={{ textAlign: "left" }}>{data.title}</td>
                      <td>{data.writer}</td>
                      <td>
                        {data.created_at
                          ? new Date(data.created_at).toLocaleDateString(
                              "ko-KR",
                            )
                          : "-"}
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan={4}>등록된 스크립트가 없습니다.</td>
                </tr>
              )}
            </tbody>
          </table>
          <Pagination
            total={total}
            page={page}
            limit={limit}
            onChange={setPage}
          />
        </div>
        <div id="create" style={{ display: isCreate ? "block" : "none" }}>
          <div
            className="grid"
            style={{ width: "calc( 55% - 14px )", height: "440px" }}
          >
            <div className="mid_title">
              스크립트 명<span>*</span>
            </div>
            <input
              type="text"
              placeholder=" 스크립트 명"
              value={scriptTitle}
              onChange={(e) => {
                setScriptTitle(e.target.value);
              }}
            />
            <div className="ment_wrap">
              <div className="ment_content">
                <button
                  className={openning ? "now" : ""}
                  onClick={() => {
                    setOpenning(true);
                    setService(false);
                    setTempting(false);
                    setIfBan(false);
                    setAddedQuestion(false);
                    setEnding(false);
                  }}
                >
                  1. 오프닝 멘트
                </button>
                <button
                  className={service ? "now" : ""}
                  onClick={() => {
                    setOpenning(false);
                    setService(true);
                    setTempting(false);
                    setIfBan(false);
                    setAddedQuestion(false);
                    setEnding(false);
                  }}
                >
                  2. 서비스 소개
                </button>
                <button
                  className={tempting ? "now" : ""}
                  onClick={() => {
                    setOpenning(false);
                    setService(false);
                    setTempting(true);
                    setIfBan(false);
                    setAddedQuestion(false);
                    setEnding(false);
                  }}
                >
                  3. 관심 유도 질문
                </button>
                <button
                  className={ifBan ? "now" : ""}
                  onClick={() => {
                    setOpenning(false);
                    setService(false);
                    setTempting(false);
                    setIfBan(true);
                    setAddedQuestion(false);
                    setEnding(false);
                  }}
                >
                  4. 응답금지 키워드 관련 멘트
                </button>
                <button
                  className={addedQuestion ? "now" : ""}
                  onClick={() => {
                    setOpenning(false);
                    setService(false);
                    setTempting(false);
                    setIfBan(false);
                    setAddedQuestion(true);
                    setEnding(false);
                  }}
                >
                  5. 추가 질문 (선택)
                </button>
                <button
                  className={ending ? "now" : ""}
                  onClick={() => {
                    setOpenning(false);
                    setService(false);
                    setTempting(false);
                    setIfBan(false);
                    setAddedQuestion(false);
                    setEnding(true);
                  }}
                >
                  6. 마무리 멘트
                </button>
              </div>
              <div
                className="ment_content_rest"
                style={{ display: openning ? "block" : "none" }}
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
                style={{ display: service ? "block" : "none" }}
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
                style={{ display: tempting ? "block" : "none" }}
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
                style={{ display: ifBan ? "block" : "none" }}
              >
                <b>응답금지 키워드 관련 멘트</b>
                AI 선에서 대답할 수 없는 질문이 나왔을 때 고객에게 하는
                말입니다.
                <textarea
                  placeholder="멘트를 입력해 주세요."
                  value={ifBanMent}
                  onChange={(e) => {
                    setIfBanMent(e.target.value);
                  }}
                ></textarea>
              </div>
              <div
                className="ment_content_rest"
                style={{ display: addedQuestion ? "block" : "none" }}
              >
                <b>추가 질문 (선택)</b>
                AI가 고객에게서 얻고자 하는 정보를 위해 하는 추가질문입니다.
                <textarea
                  placeholder="멘트를 입력해 주세요."
                  value={addedQuestionMent}
                  onChange={(e) => {
                    setAddedQuestionMent(e.target.value);
                  }}
                ></textarea>
              </div>
              <div
                className="ment_content_rest"
                style={{ display: ending ? "block" : "none" }}
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
          <div style={{ clear: "both" }}></div>
          <br />
          <div className="btn_control">
            <button className="blue" onClick={scriptSave}>
              스크립트 생성
            </button>
          </div>
        </div>
      </div>

      {isPop && (
        <>
          <div className="popup_wrap">
            <div className="popup">
              <div className="popup_tit">
                {scriptTitleForRead}
                <div className="popup_close" onClick={() => setIsPop(false)}>
                  X
                </div>
              </div>
              <div className="script_reader">
                <div className="reader_item">
                  <b>오프닝 멘트</b>
                  <pre>{selectedScript?.openning || "-"}</pre>
                </div>

                <div className="reader_item">
                  <b>서비스 소개</b>
                  <pre>{selectedScript?.service || "-"}</pre>
                </div>

                <div className="reader_item">
                  <b>관심 유도 질문</b>
                  <pre>{selectedScript?.tempting || "-"}</pre>
                </div>

                <div className="reader_item">
                  <b>응답금지 키워드 관련 멘트</b>
                  <pre>{selectedScript?.if_ban || "-"}</pre>
                </div>

                <div className="reader_item">
                  <b>추가 질문</b>
                  <pre>{selectedScript?.added_question || "-"}</pre>
                </div>

                <div className="reader_item">
                  <b>마무리 멘트</b>
                  <pre>{selectedScript?.ending || "-"}</pre>
                </div>

                <div className="reader_item">
                  <b>작성자</b>
                  <div>{selectedScript?.writer || "-"}</div>
                </div>

                <div className="reader_item">
                  <b>작성일</b>
                  <div>
                    {selectedScript?.created_at
                      ? new Date(selectedScript.created_at).toLocaleString(
                          "ko-KR",
                        )
                      : "-"}
                  </div>
                </div>
              </div>
              <div className="button_area">
                <button className="blue" onClick={() => setIsPop(false)}>
                  닫기
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default ScriptTemplate;
