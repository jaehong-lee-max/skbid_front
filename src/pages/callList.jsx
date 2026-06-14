import { useState, useEffect } from "react";
import MyDatePicker from "../components/datePicker";
import Pagination from "../components/pagination";

function CallList() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [total, setTotal] = useState(10);
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [isPop, setIsPop] = useState(false);

  return (
    <>
      <div className="content_wrap">
        <h1>통화 목록</h1>
        <h5>캠페인을 통해 발생한 통화 내역 목록입니다.</h5>

        <div className="btn_control">
          <span>전화번호</span>
          <input
            type="text"
            placeholder="전화번호"
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
          <button className="blue">검색</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>캠페인 명</th>
              <th>그룹명</th>
              <th>회사명/이름</th>
              <th>번호</th>
              <th>수신</th>
              <th>스크립트 텍스트</th>
              <th>수발신일</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>캠페인명</td>
              <td>그룹명</td>
              <td>회사명</td>
              <td>02-000-0000</td>
              <td>수신</td>
              <td>
                <button class="blue" onClick={() => setIsPop(true)}>
                  보기
                </button>
              </td>

              <td>yyyy-mm-dd</td>
            </tr>
            <tr>
              <td>캠페인명</td>
              <td>그룹명</td>
              <td>회사명</td>
              <td>02-000-0000</td>
              <td>미수신</td>
              <td>
                <button class="blue" onClick={() => setIsPop(true)}>
                  보기
                </button>
              </td>

              <td>yyyy-mm-dd</td>
            </tr>
            <tr>
              <td>캠페인명</td>
              <td>그룹명</td>
              <td>회사명</td>
              <td>02-000-0000</td>
              <td>수신</td>
              <td>
                <button class="blue" onClick={() => setIsPop(true)}>
                  보기
                </button>
              </td>

              <td>yyyy-mm-dd</td>
            </tr>
            <tr>
              <td>캠페인명</td>
              <td>그룹명</td>
              <td>회사명</td>
              <td>02-000-0000</td>
              <td>수신</td>
              <td>
                <button class="blue" onClick={() => setIsPop(true)}>
                  보기
                </button>
              </td>

              <td>yyyy-mm-dd</td>
            </tr>
            <tr>
              <td>캠페인명</td>
              <td>그룹명</td>
              <td>회사명</td>
              <td>02-000-0000</td>
              <td>수신</td>
              <td>
                <button class="blue" onClick={() => setIsPop(true)}>
                  보기
                </button>
              </td>

              <td>yyyy-mm-dd</td>
            </tr>
            <tr>
              <td>캠페인명</td>
              <td>그룹명</td>
              <td>회사명</td>
              <td>02-000-0000</td>
              <td>수신</td>
              <td>
                <button class="blue" onClick={() => setIsPop(true)}>
                  보기
                </button>
              </td>
              <td>yyyy-mm-dd</td>
            </tr>
            <tr>
              <td>캠페인명</td>
              <td>그룹명</td>
              <td>회사명</td>
              <td>02-000-0000</td>
              <td>수신</td>
              <td>
                <button class="blue">보기</button>
              </td>

              <td>yyyy-mm-dd</td>
            </tr>
            <tr>
              <td>캠페인명</td>
              <td>그룹명</td>
              <td>회사명</td>
              <td>02-000-0000</td>
              <td>수신</td>
              <td>
                <button class="blue" onClick={() => setIsPop(true)}>
                  보기
                </button>
              </td>

              <td>yyyy-mm-dd</td>
            </tr>
            <tr>
              <td>캠페인명</td>
              <td>그룹명</td>
              <td>회사명</td>
              <td>02-000-0000</td>
              <td>수신</td>
              <td>
                <button class="blue" onClick={() => setIsPop(true)}>
                  보기
                </button>
              </td>
              <td>yyyy-mm-dd</td>
            </tr>
            <tr>
              <td>캠페인명</td>
              <td>그룹명</td>
              <td>회사명</td>
              <td>02-000-0000</td>
              <td>수신</td>
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

export default CallList;
