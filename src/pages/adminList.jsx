import { useState, useEffect } from "react";
import MyDatePicker from "../components/datePicker";
import Pagination from "../components/pagination";

function AdminList() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [total, setTotal] = useState(10);
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [isPop, setIsPop] = useState(false);

  return (
    <>
      <div className="content_wrap">
        <h1>관리자 목록</h1>
        <h5>본 시스템에 등록되어 있는 관리자 목록입니다.</h5>

        <div className="btn_control">
          <span>이름</span>
          <input type="text" placeholder="이름" /> &nbsp;&nbsp;&nbsp;&nbsp;{" "}
          <em>|</em>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span>직급</span>
          <select>
            <option>직급</option>
            <option>직급</option>
            <option>직급</option>
            <option>직급</option>
          </select>
          &nbsp;&nbsp;&nbsp;&nbsp; <em>|</em>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span>아이디</span>
          <input type="text" placeholder="아이디" />
          <button className="blue">검색</button>{" "}
          <button className="blue">선택한 관리자 삭제</button>{" "}
          <button className="blue">권한 저장</button>
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
              <th>관리자 명</th>
              <th>직급</th>
              <th>ID</th>
              <th>핸드폰 번호</th>
              <th>권한</th>
              <th>가입일</th>
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
              <td>관리자 이름</td>
              <td>대리</td>
              <td>관리자 Id</td>
              <td>010-0000-0000</td>
              <td>
                <select>
                  <option>운영자</option>
                </select>
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
              <td>관리자 이름</td>
              <td>대리</td>
              <td>관리자 Id</td>
              <td>010-0000-0000</td>
              <td>
                <select>
                  <option>운영자</option>
                </select>
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
              <td>관리자 이름</td>
              <td>대리</td>
              <td>관리자 Id</td>
              <td>010-0000-0000</td>
              <td>
                <select>
                  <option>운영자</option>
                </select>
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
              <td>관리자 이름</td>
              <td>대리</td>
              <td>관리자 Id</td>
              <td>010-0000-0000</td>
              <td>
                <select>
                  <option>운영자</option>
                </select>
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
              <td>관리자 이름</td>
              <td>대리</td>
              <td>관리자 Id</td>
              <td>010-0000-0000</td>
              <td>
                <select>
                  <option>운영자</option>
                </select>
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
              <td>관리자 이름</td>
              <td>대리</td>
              <td>관리자 Id</td>
              <td>010-0000-0000</td>
              <td>
                <select>
                  <option>운영자</option>
                </select>
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
              <td>관리자 이름</td>
              <td>대리</td>
              <td>관리자 Id</td>
              <td>010-0000-0000</td>
              <td>
                <select>
                  <option>운영자</option>
                </select>
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
              <td>관리자 이름</td>
              <td>대리</td>
              <td>관리자 Id</td>
              <td>010-0000-0000</td>
              <td>
                <select>
                  <option>운영자</option>
                </select>
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
              <td>관리자 이름</td>
              <td>대리</td>
              <td>관리자 Id</td>
              <td>010-0000-0000</td>
              <td>
                <select>
                  <option>운영자</option>
                </select>
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
              <td>관리자 이름</td>
              <td>대리</td>
              <td>관리자 Id</td>
              <td>010-0000-0000</td>
              <td>
                <select>
                  <option>운영자</option>
                </select>
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

export default AdminList;
