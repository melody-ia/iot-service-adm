import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { Lnb, CurrentBox } from "../../components/bundle_components";
import { useDatePicker, useSelectBox, useCheckToken } from "../../hooks/bundle_hooks";
import CheckBox from "../../components/CheckBox";
import Pagination from "../../components/Pagination";

export default function UserStempHis() {
  const { pathname } = useLocation();
  const { mb_no, postData, setResData } = useCheckToken();
  const { date, before3m, start_at, end_at } = useDatePicker();
  const { selectedValues, selecBoxHtml } = useSelectBox({
    sort_join: ["최신 순", "오래된 순"],
    promotion_sort: ["데일리 챌린지", "데일리 챌린지2", "데일리 챌린지_데일리 탄소 줄이기"],
  });
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
      {/* <CurrentBox mod={true} del={true} down={true} tit="도장 적립 내역" /> */}
      <CurrentBox btns={["del", "down"]} tit="도장 적립 내역" />
      <div className="user_history_stemp box_ty01 table_type table_comm">
        <div className="filter_wrap d-flex">
          <div className="select_input_wrap d-flex">
            <div className="select_input input_ty02">{selecBoxHtml[0]}</div>
          </div>
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
              <col width={"auto"} />
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
                <th>프로모션 명</th>
                <th>본문</th>
                <th>적립일</th>
                <th>도장 적립 개수</th>
                <th>비고</th>
              </tr>
            </thead>
            <tbody>
              <tr className="write_row">
                <td className="check">
                  <CurrentBox btns={["accu"]} hideTit={true} />
                </td>
                <td className="num">0</td>
                <td>
                  <div className="select_input_wrap d-flex">
                    <div className="select_input input_ty02">{selecBoxHtml[1]}</div>
                  </div>
                </td>
                <td>
                  <div className="input_ty02">
                    <input type="text" placeholder="직접입력" />
                  </div>
                </td>
                <td className="date">
                  <div className="input_ty02">
                    <input type="text" placeholder="YYYY-MM-DD" defaultValue={""} />
                  </div>
                </td>
                <td>
                  <div className="input_ty02">
                    <input type="number" className="stemp_num" placeholder="직접입력" />
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
                  <CheckBox for="wr_2" id="wr_2" name="wr_2" />
                </td>
                <td className="num">2</td>
                <td>데일리 챌린지_데일리 탄소 줄이기</td>
                <td className="overflow">오늘도 데일리 챌린지에 참여하기 위해 대중교통을 이용하여 출근하고 있..</td>
                <td className="date">2023.05.10</td>
                <td>+ 1</td>
                <td></td>
              </tr>
              <tr>
                <td className="check">
                  <CheckBox for="wr_3" id="wr_3" name="wr_3" />
                </td>
                <td className="num">1</td>
                <td>데일리 챌린지_데일리 탄소 줄이기</td>
                <td className="overflow">오늘도 데일리 챌린지에 참여하기 위해 대중교통을 이용하여 출근하고 있..</td>
                <td className="date">2023.05.08</td>
                <td>- 1</td>
                <td>글 삭제로 관리자 수동 차감</td>
              </tr>
            </tbody>
          </table>
        </div>

        <CurrentBox btns={["del", "down"]} tit="도장 적립 내역" hideTit={true} />
        {pageData && <Pagination pageData={pageData} curPage={curPage} setCurPage={setCurPage} onClick={loadPageData} />}
      </div>
    </>
  );
}
