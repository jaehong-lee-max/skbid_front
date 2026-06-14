import { useState, useEffect } from "react";
import MyDatePicker from "../components/datePicker";
import Pagination from "../components/pagination";

function PotentialClientList() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [total, setTotal] = useState(10);
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [isPop, setIsPop] = useState(false);

  return (
    <>
      <div className="content_wrap">
        <h1>관심고객 목록</h1>
        <h5>일정 점수 이상을 받은 관심고객 리스트 입니다.</h5>

        <div className="btn_control">
          <span>이름/사명</span>
          <input
            type="text"
            placeholder="이름/사명"
          /> &nbsp;&nbsp;&nbsp;&nbsp; <em>|</em>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span>캠페인 명</span>
          <input
            type="text"
            placeholder="캠페인 명"
          /> &nbsp;&nbsp;&nbsp;&nbsp; <em>|</em>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span>기간</span>
          <MyDatePicker value={startDate} onDateChange={setStartDate} />
          {" ~ "}
          <MyDatePicker value={endDate} onDateChange={setEndDate} />
          &nbsp;&nbsp;&nbsp;&nbsp; <em>|</em>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
          <div className="checks">
            <input type="checkbox" id="see_what_to_do" />
            <label htmlFor="see_what_to_do">미연결만 보기</label>
          </div>
          <button className="blue">검색</button>&nbsp;{" "}
          <button className="white">선택 일관 연결 처리</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>
                <div className="checks">
                  <input type="checkbox" />
                  <label></label>
                </div>
              </th>
              <th>캠페인 명</th>
              <th>그룹명</th>
              <th>회사명/이름</th>
              <th>번호</th>
              <th>리드</th>
              <th>상담원 연결 여부</th>
              <th>스크립트 텍스트</th>
              <th>수발신일</th>
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
              <td>캠페인명</td>
              <td>그룹명</td>
              <td>회사명</td>
              <td>02-000-0000</td>
              <td>warm</td>
              <td>연결</td>
              <td>
                <button class="blue" onClick={() => setIsPop(true)}>
                  보기
                </button>
              </td>

              <td>yyyy-mm-dd</td>
            </tr>
            <tr>
              <td>
                <div className="checks">
                  <input type="checkbox" />
                  <label></label>
                </div>
              </td>
              <td>캠페인명</td>
              <td>그룹명</td>
              <td>회사명</td>
              <td>02-000-0000</td>
              <td>cold</td>
              <td>미연결</td>
              <td>
                <button class="blue" onClick={() => setIsPop(true)}>
                  보기
                </button>
              </td>

              <td>yyyy-mm-dd</td>
            </tr>
            <tr>
              <td>
                <div className="checks">
                  <input type="checkbox" />
                  <label></label>
                </div>
              </td>
              <td>캠페인명</td>
              <td>그룹명</td>
              <td>회사명</td>
              <td>02-000-0000</td>
              <td>hot</td>
              <td>연결</td>
              <td>
                <button class="blue" onClick={() => setIsPop(true)}>
                  보기
                </button>
              </td>

              <td>yyyy-mm-dd</td>
            </tr>
            <tr>
              <td>
                <div className="checks">
                  <input type="checkbox" />
                  <label></label>
                </div>
              </td>
              <td>캠페인명</td>
              <td>그룹명</td>
              <td>회사명</td>
              <td>02-000-0000</td>
              <td>warm</td>
              <td>연결</td>
              <td>
                <button class="blue" onClick={() => setIsPop(true)}>
                  보기
                </button>
              </td>

              <td>yyyy-mm-dd</td>
            </tr>
            <tr>
              <td>
                <div className="checks">
                  <input type="checkbox" />
                  <label></label>
                </div>
              </td>
              <td>캠페인명</td>
              <td>그룹명</td>
              <td>회사명</td>
              <td>02-000-0000</td>
              <td>warm</td>
              <td>연결</td>
              <td>
                <button class="blue" onClick={() => setIsPop(true)}>
                  보기
                </button>
              </td>

              <td>yyyy-mm-dd</td>
            </tr>
            <tr>
              <td>
                <div className="checks">
                  <input type="checkbox" />
                  <label></label>
                </div>
              </td>
              <td>캠페인명</td>
              <td>그룹명</td>
              <td>회사명</td>
              <td>02-000-0000</td>
              <td>warm</td>
              <td>연결</td>
              <td>
                <button class="blue" onClick={() => setIsPop(true)}>
                  보기
                </button>
              </td>
              <td>yyyy-mm-dd</td>
            </tr>
            <tr>
              <td>
                <div className="checks">
                  <input type="checkbox" />
                  <label></label>
                </div>
              </td>
              <td>캠페인명</td>
              <td>그룹명</td>
              <td>회사명</td>
              <td>02-000-0000</td>
              <td>warm</td>
              <td>연결</td>
              <td>
                <button class="blue">보기</button>
              </td>

              <td>yyyy-mm-dd</td>
            </tr>
            <tr>
              <td>
                <div className="checks">
                  <input type="checkbox" />
                  <label></label>
                </div>
              </td>
              <td>캠페인명</td>
              <td>그룹명</td>
              <td>회사명</td>
              <td>02-000-0000</td>
              <td>warm</td>
              <td>연결</td>
              <td>
                <button class="blue" onClick={() => setIsPop(true)}>
                  보기
                </button>
              </td>

              <td>yyyy-mm-dd</td>
            </tr>
            <tr>
              <td>
                <div className="checks">
                  <input type="checkbox" />
                  <label></label>
                </div>
              </td>
              <td>캠페인명</td>
              <td>그룹명</td>
              <td>회사명</td>
              <td>02-000-0000</td>
              <td>warm</td>
              <td>연결</td>
              <td>
                <button class="blue" onClick={() => setIsPop(true)}>
                  보기
                </button>
              </td>
              <td>yyyy-mm-dd</td>
            </tr>
            <tr>
              <td>
                <div className="checks">
                  <input type="checkbox" />
                  <label></label>
                </div>
              </td>
              <td>캠페인명</td>
              <td>그룹명</td>
              <td>회사명</td>
              <td>02-000-0000</td>
              <td>warm</td>
              <td>연결</td>
              <td>
                <button class="blue" onClick={() => setIsPop(true)}>
                  보기
                </button>
              </td>
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
                회사명 : yyyy-mm-dd : 통화내역
                <div className="popup_close" onClick={() => setIsPop(false)}>
                  X
                </div>
              </div>
              <div className="talk_log">
                <ul>
                  <li>
                    상담원: 안녕하세요 어쩌구저쩌구 안녕하세요 어쩌구저쩌구
                    안녕하세요 어쩌구저쩌구
                  </li>
                  <li>
                    고객: 안녕하세요 어쩌구저쩌구 안녕하세요 어쩌구저쩌구
                    안녕하세요 어쩌구저쩌구
                  </li>

                  <li>
                    상담원: 안녕하세요 어쩌구저쩌구 안녕하세요 어쩌구저쩌구
                    안녕하세요 어쩌구저쩌구
                  </li>
                  <li>
                    고객: 안녕하세요 어쩌구저쩌구 안녕하세요 어쩌구저쩌구
                    안녕하세요 어쩌구저쩌구
                  </li>

                  <li>
                    상담원: 안녕하세요 어쩌구저쩌구 안녕하세요 어쩌구저쩌구
                    안녕하세요 어쩌구저쩌구
                  </li>
                  <li>
                    고객: 안녕하세요 어쩌구저쩌구 안녕하세요 어쩌구저쩌구
                    안녕하세요 어쩌구저쩌구
                  </li>

                  <li>
                    상담원: 안녕하세요 어쩌구저쩌구 안녕하세요 어쩌구저쩌구
                    안녕하세요 어쩌구저쩌구
                  </li>
                  <li>
                    고객: 안녕하세요 어쩌구저쩌구 안녕하세요 어쩌구저쩌구
                    안녕하세요 어쩌구저쩌구
                  </li>

                  <li>
                    상담원: 안녕하세요 어쩌구저쩌구 안녕하세요 어쩌구저쩌구
                    안녕하세요 어쩌구저쩌구
                  </li>
                  <li>
                    고객: 안녕하세요 어쩌구저쩌구 안녕하세요 어쩌구저쩌구
                    안녕하세요 어쩌구저쩌구
                  </li>

                  <li>
                    <span>-상담원 연결-</span>
                  </li>
                </ul>
              </div>
              <div className="button_area">
                <button className="blue" onClick={() => setIsPop(false)}>
                  확인
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default PotentialClientList;
