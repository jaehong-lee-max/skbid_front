import { useState, useEffect } from "react";
import MyDatePicker from "../components/datePicker";
import Pagination from "../components/pagination";

function ScriptTemplate() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [total, setTotal] = useState(10);
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [isPop, setIsPop] = useState(false);

  const [isCreate, setIsCreate] = useState(false);

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
            }}
          >
            목록
          </div>
          <div
            className={`big_tab_cell ${isCreate && " ac"} `}
            onClick={() => {
              setIsCreate(true);
            }}
          >
            새로 생성
          </div>
        </div>
        <div id="list" style={{ display: !isCreate ? "block" : "none" }}>
          <div className="btn_control">
            <span>스크립트 명</span>
            <input type="text" placeholder="스크립트 명" />{" "}
            &nbsp;&nbsp;&nbsp;&nbsp; <em>|</em>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span>작성자</span>
            <input type="text" placeholder="작성자" />
            <button className="blue">검색</button>{" "}
            <button className="blue">선택한 스크립트 삭제</button>
          </div>
          <table>
            <colgroup>
              <col style={{ width: "150px" }} />
            </colgroup>
            <thead>
              <tr>
                <th>
                  <div className="checks">
                    <input type="checkbox" />
                    <label></label>
                  </div>
                </th>
                <th>스크립트 명</th>
                <th>작성자</th>
                <th>작성일</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="checks">
                    <input type="checkbox" />
                    <label></label>
                  </div>
                </td>
                <td style={{ textAlign: "left" }}>어쩌구 저쩌구 스크립트</td>
                <td>홍길동</td>
                <td>yyyy-mm-dd</td>
              </tr>
              <tr>
                <td>
                  <div className="checks">
                    <input type="checkbox" />
                    <label></label>
                  </div>
                </td>
                <td style={{ textAlign: "left" }}>어쩌구 저쩌구 스크립트</td>
                <td>홍길동</td>
                <td>yyyy-mm-dd</td>
              </tr>
              <tr>
                <td>
                  <div className="checks">
                    <input type="checkbox" />
                    <label></label>
                  </div>
                </td>
                <td style={{ textAlign: "left" }}>어쩌구 저쩌구 스크립트</td>
                <td>홍길동</td>
                <td>yyyy-mm-dd</td>
              </tr>
              <tr>
                <td>
                  <div className="checks">
                    <input type="checkbox" />
                    <label></label>
                  </div>
                </td>
                <td style={{ textAlign: "left" }}>어쩌구 저쩌구 스크립트</td>
                <td>홍길동</td>
                <td>yyyy-mm-dd</td>
              </tr>
              <tr>
                <td>
                  <div className="checks">
                    <input type="checkbox" />
                    <label></label>
                  </div>
                </td>
                <td style={{ textAlign: "left" }}>어쩌구 저쩌구 스크립트</td>
                <td>홍길동</td>
                <td>yyyy-mm-dd</td>
              </tr>
              <tr>
                <td>
                  <div className="checks">
                    <input type="checkbox" />
                    <label></label>
                  </div>
                </td>
                <td style={{ textAlign: "left" }}>어쩌구 저쩌구 스크립트</td>
                <td>홍길동</td>
                <td>yyyy-mm-dd</td>
              </tr>
              <tr>
                <td>
                  <div className="checks">
                    <input type="checkbox" />
                    <label></label>
                  </div>
                </td>
                <td style={{ textAlign: "left" }}>어쩌구 저쩌구 스크립트</td>
                <td>홍길동</td>
                <td>yyyy-mm-dd</td>
              </tr>
              <tr>
                <td>
                  <div className="checks">
                    <input type="checkbox" />
                    <label></label>
                  </div>
                </td>
                <td style={{ textAlign: "left" }}>어쩌구 저쩌구 스크립트</td>
                <td>홍길동</td>
                <td>yyyy-mm-dd</td>
              </tr>
              <tr>
                <td>
                  <div className="checks">
                    <input type="checkbox" />
                    <label></label>
                  </div>
                </td>
                <td style={{ textAlign: "left" }}>어쩌구 저쩌구 스크립트</td>
                <td>홍길동</td>
                <td>yyyy-mm-dd</td>
              </tr>
              <tr>
                <td>
                  <div className="checks">
                    <input type="checkbox" />
                    <label></label>
                  </div>
                </td>
                <td style={{ textAlign: "left" }}>어쩌구 저쩌구 스크립트</td>
                <td>홍길동</td>
                <td>yyyy-mm-dd</td>
              </tr>
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
            <input type="text" placeholder=" 스크립트 명" />
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
        </div>
        <div style={{ clear: "both" }}></div>
        <br />
        <div className="btn_control">
          <button className="blue">스크립트 생성</button>
        </div>
      </div>
    </>
  );
}

export default ScriptTemplate;
