import { Link } from "react-router-dom";
import { Lnb, CurrentBox, Pagination } from "../../components/bundle_components";
import { useSelectBox, useCheckToken, useDatePicker } from "../../hooks/bundle_hooks";
import { useEffect, useState } from "react";

export default function CalculatorList() {
  const [pageData, setPageData] = useState();
  const [curPage, setCurPage] = useState(1);
  const { date, start_at, end_at } = useDatePicker();
  const { mb_no, postData, resData, setResData } = useCheckToken();
  const [beforeFilter, setBeforeFilter] = useState();
  const { selectedValues, selecBoxHtml } = useSelectBox({
    order: ["전체", "CO2 발생량 높은 순", "CO2 발생량 낮은 순"],
    gender: ["전체(성별)", "남성", "여성"],
    city: [
      "전체(지역)",
      "서울특별시",
      "경기도",
      "강원특별자치도",
      "경상남도",
      "경상북도",
      "전라남도",
      "전라북도",
      "충청북도",
      "충청남도",
      "제주특별자치도",
      "인천광역시",
      "대전광역시",
      "대구광역시",
      "광주광역시",
      "부산광역시",
      "울산광역시",
    ],
  });

  const loadCalcData = async () => {
    const data = {
      mb_no,
      order: { 전체: "all", "CO2 발생량 높은 순": "co2_desc", "CO2 발생량 낮은 순": "co2_asc" }[selectedValues.order],
      gender: { "전체(성별)": "all", 남성: "male", 여성: "female" }[selectedValues.gender],
      city: selectedValues.city,
      start_at,
      end_at,
    };
    const res = await postData("calculator/list", data);
    if (!res || res?.code !== 200) return;
    setBeforeFilter({ ...data });
    setPageData(res.page);
    setCurPage(1);
    if (!res.data) setResData([]);
  };

  const loadPageData = async page => {
    const res = await postData("calculator/list", { ...beforeFilter, cur_page: page });
    setPageData(res.page);
  };

  useEffect(() => {
    loadCalcData();
  }, []);

  return (
    <>
      <Lnb lnbType="calcHistory" />
      <CurrentBox btns={["down"]} tit="탄소발자국 계산 내역 리스트" />
      <div className="calc_list box_ty01 table_type table_comm">
        <div className="filter_wrap d-flex">
          <div className="select_input_wrap d-flex">{selecBoxHtml}</div>
          <div className="date_input_wrap d-flex">
            <div className="date_input input_ty02">{date.start}</div>
            <div className="date_input input_ty02">{date.end}</div>
          </div>
          <button type="button" className="btn_ty01 btn_search" onClick={loadCalcData}>
            검색
          </button>
        </div>
        <div className="table_wrap">
          <table className="table" id="table">
            <colgroup>
              <col width={"80px"} />
              <col width={"100px"} />
              <col width={"150px"} />
              <col width={"150px"} />
              <col width={"100px"} />
              <col width={"100px"} />
              <col width={"100px"} />
              <col width={"150px"} />
              <col width={"150px"} />
            </colgroup>
            <thead>
              <tr>
                <th className="num">NO</th>
                <th>계산일</th>
                <th>아이디</th>
                <th>지역</th>
                <th>성별</th>
                <th>생년월일</th>
                <th>거주인원 수</th>
                <th>총 CO2 발생량 (kg)</th>
                <th>소나무 (그루)</th>
              </tr>
            </thead>
            <tbody>
              {resData &&
                resData?.map(el => (
                  <tr key={el.idx}>
                    <td>{el.idx}</td>
                    <td>{el.create_at}</td>
                    <td>
                      <Link to={`/UserCalcHis/${el.idx}`}>{el.mb_id}</Link>
                    </td>
                    <td>{el.addr}</td>
                    <td>{el.mb_sex}</td>
                    <td>{el.mb_birth}</td>
                    <td>{el.mb_certify}</td>
                    <td>{el.total_carbon}</td>
                    <td>{el.needed_tree}</td>
                  </tr>
                ))}
            </tbody>
          </table>
          {!resData && <div className="no_data_wrap">데이터 없음</div>}
        </div>
        <CurrentBox btns={["down"]} hideTit={true} />
        {pageData && <Pagination pageData={pageData} curPage={curPage} setCurPage={setCurPage} onClick={loadPageData} />}
      </div>
    </>
  );
}
