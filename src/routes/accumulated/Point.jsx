import { Lnb, CurrentBox, CheckBox } from "../../components/bundle_components";
import { useSelectBox, useCheckToken, useDatePicker } from "../../hooks/bundle_hooks";
import { useEffect, useState } from "react";

export default function Point() {
  const {mb_no,postData,resData,setResData} = useCheckToken();
  const [editItemList,setEditItemList] =useState([]);

  const loadSettings = async() => {
    const data = {
      mb_no
    }
    const res = await postData('point/config', data);
    if (!res.data) setResData([]);
  }

  const onChange = (e,get,set) => {
    let target = e.target.name;
    let value = e.target.value;

    if(target === "point" || target === "sub_condition"){
      value = Number(value);
    }

    set({
      ...get,
      [target]:value
    });
    let findIndex = editItemList.findIndex(el => el.idx === get.idx);
    if(findIndex !== -1){
      setEditItemList(Object.values({...editItemList, [findIndex]:{...editItemList[findIndex], [target]:value} }));
    }
  }

  const mod = async(e) => {

      if(editItemList.length <= 0){
        alert('1개 이상 선택을 해주세요.');
        return false
      };

      await postData('point/config/update', {mb_no,config_arr:[...editItemList]}).then((result)=>{
        if(result.code === 200 || result.msg === "OK"){
          alert('정상적으로 변경되었습니다.');
          window.location.reload();
          return false;
        }
    })
  }

  const del = async(e) => {

    let freshArray = editItemList.filter(el => el.hasOwnProperty('idx') === true);

    if(freshArray.length <= 0){
      alert('1개 이상 선택을 해주세요.');
      return false
    };

    await postData('point/config/delete', {mb_no,config_arr:[...freshArray]}).then((result)=>{
      if(result.code === 200 || result.msg === "OK"){
        alert('정상적으로 삭제되었습니다.');
        window.location.reload();
        return false;
      }
  })
}

  const isChecked = (e,obj,setObj) => {
    if(e.target.checked === true){
      setEditItemList([...editItemList,{...obj}]);
    }else{
      let freshArray = editItemList.filter(el => el.idx !== obj.idx);
      setEditItemList([...freshArray]);
    }
  }

  useEffect(()=>{
    loadSettings();
  },[])

  useEffect(()=>{
    console.log(editItemList)
  },[editItemList]);

  return (
    <>
      <Lnb lnbType="accumulated" />
      {/* <CurrentBox add={true} del={true} down={true} tit="포인트 관리" /> */}
      <CurrentBox btns={["mod", "del", "down"]} tit="포인트 관리" mod={mod} del={del}/>
      <div className="point box_ty01 table_type table_comm accumulated">
        <div className="filter_wrap d-flex">
          <div className="date_input_wrap d-flex">
          </div>
        </div>
        <div className="table_wrap line">
          <table className="table" id="table">
            <colgroup>
              <col width={"80px"} />
              <col width={"auto"} />
              <col width={"auto"} />
              <col width={"auto"} />
              <col width={"200px"} />
              <col width={"auto"} />
              <col width={"180px"} />
              <col width={"auto"} />
            </colgroup>
            <thead>
              <tr>
                <th className="check">
                  {/* <CheckBox for="wr_all" id="wr_all" name="wr_all" /> */}
                </th>
                <th className="num">NO</th>
                {/* <th>구분</th> */}
                <th>포인트명</th>
                <th>포인트 지급 시점</th>
                <th>지급할 포인트 금액</th>
                <th>지급 기한</th>
                <th>지급 상태</th>
                <th className="etc">비고</th>
              </tr>
            </thead>
            <tbody>
              <AddPoint isChecked={isChecked} onChange={onChange} editItemList={editItemList} setEditItemList={setEditItemList}/>
              {resData && resData?.map((el,idx) => {
                return <JoinPoint key={idx} data={el} isChecked={isChecked} onChange={onChange} editItemList={editItemList} setEditItemList={setEditItemList}/>
              })}
              {/* <PromotionPoint /> */}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

function AddPoint({isChecked,onChange,editItemList,setEditItemList}) {
  const { date, start_at, end_at ,setStartDate,setEndDate} = useDatePicker();
  const { selectedValues, selecBoxHtml } = useSelectBox({
    pay_route: [{ placeholder: "선택" }, "프로모션"],
    pay_date: [
      { placeholder: "선택" },
      "전체 n위 달성 시"
    ],
    pay_step: [{ placeholder: "선택" }, "지급중", "지급중지"],
  });

  const [addInput, setAddInput] = useState({
    sub_condition:0,
    point:0,
    start_at:start_at,
    end_at:end_at,
    state:0,
    memo:""
  });

  useEffect(()=>{
    // setAddInput({...addInput,start_at:start_at,end_at:end_at,state:{지급중:1,지급중지:0}[selectedValues.pay_step]});
    let findIndex = editItemList.findIndex(el => !el.hasOwnProperty('idx'));
    if(findIndex !== -1){
      setEditItemList(Object.values({...editItemList,[findIndex]:{...editItemList[findIndex],start_at:start_at,end_at:end_at,state:{지급중:1,지급중지:0}[selectedValues.pay_step]}}))
    }
  },[start_at,end_at,selectedValues])

  return (
    <tr>
      <td className="check">
        <CheckBox for="wr_1"  id="wr_1"  name="check_box" onClick={(e)=>{isChecked(e,addInput,setAddInput);}}/>
      </td>
      <td className="num"></td>
      {/* <td>
        <div className="select_input_wrap d-flex">{selecBoxHtml[0]}</div>
      </td> */}
      <td>랭킹 달성</td>
      <td className="number">
        <div className="input_ty02 d-flex flex-ac flex-jc">
          전체 <input type="text" name="sub_condition" onChange={(e) => onChange(e,addInput,setAddInput)}/>위 달성시
        </div>
      </td>
      <td>
        <div className="input_ty02 d-flex flex-ac point_input">
          <input type="text" name="point" placeholder="직접입력" onChange={(e) => onChange(e,addInput,setAddInput)}/> P
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
        <div className="select_input_wrap d-flex" name="state">{selecBoxHtml[2]}</div>
      </td>
      <td className="etc input_ty02">
        <input type="text" name="memo" placeholder="직접입력" onChange={(e) => onChange(e,addInput,setAddInput)}/>
      </td>
    </tr>
  );
}

  function JoinPoint({data,isChecked,onChange,editItemList,setEditItemList}) {
  const { date, start_at, end_at ,setStartDate,setEndDate} = useDatePicker();
  const { selectedValues, setSelectedValue,selecBoxHtml } = useSelectBox({
    pay_step: ["지급중", "지급중지"],
  });

  const [inputs, setInputs] = useState({
    idx: data.idx,
    sub_condition:0,
    point:data.point,
    start_at:data.start_at,
    end_at:data.end_at,
    state:{지급중:1,지급중지:0}[selectedValues.pay_step],
    memo:data.memo
  });

  useEffect(()=>{
    setSelectedValue({...selectedValues,pay_step:['지급중지','지급중'][data.state]})
    setStartDate(new Date(data.start_at));
    setEndDate(new Date(data.end_at));
  },[])

  useEffect(()=>{
    // setInputs({...inputs,start_at:start_at,end_at:end_at,state:{지급중:1,지급중지:0}[selectedValues.pay_step]});
    let findIndex = editItemList.findIndex(el => el.idx === inputs.idx);
    if(findIndex !== -1){
      setEditItemList(Object.values({...editItemList,[findIndex]:{...editItemList[findIndex],start_at:start_at,end_at:end_at,state:{지급중:1,지급중지:0}[selectedValues.pay_step]}}))
    }

  },[start_at,end_at,selectedValues])
  
  return (
    <tr>
      <td className="check">
        <CheckBox for={"item"+data.idx} id={"item"+data.idx} name="check_box" onClick={(e)=>{isChecked(e,inputs,setInputs);}}/>
      </td>
      <td className="num">{data.idx}</td>
      {/* <td>회원가입</td> */}
      <td>{data.name}</td>
      <td className="number">
        <div className="input_ty02 d-flex flex-ac flex-jc">{data.condition}</div>
      </td>
      <td>
        <div className="input_ty02 d-flex flex-ac point_input">
          <input type="text" placeholder="직접입력" name="point" defaultValue={data.point} onChange={e => onChange(e,inputs,setInputs)}/> P
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
        <input type="text" name="memo" placeholder="직접입력" defaultValue={data.memo} onChange={(e) => onChange(e,inputs,setInputs)}/>
      </td>
    </tr>
  );
}

function PromotionPoint() {
  const { date, startDate, endDate } = useDatePicker();
  const { selectedValues, selecBoxHtml } = useSelectBox({
    pay_step: ["지급중", "지급중지", "지급종료"],
  });

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
