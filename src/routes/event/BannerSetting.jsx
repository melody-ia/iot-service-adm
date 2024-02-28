import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Lnb,
  CurrentBox,
  CheckBox,
  Pagination,
  RadioBtn,
} from "../../components/bundle_components";
import {
  useSelectBox,
  useDatePicker,
  useCheckToken,
} from "../../hooks/bundle_hooks";
import { serverUrl } from "../../variables/bundle_variables";
import banner from "../../assets/img/banner.png";

export default function BannerSetting() {
  const navigate = useNavigate();
  const { mb_no, postData, resData, setResData } = useCheckToken();
  const { date, start_at, end_at } = useDatePicker();
  const [categoryList, setCategoryList] = useState([]);
  const { selectedValues, setSelectedValue, selecBoxHtml } = useSelectBox({
    upload_state: ["전체", "공개", "비공개"],
    banner_location: categoryList,
  });
  const [checkedList, setCheckedList] = useState([]);
  const [modList, setModeList] = useState({
    bn_id: [],
    bn_status: [],
    bn_memo: [],
    bn_priority: [],
  });

  const checkAll = (e) => {
    if (e.target.checked)
      setCheckedList(resData.bannerInfo.map((el) => el.bn_id));
    else setCheckedList([]);
  };

  // console.log(categoryList);

  const loadBannerData = async () => {
    const data = {
      mb_no,
      bn_begin_time: start_at,
      bn_end_time: end_at,
      order: "asc",
    };
    if (selectedValues.banner_location !== "전체")
      data.bn_alt = categoryList.indexOf(selectedValues.banner_location) - 1;
    if (selectedValues.upload_state !== "전체")
      data.bn_status = ["공개", "비공개"].indexOf(selectedValues.upload_state);
    const res = await postData("banner/index", data);
    if (!res || res?.code !== 200) return;
    if (!categoryList[0]) {
      // console.log(res.data.category);
      setCategoryList(["전체", ...res.data.category]);
      setSelectedValue({ ...selectedValues, banner_location: "전체" });
    }
    if (!res.data.bannerInfo[0]) setResData({ ...resData, bannerInfo: [] });
  };

  const modPostData = async () => {
    await postData("banner/update", { mb_no, ...modList });
    loadBannerData();
    setCheckedList([]);
  };

  const delPostData = async () => {
    await postData("banner/del", { mb_no, bn_id: checkedList });
    loadBannerData();
    setCheckedList([]);
  };

  const btnEvent = {
    add() {
      navigate("/BannerSetting/add", { state: { categoryList } });
    },
    mod() {
      modPostData();
    },
    del() {
      delPostData();
    },
  };

  useEffect(() => {
    loadBannerData();
  }, []);

  return (
    <>
      <Lnb lnbType="event" />
      <CurrentBox
        btns={["add", "mod", "del"]}
        tit="배너 리스트"
        {...btnEvent}
      />
      <div className="banner_setting box_ty01 table_type table_comm">
        <div className="filter_wrap d-flex">
          <div className="select_input_wrap d-flex">{selecBoxHtml}</div>
          <div className="date_input_wrap d-flex">
            <div className="date_input input_ty02">{date.start}</div>
            <div className="date_input input_ty02">{date.end}</div>
          </div>
          <button
            type="button"
            className="btn_ty01 btn_search"
            onClick={loadBannerData}
          >
            검색
          </button>
        </div>
        <div className="table_wrap line part">
          <table className="table" id="table">
            <colgroup>
              <col width={"80px"} />
              <col width={"80px"} />
              <col width={"auto"} />
              <col width={"200px"} />
              <col width={"230px"} />
              <col width={"250px"} />
              <col width={"240px"} />
              <col width={"300px"} />
            </colgroup>
            <thead>
              <tr>
                <th className="check">
                  <CheckBox
                    for="banner_check01"
                    id="banner_check01"
                    name="banner_check01"
                    checked={resData?.bannerInfo.length === checkedList.length}
                    onClick={checkAll}
                  />
                </th>
                <th>NO</th>
                <th>배너 이미지</th>
                <th>배너 위치</th>
                등록 일자
                <th>공개 기한</th>
                <th>공개 여부</th>
                <th>순위설정</th>
                <th>비고</th>
              </tr>
            </thead>
            <tbody>
              {resData?.bannerInfo.map((el, idx) => {
                return (
                  <BannerItem
                    key={idx}
                    data={el}
                    checkedList={checkedList}
                    setCheckedList={setCheckedList}
                    modList={modList}
                    setModeList={setModeList}
                    no={idx}
                  />
                );
              })}
            </tbody>
          </table>
          {!resData?.bannerInfo[0] && (
            <div className="no_data_wrap">데이터 없음</div>
          )}
        </div>
        <CurrentBox btns={["add", "mod", "del"]} hideTit={true} {...btnEvent} />
        <Pagination />
      </div>
    </>
  );
}

