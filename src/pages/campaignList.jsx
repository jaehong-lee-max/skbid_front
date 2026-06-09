import { useState, useEffect } from "react";
import MyDatePicker from "../components/datePicker";
import Pagination from "../components/pagination";

function CampaignList() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [total, setTotal] = useState(10);
  const [page, setPage] = useState(1);
  const [limit] = useState(10);

  return (
    <div className="content_wrap">
      <h1>캠페인 목록</h1>
      <h5>생성된 캠페인들의 목록입니다.</h5>

      <div className="btn_control">
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
            <th>기간</th>
            <th>컨트롤</th>
            <th>상태</th>
            <th>작성자</th>
            <th>게시일</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>캠페인명</td>
            <td>yyyy-mm-dd ~ yyyy-mm-dd</td>
            <td>
              <button class="blue">실행</button>
            </td>
            <td>진행중</td>
            <td>아무개</td>
            <td>yyyy-mm-dd</td>
          </tr>
          <tr>
            <td>캠페인명</td>
            <td>yyyy-mm-dd ~ yyyy-mm-dd</td>
            <td>
              <button class="white">중지</button>
            </td>
            <td>종료</td>
            <td>아무개</td>
            <td>yyyy-mm-dd</td>
          </tr>
          <tr>
            <td>캠페인명</td>
            <td>yyyy-mm-dd ~ yyyy-mm-dd</td>
            <td>
              <button class="blue">실행</button>
            </td>
            <td>진행중</td>
            <td>아무개</td>
            <td>yyyy-mm-dd</td>
          </tr>
          <tr>
            <td>캠페인명</td>
            <td>yyyy-mm-dd ~ yyyy-mm-dd</td>
            <td>
              <button class="blue">실행</button>
            </td>
            <td>진행중</td>
            <td>아무개</td>
            <td>yyyy-mm-dd</td>
          </tr>
          <tr>
            <td>캠페인명</td>
            <td>yyyy-mm-dd ~ yyyy-mm-dd</td>
            <td>
              <button class="blue">실행</button>
            </td>
            <td>진행중</td>
            <td>아무개</td>
            <td>yyyy-mm-dd</td>
          </tr>
          <tr>
            <td>캠페인명</td>
            <td>yyyy-mm-dd ~ yyyy-mm-dd</td>
            <td>
              <button class="blue">실행</button>
            </td>
            <td>진행중</td>
            <td>아무개</td>
            <td>yyyy-mm-dd</td>
          </tr>
          <tr>
            <td>캠페인명</td>
            <td>yyyy-mm-dd ~ yyyy-mm-dd</td>
            <td>
              <button class="blue">실행</button>
            </td>
            <td>진행중</td>
            <td>아무개</td>
            <td>yyyy-mm-dd</td>
          </tr>
          <tr>
            <td>캠페인명</td>
            <td>yyyy-mm-dd ~ yyyy-mm-dd</td>
            <td>
              <button class="blue">실행</button>
            </td>
            <td>진행중</td>
            <td>아무개</td>
            <td>yyyy-mm-dd</td>
          </tr>
          <tr>
            <td>캠페인명</td>
            <td>yyyy-mm-dd ~ yyyy-mm-dd</td>
            <td>
              <button class="blue">실행</button>
            </td>
            <td>진행중</td>
            <td>아무개</td>
            <td>yyyy-mm-dd</td>
          </tr>
          <tr>
            <td>캠페인명</td>
            <td>yyyy-mm-dd ~ yyyy-mm-dd</td>
            <td>
              <button class="blue">실행</button>
            </td>
            <td>진행중</td>
            <td>아무개</td>
            <td>yyyy-mm-dd</td>
          </tr>
        </tbody>
      </table>
      <Pagination total={total} page={page} limit={limit} onChange={setPage} />
    </div>
  );
}

export default CampaignList;
