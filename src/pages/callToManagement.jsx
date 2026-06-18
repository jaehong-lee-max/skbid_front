import { useState, useEffect } from "react";
import MyDatePicker from "../components/datePicker";
import Pagination from "../components/pagination";

function CallToManagement() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [total, setTotal] = useState(10);
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [isPop, setIsPop] = useState(false);
  const [isPop2, setIsPop2] = useState(false);

  return (
    <>
      <div className="content_wrap">
        <h1>발신 대상 관리</h1>
        <h5>발신 대상 그룹단위 생성, 및 관리</h5>

        <div className="btn_control">
          <span>그룹명</span>
          <input
            type="text"
            placeholder="그룹명"
          /> &nbsp;&nbsp;&nbsp;&nbsp; <em>|</em>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span>작성자</span>
          <input
            type="text"
            placeholder="작성자"
          /> &nbsp;&nbsp;&nbsp;&nbsp; <em>|</em>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span>기간</span>
          <MyDatePicker value={startDate} onDateChange={setStartDate} />
          {" ~ "}
          <MyDatePicker value={endDate} onDateChange={setEndDate} />
          <button className="blue">검색</button>{" "}
          <button className="blue">선택한 그룹 삭제</button>{" "}
          <button
            className="blue"
            onClick={() => {
              setIsPop2(true);
            }}
          >
            추가
          </button>
        </div>
        <table>
          <colgroup>
            <col style={{ width: "90px" }} />
          </colgroup>
          <thead>
            <tr>
              <th>
                <div className="checks">
                  <input type="checkbox" />
                  <label></label>
                </div>
              </th>
              <th>그룹명</th>
              <th>대상수</th>
              <th>상세</th>
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
              <td>그룹명</td>
              <td>100</td>
              <td>
                <button class="blue" onClick={() => setIsPop(true)}>
                  상세
                </button>
              </td>
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
              <td>그룹명</td>
              <td>100</td>
              <td>
                <button class="blue" onClick={() => setIsPop(true)}>
                  상세
                </button>
              </td>
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
              <td>그룹명</td>
              <td>100</td>
              <td>
                <button class="blue" onClick={() => setIsPop(true)}>
                  상세
                </button>
              </td>
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
              <td>그룹명</td>
              <td>100</td>
              <td>
                <button class="blue" onClick={() => setIsPop(true)}>
                  상세
                </button>
              </td>
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
              <td>그룹명</td>
              <td>100</td>
              <td>
                <button class="blue" onClick={() => setIsPop(true)}>
                  상세
                </button>
              </td>
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
              <td>그룹명</td>
              <td>100</td>
              <td>
                <button class="blue" onClick={() => setIsPop(true)}>
                  상세
                </button>
              </td>
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
              <td>그룹명</td>
              <td>100</td>
              <td>
                <button class="blue" onClick={() => setIsPop(true)}>
                  상세
                </button>
              </td>
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
              <td>그룹명</td>
              <td>100</td>
              <td>
                <button class="blue" onClick={() => setIsPop(true)}>
                  상세
                </button>
              </td>
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
              <td>그룹명</td>
              <td>100</td>
              <td>
                <button class="blue" onClick={() => setIsPop(true)}>
                  상세
                </button>
              </td>
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
              <td>그룹명</td>
              <td>100</td>
              <td>
                <button class="blue" onClick={() => setIsPop(true)}>
                  상세
                </button>
              </td>
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
      {isPop && (
        <>
          <div className="popup_wrap">
            <div className="popup">
              <div className="popup_tit">
                그룹명
                <div className="popup_close" onClick={() => setIsPop(false)}>
                  X
                </div>
              </div>
              <div className="ovf_table" style={{ height: "500px" }}>
                <table>
                  <thead>
                    <tr>
                      <th>전화번호</th>
                      <th>회사명</th>
                      <th>담당자명</th>
                      <th>직급</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>01000000000</td>
                      <td>abc상사</td>
                      <td>홍길동</td>
                      <td>대표</td>
                    </tr>
                    <tr>
                      <td>01000000000</td>
                      <td>abc상사</td>
                      <td>홍길동</td>
                      <td>대표</td>
                    </tr>
                    <tr>
                      <td>01000000000</td>
                      <td>abc상사</td>
                      <td>홍길동</td>
                      <td>대표</td>
                    </tr>
                    <tr>
                      <td>01000000000</td>
                      <td>abc상사</td>
                      <td>홍길동</td>
                      <td>대표</td>
                    </tr>
                    <tr>
                      <td>01000000000</td>
                      <td>abc상사</td>
                      <td>홍길동</td>
                      <td>대표</td>
                    </tr>
                    <tr>
                      <td>01000000000</td>
                      <td>abc상사</td>
                      <td>홍길동</td>
                      <td>대표</td>
                    </tr>
                    <tr>
                      <td>01000000000</td>
                      <td>abc상사</td>
                      <td>홍길동</td>
                      <td>대표</td>
                    </tr>
                    <tr>
                      <td>01000000000</td>
                      <td>abc상사</td>
                      <td>홍길동</td>
                      <td>대표</td>
                    </tr>
                    <tr>
                      <td>01000000000</td>
                      <td>abc상사</td>
                      <td>홍길동</td>
                      <td>대표</td>
                    </tr>
                    <tr>
                      <td>01000000000</td>
                      <td>abc상사</td>
                      <td>홍길동</td>
                      <td>대표</td>
                    </tr>
                    <tr>
                      <td>01000000000</td>
                      <td>abc상사</td>
                      <td>홍길동</td>
                      <td>대표</td>
                    </tr>
                    <tr>
                      <td>01000000000</td>
                      <td>abc상사</td>
                      <td>홍길동</td>
                      <td>대표</td>
                    </tr>
                    <tr>
                      <td>01000000000</td>
                      <td>abc상사</td>
                      <td>홍길동</td>
                      <td>대표</td>
                    </tr>
                    <tr>
                      <td>01000000000</td>
                      <td>abc상사</td>
                      <td>홍길동</td>
                      <td>대표</td>
                    </tr>
                    <tr>
                      <td>01000000000</td>
                      <td>abc상사</td>
                      <td>홍길동</td>
                      <td>대표</td>
                    </tr>
                    <tr>
                      <td>01000000000</td>
                      <td>abc상사</td>
                      <td>홍길동</td>
                      <td>대표</td>
                    </tr>
                    <tr>
                      <td>01000000000</td>
                      <td>abc상사</td>
                      <td>홍길동</td>
                      <td>대표</td>
                    </tr>
                    <tr>
                      <td>01000000000</td>
                      <td>abc상사</td>
                      <td>홍길동</td>
                      <td>대표</td>
                    </tr>
                    <tr>
                      <td>01000000000</td>
                      <td>abc상사</td>
                      <td>홍길동</td>
                      <td>대표</td>
                    </tr>
                    <tr>
                      <td>01000000000</td>
                      <td>abc상사</td>
                      <td>홍길동</td>
                      <td>대표</td>
                    </tr>
                    <tr>
                      <td>01000000000</td>
                      <td>abc상사</td>
                      <td>홍길동</td>
                      <td>대표</td>
                    </tr>
                    <tr>
                      <td>01000000000</td>
                      <td>abc상사</td>
                      <td>홍길동</td>
                      <td>대표</td>
                    </tr>
                  </tbody>
                </table>
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

      {isPop2 && (
        <>
          <div className="popup_wrap">
            <div className="popup">
              <div className="popup_tit">
                그룹추가
                <div className="popup_close" onClick={() => setIsPop2(false)}>
                  X
                </div>
              </div>
              <table>
                <tbody>
                  <tr>
                    <th>그룹명</th>
                    <td>
                      <input type="text" placeholder="그룹명" />
                    </td>
                  </tr>
                  <tr>
                    <th>설명</th>
                    <td>
                      <input type="text" placeholder="설명" />
                    </td>
                  </tr>
                  <tr>
                    <th>엑셀파일</th>
                    <td style={{ textAlign: "left" }}>
                      <input type="file" placeholder="엑셀파일 업로드" />
                    </td>
                  </tr>
                  <tr>
                    <th>샘플 엑셀 파일</th>
                    <td style={{ textAlign: "left" }}>
                      <button className="blue">다운로드</button>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2} style={{ textAlign: "left" }}>
                      샘플엑셀 파일과 같은형식의 파일을 업로드 해주세요
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="button_area">
                <button className="blue" onClick={() => setIsPop2(false)}>
                  저장
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default CallToManagement;
