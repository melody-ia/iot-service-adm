import { Lnb, CurrentBox, CheckBox } from "../../components/bundle_components";
import { useSelectBox, useDatePicker } from "../../hooks/bundle_hooks";

export default function Point() {
  const { date, startDate, endDate } = useDatePicker();
  const { selectedValues, selecBoxHtml } = useSelectBox({
    pay_state: ["전체", "지급중", "지급중지", "지급종료"],
  });
  console.log(selectedValues);

  return (
    <>
      <Lnb lnbType="accumulated" />
      {/* <CurrentBox add={true} del={true} down={true} tit="포인트 관리" /> */}
      <CurrentBox btns={["add", "del", "down"]} tit="포인트 관리" />
      <div className="point box_ty01 table_type table_comm accumulated">
        <div className="filter_wrap d-flex">
          <div className="select_input_wrap d-flex">{selecBoxHtml}</div>
          <div className="date_input_wrap d-flex">
            <div className="date_input input_ty02">{date.start}</div>
            <div className="date_input input_ty02">{date.end}</div>
          </div>
          <button type="button" className="btn_ty01 btn_search">
            검색
          </button>
        </div>
        <div className="table_wrap line">
          <table className="table">
            <colgroup>
              <col width={"auto"} />
              <col width={"80px"} />
              <col width={"130px"} />
              <col width={"230px"} />
              <col width={"250px"} />
              <col width={"180px"} />
              <col width={"320px"} />
              <col width={"150px"} />
              <col width={"200px"} />
            </colgroup>
            <thead>
              <tr>
                <th className="check">
                  <CheckBox for="wr_all" id="wr_all" name="wr_all" />
                </th>
                <th className="num">NO</th>
                <th>구분</th>
                <th>포인트명</th>
                <th>포인트 지급 시점</th>
                <th>지급할 포인트 금액</th>
                <th>지급 기한</th>
                <th>지급 상태</th>
                <th className="etc">비고</th>
              </tr>
            </thead>
            <tbody>
              <AddPoint />
              <JoinPoint />
              <PromotionPoint />
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

function AddPoint() {
  const { date, startDate, endDate } = useDatePicker();
  const { selectedValues, selecBoxHtml } = useSelectBox({
    pay_route: [{ placeholder: "선택" }, "회원가입", "프로모션", "이벤트"],
    pay_date: [
      { placeholder: "선택" },
      "회원가입 완료 시",
      "도장 n개 적립 시",
      "전체 n위 달성 시",
      "선택 정보 입력 완료 시",
      "최초 글 등록 완료 시",
      "이벤트 n회 참여 시",
    ],
    pay_step: [{ placeholder: "선택" }, "지급중", "지급중지", "지급종료"],
  });
  console.log(selectedValues);
  return (
    <tr>
      <td className="check">
        <CheckBox for="wr_1" id="wr_1" name="wr_1" />
      </td>
      <td className="num"></td>
      <td>
        <div className="select_input_wrap d-flex">{selecBoxHtml[0]}</div>
      </td>
      <td className="input_ty02">
        <input type="text" placeholder="직접입력" />
      </td>
      <td>{selecBoxHtml[1]}</td>
      <td>
        <div className="input_ty02 d-flex flex-ac point_input">
          <input type="text" placeholder="직접입력" /> P
        </div>
      </td>
      <td>
        <div className="date_input_wrap d-flex">
          <div className="date_input input_ty02">{date.start}</div>
          <span className="wave">~</span>
          <div className="date_input input_ty02">{date.end}</div>
        </div>
      </td>
      <td>
        <div className="select_input_wrap d-flex">{selecBoxHtml[2]}</div>
      </td>
      <td className="etc input_ty02">
        <input type="text" placeholder="직접입력" />
      </td>
    </tr>
  );
}

function JoinPoint() {
  const { date, startDate, endDate } = useDatePicker();
  const { selectedValues, selecBoxHtml } = useSelectBox({
    pay_step: ["지급중", "지급중지", "지급종료"],
  });
  console.log(selectedValues);
  return (
    <tr>
      <td className="check">
        <CheckBox for="wr_2" id="wr_2" name="wr_2" />
      </td>
      <td className="num">2</td>
      <td>회원가입</td>
      <td>최초 회원가입</td>
      <td className="number">
        <div className="input_ty02 d-flex flex-ac flex-jc">회원가입 완료 시</div>
      </td>
      <td>
        <div className="input_ty02 d-flex flex-ac point_input">
          <input type="text" placeholder="직접입력" /> P
        </div>
      </td>
      <td>
        <div className="date_input_wrap d-flex">
          <div className="date_input input_ty02">{date.start}</div>
          <span className="wave">~</span>
          <div className="date_input input_ty02">{date.end}</div>
        </div>
      </td>
      <td>
        <div className="select_input_wrap d-flex">{selecBoxHtml}</div>
      </td>
      <td className="etc input_ty02">
        <input type="text" placeholder="직접입력" />
      </td>
    </tr>
  );
}

function PromotionPoint() {
  const { date, startDate, endDate } = useDatePicker();
  const { selectedValues, selecBoxHtml } = useSelectBox({
    pay_step: ["지급중", "지급중지", "지급종료"],
  });
  console.log(selectedValues);
  return (
    <tr>
      <td className="check">
        <CheckBox for="wr_3" id="wr_3" name="wr_3" />
      </td>
      <td className="num">1</td>
      <td>프로모션</td>
      <td>데일리 챌린지 도장 적립</td>
      <td className="number">
        <div className="input_ty02 d-flex flex-ac flex-jc">
          도장 <input type="number" />개 적립 시
        </div>
      </td>
      <td>
        <div className="input_ty02 d-flex flex-ac point_input">
          <input type="text" placeholder="직접입력" /> P
        </div>
      </td>
      <td>
        <div className="date_input_wrap d-flex">
          <div className="date_input input_ty02">{date.start}</div>
          <span className="wave">~</span>
          <div className="date_input input_ty02">{date.end}</div>
        </div>
      </td>
      <td>
        <div className="select_input_wrap d-flex">{selecBoxHtml}</div>
      </td>
      <td className="etc input_ty02">
        <input type="text" placeholder="직접입력" />
      </td>
    </tr>
  );
}
