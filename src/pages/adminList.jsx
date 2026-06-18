import { useState, useEffect } from "react";
import MyDatePicker from "../components/datePicker";
import Pagination from "../components/pagination";
import api from "../api/api";

function AdminList() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [total, setTotal] = useState(10);
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [isPop, setIsPop] = useState(false);
  const [users, setUsers] = useState([]);
  const [adminId, setAdminId] = useState("");
  const [jik, setJik] = useState("");

  useEffect(() => {
    getUsers();
  }, [page]);

  const getUsers = () => {
    api
      .get(
        `/api/users?page=${page}&limit=${limit}&adminId=${adminId}&jik=${jik}`,
      )
      .then((response) => {
        console.log(response);
        setUsers(response.data.items);
        setTotal(response.data.total);
      });
  };

  return (
    <>
      <div className="content_wrap">
        <h1>관리자 목록</h1>
        <h5>본 시스템에 등록되어 있는 관리자 목록입니다.</h5>

        <div className="btn_control">
          <span>이름</span>
          <input
            type="text"
            placeholder="이름"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />{" "}
          &nbsp;&nbsp;&nbsp;&nbsp; <em>|</em>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span>직급</span>
          <select
            value={jik}
            onChange={(e) => {
              setJik(e.target.value);
            }}
          >
            <option value={""}>직급</option>
            <option value={"대리"}>대리</option>
            <option value={"과장"}>과장</option>
            <option value={"차장"}>차장</option>
          </select>
          &nbsp;&nbsp;&nbsp;&nbsp; <em>|</em>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span>아이디</span>
          <input
            type="text"
            placeholder="아이디"
            value={adminId}
            onChange={(e) => {
              setAdminId(e.target.value);
            }}
          />
          <button className="blue" onClick={getUsers}>
            검색
          </button>{" "}
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
            {users.map((data, i) => {
              return (
                <tr key={`sjkj_${i}`}>
                  <td>
                    <div className="checks">
                      <input type="checkbox" id={data.id} />
                      <label htmlFor={data.id}></label>
                    </div>
                  </td>
                  <td>{data.name}</td>
                  <td>{data.jik}</td>
                  <td>{data.adminId}</td>
                  <td>{data.phone_number}</td>
                  <td>
                    <select value={data.jik}>
                      <option value={""}>직급</option>
                      <option value={"대리"}>대리</option>
                      <option value={"과장"}>과장</option>
                      <option value={"차장"}>차장</option>
                    </select>
                  </td>
                  <td>{data.created_at.split("T")[0]}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Pagination
          total={total}
          page={page}
          limit={limit}
          onChange={setPage}
        />
      </div>
    </>
  );
}

export default AdminList;
