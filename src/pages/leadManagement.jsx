import { useState, useEffect } from "react";
import MyDatePicker from "../components/datePicker";
import Pagination from "../components/pagination";

function LeadManagement() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [total, setTotal] = useState(10);
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [isPop, setIsPop] = useState(false);

  return (
    <>
      <div className="content_wrap">
        <h1>리드 관리</h1>
        <h5>고객의 점수에 따른 리드를 설정해 주세요.</h5>

        <table>
          <colgroup>
            <col style={{ width: "200px" }} />
            <col style={{ width: "auto" }} />
          </colgroup>
          <tbody>
            <tr>
              <th>HOT</th>
              <td style={{ textAlign: "left" }}>
                <input type="number" style={{ width: "100px" }} /> 점 이상
              </td>
            </tr>
            <tr>
              <th>WARM</th>
              <td style={{ textAlign: "left" }}>
                <input type="number" style={{ width: "100px" }} /> 점 이상
              </td>
            </tr>
            <tr>
              <th>COLD</th>
              <td style={{ textAlign: "left" }}>
                <input type="number" style={{ width: "100px" }} /> 점 이상
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        <div className="btn_control">
          <button className="blue">업데이트</button>
        </div>
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

export default LeadManagement;
