import { useState } from "react";

function CreateCampaign() {
  const [isPop, setIsPop] = useState(false);

  return (
    <>
      <div className="content_wrap">
        <h1>캠페인 생성</h1>
        <h5>새로운 아웃바운드 캠페인을 생성하세요.</h5>
        <div className="create_campaign_control">
          <div className="ai_agent_selector">
            Ai 상담원 선택
            <select>
              <option>김수진</option>
              <option>김sddfsdfsfds수진</option>
              <option>김수진</option>
              <option>김수진</option>
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
            <button className="white">임시저장</button>
            <button className="blue">캠페인 생성</button>
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
          <input type="text" placeholder="예) 2026년 공공입찰 안내 캠페인" />
          <div className="mid_title">캠페인 설명</div>
          <textarea placeholder="캠페인에 대한 간단한 설명을 입력해 주세요"></textarea>
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
            <select>
              <option>그룹을 선택해주세요</option>
              <option>그룹을 선택해주세요</option>
              <option>그룹을 선택해주세요</option>
              <option>그룹을 선택해주세요</option>
            </select>
          </div>
          <div className="mid_title">선택된 그룹</div>
          <div className="group_cell">그룹명 1</div>
          <div className="group_cell">그룹명 2</div>
          <div className="group_cell">그룹명 3</div>
          <div className="group_cell">그룹명 4</div>
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
              <select>
                <option>템플릿을 선택해주세요</option>
                <option>그룹을 선택해주세요</option>
                <option>그룹을 선택해주세요</option>
                <option>그룹을 선택해주세요</option>
              </select>
            </div>
          </div>
          <div className="ment_wrap">
            <div className="ment_content">
              <button className="now">1. 오프닝 멘트</button>
              <button>2. 서비스 소개</button>
              <button>3. 관심 유도 질문</button>
              <button>4. 응답금지 키워드 관련 멘트</button>
              <button>5. 추가 질문 (선택)</button>
              <button>6. 마무리 멘트</button>
            </div>
            <div className="ment_content_rest">
              <b>오프닝 멘트</b>
              통화 시작시 AI가 고객에게 처음 하는 말입니다.
              <textarea placeholder="멘트를 입력해 주세요."></textarea>
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
                <input type="checkbox" defaultChecked />
                <span className="checkmark"></span>
                <span className="text">가격 문의 시</span>
              </label>

              <label className="custom-checkbox">
                <input type="checkbox" defaultChecked />
                <span className="checkmark"></span>
                <span className="text">상담 요청 시</span>
              </label>

              <label className="custom-checkbox">
                <input type="checkbox" defaultChecked />
                <span className="checkmark"></span>
                <span className="text">계약 의사 표현 시</span>
              </label>
              <label className="custom-checkbox">
                <input type="checkbox" defaultChecked />
                <span className="checkmark"></span>
                <span className="text">응답 금지 키워드 문의 시</span>
              </label>
              <input
                type="text"
                placeholder="응답금지 키워드. 콤마(,) 로 구분해서 입력해줍니다."
              />
            </div>
          </div>
          <div className="wid_50">
            <div className="check-list">
              <label className="custom-checkbox">
                <input type="checkbox" defaultChecked />
                <span className="checkmark"></span>
                <span className="text">반복 질문 발생시 (2회 이상)</span>
              </label>

              <label className="custom-checkbox">
                <input type="checkbox" defaultChecked />
                <span className="checkmark"></span>
                <span className="text">AI 응답 실패 시</span>
              </label>

              <label className="custom-checkbox">
                <input type="checkbox" />
                <span className="checkmark"></span>
                <span className="text">기타 조건(직접입력)</span>
              </label>

              <input type="text" placeholder="예) 특정 키워드 포함시" />
            </div>
          </div>
          <div className="clear"></div>
          <div className="mid_title">
            관심도 점수 임계값{" "}
            <span>(AI가 계산한 관심도 점수가 이 값 이상이면 상담원 연결)</span>
          </div>
          <div className="select_box" style={{ marginTop: "10px" }}>
            <select>
              <option>70점 이상</option>
              <option>70점 이상</option>
              <option>70점 이상</option>
              <option>70점 이상</option>
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
                    <select>
                      <option>02-1234-5678 (SK조달연구소 대표번호)</option>
                      <option>02-1234-5678 (SK조달연구소 대표번호)</option>
                      <option>02-1234-5678 (SK조달연구소 대표번호)</option>
                      <option>02-1234-5678 (SK조달연구소 대표번호)</option>
                    </select>
                  </div>
                </td>
                <td>
                  <div className="select_box inline">
                    <select>
                      <option>09:00</option>
                      <option>09:00</option>
                      <option>09:00</option>
                      <option>09:00</option>
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
                    <select>
                      <option>09:00</option>
                      <option>09:00</option>
                      <option>09:00</option>
                      <option>09:00</option>
                    </select>
                  </div>
                </td>
                <td>
                  <div className="check-list row">
                    <label className="custom-checkbox">
                      <input type="checkbox" defaultChecked />
                      <span className="checkmark"></span>
                      <span className="text">월</span>
                    </label>

                    <label className="custom-checkbox">
                      <input type="checkbox" defaultChecked />
                      <span className="checkmark"></span>
                      <span className="text">화</span>
                    </label>

                    <label className="custom-checkbox">
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                      <span className="text">수</span>
                    </label>
                    <label className="custom-checkbox">
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                      <span className="text">목</span>
                    </label>
                    <label className="custom-checkbox">
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                      <span className="text">금</span>
                    </label>
                    <label className="custom-checkbox">
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                      <span className="text">토</span>
                    </label>
                    <label className="custom-checkbox">
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                      <span className="text">일</span>
                    </label>
                  </div>
                </td>
                <td>
                  <div className="select_box">
                    <select>
                      <option>10</option>
                      <option>10</option>
                      <option>10</option>
                      <option>10</option>
                    </select>
                  </div>
                </td>

                <td>
                  <div className="select_box">
                    <select>
                      <option>3초</option>
                      <option>3초</option>
                      <option>3초</option>
                      <option>3초</option>
                    </select>
                  </div>
                </td>

                <td>
                  <div className="select_box">
                    <select>
                      <option>2회</option>
                      <option>2회</option>
                      <option>2회</option>
                      <option>2회</option>
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
            <select>
              <option>김수진</option>
              <option>김sddfsdfsfds수진</option>
              <option>김수진</option>
              <option>김수진</option>
            </select>
          </div>
          <button className="white fl">샘플듣기</button>
          <button className="blue fl">새로생성</button>
          <div className="fl_r">
            <button className="white">임시저장</button>
            <button className="blue">캠페인 생성</button>
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
              <input type="text" placeholder="ai 상담원 이름" />
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
              ></textarea>
              <div className="button_area">
                <button className="blue">생성</button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default CreateCampaign;
