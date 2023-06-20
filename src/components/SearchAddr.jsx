import { useState } from "react";
import axios from "axios";

export default function FindAddr(props) {
  const [keyword, setKeyword] = useState("");
  const [result, setResult] = useState([]);
  const { addrBox, setAddrBox, choiceForm, setChoiceForm } = props;

  const searchAddr = async e => {
    e.preventDefault();
    const url = `https://business.juso.go.kr/addrlink/addrLinkApi.do?confmKey=devU01TX0FVVEgyMDIzMDUxNzE0MDgzNjExMzc4Mjg=&keyword=${keyword}&currentPage=1&countPerPage=100&resultType=json`;
    const res = await axios.get(url);
    const data = res.data;
    // console.log(data);
    var errCode = data.results.common.errorCode;
    var errDesc = data.results.common.errorMessage;
    if (errCode != "0") {
      alert(errDesc);
    } else if (res != null) {
      setResult(data.results.juso);
    }
  };

  const close = () => {
    setResult([]);
    setKeyword("");
    setAddrBox("");
  };

  return (
    <div className={"search_addr_background " + addrBox}>
      <div className="search_addr_wrap">
        <header>
          <button className="btn_close" onClick={close}>
            &times;
          </button>
          <h3>주소검색</h3>
          <form>
            <input
              type="text"
              value={keyword}
              placeholder="건물명, 도로명 또는 지번으로 검색"
              onChange={e => {
                setKeyword(e.target.value);
              }}
            />
            <button type="hidden" onClick={searchAddr}></button>
          </form>
        </header>
        {!result[0] && (
          <dl className="search_addr_guide">
            <dt>이렇게 검색해보세요.</dt>
            <dd>
              도로명 + 건물번호
              <br />
              <span>예) 서초로 38길 12</span>
            </dd>
            <dd>
              지역명(동/리) + 번지
              <br />
              <span>예) 서초로 1498-5</span>
            </dd>
            <dd>
              지역명(동/리) + 건물명(아파트명)
              <br />
              <span>예) 서초동 요기요빌딩</span>
            </dd>
            <dd></dd>
          </dl>
        )}
        <dl className="search_addr_list">
          {result.map((el, idx) => {
            return (
              <dd
                key={idx}
                data-value={el.roadAddr}
                data-type="addr"
                onClick={e => {
                  close();
                  setChoiceForm({ ...choiceForm, addr: el.roadAddr });
                }}
              >
                <p>{el.bdNm ? el.bdNm : el.roadAddr}</p>
                <span>{el.roadAddr}</span>
              </dd>
            );
          })}
        </dl>
      </div>
    </div>
  );
}
