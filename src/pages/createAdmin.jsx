import { useState } from "react";
import api from "../api/api";

function CreateAdmin() {
  const [name, setName] = useState("");
  const [adminId, setAdminId] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [rank, setRank] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const createAdmin = () => {
    setIsLoading(true);
    if (!name.trim()) {
      alert("이름을 입력해 주세요");
      return;
    }

    if (!adminId.trim()) {
      alert("아이디를 입력해 주세요");
      return;
    }

    if (!password.trim()) {
      alert("비밀번호를 입력해 주세요");
      return;
    }

    if (!phoneNumber.trim()) {
      alert("핸드폰 번호를 입력해 주세요");
      return;
    }
    if (password !== rePassword) {
      alert("비밀번호를 확인해주세요");
      return;
    }

    if (rank.trim() === "") {
      alert("직책을 선택해 주세요");
      return;
    }

    let data = {
      name: name,
      admin_id: adminId,
      password: password,
      rank: rank,
      phone_number: phoneNumber,
    };

    api
      .post("/api/users", data)
      .then((response) => {
        console.log(response);
        alert("관리자 생성이 완료되었습니다.");
        setIsLoading(false);
        setName("");
        setAdminId("");
        setPassword("");
        setRePassword("");
        setRank("");
        setPhoneNumber("");
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
        alert("관리자 생성에 실패하였습니다.");
      });
  };

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
                <input
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </td>
            </tr>
            <tr>
              <th>Id</th>
              <td style={{ textAlign: "left" }}>
                <input
                  type="text"
                  autoComplete="new-password"
                  value={adminId}
                  onChange={(e) => {
                    setAdminId(e.target.value);
                  }}
                />
              </td>
            </tr>
            <tr>
              <th>비밀번호</th>
              <td style={{ textAlign: "left" }}>
                <input
                  type="password"
                  autoComplete="new-password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </td>
            </tr>

            <tr>
              <th>비밀번호 확인</th>
              <td style={{ textAlign: "left" }}>
                <input
                  type="password"
                  autoComplete="new-password"
                  value={rePassword}
                  onChange={(e) => {
                    setRePassword(e.target.value);
                  }}
                />
              </td>
            </tr>
            <tr>
              <th>핸드폰 번호</th>
              <td style={{ textAlign: "left" }}>
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => {
                    setPhoneNumber(e.target.value);
                  }}
                />
              </td>
            </tr>

            <tr>
              <th>직급</th>
              <td style={{ textAlign: "left" }}>
                <select
                  value={rank}
                  onChange={(e) => {
                    setRank(e.target.value);
                  }}
                >
                  <option value="">직급</option>
                  <option value={"대리"}>대리</option>
                  <option value={"과장"}>과장</option>
                  <option value={"차장"}>차장</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        <div className="btn_control">
          <button className="blue" onClick={createAdmin}>
            관리자 생성
          </button>
        </div>
      </div>
      <div
        className="loading_wrap"
        style={{ display: isLoading ? "flex" : "none" }}
      >
        <div id="loading_spinner"></div>
      </div>
    </>
  );
}

export default CreateAdmin;