function BannerItem({
  data,
  checkedList,
  setCheckedList,
  modList,
  setModeList,
  no,
}) {
  const [postContents, setPostContents] = useState({
    bn_id: data.bn_id,
    bn_status: data.bn_status,
    bn_memo: data.bn_memo,
    bn_priority: data.bn_priority,
  });

  const checkItem = (e) => {
    if (e.target.checked) setCheckedList([...checkedList, data.bn_id]);
    else setCheckedList([...checkedList].filter((el) => el !== data.bn_id));
  };

  const handlePostContents = (e) => {
    const type = e.target.dataset.type;
    const value = e.target.dataset.value || e.target.value;
    let copy = { ...postContents };
    copy[type] = value;
    setPostContents(copy);
  };

  const modData = () => {
    let copy = { ...modList };
    if (!checkedList.includes(data.bn_id)) {
      if (copy.bn_id.includes(data.bn_id)) {
        const idx = copy.bn_id.indexOf(data.bn_id);
        ["bn_id", "bn_status", "bn_memo", "bn_priority"].forEach((el) => {
          copy[el].splice(idx, 1);
        });
        return setModeList(copy);
      }
      return;
    }
    if (copy.bn_id.includes(data.bn_id)) {
      const idx = copy.bn_id.indexOf(data.bn_id);
      ["bn_id", "bn_status", "bn_memo", "bn_priority"].forEach((el) => {
        copy[el].splice(idx, 1);
        copy[el].push(postContents[el]);
      });
    } else {
      ["bn_id", "bn_status", "bn_memo", "bn_priority"].forEach((el) => {
        copy[el].push(postContents[el]);
      });
    }
    setModeList(copy);
  };

  useEffect(() => {
    modData();
  }, [checkedList, postContents]);

  useEffect(() => {
    setPostContents({ ...data });
  }, [data]);

  return (
    <tr>
      <td className="check">
        <CheckBox
          for={data.bn_id}
          id={data.bn_id}
          name={data.bn_id}
          checked={checkedList.includes(data.bn_id)}
          onClick={checkItem}
        />
      </td>
      <td>{no + 1}</td>
      {/* <td className="basic">
      <RadioBtn for="wr_1" id="wr_1" name="wr_1" />
    </td> */}
      <td className="banner_img">
        <img src={serverUrl + "images" + data.bannerImage} alt="" />
      </td>
      <td>{data.bannerType}</td>
      <td>{data.bn_datetime.replace(/-/g, ".")}</td>
      <td>
        {data.bn_begin_time.replace(/-/g, ".")} –{" "}
        {data.bn_end_time.replace(/-/g, ".")}
      </td>
      <td>
        <div className="radio_group flex_right">
          <div className="radio_wrap">
            {[
              ["공개", "show", 0],
              ["비공개", "hide", 1],
            ].map((el, idx) => {
              return (
                <RadioBtn
                  key={idx}
                  for={el[1] + data.bn_id}
                  id={el[1] + data.bn_id}
                  name={"isShow" + data.bn_id}
                  checked={postContents.bn_status == el[2]}
                  text={el[0]}
                  dataType={"bn_status"}
                  dataValue={el[2]}
                  onClick={handlePostContents}
                />
              );
            })}
          </div>
        </div>
      </td>
      <td>
        <div className="input_ty02">
          <input
            type="number"
            placeholder={"직접 입력"}
            value={postContents.bn_priority}
            data-type="bn_priority"
            onChange={handlePostContents}
          />
        </div>
      </td>
      <td>
        <div className="input_ty02">
          <input
            type="text"
            placeholder={"직접 입력"}
            value={postContents.bn_memo}
            data-type="bn_memo"
            onChange={handlePostContents}
          />
        </div>
      </td>
    </tr>
  );
}
