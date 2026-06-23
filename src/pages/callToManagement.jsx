import { useState, useEffect } from "react";
import MyDatePicker from "../components/datePicker";
import Pagination from "../components/pagination";
import * as XLSX from "xlsx";
import api from "../api/api";

function CallToManagement() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [total, setTotal] = useState(10);
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [isPop, setIsPop] = useState(false);
  const [isPop2, setIsPop2] = useState(false);
  const [groupName, setGroupName] = useState("");
  const [excelRows, setExcelRows] = useState([]);
  const [fileName, setFileName] = useState("");

  const [list, setList] = useState([]);
  const [searchGroupName, setSearchGroupName] = useState("");
  const [searchWriter, setSearchWriter] = useState("");
  const [selectedGroup, setSelectedGroup] = useState([]);
  const [selectedGroupName, setSelectedGroupName] = useState("");
  const [checkedIds, setCheckedIds] = useState([]);

  const excelUpload = async (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    try {
      setFileName(file.name);

      const buffer = await file.arrayBuffer();

      const workbook = XLSX.read(buffer, {
        type: "array",
      });

      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];

      const rows = XLSX.utils.sheet_to_json(worksheet);

      setExcelRows(rows);

      console.log(rows);
    } catch (err) {
      console.error(err);
      alert("엑셀 파일 읽기 실패");
    }
  };

  const saveClientGroup = async () => {
    try {
      if (!groupName.trim()) {
        alert("그룹명을 입력해 주세요.");
        return;
      }

      if (excelRows.length === 0) {
        alert("엑셀 파일을 업로드해 주세요.");
        return;
      }

      const payload = {
        writer: sessionStorage.getItem("adminName"),
        group_name: groupName,
        payload: excelRows,
      };

      const res = await api.post("/api/clients_groups", payload);

      alert(res.data.message);

      setGroupName("");
      setExcelRows([]);
      setFileName("");
      setIsPop2(false);
      await getList(1);
      setPage(1);
    } catch (err) {
      console.error(err);

      alert(err.response?.data?.message || "발신대상 그룹 등록 실패");
    }
  };

  const getList = async (targetPage = page) => {
    try {
      const res = await api.get("/api/clients_groups_list", {
        params: {
          page: targetPage,
          limit,
          group_name: searchGroupName,
          writer: searchWriter,
          startDate,
          endDate,
        },
      });

      setList(res.data.items || []);
      setTotal(res.data.total || 0);
    } catch (err) {
      console.error(err);

      alert(err.response?.data?.message || "발신대상 그룹 목록 조회 실패");
    }
  };

  const deleteGroups = async () => {
    try {
      if (checkedIds.length === 0) {
        alert("삭제할 그룹을 선택해 주세요.");
        return;
      }

      if (!window.confirm(`${checkedIds.length}개 그룹을 삭제하시겠습니까?`)) {
        return;
      }

      const res = await api.delete("/api/clients_groups", {
        data: {
          ids: checkedIds,
        },
      });

      alert(res.data.message);

      setCheckedIds([]);

      await getList(page);
    } catch (err) {
      console.error(err);

      alert(err.response?.data?.message || "발신대상 그룹 삭제 실패");
    }
  };

  useEffect(() => {
    getList(page);
  }, [page]);

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
            value={searchGroupName}
            onChange={(e) => {
              setSearchGroupName(e.target.value);
            }}
          />{" "}
          &nbsp;&nbsp;&nbsp;&nbsp; <em>|</em>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span>작성자</span>
          <input
            type="text"
            placeholder="작성자"
            value={searchWriter}
            onChange={(e) => {
              setSearchWriter(e.target.value);
            }}
          />{" "}
          &nbsp;&nbsp;&nbsp;&nbsp; <em>|</em>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span>기간</span>
          <MyDatePicker value={startDate} onDateChange={setStartDate} />
          {" ~ "}
          <MyDatePicker value={endDate} onDateChange={setEndDate} />
          <button
            className="blue"
            onClick={() => {
              setPage(1);
              getList(1);
            }}
          >
            검색
          </button>{" "}
          <button className="blue" onClick={deleteGroups}>
            선택한 그룹 삭제
          </button>{" "}
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
            {list.length > 0 ? (
              list.map((data) => {
                return (
                  <tr key={data.id}>
                    <td>
                      <div className="checks">
                        <input
                          type="checkbox"
                          id={`chk_${data.id}`}
                          checked={checkedIds.includes(data.id)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setCheckedIds((prev) => [...prev, data.id]);
                            } else {
                              setCheckedIds((prev) =>
                                prev.filter((id) => id !== data.id),
                              );
                            }
                          }}
                        />
                        <label htmlFor={`chk_${data.id}`}></label>
                      </div>
                    </td>

                    <td>{data.group_name}</td>

                    <td>{data.members_number}</td>

                    <td>
                      <button
                        className="blue"
                        onClick={() => {
                          const parsedPayload =
                            typeof data.payload === "string"
                              ? JSON.parse(data.payload)
                              : data.payload || [];

                          setSelectedGroup(parsedPayload);
                          setSelectedGroupName(data.group_name);
                          setIsPop(true);
                        }}
                      >
                        상세
                      </button>
                    </td>

                    <td>{data.writer}</td>

                    <td>
                      {data.created_at
                        ? new Date(data.created_at).toLocaleDateString("ko-KR")
                        : "-"}
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan={6}>등록된 발신대상 그룹이 없습니다.</td>
              </tr>
            )}
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
                {selectedGroupName}
                <div
                  className="popup_close"
                  onClick={() => {
                    setIsPop(false);
                    setSelectedGroup([]);
                    setSelectedGroupName("");
                  }}
                >
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
                    {selectedGroup.length > 0 ? (
                      selectedGroup.map((data, i) => {
                        return (
                          <tr key={`target_${i}`}>
                            <td>{data.phone || data["전화번호"] || "-"}</td>
                            <td>{data.company || data["회사명"] || "-"}</td>
                            <td>{data.name || data["담당자명"] || "-"}</td>
                            <td>{data.position || data["직급"] || "-"}</td>
                          </tr>
                        );
                      })
                    ) : (
                      <tr>
                        <td colSpan={4}>등록된 발신 대상이 없습니다.</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
              <div className="button_area">
                <button
                  className="blue"
                  onClick={() => {
                    setIsPop(false);
                    setSelectedGroup([]);
                    setSelectedGroupName("");
                  }}
                >
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
                      <input
                        type="text"
                        placeholder="그룹명"
                        value={groupName}
                        onChange={(e) => {
                          setGroupName(e.target.value);
                        }}
                      />
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
                      <input
                        type="file"
                        accept=".xlsx,.xls"
                        onChange={excelUpload}
                      />

                      {fileName && (
                        <div style={{ marginTop: "10px" }}>
                          {fileName}
                          {" / "}
                          {excelRows.length}건
                        </div>
                      )}
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
                <button className="blue" onClick={saveClientGroup}>
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
