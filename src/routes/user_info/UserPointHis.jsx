import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Lnb, CurrentBox } from "../../components/bundle_components";
import { useCheckToken, useDatePicker, useSelectBox } from "../../hooks/bundle_hooks";
import CheckBox from "../../components/CheckBox";
import Pagination from "../../components/Pagination";

export default function UserPointHis() {
  const { pathname } = useLocation();
  const { date, before3m, start_at, end_at } = useDatePicker();
  const { selectedValues, selecBoxHtml } = useSelectBox({
    point_history: ["전체", "지급 내역", "사용 내역"],
  });
  const { mb_no, postData, setResData } = useCheckToken();
  const [pageData, setPageData] = useState();
  const [curPage, setCurPage] = useState(1);
  const [beforeFilter, setBeforeFilter] = useState();

  const loadHisData = async () => {
    const data = {
      mb_no,
      start_at,
      end_at,
    };
    const res = await postData("api", data);
    setBeforeFilter({ ...data });
    setPageData(res.page);
    setCurPage(1);
    if (!res.data) setResData([]);
  };

  const loadPageData = async page => {
    const res = await postData("api", { ...beforeFilter, cur_page: page });
    setPageData(res.page);
  };

  useEffect(() => {
    // loadHisData();
  }, []);

  return (
    <>
      <Lnb lnbType={pathname.includes("Delete") ? "deleteUserInfo" : "userInfo"} />
      <CurrentBox btns={["del", "down"]} tit="포인트 지급/사용 내역" />
      <div className="user_history_point box_ty01 table_type table_comm">
        <div className="filter_wrap d-flex">
          <p className="user_point_total">
            총 보유 포인트 : <span>2,500</span>
          </p>
          <div className="select_input_wrap d-flex">{selecBoxHtml}</div>
          <div className="date_input_wrap d-flex">
            <div className="date_input input_ty02">{date.start}</div>
            <div className="date_input input_ty02">{date.end}</div>
          </div>
          <button type="button" className="btn_ty01 btn_search" onClick={loadHisData}>
            검색
          </button>
        </div>
        <div className="table_wrap line part">
          <table className="table">
            <colgroup>
              <col width={"100px"} />
              <col width={"100px"} />
              <col width={"200px"} />
              <col width={"auto"} />
              <col width={"200px"} />
              <col width={"200px"} />
              <col width={"300px"} />
            </colgroup>
            <thead>
              <tr>
                <th className="check">
                  <CheckBox for="wr_all" id="wr_all" name="wr_all" />
                </th>
                <th className="num">NO</th>
                <th>날짜</th>
                <th>지급/사용 내역</th>
                <th>+ P</th>
                <th>- P</th>
                <th>비고</th>
              </tr>
            </thead>
            <tbody>
              <tr className="write_row">
                <td className="check">
                  <CurrentBox btns={["give"]} />
                </td>
                <td className="num">0</td>
                <td className="date">
                  <div className="input_ty02">
                    <input type="text" placeholder="YYYY-MM-DD" defaultValue={""} />
                  </div>
                </td>
                <td>
                  <div className="input_ty02">
                    <input type="text" placeholder="직접입력" />
                  </div>
                </td>
                <td>
                  <div className="input_ty02">
                    <input type="text" placeholder="직접입력" />
                  </div>
                </td>
                <td>
                  <div className="input_ty02">
                    <input type="text" placeholder="직접입력" />
                  </div>
                </td>
                <td>
                  <div className="input_ty02">
                    <input type="text" placeholder="직접입력" />
                  </div>
                </td>
              </tr>
              <tr>
                <td className="check">
                  <CheckBox for="wr_1" id="wr_1" name="wr_1" />
                </td>
                <td className="num">1</td>
                <td className="date">2023.04.20</td>
                <td>프로모션 참여</td>
                <td>1,000</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td className="check">
                  <CheckBox for="wr_2" id="wr_2" name="wr_2" />
                </td>
                <td className="num">2</td>
                <td className="date">2023.04.20</td>
                <td>프로모션 참여</td>
                <td>5,000</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td className="check">
                  <CheckBox for="wr_3" id="wr_3" name="wr_3" />
                </td>
                <td className="num">3</td>
                <td className="date">2023.04.20</td>
                <td>쇼핑몰 사용</td>
                <td></td>
                <td>2,000</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>

        <CurrentBox btns={["del", "down"]} tit="포인트 지급/사용 내역" hideTit={true} />
        {pageData && <Pagination pageData={pageData} curPage={curPage} setCurPage={setCurPage} onClick={loadPageData} />}
      </div>
    </>
  );
}
