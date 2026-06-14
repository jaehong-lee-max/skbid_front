import { useState, useEffect } from "react";
import MyDatePicker from "../components/datePicker";
import Pagination from "../components/pagination";

function CreateAdmin() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [total, setTotal] = useState(10);
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [isPop, setIsPop] = useState(false);

  return (
    <>
      <div className="content_wrap">
        <h1>관리자 생성</h1>
        <h5>본 시스템의 새로운 관리자분을 등록해주세요.</h5>

        <table>
          <colgroup>
            <col style={{ width: "200px" }} />
            <col style={{ width: "auto" }} />
          </colgroup>
          <tbody>
            <tr>
              <th>이름</th>
              <td style={{ textAlign: "left" }}>
                <input type="text" />
              </td>
            </tr>
            <tr>
              <th>Id</th>
              <td style={{ textAlign: "left" }}>
                <input type="text" autoComplete="new-password" />
              </td>
            </tr>
            <tr>
              <th>비밀번호</th>
              <td style={{ textAlign: "left" }}>
                <input type="password" autoComplete="new-password" />
              </td>
            </tr>

            <tr>
              <th>비밀번호 확인</th>
              <td style={{ textAlign: "left" }}>
                <input type="password" autoComplete="new-password" />
              </td>
            </tr>
            <tr>
              <th>핸드폰 번호</th>
              <td style={{ textAlign: "left" }}>
                <input type="text" />
              </td>
            </tr>

            <tr>
              <th>직급</th>
              <td style={{ textAlign: "left" }}>
                <select>
                  <option>직급</option>
                  <option>직급</option>
                  <option>직급</option>
                  <option>직급</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        <div className="btn_control">
          <button className="blue">관리자 생성</button>
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

export default CreateAdmin;
